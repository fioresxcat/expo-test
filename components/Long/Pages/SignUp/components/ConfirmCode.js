import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, Modal, TouchableHighlight, ActivityIndicator } from 'react-native'
import variables from '../../../BaseStyles/Variables'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../../../../redux/actions/auth'
import { authState$ } from '../../../../../redux/selectors'

const ConfirmCode = ({ navigation, route }) => {
    const { password } = route.params
    const dispatch = useDispatch()
    const [openCodeModal, setOpenCodeModal] = useState(true)
    const [showError, setShowError] = useState(false)
    const [text, setText] = useState('')

    const handleSubmit = (navigation) => {
        if(getAuthData.isLoading === false && text===getAuthData.authData.verifyCode) {
            dispatch(action.checkVerifyCode.checkVerifyCodeRequest({
                phonenumber: getAuthData.authData.phoneNumber,
                code_verify: getAuthData.authData.verifyCode
            }))
            navigation.navigate('NoteAccount', {
                password: password
            })
        }
        else setShowError(true)
    }

    const handleTextChange = (value) => {
        setText(value)
    }

    const getAuthData = useSelector(authState$)

    useEffect(() => {
        dispatch(action.getVerifyCode.getVerifyCodeRequest({
            phonenumber: getAuthData.authData.phoneNumber ? getAuthData.authData.phoneNumber : getAuthData.authData.data.phoneNumber
        }))
    }, [])

    if (getAuthData.isLoading === true) {
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Xác nhận tài khoản</Text>
                </View>
                <ActivityIndicator style={{ marginTop: '70%' }} size={60} color={variables.blue} />
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Xác nhận tài khoản</Text>
            </View>
            <Text style={styles.content}>Chúng tôi đã gửi mã xác thực tới thiết bị của bạn dưới dạng pop up thông báo</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: variables.blue, textAlign: 'center' }}>Nhập mã xác thực gồm 4 ký tự.</Text>
            <TextInput placeholder='Nhập mã xác thực' placeholderTextColor='white' style={styles.input}
            onChangeText={handleTextChange}
            ></TextInput>
            {showError && (
                <Text style={{color: 'red', fontWeight: 'bold', textAlign: 'center', marginTop: 10,
                fontSize: 16}}>Mã xác thực không chính xác. Vui lòng nhập lại</Text>
            )}
            <TouchableOpacity style={styles.next} onPress={() => handleSubmit(navigation)}>
                <Text style={{ color: 'white', fontSize: 16 }}>Xác nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendAgain} onPress={() => {
                dispatch(action.getVerifyCode.getVerifyCodeRequest({
                    phonenumber: getAuthData.authData.phonenumber
                }))
                setOpenCodeModal(true)
            }}>
                <Text style={{ color: variables.black, fontSize: 16, fontWeight: 'bold' }}>Tôi không nhận được mã</Text>
            </TouchableOpacity>
            
            {getAuthData.authData.code !== '1010' ? (<Modal animationType='fade' visible={openCodeModal} transparent={true}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={styles.codeModal}>
                        <Text style={styles.modalTitleError}>Mã xác thực tài khoản</Text>
                        <Text style={styles.modalContentError}>{getAuthData.authData.verifyCode}</Text>
                        <TouchableHighlight underlayColor='#DEDEDE' style={styles.closeButtonError} onPress={() => setOpenCodeModal(false)}>
                            <Icon name='x' size={24}></Icon>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>) : 
                (<Modal animationType='fade' visible={openCodeModal} transparent={true}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={styles.codeModalError}>
                        <Text style={styles.modalTitle}>Mã xác thực tài khoản đã được gửi đi trước đó</Text>
                        <Text style={styles.modalContent}>{`Vui lòng chờ trong ${getAuthData.authData.details.slice(6)}`}</Text>
                        <TouchableHighlight underlayColor='#DEDEDE' style={styles.closeButton} onPress={() => setOpenCodeModal(false)}>
                            <Icon name='x' size={24}></Icon>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>)} 
        </View>
    )
}

const styles = require('../styles/confirm_code')

export default ConfirmCode