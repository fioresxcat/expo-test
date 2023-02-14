import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import variables from '../../components/Long/BaseStyles/Variables'
import logOutIcon from '../../components/Long/assets/data/logOutIcon'
import { useSelector, useDispatch } from 'react-redux'
import {actions} from '../../redux/actions/index'
import { authState$ } from '../../redux/selectors'

const MenuItem = ({ name, url }) => {
    return (
        <View style={styles.menuItem}>
            <Image source={url} style={{ width: 30, height: 30 }}></Image>
            <Text style={{ marginTop: 3, fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
        </View>
    )
}

const LogOut = ({navigation}) => {
    const authState = useSelector(authState$)
    const dispatch = useDispatch()

    const [openSaveInfoModal, setOpenSaveInfoModal] = useState(false)
    const [openLogoutModal, setOpenLogoutModal] = useState(false)
    const [nav, setNav] = useState('')


    const handleLogout = () => {
        dispatch(actions.logout.logoutRequest({
            token: authState.authData.data.token
        }))
        setTimeout(() => {
            navigation.navigate(nav)
        }, 5000)
    }

    return (
        <>
            <ScrollView style={{ backgroundColor: variables.backGround }}>
                <View>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Menu</Text>
                        <View style={styles.headerButtonWrapper}>
                            <View style={styles.settingWrapper}>
                                <Icon name='settings' color='black' size={22} style={{ marginTop: 8, marginLeft: 9 }}></Icon>
                            </View>
                            <View style={styles.searchWrapper}>
                                <Icon name='search' color='black' size={22} style={{ marginTop: 8, marginLeft: 9 }}></Icon>
                            </View>
                        </View>
                    </View>
                    <View style={styles.accountInfo}>
                        <TouchableOpacity>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image style={styles.accountAvatar} source={authState.authData.data.avatar ? {uri: authState.authData.data.avatar} : require('../../components/Long/assets/image/default_avatar.png')}></Image>
                                <View style={{ marginLeft: 5, marginTop: 5 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{authState.authData.data.username}</Text>
                                    <Text style={{ fontSize: 16 }}>Xem trang cá nhân của bạn</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuItemWrapper}>
                        {logOutIcon.map((item) => {
                            return <MenuItem key={item.url} url={item.url} name={item.name}></MenuItem>
                        })}
                    </View>
                    <TouchableOpacity style={{
                        width: '92%', marginLeft: '4%', height: 50, marginTop: '5%',
                        backgroundColor: variables.lightGray, borderRadius: 10
                    }}>
                        <Text style={{ textAlign: 'center', marginTop: 12, fontWeight: 'bold', fontSize: 16 }}>Xem thêm</Text>
                    </TouchableOpacity>

                    <View style={styles.helpWrapper}>
                        <Image source={require('../../components/Long/assets/image/help_icon.png')}
                            style={{ width: 30, height: 30 }}></Image>
                        <Text style={{ marginLeft: 10, fontSize: 16, marginTop: 3 }}>Trợ giúp & hỗ trợ</Text>
                        <Icon name='chevron-down' size={20}
                            style={{ position: 'absolute', right: 20, top: 25 }}></Icon>
                    </View>

                    <View style={styles.settingBottomWrapper}>
                        <Image source={require('../../components/Long/assets/image/setting_icon.png')}
                            style={{ width: 30, height: 30 }}></Image>
                        <Text style={{ marginLeft: 10, fontSize: 16, marginTop: 3 }}>Cài đặt thông báo đẩy</Text>
                        <Icon name='chevron-down' size={20}
                            style={{ position: 'absolute', right: 20, top: 25 }}></Icon>
                    </View>

                    <TouchableOpacity style={{
                        width: '92%', marginLeft: '4%', height: 50, marginTop: '3%',
                        backgroundColor: variables.lightGray, borderRadius: 10, marginBottom: 20
                    }}
                        onPress={() => setOpenSaveInfoModal(true)}>
                        <Text style={{ textAlign: 'center', marginTop: 12, fontWeight: 'bold', fontSize: 16 }}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>

                <Modal visible={openSaveInfoModal} transparent={true} animationType='fade'>
                    <View style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={styles.modalSaveInfo}>
                            <Text style={styles.modalTitle}>Lưu thông tin đăng nhập</Text>
                            <Text style={{ color: variables.gray, fontSize: 16, marginLeft: 20, marginRight: 20 }}>Bạn sẽ chỉ cần nhập mật khẩu cho lần đăng nhập tiếp theo</Text>
                            <View style={{display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: '55%'}}>
                                <TouchableOpacity style={{marginRight: 20}} onPress={() => {
                                    setNav('RemoveAccount')
                                    setOpenSaveInfoModal(false)
                                    setOpenLogoutModal(true)
                                }}>
                                    <Text style={{ color: variables.gray, fontSize: 16 }}>LÚC KHÁC</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setNav('SaveAccount')
                                    setOpenSaveInfoModal(false)
                                    setOpenLogoutModal(true)
                                }}>
                                    <Text style={{ color: variables.blue, fontSize: 16 }}>LƯU</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal visible={openLogoutModal} transparent={true} animationType='fade'>
                    <View style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={styles.modalLogout}>
                            <Text style={styles.modalTitle}>Đăng xuất khỏi tài khoản của bạn?</Text>
                            <View style={{display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: '55%'}}>
                                <TouchableOpacity style={{marginRight: 20}} onPress={() => setOpenLogoutModal(false)}>
                                    <Text style={{ color: variables.gray, fontSize: 16 }}>HỦY</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleLogout}>
                                    <Text style={{ color: 'red', fontSize: 16 }}>ĐĂNG XUẤT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    headerButtonWrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    settingWrapper: {
        width: 40,
        height: 40,
        backgroundColor: variables.lightGray,
        borderRadius: 30,
        marginRight: 10
    },
    searchWrapper: {
        width: 40,
        height: 40,
        backgroundColor: variables.lightGray,
        borderRadius: 30
    },
    accountInfo: {
        paddingLeft: 12,
        marginTop: 15,
        paddingBottom: 15,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1
    },
    accountAvatar: {
        width: 60,
        height: 60
    },
    menuItemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '4%',
        marginTop: '8%'
    },
    menuItem: {
        width: '47%',
        height: 90,
        backgroundColor: 'white',
        marginRight: '2%',
        marginBottom: '2%',
        borderRadius: 15,
        paddingTop: 20,
        paddingLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    helpWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        borderTopColor: variables.lightGray,
        borderTopWidth: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 5
    },
    settingBottomWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        borderTopColor: variables.lightGray,
        borderTopWidth: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20
    },
    modalSaveInfo: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 180,
        top: '38%',
        width: '84%',
        left: '8%',
    },
    modalLogout: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 120,
        top: '38%',
        width: '84%',
        left: '8%',
    },
    modalTitle: {
        color: variables.black,
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20
    },
    button: {
        backgroundColor: variables.blue,
        width: 100,
        height: 50,
        borderRadius: 15,
        marginTop: 30,
        justifyContent: 'center',
        marginLeft: '36%'
    }
})

export default LogOut