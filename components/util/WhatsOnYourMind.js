
import React from 'react'

import styled from 'styled-components/native'

import {
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons'

import { useSelector } from 'react-redux'

import Avatar from './Avatar'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Container = styled.TouchableOpacity`
	width: 100%;
	borderWidth: 0px;
	paddingHorizontal: 0px;
	alignItems: center;
`
const Row = styled.View`
	flex-direction: row;
	background: #ffffff;
	width: 100%;
	paddingRight: 50px;
	paddingLeft: 11px;
	paddingTop: 10px;
	paddingBottom: 10px;
	paddingBottom: 5px;
	align-items: center;
	paddingRight: 20px;
	height: 66px;
`
const Input = styled.Text`
	flex: 1;
	fontSize: 15px;
	color: #363636;
	fontWeight: 500;
	paddingLeft: 20px;
	borderRadius: 25px;
	border-width: 1px;
	borderColor: #dcdcdc;
	height: 40px;
	paddingTop: 10px;
	paddingBottom: 5px;
	marginRight: 20px;
	marginLeft: 10px;
	justifyContent: center;
	alignItems: center;
`
const VerticalDivider = styled.View`
	width: 5px;
	background: #f0f0f0;
`

const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const WhatsOnYourMind = () => {
	const username = useSelector(state => state.auth.authData.data.username)
	const userAvatarURI = useSelector(state => state.auth.authData.data.avatar)
	const navigation = useNavigation()

	const moveToAddPost = () => {
		navigation.navigate('AddPostPage', {
			userData: {
				name:  username,
				userAvatarURI: userAvatarURI
			}
		})
	}
	return (
			<Container>
				<Row>
					<Avatar source={userAvatarURI ? {uri: userAvatarURI} : require('../Long/assets/image/default_avatar.png')} online={true} story={false} />
					<VerticalDivider></VerticalDivider>
					<TouchableOpacity style={{flex: 1}} onPress={moveToAddPost}>
						<Input>Bạn đang nghĩ gì ?</Input>
					</TouchableOpacity>
				</Row>
			</Container>
	)
}

export default WhatsOnYourMind