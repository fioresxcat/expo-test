import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import HaveAccount from '../../../BaseComponents/SignUp/HaveAccount'
import variables from '../../../BaseStyles/Variables';

const CreateAccount = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Icon.Button color={variables.black} name='arrow-left' size={25} onPress={() => navigation.navigate('RemoveAccount')} style={styles.prevButton}></Icon.Button>
                <Text style={styles.title}>Tạo tài khoản</Text>
            </View>
            <Image source={require('../../../assets/image/theme_2.png')}
                style={styles.image}>
            </Image>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Tham gia Facebook</Text>
            <Text style={styles.content}>
                Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài bước dễ dàng.
            </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('SetName')}>
                <Text style={{ color: 'white', fontSize: 16 }}>Tiếp</Text>
            </TouchableOpacity>
            <HaveAccount navigation={navigation}></HaveAccount>
        </View>
    )
}

const styles = require('../styles/create_account')

export default CreateAccount