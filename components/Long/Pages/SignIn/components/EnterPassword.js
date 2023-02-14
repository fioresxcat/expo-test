import { Text, View, Image, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { useState, useEffect } from 'react'
import variables from '../../../BaseStyles/Variables'
import { useSelector, useDispatch } from 'react-redux'
import {actions} from '../../../../../redux/actions/index'
import { authState$ } from '../../../../../redux/selectors'

const EnterPassword = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const authState = useSelector(authState$)
    const [passwordError, setPasswordError] = useState('')
    const [password, setPassword] = useState('')

    const handlePasswordChange = (value) => {
        if (value.length < 1 && show) setShow(false)
        if (value.length >= 1 && !show) setShow(true)
        setPassword(value)
    }

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

    const checkPassword = (password) => {
        if(checkSpecialLetter(password) || password.length <6 || password.length >10) {
            setPasswordError('Mật khẩu của bạn phải chứa từ 6 tới 10 ký tự bao gồm chữ cái, chữ số và không được chứa các ký tự đặc biệt (như ! và %)')
            return false
        }
        else if(password===authState.authData.phonenumber) {
            setPasswordError('Mật khẩu của bạn đã trùng với số điện thoại. Vui lòng nhập lại một mật khẩu khác')
            return false
        }
        else if(checkOnly(password)) {
            setPasswordError('Mật khẩu của bạn phải chứa cả chữ cái và chữ số. Vui lòng nhập lại một mật khẩu khác')
            return false
        }
        else {
            setPasswordError('')
            return true
        }
    }

    const handleSubmit = () => {
        const isPassword = checkPassword(password)
        if(isPassword) {
            dispatch(actions.login.loginRequest({
                phonenumber: authState.authData.phonenumber,
                password: password
            }))
            navigation.navigate('SignInLoading', {phone: authState.authData.phonenumber})
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={keyboardVisible ? {marginTop: 80} : {marginTop: 240}}>
                <View style={styles.accountWrapper}>
                    <Image source={require('../../../assets/image/default_avatar.png')}
                        style={{ width: 120, height: 120 }}></Image>
                    <Text style={{ fontSize: 16, color: variables.black, marginLeft: 20}}>{authState.authData.data.username}</Text>
                </View>
                <TextInput placeholder='Mật khẩu' placeholderTextColor={variables.gray} style={styles.inputFocus}
                    onChangeText={handlePasswordChange} autoFocus={true} secureTextEntry={true}></TextInput>
                    {passwordError.length>0 && <Text style={{
                width: '88%', marginLeft: '6%', color: 'red', fontWeight: 'bold', marginBottom: 20}}>{passwordError}</Text>}
                <TouchableOpacity activeOpacity={0.8} style={styles.signIn} onPress={handleSubmit}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: variables.blue, fontWeight: 'bold', textAlign: 'center' }}>Quên mật khẩu?</Text>
            </View>
        </View>
    )
}

const styles = require('../styles/enter_password')

export default EnterPassword