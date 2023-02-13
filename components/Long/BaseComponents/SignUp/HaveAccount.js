import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import CancelSignUp from './CancelSignUp'
import variables from '../../BaseStyles/Variables'

const HaveAccount = ({ navigation }) => {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    return (
        <>
            <TouchableOpacity style={styles.haveAccount} onPress={handleOpenModal}>
                <Text style={{ color: variables.blue, fontSize: 16, fontWeight: 'bold' }}>Bạn đã có tài khoản ư?</Text>
            </TouchableOpacity>
            <CancelSignUp openModal={openModal} handleCloseModal={handleCloseModal} navigation={navigation}></CancelSignUp>
        </>
    )
}

const styles = StyleSheet.create({
    haveAccount: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
    }
})

export default HaveAccount