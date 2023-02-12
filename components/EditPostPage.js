import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image, TextInput, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import emotionData from '../assets/data/emotion'
import { FlatList } from 'react-native';
import * as utils from '../utils/utils'
import { updatePost } from '../api/post';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';
import ImagePicker from 'react-native-image-crop-picker';


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
                    <Icon.Button color={variables.black} name='arrow-left' size={25} style={emotionModalStyles.prevButton}
                        onPress={hideEmotionModal}
                    ></Icon.Button>
                    <Text style={emotionModalStyles.title}>Bạn đang cảm thấy thế nào</Text>
                </View>
                <View style={{paddingTop: 15, paddingBottom: 15, borderBottomColor: variables.blue, borderBottomWidth: 2}}>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: variables.blue}}>CẢM XÚC</Text>
                </View>

                <View style={{paddingTop: 15, paddingBottom: 15, display: 'flex', flexDirection: 'row', borderBottomColor: '#EDEDED', borderBottomWidth: 1 }}>
                    <Icon name='search' size={22} style={{paddingLeft: 10, paddingTop: 3}}></Icon>
                    <TextInput placeholder='Tìm kiếm' style={{width: '84%', padding: 0, marginLeft: 10, fontSize: 14, marginRight: 10}}
                    onChangeText={handleFilterChange} value={filter}></TextInput>
                </View>

                <FlatList data={filterData} renderItem={renderEmotion}
                numColumns={2}/> 
            </View>

        </Modal>
    )
}


export const EditPostPage = ({navigation, route}) => {
    const postData = route.params.postData
    const [input, setInput] = useState(route.params.postData?.described)
    const [emotion, setEmotion] = useState(utils.getEmotionFromState(postData?.status ? postData.status : '', emotionData))
    const [emotionModalVisible, setEmotionModalVisible] = useState(false)
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [buttonDisable, setButtonDisable] = useState(false)
    const [inputFontSize, setInputFontSize] = useState(editPostStyles.input.fontSize)
    const dispatch = useDispatch()

    console.log('postData in edit post page: ', postData)
    useEffect(() => {
        console.log('useEffect in edit post page')
        const showKeyboard = Keyboard.addListener('keyboardDidShow', (e) => {
            setKeyboardVisible(true);
            setKeyboardHeight(e.endCoordinates.height)
        });
        const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
            setKeyboardHeight(0);
        });

        setEmotion(utils.getEmotionFromState(postData?.status ? postData.status : '', emotionData))
        console.log('emotion after set emotion: ', emotion)

        return () => {
            showKeyboard.remove();
            hideKeyboard.remove();
        };
    }, [route, postData, navigation]);

    
    const pickImage = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
                mediaType: 'photo'
            });
            console.log(image);
        } catch (error) {
            console.error(error);
        }
    };


    const handleTextChange = (value) => {
        setInput(value)
        if (value.length > 0) setButtonDisable(false)
        else setButtonDisable(true)

        if (value.length > 50) {
            setInputFontSize(18)
        } else {
            setInputFontSize(editPostStyles.input.fontSize)
        }
    }

    const showEmotionModal = () => {
        setEmotionModalVisible(true)
    }

    const hideEmotionModal = () => {
        setEmotionModalVisible(false)
    }

    const makePostUpdate = () => {
        const updateData = {
            id: postData.id,
            status: emotion.status,
            described: input,
        }
        dispatch(actions.updatePost.updatePostRequest(updateData))
        navigation.goBack()
    }

    return (
        <View>
            <EmotionModal hideEmotionModal={hideEmotionModal} setEmotion={setEmotion} emotionModalVisible={emotionModalVisible}></EmotionModal>

            <View style={editPostStyles.header}>
                <Icon.Button color={variables.black} name='arrow-left' size={25} style={editPostStyles.prevButton} onPress={navigation.goBack}></Icon.Button>
                <Text style={editPostStyles.title}>Chỉnh sửa bài viết</Text>
                <TouchableOpacity onPress={makePostUpdate} style={buttonDisable ? editPostStyles.addButtonDisable : editPostStyles.addButton}>
                    <Text style={buttonDisable ? { fontWeight: 'bold', fontSize: 16, color: variables.gray } : { fontWeight: 'bold', fontSize: 16, color: 'white' }}>XONG</Text>
                </TouchableOpacity>
            </View>

            <View style={editPostStyles.accountInfo}>
                <View style={{ display: 'flex' }}>
                    <Image style={editPostStyles.accountAvatar} source={require('../assets/image/default_avatar.png')}></Image>
                </View>
                <View style={{ display: 'flex' }}>
                    <View style={{borderWidth: 0}}>
                        <Text style={{ fontWeight: 'bold', color: variables.black, fontSize: 18, marginTop: 18, borderWidth: 0}}>{postData?.user?.name ? postData.user.name: 'Facebook User'}</Text>
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

                    <View style={editPostStyles.showMode}>
                        <View>
                            <Image source={require('../assets/image/public_icon.png')} style={editPostStyles.publicLogo}></Image>
                        </View>
                        <View>
                            <Text>Công khai</Text>
                        </View>
                    </View>

                </View>
            </View>


            <View style={editPostStyles.inputZone}>
                <TextInput multiline={true} placeholder='Bạn đang nghĩ gì?'
                    placeholderTextColor={variables.gray} style={{...editPostStyles.input, fontSize: inputFontSize, marginRight: 15}}
                    onChangeText={handleTextChange} value={input}
                ></TextInput>
            </View>


            {!keyboardVisible && (<View>
                <TouchableOpacity style={editPostStyles.option}>
                    <View style={{ margin: 10, display: 'flex', flexDirection: 'row' }}>
                        <Image source={require('../assets/image/gallery_icon.png')} style={{ width: 35, height: 35, marginRight: 15 }}></Image>
                        <Text style={{ fontSize: 18, marginTop: 3 }}>Ảnh/video</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={editPostStyles.option} onPress={showEmotionModal}>
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
                    transform: [{ translateY: -60 }],
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderTopColor: variables.lightGray,
                    borderTopWidth: 1
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

const editPostStyles = StyleSheet.create({
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
        width: 70,
        height: 70,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 5
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
        height: '45%'
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