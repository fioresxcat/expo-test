import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image, TextInput, Keyboard } from 'react-native'
import IconFeather from 'react-native-vector-icons/Feather'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import emotionData from '../assets/data/emotion'
import { FlatList } from 'react-native';
import * as utils from '../utils/utils'
import { updatePost } from '../api/post';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
// import { Feather } from '@expo/vector-icons';

const Divider = styled.View`
    height: 10px;
`

const variables = {
    backGround: '#FFFFFF',
    blue: '#1877F2',
    lightBlue: '#D0EBF7',
    black: '#000000',
    gray: '#5B5B5B',
    lightGray: '#B6B6B6',
    green: '#42b72a'
}


const EmotionModal = ({ hideEmotionModal, setEmotion, emotionModalVisible }) => {
    const [filter, setFilter] = useState('')
    const [filterData, setFilterData] = useState(emotionData)

    const filteredData = (filter) => {
        const result = emotionData.filter((element, index) => {
            if(filter.length === 0) return emotionData
            else return element.status.startsWith(filter.toLowerCase())
        })
        setFilterData(result)
    }

    const handleFilterChange = (value) => {
        setFilter(value)
        filteredData(value)
    }

    const renderEmotion = ({item}) => {
        return (
            <>
                <TouchableOpacity style={{width: '50%', height: 60, borderColor: variables.lightGray,
                borderWidth: 1, marginRight: -1, marginTop: -0.5, marginBottom: -0.5, padding: 15,
                display: 'flex', flexDirection: 'row'}}
                onPress={() => {setEmotion({url:item.url, status:item.status});hideEmotionModal()}}
                >
                    <Image source={item.url} style={{width: 30, height: 30}}></Image>
                    <Text style={{marginLeft: 15, marginTop: 3}}>{item.status}</Text>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={emotionModalVisible}
            onRequestClose={hideEmotionModal}
        >
            <View>
                <View style={emotionModalStyles.header}>
                    <IconFeather.Button color={variables.black} name='arrow-left' size={25} style={emotionModalStyles.prevButton}
                        onPress={hideEmotionModal}
                    ></IconFeather.Button>
                    <Text style={emotionModalStyles.title}>Bạn đang cảm thấy thế nào</Text>
                </View>
                <View style={{paddingTop: 15, paddingBottom: 15, borderBottomColor: variables.blue, borderBottomWidth: 2}}>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: variables.blue}}>CẢM XÚC</Text>
                </View>

                <View style={{paddingTop: 15, paddingBottom: 15, display: 'flex', flexDirection: 'row', borderBottomColor: '#EDEDED', borderBottomWidth: 1 }}>
                    <IconFeather name='search' size={22} style={{paddingLeft: 10, paddingTop: 3}}></IconFeather>
                    <TextInput placeholder='Tìm kiếm' style={{width: '84%', padding: 0, marginLeft: 10, fontSize: 14, marginRight: 10}}
                    onChangeText={handleFilterChange} value={filter}></TextInput>
                </View>

                <FlatList data={filterData} renderItem={renderEmotion}
                numColumns={2}/> 
            </View>

        </Modal>
    )
}


export const AddPostPage = ({navigation, route}) => {
    const userData = route.params.userData
    const listCurrentImageIDProp =  []
    const [input, setInput] = useState('')
    const [emotion, setEmotion] = useState(utils.getEmotionFromState('', emotionData))
    const [emotionModalVisible, setEmotionModalVisible] = useState(false)
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [buttonDisable, setButtonDisable] = useState(false)
    const [inputFontSize, setInputFontSize] = useState(addPostStyles.input.fontSize)
    const [pickedImages, setPickedImages] = useState(listCurrentImageIDProp)
    const [listImageDelID, setListImageDelID] = useState([])
    const userName = userData.name ? userData.name : ''
    const userAvatarURI = userData.userAvatarURI ? userData.userAvatarURI : null
    const mytoken = useSelector(state => state.auth.authData.data.token)

    const dispatch = useDispatch()

    useEffect(() => {
        const showKeyboard = Keyboard.addListener('keyboardDidShow', (e) => {
            setKeyboardVisible(true);
            setKeyboardHeight(e.endCoordinates.height)
        });
        const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
            setKeyboardHeight(0);
        });

        // setEmotion(utils.getEmotionFromState(postData?.status ? postData.status : '', emotionData))
        // console.log('emotion after set emotion: ', emotion)

        return () => {
            showKeyboard.remove();
            hideKeyboard.remove();
        };
    }, [route, userData, navigation]);

    
    const pickImage = async () => {
        if (pickedImages.length < 4) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
        
            console.log('result: ', result);
        
            if (!result.canceled) {
                console.log('picked images befor: ', pickedImages)
                const newImage = {uri: result.assets[0].uri}
                const newPickedImages = pickedImages.concat([newImage])
                console.log('new picked images: ', newPickedImages)
                setPickedImages(newPickedImages);
            }
        }
    };

    const deleteImage = (index) => {
        const newPickedImages = pickedImages.filter((item, i) => i !== index)
        setPickedImages(newPickedImages)
        // if (pickedImages[index].id) { // co id thi chi co the la anh fetch tu server
        //     const newDelList = listImageDelID.concat(pickedImages[index].id)
        //     setListImageDelID(newDelList)
        // }
    }

    const makeAddPost = () => {
        console.log('make add post called..')
        const newPickedImages = pickedImages
        const updateData = {
            status: emotion ? (emotion.status ? emotion.status : '') : '',
            described: input,
            listNewImages: newPickedImages,
            mytoken: mytoken
        }
        dispatch(actions.addPost.addPostRequest(updateData))
        navigation.goBack()
    }

    const handleTextChange = (value) => {
        // console.log('picked image uri: ', pickedImages[0].uri)
        setInput(value)
        if (value.length > 0) setButtonDisable(false)
        else setButtonDisable(true)

        if (value.length > 50) {
            setInputFontSize(18)
        } else {
            setInputFontSize(addPostStyles.input.fontSize)
        }
    }

    const showEmotionModal = () => {
        setEmotionModalVisible(true)
    }

    const hideEmotionModal = () => {
        setEmotionModalVisible(false)
    }



    return (
        <View>
            <EmotionModal hideEmotionModal={hideEmotionModal} setEmotion={setEmotion} emotionModalVisible={emotionModalVisible}></EmotionModal>

            <View style={addPostStyles.header}>
                <IconFeather.Button color={variables.black} name='arrow-left' size={25} style={addPostStyles.prevButton} onPress={navigation.goBack}></IconFeather.Button>
                <Text style={addPostStyles.title}>Thêm bài viết</Text>
                <TouchableOpacity onPress={makeAddPost} style={buttonDisable ? addPostStyles.addButtonDisable : addPostStyles.addButton}>
                    <Text style={buttonDisable ? { fontWeight: 'bold', fontSize: 16, color: variables.gray } : { fontWeight: 'bold', fontSize: 16, color: 'white' }}>XONG</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{height: '100%', borderWidth: 0, backgroundColor: 'white', paddingHorizontal: 12}}>
                <View style={addPostStyles.accountInfo}>

                    <View style={{ display: 'flex', borderWidth: 0, height: 50, width: 50 , marginTop: 14}}>
                        <Image style={{borderWidth: 1, width: 43, height: 43, borderRadius: 30}} source={userAvatarURI != null ? {uri: userAvatarURI} : require('../assets/image/default_avatar.png')}></Image>
                    </View>

                    <View style={{ display: 'flex', borderWidth: 0, marginLeft: 10}}>
                        <View style={{borderWidth: 0}}>
                            <Text style={{ fontWeight: 'bold', color: variables.black, fontSize: 18, marginTop: 14, borderWidth: 0}}>{userName}</Text>
                            {emotion && (<>
                                <View style={{borderWidth: 0}}>
                                    <Text style={{ fontWeight: 'bold', color: variables.black, fontSize: 16 }}>
                                        <Text style={{ fontWeight: '400', color: variables.black, fontSize: 16, marginTop: 18 }}>- Đang </Text>
                                        <Image source={emotion.url} style={{width: 20, height: 20}}></Image>
                                        <Text style={{ fontWeight: '400', color: variables.black, fontSize: 16, marginTop: 18 }}> cảm thấy </Text>
                                        <Text style={{fontWeight: 'bold', color: variables.black, fontSize: 16}}>{emotion.status}</Text>
                                    </Text>
                                </View>
                            </>
                            )}
                        </View>

                        <View style={addPostStyles.showMode}>
                            <View>
                                <Image source={require('../assets/image/public_icon.png')} style={addPostStyles.publicLogo}></Image>
                            </View>
                            <View>
                                <Text>Công khai</Text>
                            </View>
                        </View>

                    </View>
                </View>


                <View style={{...addPostStyles.inputZone, marginLeft: 0, paddingLeft: 0}}>
                    <TextInput multiline={true} placeholder='Bạn đang nghĩ gì?'
                        placeholderTextColor={variables.gray} style={{...addPostStyles.input, fontSize: inputFontSize, marginRight: 15, marginBottom: 20}}
                        onChangeText={handleTextChange} value={input}
                    ></TextInput>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 380, borderWidth: 0, borderColor: 'red', marginHorizontal: 0, marginBottom: 5}}>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderWidth: 0, width: '49.6%', paddingHorizontal: 0}}>
                        <View style={{ height: '49.6%' }}>
                            <Image source={pickedImages.length > 0 ? (pickedImages[0] ? {uri: pickedImages[0].uri} : require('../assets/pick_image.jpg')) : require('../assets/pick_image.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => { deleteImage(0) }}>
                                <IconAntDesign name="close" size={20} color="#69696b" />
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: '49.6%'  }}>
                            <Image source={pickedImages.length > 0 ? (pickedImages[1] ? {uri: pickedImages[1].uri} : require('../assets/pick_image.jpg')) : require('../assets/pick_image.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => { deleteImage(1) }}>
                                <IconAntDesign name="close" size={20} color="#69696b" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderWidth: 0, width: '49.6%' }}>
                        <View style={{ height: '49.6%' }}>
                            <Image source={pickedImages.length > 0 ? (pickedImages[2] ? {uri: pickedImages[2].uri} : require('../assets/pick_image.jpg')) : require('../assets/pick_image.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => { deleteImage(2) }}>
                                <IconAntDesign name="close" size={20} color="#69696b" />
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: '49.6%'  }}>
                            <Image source={pickedImages.length > 0 ? (pickedImages[3] ? {uri: pickedImages[3].uri} : require('../assets/pick_image.jpg')) : require('../assets/pick_image.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => { deleteImage(3) }}>
                                <IconAntDesign name="close" size={20} color="#69696b" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>

            {!keyboardVisible && (<View style={{marginTop: 'auto', backgroundColor: 'white'}}>
                <TouchableOpacity style={addPostStyles.option} onPress={pickImage}>
                    <View style={{ margin: 10, display: 'flex', flexDirection: 'row' }}>
                        <Image source={require('../assets/image/gallery_icon.png')} style={{ width: 35, height: 35, marginRight: 15 }}></Image>
                        <Text style={{ fontSize: 18, marginTop: 3 }}>Ảnh/video</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={addPostStyles.option} onPress={showEmotionModal}>
                    <View style={{ margin: 10, display: 'flex', flexDirection: 'row' }}>
                        <Image source={require('../assets/image/smile_icon.png')} style={{ width: 35, height: 35, marginRight: 15 }}></Image>
                        <Text style={{ fontSize: 18, marginTop: 3 }}>Cảm xúc/Hoạt động</Text>
                    </View>
                </TouchableOpacity>
            </View>)}

            {keyboardVisible && (
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-around',
                    position: 'absolute',
                    top: Dimensions.get('window').height - keyboardHeight,
                    transform: [{ translateY: -50 }],
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderTopColor: variables.lightGray,
                    borderTopWidth: 0,
                    backgroundColor: 'white',
                    transparent: false
                }}>

                    <TouchableOpacity onPress={pickImage}>
                        <Image source={require('../assets/image/gallery_icon.png')} style={{ width: 35, height: 35, marginRight: 15 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showEmotionModal}>
                        <Image source={require('../assets/image/smile_icon.png')} style={{ width: 35, height: 35, marginRight: 15 }}></Image>
                    </TouchableOpacity>
                </View> 
            )}

        </View>
    )
}

const addPostStyles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: variables.backGround,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1
    },
    prevButton: {
        backgroundColor: variables.backGround,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    addButtonDisable: {
        position: 'absolute',
        top: 12,
        right: 20,
        backgroundColor: variables.lightGray,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 8,
    },
    addButton: {
        position: 'absolute',
        top: 12,
        right: 20,
        backgroundColor: variables.blue,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        color: variables.black,
        paddingTop: 18,
    },
    accountInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    accountAvatar: {
        width: 60,
        height: 60,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 5,
        borderRadius: 30
    },
    showMode: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        borderColor: variables.lightGray,
        borderWidth: 1,
        borderRadius: 8,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        marginTop: 5
    },
    publicLogo: {
        width: 15,
        height: 15,
        marginRight: 5,
        marginTop: 2
    },
    inputZone: {
        width: '100%',
        marginRight: 15,
        marginLeft: 15,
        marginTop: 10,
        // height: '45%'
    },
    input: {
        fontSize: 24,
        color: variables.black,
    },
    option: {
        width: '100%',
        borderTopColor: variables.lightGray,
        borderTopWidth: 1,
    },
})

const emotionModalStyles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: variables.backGround,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1
    },
    prevButton: {
        backgroundColor: variables.backGround,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        color: variables.black,
        paddingTop: 18,
    }
})