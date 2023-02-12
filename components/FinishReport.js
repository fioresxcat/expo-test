import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import React, { Component } from 'react';
import ImageBesideText from './util/ImageBesideText';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import TagsView from './util/TagView';


const UpperContainer = styled.SafeAreaView`
`

const BelowContainer = styled.SafeAreaView`

`

const CenterView = styled.View`
    justifyContent: center;
    alignItems: center;
    ${'' /* flexDirection: row; */}
`

const FinishButton = styled.Button`
    position: absolute;
    bottom:0;
    left:0;
`
const Divider = styled.View`
    height: 10;
`


export default function Report({ navigation }) {
    const selected = ['Ngôn từ gây thù ghét', 'Thành phần tôn giáo']
    const tags = ['Ngôn từ gây thù ghét', 'Thành phần tôn giáo']

    return (
        <View>
            <UpperContainer>
                <CenterView>
                    <Image source={require('../assets/fb1.png')} style={styles.report_icon}></Image>
                </CenterView>

                <CenterView >
                    <Text style={{fontWeight: 'bold'}}>Bạn đã chọn</Text>
                </CenterView>
                
                <CenterView >
                    <TagsView all={tags} selected={selected} isSelectable={false}></TagsView>
                </CenterView>

                <Text style={{flexWrap:'wrap', textAlign: 'center'}}>Bạn có thể báo cáo nếu cho rằng nội dung này vi phạm Tiêu chuẩn cộng đồng của chúng tôi. Xin lưu ý rằng đội ngũ xét duyệt của chúng tôi hiện có ít nhân lực hơn</Text>
            </UpperContainer>

            <Divider></Divider>

            <BelowContainer>
                <Text style={{fontWeight:'bold'}}>Các bước khác mà bạn có thể thực hiện</Text>
                <Divider></Divider>
                <ImageBesideText line1_text='Chặn Phạm' line2_text='Các bạn sẽ không thể nhìn thấy hoặc liên hệ với nhau' image_source={require('../assets/fb1.png')}></ImageBesideText>

                <View style={styles.finish_button}>
                    <FinishButton title='Xong'></FinishButton>
                </View>
            </BelowContainer>
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
    report_icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    finish_button: {
        justifyContent: 'flex-end',
        flex: 1
    }

});