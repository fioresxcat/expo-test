import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import variables from '../../../BaseStyles/Variables';
import { useSelector } from 'react-redux'
import { authState$ } from '../../../../../redux/selectors'

const SaveAccount = ({ navigation }) => {
    const authState = useSelector(authState$)
    const [openMoreOptionModal, setOpenMoreOptionModal] = useState(false)

    const handleOpenMoreOptionModal = () => {
        setOpenMoreOptionModal(true)
    }
    const handleCloseMoreOptionModal = () => {
        setOpenMoreOptionModal(false)
    }
    const [openRemoveAccountModal, setOpenRemoveAccountModal] = useState(false)

    const handleOpenRemoveAccountModal = () => {
        setOpenRemoveAccountModal(true)
    }
    const handleCloseRemoveAccountModal = () => {
        setOpenRemoveAccountModal(false)
    }
    return (
        <View style={openRemoveAccountModal ? styles.wrapperTransparent : styles.wrapper}>
            <Image source={require('../../../assets/image/facebook_logo.png')}
                style={styles.logo}
            ></Image>

            <View style={styles.accountWrapper}>
                <TouchableOpacity activeOpacity={0.3} style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('EnterPassWord')}>
                    <Image source={authState.authData.data.avatar ? {uri: authState.authData.data.avatar } : require('../../../assets/image/default_avatar.png')}
                        style={styles.accountAvatar}
                    ></Image>
                    <Text style={styles.accountName}>{authState.authData.data.username}</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.3} style={styles.moreOption} onPress={handleOpenMoreOptionModal}>
                    <Icon name='ellipsis-v' style={{ backgroundColor: variables.backGround }} size={18}
                        color={variables.black}></Icon>
                </TouchableOpacity>
            </View>

            <Modal animationType='fade' visible={openMoreOptionModal} transparent={true}>
                <TouchableOpacity activeOpacity={0.9} style={{ height: '100%' }} onPressOut={handleCloseMoreOptionModal}>
                    <TouchableWithoutFeedback>
                        <View style={styles.moreOptionModal}>
                            <TouchableOpacity onPress={() => {
                                handleCloseMoreOptionModal()
                                handleOpenRemoveAccountModal()
                            }} style={{ marginBottom: 20, marginTop: 10 }}>
                                <Text style={{ color: variables.black, fontSize: 16 }}>Gỡ tài khoản khỏi thiết bị</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ color: variables.black, fontSize: 16 }}>Tắt thông báo đẩy</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>

            <Modal animationType='fade' visible={openRemoveAccountModal} transparent={true}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

                    <View style={styles.removeAccountModal}>
                        <Text style={styles.modalTitle}>Gỡ tài khoản khỏi thiết bị?</Text>
                        <Text style={styles.modalContent}>Bạn sẽ cần nhập số điện thoại/email và mật khẩu để đăng nhập lại.</Text>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity onPress={handleCloseRemoveAccountModal}>
                                <Text style={{ color: variables.black, fontSize: 16 }}>HỦY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('RemoveAccount')}>
                                <Text style={{ color: variables.blue, fontSize: 16 }}>GỠ TÀI KHOẢN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight underlayColor='#DEDEDE' style={{ width: '100%', position: 'absolute', top: '48%' }}
                onPress={() => navigation.navigate('RemoveAccount')}>
                <View style={{ flexDirection: 'row', paddingLeft: '6%', height: 50, paddingTop: 5 }}>
                    <View style={{
                        backgroundColor: variables.lightBlue, width: 36, height: 36,
                        paddingLeft: 9, paddingTop: 8, borderRadius: 8
                    }}>
                        <Icon color={variables.blue} name='plus' size={22}></Icon>
                    </View>
                    <View>
                        <Text style={{
                            color: variables.blue, fontSize: 16, marginTop: 5,
                            marginLeft: 10, fontWeight: 'bold'
                        }}>Đăng nhập bằng tài khoản khác</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#DEDEDE' style={{ width: '100%', position: 'absolute', top: '55%' }}
                onPress={() => { }}>
                <View style={{ flexDirection: 'row', paddingLeft: '6%', height: 50, paddingTop: 5 }}>
                    <View style={{
                        backgroundColor: variables.lightBlue, width: 36, height: 36,
                        paddingLeft: 8, paddingTop: 6, borderRadius: 8
                    }}>
                        <Icon color={variables.blue} name='search' size={22}></Icon>
                    </View>
                    <View>
                        <Text style={{
                            color: variables.blue, fontSize: 16, marginTop: 5,
                            marginLeft: 10, fontWeight: 'bold'
                        }}>Tìm tài khoản</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableOpacity style={styles.largeButton} onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={{ color: variables.blue, fontSize: 16, fontWeight: 'bold' }}>TẠO TÀI KHOẢN FACEBOOK MỚI</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = require('../styles/save_account.js')

export default SaveAccount