import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import variables from '../../BaseStyles/Variables';

const SignUpHeader = ({ title, handleOpenModal }) => {
    return (
        <View style={styles.header}>
            <Icon.Button color={variables.black} name='arrow-left' size={25} onPress={() => handleOpenModal()} style={styles.prevButton}></Icon.Button>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = require('../../BaseStyles/SignUp/signup_header')

export default SignUpHeader