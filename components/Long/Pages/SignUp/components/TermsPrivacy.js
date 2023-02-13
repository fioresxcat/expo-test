import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import SignUpHeader from '../../../BaseComponents/SignUp/SignUpHeader'
import CancelSignUp from '../../../BaseComponents/SignUp/CancelSignUp'
import variables from '../../../BaseStyles/Variables'
import { useDispatch } from 'react-redux'
import {actions} from '../../../../../redux/actions/index'

const Done = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const { name, birthDay, phonenumber, password } = route.params

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <View style={styles.wrapper}>
            <SignUpHeader title='Điều khoản & quyền riêng tư' handleOpenModal={handleOpenModal}></SignUpHeader>
            <CancelSignUp openModal={openModal} handleCloseModal={handleCloseModal} navigation={navigation}></CancelSignUp>
            <Text style={styles.title}>Hoàn tất đăng ký</Text>
            <Text style={styles.content}>Bằng cách nhấn vào Đăng ký, bạn đồng ý với
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Service')}><Text style={{ color: variables.blue, fontSize: 16 }}> Điều khoản</Text></TouchableWithoutFeedback>,
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Data')}><Text style={{ color: variables.blue, fontSize: 16 }}> Chính sách dữ liệu</Text></TouchableWithoutFeedback> và
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Cookie')}><Text style={{ color: variables.blue, fontSize: 16 }}> Chính sách cookie</Text></TouchableWithoutFeedback> của chúng tôi</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => {
                dispatch(actions.signUp.signUpRequest({
                    name: name,
                    birthDay: birthDay,
                    phonenumber: phonenumber,
                    password: password,
                }))
                navigation.navigate('Status', {
                    password: password
                })
                }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = require('../styles/terms_privacy')

export default Done