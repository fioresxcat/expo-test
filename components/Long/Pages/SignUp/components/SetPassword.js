import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import SignUpHeader from '../../../BaseComponents/SignUp/SignUpHeader'
import CancelSignUp from '../../../BaseComponents/SignUp/CancelSignUp'
import NavButton from '../../../BaseComponents/SignUp/NavButton'
import variables from '../../../BaseStyles/Variables'

const SetPassword = ({ route, navigation }) => {
    const { name, birthDay, phone } = route.params

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const specialLetter = /^[A-Za-z\d]{6,10}$/
    const onlyNumber = /^[0-9]*$/
    const onlyLetter = /[a-zA-Z]+$/

    const checkSpecialLetter = (password) => {
        for(let i=0; i<password.length; i++) {
            if(password[i] === ' ') return true
        }
        if(!password.match(specialLetter)) {
            return true;
        }
        return false
    }

    const checkOnly = (password) => {
        if(password.match(onlyNumber) || password.match(onlyLetter)) return true
        else return false
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handlePasswordChange = (value) => {
        setPassword(value)
    }
    const handleSubmit = () => {
        if(checkSpecialLetter(password) || password.length <6 || password.length >10) {
            setError('Mật khẩu của bạn phải chứa từ 6 tới 10 ký tự bao gồm chữ cái, chữ số và không được chứa các ký tự đặc biệt (như ! và %)')
        }
        else if(password===phone) {
            setError('Mật khẩu của bạn đã trùng với số điện thoại. Vui lòng nhập lại một mật khẩu khác')
        }
        else if(checkOnly(password)) {
            setError('Mật khẩu của bạn phải chứa cả chữ cái và chữ số. Vui lòng nhập lại một mật khẩu khác')
        }
        else {
            navigation.navigate('TermsPrivacy', {
                name: name,
                birthDay: birthDay,
                phonenumber: phone,
                password: password })
        } 
    }

    return (
        <View style={styles.wrapper}>
            <SignUpHeader title='Mật khẩu' handleOpenModal={handleOpenModal}></SignUpHeader>
            <CancelSignUp openModal={openModal} handleCloseModal={handleCloseModal} navigation={navigation}></CancelSignUp>
            <Text style={styles.title}>Chọn mật khẩu</Text>
            {error.length === 0 ? <Text style={styles.content}>Tạo mật khẩu dài tối thiểu 6 ký tự. Đó phải là mật khẩu mà người khác không thể đoán được.</Text> : null}
            {error.length > 0 ? <Text style={styles.contentError}>{error}</Text> : null}
            <TextInput style={error.length > 0 ? styles.inputError : styles.input} placeholder='Mật khẩu'
                placeholderTextColor={error.length > 0 ? 'red' : variables.blue} onChangeText={handlePasswordChange}
                autoFocus={true}></TextInput>
            <NavButton navigation={navigation} handleSubmit={handleSubmit} title='Tiếp'></NavButton>
        </View>
    )
}

const styles = require('../styles/set_password')

export default SetPassword
