import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import SignUpHeader from '../../../BaseComponents/SignUp/SignUpHeader'
import CancelSignUp from '../../../BaseComponents/SignUp/CancelSignUp'
import NavButton from '../../../BaseComponents/SignUp/NavButton'
import variables from '../../../BaseStyles/Variables'

const SetPhone = ({ navigation, route }) => {
    const { name, birthDay } = route.params
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handlePhoneChange = (value) => {
        setPhone(value)
    }

    const handleSubmit = () => {        
        if(!Number.isInteger(Number(phone)) || phone.length !== 10 || phone[0] !== '0') {
            setError('Vui lòng nhập một số điện thoại hợp lệ hoặc dùng địa chỉ email của bạn.')
        }
        else {
            navigation.navigate('SetPassword', { 
                name: name,
                birthDay: birthDay,
                phone: phone })
        }
    }

    return (
        <View style={styles.wrapper}>
            <SignUpHeader title='Số di động' handleOpenModal={handleOpenModal}></SignUpHeader>
            <CancelSignUp openModal={openModal} handleCloseModal={handleCloseModal} navigation={navigation}></CancelSignUp>
            <Text style={styles.title}>Nhập số di động của bạn</Text>
            {error.length > 0 ? <Text style={styles.contentError}>{error}</Text> : <Text style={styles.content}>Nhập số di động để liên hệ của bạn. Bạn có thể ẩn thông tin này trên trang cá nhân sau.</Text>} 
            <TextInput style={error.length > 0 ? styles.inputError : styles.input} keyboardType='numeric' placeholder='Số di động'
                placeholderTextColor={error.length > 0 ? 'red' : variables.blue} onChangeText={handlePhoneChange}
                autoFocus={true}></TextInput>
            <NavButton navigation={navigation} handleSubmit={handleSubmit} title='Tiếp'></NavButton>
        </View>
    )
}

const styles = require('../styles/set_phone')

export default SetPhone