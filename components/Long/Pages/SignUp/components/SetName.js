import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import SignUpHeader from '../../../BaseComponents/SignUp/SignUpHeader'
import CancelSignUp from '../../../BaseComponents/SignUp/CancelSignUp'
import NavButton from '../../../BaseComponents/SignUp/NavButton'

const SetName = ({ navigation }) => {
    const [focusFirstName, setFocusFirstName] = useState(true)
    const [focusLastName, setFocusLastName] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const handleFocusFirstName = () => {
        setFocusFirstName(true)
        setFocusLastName(false)
    }
    const handleFocusLastName = () => {
        setFocusLastName(true)
        setFocusFirstName(false)
    }
    const handleFirstNameChange = (value) => {
        setFirstName(value)
    }
    const handleLastNameChange = (value) => {
        setLastName(value)
    }

    const specialLetter = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?*$\s\W|]+$/

    const checkSpecialLetter = (name) => {
        if(name.match(specialLetter)) {
            return true;
        }
        else return false
    }

    const handleSubmit = () => {
        const checkName = (string) => {
            let result = 0
            for (let i = 0; i < string.length; i++) {
                if (string[i] === string[0]) result += 1
            }
            return result
        }

        if (firstName.length === 0 && lastName.length === 0) {
            setError('Vui lòng nhập họ và tên của bạn.')
        }
        else if (firstName.length === 0 && lastName.length !== 0) {
            setError('Họ không thể để trống.')
        }
        else if (lastName.length === 0 && firstName.length !== 0) {
            setError('Tên không thể để trống.')
        }
        else if (firstName.length <= 2 || lastName.length <= 2) {
            setError('Tên hoặc họ trên Facebook không được quá ngắn.')
        }
        else if (checkSpecialLetter(firstName) || checkSpecialLetter(lastName) || checkName(firstName) === firstName.length || checkName(lastName) === lastName.length) {
            setError('Chúng tôi yêu cầu mọi người lấy tên thường dùng hàng ngày, tên bạn bè hay gọi để dùng trên Facebook.')
        }
        else {
            navigation.navigate('SetBirth', {
                name: `${firstName} ${lastName}`
            })
        }
    }
    return (
        <>
            <View style={styles.wrapper}>
                <SignUpHeader title='Tên' handleOpenModal={handleOpenModal}></SignUpHeader>
                <CancelSignUp openModal={openModal} handleCloseModal={handleCloseModal} navigation={navigation}></CancelSignUp>
                <Text style={styles.title}>Tên bạn là gì?</Text>
                <Text style={error.length === 0 ? styles.content : styles.error}>{error.length === 0 ? 'Nhập tên bạn sử dụng trong đời thực.' : error}</Text>
                <View style={styles.inputWrapper}>
                    <TextInput autoFocus={focusFirstName ? true : false} multiline={true} placeholder='Họ' style={error.length > 0 ? (focusFirstName ? styles.inputErrorFocus : styles.inputError) : (focusFirstName ? styles.inputFocus : styles.input)} placeholderTextColor='gray'
                        onFocus={handleFocusFirstName} onChangeText={handleFirstNameChange} value={firstName}>
                    </TextInput>
                    <TextInput autoFocus={focusLastName ? true : false} multiline={true} placeholder='Tên' style={error.length > 0 ? (focusLastName ? styles.inputErrorFocus : styles.inputError) : (focusLastName ? styles.inputFocus : styles.input)} placeholderTextColor='gray'
                        onFocus={handleFocusLastName} onChangeText={handleLastNameChange} value={lastName}>
                    </TextInput>
                </View>
                <NavButton navigation={navigation} handleSubmit={handleSubmit} title='Tiếp'></NavButton>
            </View>
        </>
    )
}

const styles = require('../styles/set_name')

export default SetName