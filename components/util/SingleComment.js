import react from "react";
import {Text, View, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from "react";
import styled from 'styled-components/native';
import * as utils from '../../utils/utils'


const Container = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: flex-start;
    paddingLeft: 10px;
    paddingRight: 10px;
`

const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    resize-mode: contain;
`

const RightTextContainer = styled.View`
    flex: 1;
    marginLeft: 6px
`

const CommentCard = styled.View`
    backgroundColor: '#f0f2f5';
    borderRadius: 10px;
    alignItems: flex-start;
    justifyContent: center;
`

const NameText = styled.Text`
    alignItems: center;
    ${'' /* justifyContent: center; */}
    margin-horizontal: 10px;
    font-size: 15px;
    ${'' /* borderWidth:2; */}
    ${'' /* borderColor: 'black' */}
`

const CommentText = styled.Text`
    margin-horizontal: 10px;
    font-size: 12px;
    flexWrap: wrap;
`

const Row = styled.View`
    flexDirection: row;
`

const Divider = styled.View`
    height: 10px;
    background-color: transparent;
`




const SingleComment = (commentData) => {
    console.log('commentData: ', commentData)

    const posterAvatarURL = commentData.poster ? (commentData.poster.avatar ? commentData.poster.avatar : '../../assets/fb1.png' ) : '../../assets/fb1.png'
    const posterName = commentData.poster ? commentData.poster.name : 'facebook user'
    const comment = commentData.comment
    const timeSinceCreated = utils.getTimeDifference(commentData.created)

    return (
        <View style={{flexDirection: "column", backgroundColor: 'white'}}>
            <Container>
                <View style={{borderRadius: 25, borderWidth: 0}}>
                    <TouchableOpacity style={{flexDirection: "row", justifyContent: "flex-start", alignItems:'center', justifyContent: 'center'}}>
                        <Avatar source={posterAvatarURL === '../../assets/fb1.png' ? require('../../assets/fb1.png') : { uri: posterAvatarURL }}></Avatar>
                    </TouchableOpacity>
                </View>
                

                <RightTextContainer style={{paddingLeft: 5}}>

                    <CommentCard style={{backgroundColor: '#f0f2f5', borderRadius: 15, paddingLeft: 5, paddingTop: 4, paddingBottom: 4}}>
                        <NameText style={{fontWeight: "500", fontSize: 16}}>{posterName}</NameText>
                        <CommentText style={{fontWeight: "400", fontSize: 15, color: "#191b20"}}>{comment}</CommentText>
                    </CommentCard>

                    <Row style={{paddingLeft: 14}}>
                        <Text style={{fontWeight: "500", color: "#919293"}}>{timeSinceCreated}  </Text>

                        <TouchableOpacity>
                            <Text style={{fontWeight: "500", color: "#919293"}}>Thích   </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={{fontWeight: "500", color: "#919293"}}>Trả lời  </Text>
                        </TouchableOpacity>
                    </Row>
                </RightTextContainer>

            </Container>

            <Divider></Divider>

        </View>
        
    )
}

export default SingleComment