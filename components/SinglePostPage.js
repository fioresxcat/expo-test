import SinglePost from "./util/SinglePost";
import React from 'react';
import {StyleSheet} from 'react-native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, onPressBack, onPressSearch }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Ionicons name="ios-arrow-back" size={40} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onPressSearch} style={styles.searchButton}>
        <Ionicons name="ios-search" size={40} color="#000" />
      </TouchableOpacity>

    </View>
  );
};


const SinglePostPage = (navigation) => {
    // console.log('props in SinglePostPage: ', navigation)
    const postData = navigation.route.params.postData;

    const onPressBack = () => {
        navigation.navigation.goBack();
    }

    return (
        <View>
            <Header title={postData.title} onPressBack={onPressBack} onPressSearch={() => {}} />
            <SinglePost {...postData}></SinglePost>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      },
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SinglePostPage;
