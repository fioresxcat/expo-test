import React, { useState, useEffect } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import variables from '../../../BaseStyles/Variables'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {actions} from '../../../../../redux/actions/index'
import { authState$ } from '../../../../../redux/selectors' 
const styles = require('../styles/remove_account')

const RemoveAccount = ({ navigation }) => {
    const [focusPhone, setFocusPhone] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)
    const dispatch = useDispatch()
    
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    // const curState = useSelector(state => state)
    // const mytoken = useSelector(state => {
    //     if (state.auth.authData.data.token) {
    //         return state.auth.authData.data.token
    //     } else {
    //         return null
    //     }
    // })
    // console.log('current state in removeaccount: ', curState)
    
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            showKeyboard.remove();
            hideKeyboard.remove();
        };
    }, []);

    const handlePhoneChange = (value) => {
        setPhone(value)
    }
    const handlePasswordChange = (value) => {
        setPassword(value)
    }
    const handleFocusPhone = () => {
        setFocusPhone(true)
        if (focusPassword) setFocusPassword(false)
    }
    const handleFocusPassword = () => {
        setFocusPassword(true)
        if (focusPhone) setFocusPhone(false)
    }

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
    
    const checkPhone = (phone) => {
        if(!Number.isInteger(Number(phone)) || phone.length !== 10 || phone[0] !== '0') {
            setPhoneError('Vui l??ng nh???p m???t s??? ??i???n tho???i h???p l??? ho???c d??ng ?????a ch??? email c???a b???n.')
            return false
        }
        else if(password===phone) {
            setPhoneError('M???t kh???u c???a b???n ???? tr??ng v???i s??? ??i???n tho???i. Vui l??ng nh???p l???i m???t m???t kh???u kh??c')
            return false
        }
        else {
            setPhoneError('')
            return true
        }
    }
    
    const checkPassword = (password) => {
        if(checkSpecialLetter(password) || password.length <6 || password.length >10) {
            setPasswordError('M???t kh???u c???a b???n ph???i ch???a t??? 6 t???i 10 k?? t??? bao g???m ch??? c??i, ch??? s??? v?? kh??ng ???????c ch???a c??c k?? t??? ?????c bi???t (nh?? ! v?? %)')
            return false
        }
        else if(password===phone) {
            setPasswordError('M???t kh???u c???a b???n ???? tr??ng v???i s??? ??i???n tho???i. Vui l??ng nh???p l???i m???t m???t kh???u kh??c')
            return false
        }
        else if(checkOnly(password)) {
            setPasswordError('M???t kh???u c???a b???n ph???i ch???a c??? ch??? c??i v?? ch??? s???. Vui l??ng nh???p l???i m???t m???t kh???u kh??c')
            return false
        }
        else {
            setPasswordError('')
            return true
        }
    }

    const handleSubmit = () => {
        console.log('handle submit 1')
        const isPhone = checkPhone(phone)
        const isPassword = checkPassword(password)
        if(isPhone && isPassword) {
            console.log('handle submit 2')

            dispatch(actions.login.loginRequest({
                phonenumber: phone,
                password: password
            }))
            navigation.navigate('SignInLoading', {phone: phone})
        }
    }

    return (
        <>
            <View style={styles.wrapper}>
                {!keyboardVisible && (<Image source={require('../../../assets/image/theme_1.png')}
                    style={styles.background}
                ></Image>)}
                {keyboardVisible && (<Image source={require('../../../assets/image/facebook_logo.png')}
                    style={styles.logo}
                ></Image>)}
                <TextInput placeholder='S??? ??i???n tho???i ho???c email' placeholderTextColor={variables.gray} style={focusPhone ? styles.inputFocus : styles.input}
                    onChangeText={handlePhoneChange} onFocus={handleFocusPhone}></TextInput>
                {phoneError.length>0 && <Text style={{
                width: '86%', marginLeft: '4%', color: 'red', fontWeight: 'bold', marginBottom: 20}}>{phoneError}</Text>}
                <TextInput placeholder='M???t kh???u' placeholderTextColor={variables.gray} style={focusPassword ? styles.inputFocus : styles.input}
                    onChangeText={handlePasswordChange} onFocus={handleFocusPassword} secureTextEntry={true}></TextInput>
                {passwordError.length>0 && <Text style={{
                width: '88%', marginLeft: '6%', color: 'red', fontWeight: 'bold', marginBottom: 20}}>{passwordError}</Text>}
                <TouchableOpacity activeOpacity={0.8} style={styles.signIn} onPress={handleSubmit}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>????ng nh???p</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: variables.blue, fontWeight: 'bold' }}>Qu??n m???t kh???u?</Text>
                {!keyboardVisible && (<View style={{ display: 'flex', flexDirection: 'row', width: '84%', marginTop: '12%', justifyContent: 'space-between' }}>
                    <View style={{ width: '43%' }}>
                        <View style={{ height: 1, backgroundColor: variables.lightGray, marginTop: 10 }}></View>
                    </View>
                    <View>
                        <Text style={{ color: variables.gray }}>HO???C</Text>
                    </View>
                    <View style={{ width: '43%' }}>
                        <View style={{ height: 1, backgroundColor: variables.lightGray, marginTop: 10 }}></View>
                    </View>
                </View>)}
                {!keyboardVisible && (<TouchableOpacity activeOpacity={0.8} style={styles.newAccount}
                    onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>T???o t??i kho???n facebook m???i</Text>
                </TouchableOpacity>)}
            </View>
        </>
    )
}


export default RemoveAccount