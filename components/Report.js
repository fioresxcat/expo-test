import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import React, { Component } from 'react';
import ImageBesideText from './util/ImageBesideText';
import styled from 'styled-components/native';
import TagsView from './util/TagView';


const Container = styled.SafeAreaView`
`

const Divider = styled.View`
    height: 10px
`


export default function Report() {
    const selected = []
    const tags = ['Ảnh khỏa thân', 'Bạo lực', 'Quấy rối', 'Tự tử/Tự gây thương tích', 'Tin giả', 'Spam', 'Bán hàng trái phép', 'Ngôn từ gây thù ghét', 'Khủng bố', 'Vấn đề khác']

    return (
        <Container>
            <View style={{marginLeft: 5}}>
                <Text style={styles.titleText}> Vui lòng chọn vấn đề để tiếp tục</Text>
                <Text style={{ marginHorizontal: 15 }}>Bạn có thể báo cáo bài viết sau khi chọn vấn đề</Text>
            </View>
            
            <TagsView all={tags} selected={selected} isExclusive={false} isSelectable={true}/>

            <Text style={{fontWeight: 'bold'}}>Các bước khác mà bạn có thể thực hiện</Text>
            <View style={{marginLeft: 5}}>
                <ImageBesideText line1_text='Chặn Phạm' line2_text='Các bạn sẽ không thể nhìn thấy nhau trên Facebook' image_source={require('../assets/fb1.png')}></ImageBesideText>
                <Divider></Divider>
                <ImageBesideText line1_text='Bỏ theo dõi Phạm' line2_text='Dừng xem bài viết nhưng vẫn là bạn bè' image_source={require('../assets/fb1.png')}></ImageBesideText>
            </View>
            
            <Divider></Divider>

            <Button title='Tiếp tục'></Button>
        </Container>
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

});