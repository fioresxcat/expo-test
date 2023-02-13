import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Image, Text, Button, StyleSheet, View, ScrollView, TextInput, FlatList} from 'react-native';
import SinglePost from "./SinglePost";
import { SafeAreaView } from "react-native";
import { RefreshControl } from "react-native";
import {actions} from '../../redux/actions'
import { ActivityIndicator } from "react-native";

const NoPost = (refreshing, handleRefresh) => {

    return <ScrollView 
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
            }>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Couldn't connect to server</Text>
                    <Text>Please check your Internet connection</Text>
                </View>
           </ScrollView>
}
    


const ListPost = ({setScrollY}) => {
    const curState = useSelector(state => state)
    console.log('current state: ', curState)

    const posts = useSelector(state => state.posts ? (state.posts.data ? state.posts.data.posts : []) : [])
    const lastID = useSelector(state => state.posts ? (state.posts.data ? state.posts.data.lastID : 0) : 0)
    const error = useSelector(state => state.posts.error)
    const refreshing = useSelector(state => state.posts.isLoading)
    const mytoken = useSelector(state => state.auth.authData.data.token)


    const dispatch = useDispatch()

    // console.log('posts: ', posts)
    // console.log('lastID: ', lastID)


    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest({
            lastID: lastID,
            mytoken: mytoken
        }))
        // console.log('initial lastID: ', lastID)
    }, [dispatch]);


    const handleRefresh = () => {
        dispatch(actions.getPosts.getPostsRequest({
            lastID: 0,
            mytoken: mytoken
        }))
    }

    const getMorePosts = (info) => {
        console.log('loading more')
        dispatch(actions.getMorePosts.getMorePostsRequest({
            lastID: lastID,
            mytoken: mytoken
        }))
    }

    const renderPost = (item) => {
        return (
            <SinglePost {...item.item} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1}}>
            {posts.length > 0 ? 
                <FlatList
                data={posts} 
                renderItem={renderPost} 
                refreshControl = {
                    <RefreshControl enabled={true} refreshing={refreshing} onRefresh={handleRefresh}/>
                }
                scrollEventThrottle={250}
                onEndReached={info => {
                    getMorePosts(info);
                }}
                onEndReachedThreshold={0.01}
                keyExtractor = {item => item.id}
                onScroll={({ nativeEvent }) => setScrollY(nativeEvent.contentOffset.y)}
                /> : error ?

                <ScrollView 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                }
                style={{flex: 1}}
                >
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 250}}>
                            <Text>Couldn't connect to server</Text>
                            <Text>Please check your Internet connection</Text>
                        </View>
                </ScrollView> : 
                
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator />
                </View>}
        </SafeAreaView>

    )

} 

export default ListPost;
