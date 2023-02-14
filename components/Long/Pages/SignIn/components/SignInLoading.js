import React, { useRef } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Modal, TouchableOpacity, Animated } from 'react-native'
import variables from '../../../BaseStyles/Variables'
import { useSelector } from 'react-redux'
import { authState$ } from '../../../../../redux/selectors'

const SignInLoading = ({ navigation, route }) => {
    const { phone } = route.params
    const getAuthData = useSelector(authState$)
    //console.log(getAuthData)

    const springValue = useRef(new Animated.Value(0)).current;
    Animated.spring(springValue, {
        toValue: 3.5,
        friction: 2,
        useNativeDriver: true
    }).start()

    if (getAuthData.isLoading === true) {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Đang đăng nhập</Text>
                </View>
                <ActivityIndicator style={{ marginTop: '70%' }} size={60} color={variables.blue} />
            </View>
        )
    }

    else if (getAuthData.isLoading === false && getAuthData.authData?.response?.data?.details === 'không có user này') {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Đang đăng nhập...</Text>
                </View>
                <Modal visible={true} transparent={true} animationType='fade'>
                    <View style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={styles.modal}>
                            <Text style={styles.modalTitle}>Số điện thoại chưa được đăng ký</Text>
                            <Text style={{ color: variables.gray, fontSize: 16, textAlign: 'center' }}>Vui lòng tiến hành đăng nhập lại tài khoản</Text>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RemoveAccount')}>
                                <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>Quay lại</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    else if (getAuthData.isLoading === false && getAuthData.authData?.response?.data?.details === 'chưa xác thực code verify') {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Đang đăng nhập...</Text>
                </View>
                <Modal visible={true} transparent={true} animationType='fade'>
                    <View style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={styles.modal}>
                            <Text style={styles.modalTitle}>Số điện thoại chưa xác thực mã xác nhận</Text>
                            <Text style={{ color: variables.gray, fontSize: 16, textAlign: 'center' }}>Vui lòng tiến hành xác thực tài khoản</Text>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RemoveAccount', {
                                phone: phone
                            })}>
                                <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>Quay lại</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    else if (getAuthData.isLoading === false && getAuthData.authData?.response?.data?.details === 'password') {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Đang đăng nhập...</Text>
                </View>
                <Modal visible={true} transparent={true} animationType='fade'>
                    <View style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={styles.modal}>
                            <Text style={styles.modalTitle}>Mật khẩu sai</Text>
                            <Text style={{ color: variables.gray, fontSize: 16, textAlign: 'center' }}>Vui lòng nhập lại mật khẩu</Text>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RemoveAccount')}>
                                <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>Quay lại</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    else {
        setTimeout(() => {
            navigation.navigate('HomePage')
        }, 3000)
        
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Đang đăng nhập...</Text>
                </View>
            <Animated.Image style={[styles.image, {
                transform: [{
                    scale: springValue
                }], alignSelf: 'center', marginTop: '70%'
            }]} source={require('../../../assets/image/like_icon.png')}></Animated.Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: variables.backGround,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1
    },
    title: {
        fontSize: 20,
        color: variables.black,
        paddingTop: 18,
        paddingLeft: 18,
        paddingBottom: 18
    },
    image: {
        width: 30,
        height: 30,
    },
    modal: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 192,
        top: '38%',
        width: '84%',
        left: '8%',
    },
    modalTitle: {
        color: variables.black,
        fontSize: 20,
        textAlign: 'center',
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

export default SignInLoading