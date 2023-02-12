import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import styled from 'styled-components/native';



const Container = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    paddingHorizontal: 0px;
`

const LeftImage = styled.Image`
    width: 50px;
    height: 50px;
    resize-mode: contain;
`

const RightTextContainer = styled.View`
    justifyContent: center;
    flex: 1;
    marginVertical: 5px
    marginLeft: 0px;
`

const TitleText = styled.Text`
    alignItems: center;
    justifyContent: center;
    margin-horizontal: 10px;
    font-size: 15px;
    color: #0d0d0d;
    font-weight: 700;
`

const DescriptionText = styled.Text`
    margin-horizontal: 10px;
    font-size: 12px;
    color: #8c8c8c;
`

const Divider = styled.View`
    height: 0px;
    background-color: transparent;
`

const ImageBesideText = ({line1_text, line2_text, icon}) =>{
    const makeRightTextContainer= () => {
        if (line2_text != '') {
            return (
                <RightTextContainer>
                    <TitleText>{line1_text}</TitleText>
                    <Divider></Divider>
                    <DescriptionText>{line2_text}</DescriptionText>
                </RightTextContainer>     
            )
        } else {
            return (
                <RightTextContainer>
                    <TitleText>{line1_text}</TitleText>
                </RightTextContainer>     
            )
        }
        
    }

    return (
        <Container>
            {icon}
            {makeRightTextContainer()}
        </Container>
    )
}


export default ImageBesideText;
