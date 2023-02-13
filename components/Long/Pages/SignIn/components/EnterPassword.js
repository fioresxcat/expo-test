import { Text, View, Image, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { useState, useEffect } from 'react'
import variables from '../../../BaseStyles/Variables'

const EnterPassword = ({ navigation }) => {
    const [show, setShow] = useState(false)

    const handlePasswordChange = (value) => {
        if (value.length < 1 && show) setShow(false)
        if (value.length >= 1 && !show) setShow(true)
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

    return (
        <View style={styles.wrapper}>
            <View style={keyboardVisible ? {marginTop: 80} : {marginTop: 240}}>
                <View style={styles.accountWrapper}>
                    <Image source={require('../../../assets/image/default_avatar.png')}
                        style={{ width: 120, height: 120 }}></Image>
                    <Text style={{ fontSize: 16, color: variables.black }}>Nguyễn Đức Long</Text>
                </View>
                <TextInput placeholder='Mật khẩu' placeholderTextColor={variables.gray} style={styles.inputFocus}
                    onChangeText={handlePasswordChange} autoFocus={true}></TextInput>
                <TouchableOpacity activeOpacity={0.8} style={styles.signIn} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: variables.blue, fontWeight: 'bold', textAlign: 'center' }}>Quên mật khẩu?</Text>
            </View>
        </View>
    )
}

const styles = require('../styles/enter_password')

export default EnterPassword