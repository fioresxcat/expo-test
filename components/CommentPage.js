import {Image, Text, Button, StyleSheet, View, ScrollView, TextInput, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import React, {Component} from 'react';
import SingleComment from './util/SingleComment';
import { useState, useEffect} from 'react';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../assets/fonts/fa-regular-400.ttf';
import { host } from '../constant';
import { getCommentsApi, postCommentsApi } from '../api/comment';
import { RefreshControl } from 'react-native';

import {
    Entypo,
    AntDesign,
    MaterialCommunityIcons
} from '@expo/vector-icons'
import { concat } from 'react-native-reanimated';
import { useSelector } from 'react-redux';


const Container = styled.View`
    borderWidth: 0px;
    flex: 1;
    flexDirection: column;
    backgroundColor: 'white'
    ${'' /* paddingBottom: 10px; */}
`
const Header = styled.View`
    height: 50px;
    flexDirection: row;
    alignItems: center;
    borderWidth: 0px;
    paddingLeft: 10px;
    backgroundColor: 'white';
`
const CommentInput = styled.TextInput`
    borderRadius: 10px;
    height:40px;
    paddingHorizontal: 10px;
    borderWidth: 0px;
`

const Divider = styled.View`
    height: 10px;
`
const VerticalDivider = styled.View`
    width: 10px;
`

const IconCount = styled.View`
	background: #1878f3;
	width: 22px;
	height: 22px;
	border-radius: 13px;
	align-items: center;
	justify-content: center;
    borderWidth: 0px;
`

const Icon = styled.View`
	margin-right: 6px;
`

const CommentPage = ({route, navigation}) => {
    const [comments, setComments] = useState([])
    const [lastID, setLastID] = useState(0)
    const [numLike, setNumLike] = useState(0)
    const [commentInput, setCommentInput] = useState('')
    const [refreshing, setRefreshing] = useState(false)
    const mytoken = useSelector(state => state.auth.authData.data.token)
    const postID = route.params.postID

    // console.log(postID)

    useEffect(() => {
        getCommentsApi(postID, lastID, mytoken).then(data => {
            if (data.comments) {
                setComments(data.comments)
                setLastID(data.lastID)
                setNumLike(data.like)
            }
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const getMoreComments = async () => {
        try {
            const data = await(getCommentsApi(postID, lastID, mytoken))
            if (data.comments) {
                const newComments = data.comments
                const newLastID = data.lastID
                
                if (comments.includes(newComments[0])) {
                    setComments(comments.concat(newComments.slice(1, newComments.length)))
                } else {
                    setComments(comments.concat(newComments))
                }
                setLastID(newLastID)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const postComments = async () => {
        if (commentInput.length > 0) {
            console.log('post comment called')
            try {
                setCommentInput('')
                const data = await postCommentsApi(postID, commentInput, mytoken)
                setLastID(data.lastID)
                setComments(comments.concat([data.comment]))
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleRefresh = () => {
        setRefreshing(true)
        getCommentsApi(postID, 0, mytoken).then(data => {
            if (data.comments) {
                setComments(data.comments)
                setLastID(data.lastID)
                setNumLike(data.like)
            }
        }).catch(err => {
            console.log(err)
        })
        setRefreshing(false)
    }

    const renderComment = (item) => {
        return (
            <SingleComment {...item.item}></SingleComment>
        )
    }

    return (
        <Container style={{backgroundColor: 'white'}}>
            <Header style={{backgroundColor: 'white'}}>
                <IconCount style={{marginRight: 10}}>
                    <AntDesign
                        name='like1'
                        size={14}
                        color='#FFFFFF'
                    />
                </IconCount>

                <Text style={{alignSelf: 'center'}}>{numLike}</Text>

                 <Icon style={{marginLeft: 'auto', marginRight: 15}}>
                    <AntDesign
                        name='like2'
                        size={23}
                        color='#777777'
                    />
                </Icon>
            </Header>


            <FlatList 
                data={comments} 
                renderItem={renderComment} 
                style={{flex: 1}}
                scrollEventThrottle={250}
                onEndReached={info => {
                    getMoreComments();
                }}
                onEndReachedThreshold={0.01}
                keyExtractor = {item => item.id}
                refreshControl = {
                    <RefreshControl enabled={true} refreshing={refreshing} onRefresh={handleRefresh}/>
                }
            />


            <View style={{paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 10, backgroundColor: 'white'}}>
                <CommentInput 
                    placeholder='Viết bình luận...' 
                    style={{multiline: true, numberOfLines: 4, flex: 1, borderRadius: 25, backgroundColor: '#f0f2f5', borderWith: 0, paddingLeft: 15}}
                    onChangeText={text => setCommentInput(text)}
                    value = {commentInput}
                    />
                <VerticalDivider></VerticalDivider>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="send" size={20} color="#3b5998" style={{alignSelf: 'center'}} onPress={postComments}/>
                </TouchableOpacity>
            </View>

        </Container>
        
    )
}

export default CommentPage;