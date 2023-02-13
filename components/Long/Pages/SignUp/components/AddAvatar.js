import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, Modal, TouchableOpacity } from 'react-native'
import variables from '../../../BaseStyles/Variables'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../../redux/actions/auth'
import { authState$ } from '../../../../../redux/selectors'
import * as ImagePicker from 'expo-image-picker';

const AddAvatar = ({navigation}) => {
    const [openImageModal, setOpenImageModal] = useState(false)
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()
    const authState = useSelector(authState$)

    const handleAddAvatar = () => {
        setOpenImageModal(true)
    }

    const takePhotoCamera = () => {
        // ImagePicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: true,
        // }).then(image => {
        //     console.log(image);
        //     setOpenImageModal(false)
        //     setImage(image.path)
        // });
    }

    const choosePhotoGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        console.log('result: ', result);
    
        if (!result.canceled) {
            const newImage = {uri: result.assets[0].uri}
            setImage(newImage)
        }
    }

    const handleSaveAvatar = () => {
        if(image) {
            dispatch(actions.changeInfoAfterSignUp.changeInfoAfterSignUpRequest({
                token: authState.authData.data.token,
                username: authState.authData.name,
                uri: image.uri
            }))
            // navigation.navigate('Welcome')
        }
    }

    return (
        <>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Thêm ảnh đại diện</Text>
                <Text style={styles.content}>Hãy thêm ảnh đại diện để bạn bè nhận ra bạn. Mọi người có thể nhìn thấy ảnh của bạn.</Text>
                <Image style={styles.image} source={image ? { uri: image.uri } : require('../../../assets/image/default_avatar.png')}></Image>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.addAvatar} onPress={() => setOpenImageModal(true)}>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', textAlign: 'center', paddingTop: 15 }}>Thêm ảnh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skip}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', textAlign: 'center', paddingTop: 15 }}>Bỏ qua</Text>
                    </TouchableOpacity>
                </View>

                <Modal visible={openImageModal} transparent={true} animationType='slide'>
                    <View style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={styles.modal}>
                            <TouchableOpacity underlayColor='none' style={styles.closeButton} onPress={() => setOpenImageModal(false)}>
                                <Icon name='x' size={24}></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imageOption} onPress={choosePhotoGallery}>
                                <Text style={{ fontSize: 18, color: variables.black }}>Thư viện</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imageOption} onPress={takePhotoCamera}>
                                <Text style={{ fontSize: 18, color: variables.black }}>Máy ảnh</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity style={image ? styles.haveImage : styles.noImage}
                onPress={handleSaveAvatar}
                >
                    <Text style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold', color: image ? 'white' : 'black'}}>OK</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: variables.black,
        marginTop: 60,
        marginLeft: 20
    },
    content: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        color: variables.black,
        fontWeight: '400',
        fontSize: 16
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
        marginLeft: 50,
        marginTop: 20
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 20,
        width: '88%',
        marginLeft: '6%'
    },
    addAvatar: {
        backgroundColor: variables.blue,
        marginBottom: 10,
        height: 50,
        borderRadius: 5,

    },
    skip: {
        borderColor: variables.lightGray,
        borderWidth: 1,
        height: 50,
        borderRadius: 5,
    },
    modal: {
        backgroundColor: variables.backGround,
        height: '60%',
        width: '100%',
        position: 'absolute',
        top: '40%',
    },
    imageOption: {
        height: 50,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1,
        borderTopColor: variables.lightGray,
        borderTopWidth: 1,
        marginTop: -0.5,
        marginBottom: -0.5
    },
    closeButton: {
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 30
    },
    haveImage: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: variables.blue,
        width: 60,
        height: 40,
        borderRadius: 10
    },
    noImage: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: variables.lightGray,
        width: 60,
        height: 40,
        borderRadius: 10
    }
})

export default AddAvatar