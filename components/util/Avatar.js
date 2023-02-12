import React from 'react'

import styled from 'styled-components/native'

const Container = styled.View`
	width: 45px;
	height: 45px;
	position: relative;
	marginLeft: 10px;
`
const User = styled.Image`
	width: 35px;
	height: 35px;
	border-radius: 20px;
	border-color: #1777f2;
	border-width: ${props => (props.story ? '3px' : 0)};
    marginVertical: 0px;
    resize-mode: contain;
`
const UserActive = styled.View`
	width: 15px;
	height: 15px;
	border-radius: 8px;
	background: #4bcb1f;
	position: absolute;
	bottom: -2px;
	right: -2px;
	border-width: 2px;
	border-color: #ffffff;
`

const Avatar = ({ source, online, story }) => {
	return (
		<Container>
			<User source={source} story={story} />
			{online && <UserActive />}
		</Container>
	)
}

export default Avatar