import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import variables from '../Long/BaseStyles/Variables'
import logOutIcon from '../Long/assets/data/logOutIcon'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../redux/actions/index'
import { authState$ } from '../../redux/selectors'

const ListFriends = ({ name, url }) => {
    return (
        <View style={styles.menuItem}>
            <Image source={url} style={{ width: 80, height: 80, borderRadius: 40, marginRight: 20 }}></Image>
            <View style={{ display: 'flex', flexDirection: 'column', marginTop: 5 }}>
                <Text style={{ marginTop: 3, fontWeight: 'bold', fontSize: 18, marginBottom: 5 }}>{name}</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: 120, height: 40, backgroundColor: variables.blue, marginRight: 10, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold', color: 'white' }}>Chấp nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 120, height: 40, backgroundColor: variables.lightGray, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold', color: 'black' }}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const FriendsSuggestList = ({ navigation }) => {
    return (
        <>
            <ScrollView style={{ backgroundColor: variables.backGround }}>
                <View>
                    <View style={styles.header}>
                        <Icon.Button color={variables.black} name='arrow-left' size={25} onPress={() => navigation.navigate('FriendsRequestList')} style={styles.prevButton}></Icon.Button>
                        <Text style={styles.title}>Gợi ý</Text>
                        <Icon color={variables.black} name='search' size={25} style={styles.searchButton}></Icon>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Những người bạn có thể biết</Text>
                    </View>
                    <View style={styles.menuItemWrapper}>
                        {logOutIcon.map((item) => {
                            return <ListFriends key={item.url} url={item.url} name={item.name}></ListFriends>
                        })}
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: variables.backGround,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1
    },
    prevButton: {
        backgroundColor: variables.backGround,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        color: variables.black,
        paddingTop: 18,
    },
    searchButton: {
        backgroundColor: variables.backGround,
        marginLeft: '60%',
        marginTop: 20
    },
    settingWrapper: {
        width: 40,
        height: 40,
        backgroundColor: variables.lightGray,
        borderRadius: 30,
        marginRight: 10
    },
    searchWrapper: {
        width: 40,
        height: 40,
        backgroundColor: variables.lightGray,
        borderRadius: 30
    },
    accountInfo: {
        paddingLeft: 12,
        marginTop: 15,
        paddingBottom: 15,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1
    },
    accountAvatar: {
        width: 60,
        height: 60
    },
    menuItemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '4%',
        marginTop: '8%'
    },
    menuItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: 90,
        backgroundColor: 'white',
        marginRight: '2%',
        marginBottom: '2%',
        paddingTop: 20,
    },
    helpWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        borderTopColor: variables.lightGray,
        borderTopWidth: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 5
    },
    settingBottomWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        borderTopColor: variables.lightGray,
        borderTopWidth: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20
    },
    modalSaveInfo: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 180,
        top: '38%',
        width: '84%',
        left: '8%',
    },
    modalLogout: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 120,
        top: '38%',
        width: '84%',
        left: '8%',
    },
    modalTitle: {
        color: variables.black,
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20
    },
    button: {
        backgroundColor: variables.blue,
        width: 100,
        height: 50,
        borderRadius: 15,
        marginTop: 30,
        justifyContent: 'center',
        marginLeft: '36%'
    },
    friendButton: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 20,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1,
        paddingBottom: 20
    }
})

export default FriendsSuggestList