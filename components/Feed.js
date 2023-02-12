import {Text, Image, View, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import styled from 'styled-components/native';
import WhatsOnYourMind from './util/WhatsOnYourMind';
import SinglePost from './util/SinglePost';
import ListPost from './util/ListPost';

const Container = styled.View`
    justifyContent: flex-start;
    flexDirection: column;
    borderWidth: 0px;
    border-color: red;
    flex: 1
`
const Feed = ({setScrollY})  =>{
    return (
        <Container>
            <WhatsOnYourMind></WhatsOnYourMind>
            <ListPost setScrollY={setScrollY}></ListPost>
        </Container>
    )
}

export default Feed;



