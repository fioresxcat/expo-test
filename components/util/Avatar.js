import React from 'react'

import styled from 'styled-components/native'

const Container = styled.View`
	width: 50px;
	height: 50px;
	position: relative;
	marginLeft: 5px;
	borderWidth: 0;
	alignItems: center;
	justifyContent: flex-start;
`
const User = styled.Image`
	width: 43px;
	height: 43px;
	border-radius: 25px;
	border-color: ${props => (props.story ? '#1777f2' : '#dbdcd9')};
	border-width: ${props => (props.story ? '3px' : '1px')};
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
			<User source={source} story={null} />
			{online && <UserActive />}
		</Container>
	)
}

export default Avatar