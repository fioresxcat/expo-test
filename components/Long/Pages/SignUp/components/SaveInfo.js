import { Text, Image, TouchableOpacity, View } from 'react-native'
import { useRef, useEffect } from 'react'
import { Animated } from 'react-native'
import variables from '../../../BaseStyles/Variables'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../../redux/actions/auth'
import { authState$ } from '../../../../../redux/selectors'

const SaveInfo = ({ navigation }) => {
    const posAnim = useRef(new Animated.Value(1000)).current
    const authState = useSelector(authState$)
    console.log(authState)
    
        Animated.timing(
            posAnim,
            {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true
            }
        ).start();
    return (
        <View>
            <Animated.View style={{
                backgroundColor: variables.backGround,
                height: '100%',
                alignItems: 'center',
                transform: [{
                    translateY: posAnim
                }],
                width: '100%'
            }}>
                <Text style={styles.title}>Lưu thông tin đăng nhập của bạn</Text>
                <Text style={styles.content}>Lần tới khi đăng nhập vào điện thoại này, bạn chỉ cần nhấn vào ảnh đại diện thay vì mật khẩu</Text>
                <Image source={require('../../../assets/image/facebook_logo.png')}
                    style={{ width: 50, height: 50, zIndex: 2, position: 'absolute', top: '40%' }}>
                </Image>
                <Image source={require('../../../assets/image/phone.png')} style={{ width: 380, height: 670, position: 'absolute', top: '20%' }}></Image>
                <Image source={authState.authData.avatar_url ? {uri: authState.authData.avatar_url} : require('../../../assets/image/default_avatar.png')} style={{ width: 120, height: 120, position: 'absolute', top: '50%' }}></Image>
                <Text style={{ position: 'absolute', top: '68%', left: '35%', fontSize: 24 }}>{authState.authData.name}</Text>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttonNo} onPress={() => navigation.navigate('LogOut')}>
                        <Text style={styles.buttonTitle}>Lúc khác</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttonYes} onPress={() => navigation.navigate('HomePage')}>
                        <Text style={styles.buttonTitle}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>

    )
}

const styles = require('../styles/save_info')

export default SaveInfo