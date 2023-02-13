import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SignUpHeader from '../../../BaseComponents/SignUp/SignUpHeader'
import CancelSignUp from '../../../BaseComponents/SignUp/CancelSignUp'
// import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import NavButton from '../../../BaseComponents/SignUp/NavButton'
import variables from '../../../BaseStyles/Variables'

const SetBirth = ({ navigation, route }) => {
    const { name } = route.params
    const [date, setDate] = useState(new Date())
    const [error, setError] = useState('')
    const present = new Date()
    const [openModal, setOpenModal] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowCalendar(false);
    setDate(currentDate);
    console.log(currentDate)
  };


    const handleOpenModal = () => {
            setOpenModal(true)
        }
        const handleCloseModal = () => {
            setOpenModal(false)
        }

    const handleSubmit = () => {
        if(present.getFullYear()-date.getFullYear() < 13) {
            setError('Hình như bạn đã nhập sai thông tin. Hãy nhớ dùng ngày sinh nhật thật của mình nhé.')
        }
        else {
            navigation.navigate('SetPhone', {
                name: name,
                birthDay: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
            })
        }
    }

    return (
        <>
            <View style={styles.wrapper}>
            <SignUpHeader title='Ngày sinh' handleOpenModal={handleOpenModal}></SignUpHeader>
            <CancelSignUp openModal={openModal} handleCloseModal={handleCloseModal} navigation={navigation}></CancelSignUp>

{showCalendar && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          onChange={onChange}
        />
      )}
                <Text style={styles.title}>Ngày sinh của bạn là khi nào?</Text>
                {error.length === 0 ? <Text style={styles.content}>Chọn ngày sinh của bạn. Bạn luôn có thể đặt thông tin này ở chế độ riêng tư vào lúc khác.</Text> : <Text style={styles.contentError}>{error}</Text>}
                <TouchableOpacity activeOpacity={0.7} onPress={() => setShowCalendar(true)} style={ error.length > 0 ? styles.error : styles.result}>
                    <Text style={error.length > 0 ? styles.ageError : styles.age}>Sinh nhật ({present.getFullYear() - date.getFullYear()} tuổi)</Text>
                    <Text style={{color: variables.gray, fontSize: 18}}>{`${date.getDate()} tháng ${date.getMonth()+1}, ${date.getFullYear()}`}</Text>
                </TouchableOpacity>
                <NavButton navigation={navigation} handleSubmit={handleSubmit} title='Tiếp'></NavButton>
            </View>
        </>
    )
}

const styles = require('../styles/set_birth')

export default SetBirth