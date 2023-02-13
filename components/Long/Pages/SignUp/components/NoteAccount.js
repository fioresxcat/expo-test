import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import variables from '../../../BaseStyles/Variables'
import { useSelector } from 'react-redux'
import { authState$ } from '../../../../../redux/selectors'

const Note = ({ navigation, route }) => {
    const [openNoteModal, setOpenNoteModal] = useState(true)
    const handleConfirm = (navigation) => {
        setOpenNoteModal(false)
        navigation.navigate('AddAvatar')
    }

    const { password } = route.params

    const getAuthData = useSelector(authState$)

    return (
        <View style={styles.wrapper}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: variables.lightGray }}>
                <Text style={styles.title}>Đang đăng nhập...</Text>
            </View>
            <Modal visible={openNoteModal} transparent={true}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.65)'}}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Nhớ số điện thoại và mật khẩu của bạn</Text>
                        <Text style={styles.modalContent}>Bạn cần nhập thông tin này vào lần đăng nhập sau</Text>
                        <Text style={{ color: variables.gray, fontSize: 14, marginLeft: 20, marginTop: 20, }}>Số điện thoại</Text>
                        <View style={styles.info}>
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>{getAuthData.authData.phoneNumber}</Text>
                        </View>
                        <Text style={{ color: variables.gray, fontSize: 14, marginLeft: 20, marginTop: 20, }}>Mật khẩu</Text>
                        <View style={styles.info}>
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>{password}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => handleConfirm(navigation)}>
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = require('../styles/note_account')

export default Note