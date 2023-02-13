import React, { useRef } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, Animated, Modal, TouchableOpacity } from 'react-native';
import variables from '../../../BaseStyles/Variables';
import { useSelector } from 'react-redux'
import { authState$ } from '../../../../../redux/selectors'

const Status = ({ navigation, route }) => {
    const getAuthData = useSelector(authState$)
    const { password } = route.params

    const springValue = useRef(new Animated.Value(0)).current;
    Animated.spring(springValue, {
        toValue: 3.5,
        friction: 2,
        useNativeDriver: true
    }).start()

    if(getAuthData.isLoading === true) {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Tạo tài khoản</Text>
                </View>
                <ActivityIndicator style={{ marginTop: '70%' }} size={60} color={variables.blue} />
            </View>
        )
    }

    console.log(getAuthData)
    if(getAuthData.authData.code === '1000' && !getAuthData.authData.code_verify) {
        setTimeout(() => {
            navigation.navigate('ConfirmCode', {
                password: password
            })
        }, 500)
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Tạo tài khoản</Text>
            </View>

            {getAuthData.authData.code === '9996' ?
                (<Modal visible={true} transparent={true} animationType='fade'>
            <View style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Số điện thoại đã được đăng ký</Text>
                    <Text style={{ color: variables.gray, fontSize: 16, textAlign: 'center' }}>Vui lòng tiến hành đăng ký lại tài khoản</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RemoveAccount')}>
                            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>Quay lại</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </Modal>) : (<Animated.Image style={[styles.image, {
                    transform: [{
                        scale: springValue
                    }], alignSelf: 'center', marginTop: '70%'
                }]} source={require('../../../assets/image/like_icon.png')}></Animated.Image>)} 
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: variables.backGround,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1
    },
    prevButton: {
        backgroundColor: variables.backGround,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
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
export default Status