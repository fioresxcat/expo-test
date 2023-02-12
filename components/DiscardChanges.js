import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';


export default function DeletePost() {
  return (
    <View>
      <Text style={styles.titleText}>Bỏ thay đổi</Text>
      <Text style={styles.text}>Nếu bỏ bây giờ thì ban j sẽ mất mọi thay đổi trên bài viết này</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'right', marginHorizontal: 50 }}>
        <TouchableOpacity style={styles.button}>
          <Text>Tiếp tục chỉnh sửa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>Bỏ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10    
  },
  text: {
    marginHorizontal:10
  },
  button: {
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10
  },
  image: {
      flex: 1,
      width: 50,
      height: 50,
      resizeMode: 'contain' 
  }
});

const onPress = () => {
  console.log('Button pressed');
}