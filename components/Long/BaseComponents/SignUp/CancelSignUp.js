import React from 'react'
import { Modal, View, Text, TouchableOpacity } from "react-native"
import variables from '../../BaseStyles/Variables'

const CancelSignUp = ({ openModal, handleCloseModal, navigation }) => {
    return (
        <Modal visible={openModal} transparent={true} animationType='fade'>
            <View style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Bạn có muốn dừng tạo tài khoản không?</Text>
                    <Text style={{ color: variables.gray, fontSize: 16, marginLeft: 20, marginRight: 30 }}>Nếu dừng bây giờ, bạn sẽ mất toàn bộ tiến trình cho đến nay.</Text>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={handleCloseModal}>
                            <Text style={{ color: variables.black, fontSize: 14 }}>Tiếp tục tạo tài khoản</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('RemoveAccount')}>
                            <Text style={{ color: variables.blue, fontSize: 14 }}>Dừng tạo tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = require('../../BaseStyles/SignUp/cancel_signup')

export default CancelSignUp