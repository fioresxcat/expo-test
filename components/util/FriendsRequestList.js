import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import variables from '../Long/BaseStyles/Variables'
import logOutIcon from '../Long/assets/data/logOutIcon'
import { useSelector, useDispatch } from 'react-redux'
import {actions} from '../../redux/actions/index'
import { authState$ } from '../../redux/selectors'

const ListFriends = ({ name, url }) => {
    return (
        <View style={styles.menuItem}>
            <Image source={url} style={{ width: 80, height: 80, borderRadius: 40, marginRight: 20 }}></Image>
            <View style={{display: 'flex', flexDirection: 'column', marginTop: 5}}>
                <Text style={{ marginTop: 3, fontWeight: 'bold', fontSize: 18, marginBottom: 5 }}>{name}</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity style={{width: 120, height: 40, backgroundColor: variables.blue, marginRight: 10, borderRadius: 10}}>
                        <Text style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold', color: 'white'}}>Chấp nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 120, height: 40, backgroundColor: variables.lightGray, borderRadius: 10}}>
                        <Text style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold', color: 'black'}}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const FriendsRequestList = ({navigation}) => {
    return (
        <>
            <ScrollView style={{ backgroundColor: variables.backGround }}>
                <View>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Bạn bè</Text>
                        <View style={styles.headerButtonWrapper}>
                            <View style={styles.searchWrapper}>
                                <Icon name='search' color='black' size={22} style={{ marginTop: 8, marginLeft: 9 }}></Icon>
                            </View>
                        </View>
                    </View>
                    <View style={styles.friendButton}>
                        <TouchableOpacity style={{backgroundColor: variables.lightGray, width: 50, height: 30, borderRadius: 20, marginRight: 10}}
                        onPress={() => navigation.navigate('FriendsSuggestList')}>
                            <Text style={{textAlign: 'center', marginTop: 3}}>Gợi ý</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: variables.lightGray, width: 100, height: 30, borderRadius: 20}} 
                        onPress={() => navigation.navigate('FriendsList')}>
                            <Text style={{textAlign: 'center', marginTop: 3}}>Tất cả bạn bè</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Lời mời kết bạn</Text>
                        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: 'red'}}>42</Text>
                        <Text style={{marginLeft: '30%', fontSize: 14, fontWeight: 'bold', color: variables.blue, marginTop: 5}}>Xem tất cả</Text>
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
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    headerButtonWrapper: {
        display: 'flex',
        flexDirection: 'row'
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

export default FriendsRequestList