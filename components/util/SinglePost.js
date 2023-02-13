import React from 'react'
import { useState, useEffect} from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { View } from 'react-native'
import { Modal, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import * as utils from '../../utils/utils'
import { host } from '../../constant'
import { postLike } from '../../api/like'
import Report from '../Report'
import { SafeAreaView } from 'react-native';
import TagsView from './TagView';
import ImageBesideText from './ImageBesideText'
import {FontAwesome5} from '@expo/vector-icons'
import { myID } from '../../constant'
import { useDispatch } from 'react-redux'
import { KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native'
import emotionData from '../../assets/data/emotion'
import { variables } from '../../constant'
import { Image } from 'react-native'
import {useSelector} from 'react-redux'

import {
    Entypo,
    AntDesign,
    MaterialCommunityIcons
} from '@expo/vector-icons'

import Avatar from './Avatar';
import { actions } from '../../redux/actions'

const Container = styled.View`
	${'' /* flex: 1; */}
    borderWidth: 0px;
    backgroundColor: white;
`
const Header = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 6px;
	padding: 0 11px;
`
const Row = styled.View`
	align-items: center;
	flex-direction: row;
`
const User = styled.Text`
	font-size: 12px;
	font-weight: bold;
	color: #222121;
`
const Time = styled.Text`
	font-size: 9px;
	color: #747476;
`
const Post = styled.TouchableOpacity`
	font-size: 12px;
	color: #222121;
	line-height: 16px;
	padding: 0 11px;
`
const Photo = styled.Image`
	margin-top: 9px;
	width: 100%;
	height: 300px;
`
const Footer = styled.View`
	padding: 0 11px;
`
const FooterCount = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const IconCount = styled.View`
	background: #1878f3;
	width: 20px;
	height: 20px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	margin-right: 6px;
`
const TextCount = styled.Text`
	font-size: 11px;
	color: #424040;
`
const Separator = styled.View`
	width: 100%;
	height: 1px;
	background: #f9f9f9;
`
const FooterMenu = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const Button = styled.TouchableOpacity`
	flex-direction: row;
`
const Icon = styled.View`
	margin-right: 6px;
`
const Text = styled.Text`
	font-size: 12px;
	color: #424040;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	${'' /* background: #f0f2f5; */}
`

const Divider = styled.View`
    height: 5px;
`

const DeleteModalContainer = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`

const DeleteModelRow = styled.View`
    flexDirection: row;
    borderWidth: 0px;
    justifyContent: flex-end;
    paddingRight: 10px;
`

const DeleteModal = ({deleteModalVisible, hideDeleteModal, makeDeletePost, postData}) => {
    const navigation = useNavigation()

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={deleteModalVisible}
            onRequestClose={hideDeleteModal}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0,0,0,0.5)'}}>

                    <View style={{borderWidth: 0, backgroundColor: 'white', marginHorizontal: 15, padding: 10, borderRadius: 10}}>
                        <Text style={styles.modal.titleText}>Xóa bài viết?</Text>
                        <Divider style={{height: 20}}></Divider>

                        <Text style={styles.modal.text}>Bạn có thể chỉnh sửa bài viết nếu cần thay đổi</Text>
                        <Divider style={{height: 20}}></Divider>

                        <DeleteModelRow style={{}}>
                            <TouchableOpacity style={styles.button} onPress={makeDeletePost}>
                                <Text style={{fontSize: 17, color:'rgb(0, 0, 255)', fontWeight: "500"}}>XÓA    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('EditPostPage', {postData}); hideDeleteModal()}}>
                                <Text style={{fontSize: 17, fontWeight: "500"}}>CHỈNH SỬA   </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={hideDeleteModal}>
                                <Text style={{fontSize: 17, fontWeight: "500"}}>HỦY   </Text>
                            </TouchableOpacity>
                        </DeleteModelRow>

                    </View>
                    
                </View>

            </Modal>
    )
}


const ReportModal = ({reportModalVisible, hideReportModal, posterName, selectedTag, setSelectedTag, showReportConfirmModal}) => {
    const selected = []
    const tags = ['Ảnh khỏa thân', 'Bạo lực', 'Quấy rối', 'Tự tử/Tự gây thương tích', 'Tin giả', 'Spam', 'Bán hàng trái phép', 'Ngôn từ gây thù ghét', 'Khủng bố', 'Vấn đề khác']
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        if (selectedTag != '') {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [reportModalVisible, selectedTag])

    const blockIcon = 
            <View style={{flexDirection: 'row', justifyContent: 'center', width: 40}}>
              <FontAwesome5 name="user-alt-slash" size={30} color="#333" />
            </View>
    

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={reportModalVisible}
            onRequestClose={() => {setSelectedTag(''); hideReportModal()}}
        >
            <SafeAreaView style={{paddingHorizontal: 20, flexDirection: 'column', flex: 1, borderWidth: 1}}>
                <View style={{marginTop: 10}}>
                    <Text style={{ fontSize: 20, fontWeight: "bold"}}> Vui lòng chọn vấn đề để tiếp tục</Text>
                    <Text style={{ fontSize: 16, marginLeft: 6}}>Bạn có thể báo cáo bài viết sau khi chọn vấn đề</Text>
                </View>
                
                <TagsView all={tags} selected={selected} isExclusive={true} isSelectable={true} setSelectedTag={setSelectedTag}/>

                <Divider style={{height: 2, backgroundColor: 'rgb(200, 200, 200)'}}></Divider>

                <Text style={{fontWeight: 'bold', fontSize: 16}}>Các bước khác mà bạn có thể thực hiện</Text>
                <Divider></Divider>
                <View style={{marginLeft: 0}}>
                    <ImageBesideText line1_text={`Chặn ${posterName}`} line2_text='Các bạn sẽ không thể nhìn thấy nhau trên Facebook' icon={blockIcon}></ImageBesideText>
                    <Divider></Divider>
                    <ImageBesideText line1_text={`Bỏ theo dõi ${posterName}`} line2_text='Dừng xem bài viết nhưng vẫn là bạn bè' icon={blockIcon}></ImageBesideText>
                </View>
                
                <Divider></Divider>

                <TouchableOpacity 
                    style={selectedTag != '' ? 
                            {justifyContent: 'center', alignItems: 'center', backgroundColor: '#1877f2', marginTop: 'auto', marginBottom: 10, height:40, borderRadius: 10}:
                            {justifyContent: 'center', alignItems: 'center', backgroundColor: '#e5e6eb', marginTop: 'auto', marginBottom: 10, height:40, borderRadius: 10}}
                    onPress={() => {hideReportModal(); showReportConfirmModal()}}
                    disabled={disable}
                >
                    <Text 
                        style={disable ? 
                        {fontSize: 16, color: '#c8c9ce', marginTop: 5, marginBottom: 5} :
                        {fontSize: 16, color: 'white', marginTop: 5, marginBottom: 5}}
                    >
                        Tiếp tục
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>
        </Modal>
    )
}

const ReportConfirmModal = ({postID, onSubmitReport, selectedTag, posterName, hideReportConfirmModal, reportConfirmModalVisible, setSelectedTag}) => {
    const [input, setInput] = useState('')
    const handleTextChange = (value) => {
        setInput(value)
    }

    const blockIcon = 
            <View style={{flexDirection: 'row', justifyContent: 'center', width: 40}}>
              <FontAwesome5 name="user-alt-slash" size={30} color="#333" />
            </View>
    // console.log('selectedTag: ', selectedTag)
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={reportConfirmModalVisible}
            onRequestClose={() => {setSelectedTag(''); hideReportConfirmModal()}}
        >
            <SafeAreaView style={{paddingHorizontal: 20, flexDirection: 'column', flex: 1}}>
                <View style={{alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                    <FontAwesome5 name="exclamation-circle" size={50} color="yellow" />
                    <Divider></Divider>
                    <Text style={{...styles.text, fontSize: 18, fontWeight: "600"}}>Bạn đã chọn</Text>
                </View>
                
                <TagsView all={selectedTag} selected={selectedTag} isExclusive={false} isSelectable={false} setselectedTag={setSelectedTag}/>

                <Text style={{fontSize: 15}}>Bạn có thể báo cáo nếu cho rằng nội dung này vi phạm <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Tiêu chuẩn cộng đồng</Text> của chúng tôi. Xin lưu ý rằng đội ngũ xét tuyển của chúng tôi bây giờ có ít nhân lực hơn</Text>

                <Divider style={{height: 2, backgroundColor: 'rgb(200, 200, 200)', marginTop: 10, marginBottom: 10}}></Divider>

                <Text style={{fontWeight: 'bold', fontSize: 16}}>Các bước khác mà bạn có thể thực hiện</Text>
                <View style={{marginLeft: 5}}>
                    <ImageBesideText line1_text={`Chặn ${posterName}`} line2_text='Các bạn sẽ không thể nhìn thấy hoặc liên hệ với nhau' icon={blockIcon}></ImageBesideText>
                </View>
                
                <Divider></Divider>


                <KeyboardAvoidingView behavior="padding" style={{marginTop: 10}}>
                    <TextInput
                        multiline={true}
                        placeholder="Chi tiết nội dung báo cáo"
                        placeholderTextColor="#C0C0C0"
                        value={input}
                        onChangeText={handleTextChange}
                        style={{borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 0, borderRadius: 15}}
                    />
                </KeyboardAvoidingView>

                <TouchableOpacity 
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#1877f2', marginTop: 'auto', marginBottom: 10, height:40, borderRadius: 10}}
                    onPress={() => {setSelectedTag(''); hideReportConfirmModal(); onSubmitReport(postID, selectedTag, input)}}
                >
                    <Text 
                        style={{fontSize: 16, color: 'white', marginTop: 5, marginBottom: 5}}
                    >
                        XONG
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>
        </Modal>
    )
}


const AdvancedModal = ({advancedModalVisible, hideAdvancedModal, showDeleteModal, showReportModal, userID, postData, posterName, posterID}) => {
    const navigation = useNavigation()

    const blockIcon = 
            <View style={{flexDirection: 'row', justifyContent: 'center', width: 40}}>
              <FontAwesome5 name="user-alt-slash" size={30} color="#333" />
            </View>

    const reportIcon = 
            <View style={{flexDirection: 'row', justifyContent: 'center', width: 40}}>
              <FontAwesome5 name="file-alt" size={30} color="#333" />
            </View>

    const deleteIcon = 
            <View style={{flexDirection: 'row', justifyContent: 'center', width: 40, paddingRight: 5}}>
              <FontAwesome5 name="trash-alt" size={30} color="#333" />
            </View>

    const editIcon = 
            <View style={{flexDirection: 'row', justifyContent: 'center', width: 40}}>
              <FontAwesome5 name="edit" size={30} color="#333" />
            </View>

    return (
        
        <Modal
            animationType="slide"
            transparent={false}
            visible={advancedModalVisible}
            onRequestClose={hideAdvancedModal}
        >
            <TouchableWithoutFeedback onPress={hideAdvancedModal}>
                <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>

                    <View style={{marginTop: 'auto', backgroundColor: 'white', paddingHorizontal: 20}}>
                        <Divider style={{height:10}}></Divider>

                        {posterID != 0 ? 
                        <TouchableOpacity onPress={() => {hideAdvancedModal(); showDeleteModal()}}>
                            <ImageBesideText line1_text={`Xóa bài viết`} line2_text='Xóa bài viết này khỏi trang cá nhân của bạn' icon={deleteIcon}></ImageBesideText>
                        </TouchableOpacity> : null}

                        {posterID != 0 ? 
                        <TouchableOpacity onPress={() => {navigation.navigate('EditPostPage', {postData}); hideAdvancedModal()}}>
                            <ImageBesideText line1_text={`Sửa bài viết`} line2_text='Chỉnh sửa bài viết này' icon={editIcon}></ImageBesideText>
                        </TouchableOpacity> : null}

                        <TouchableOpacity>
                            <ImageBesideText line1_text={`Ẩn tất cả từ ${posterName}`} line2_text='Không xem bài viết từ người này nữa' icon={blockIcon}></ImageBesideText>
                        </TouchableOpacity>
                        <Divider style={{height:10}}></Divider>

                        <TouchableOpacity onPress={() => {hideAdvancedModal(); showReportModal()}}>
                            <ImageBesideText line1_text={`Báo cáo bài viết`} line2_text='' icon={reportIcon}></ImageBesideText>
                        </TouchableOpacity>
                        <Divider style={{height:10}}></Divider>
                    </View>

                </SafeAreaView>
            </TouchableWithoutFeedback>
            
        </Modal>
    )
}



const SinglePost = (postData) => {
    console.log('postData', postData)

    const [advancedModalVisible, setAdvancedModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [reportModalVisible, setReportModalVisible] = useState(false);
    const [reportConfirmModalVisible, setReportConfirmModalVisible] = useState(false);
    const [selectedTag, setSelectedTag] = useState('');
    const user = {
        id: myID,
        name: 'fioresxcat'
    }
    const navigation = useNavigation()
    const posterName = postData.author?.name ? postData.author.name : 'facebook user'
    const posterID = postData.author?.id ? postData.author.id : -1
    const postID = postData.id ? postData.id : -1
    const lastModified = postData.created ? utils.getTimeDifference(postData.created) : ''
    const postContent = postData.described ? postData.described : 'This is a post'
    const [displayPostContent, setDisplayPostContent] = useState(postContent)
    const avatarURL = postData.author ? postData.author.avatar : '../../assets/fb1.png'
    const likeText = utils.getLikeText(postData.likedUserNames)
    const [displayLikeText, setDisplayLikeText] = useState(likeText)
    const numComment = postData.comment ? postData.comment : 0
    const [displayNumComment, setDisplayNumComment] = useState(numComment)
    const isLiked = postData.is_liked ? postData.is_liked : false
    const [displayIsLiked, setDisplayIsLiked] = useState(isLiked)
    const emotion = utils.getEmotionFromState(postData?.status ? postData.status : '', emotionData)
    const postImage = postData.image ? postData.image.map(item => {return {id: item.id, uri: item.url}}) : []
    const mytoken = useSelector(state => state.auth.authData.data.token)

    const maxPostCharacter = 20
    const dispatch = useDispatch()

    console.log('emotion: ', emotion)
    console.log('postImage 0: ', postImage[0])
    useEffect(() => {
        if (postContent.length > maxPostCharacter) {
            setDisplayPostContent(postContent.substring(0, maxPostCharacter) + '...')
        } else {
            setDisplayPostContent(postContent)
        }
        setDisplayLikeText(likeText)
        setDisplayNumComment(numComment)
        setDisplayIsLiked(isLiked)
    }, [postData])

    const expandOrMoveToNewPage = () => {
        // if (postContent.image && postContent.image.length > 1) {
        //     navigation.navigate('SinglePostView', {
        //         'postData': postData
        //     })
        // } else {
        //     setDisplayPostContent(postContent)
        // }

        navigation.navigate('SinglePostView', {
            'postData': postData
        })
    }

    const displayPostImage = () => {
        console.log('post image length: ', postImage.length)
        if (postImage.length == 0) {
            return null
        } else if (postImage.length == 1) {
            return (
                <TouchableOpacity>
                    <Image style={{marginTop: 9, width: '100%', height: 300, resizeMode: 'cover'}} source={{uri: postImage[0].uri}}></Image>
                </TouchableOpacity>
            )
        } else if (postImage.length == 2) {
            return (
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                    <TouchableOpacity style={{width: '49.6%'}}>
                        <Image style={{width: '100%', height: 300, resizeMode: 'cover'}} source={{uri: postImage[0].uri}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '49.6%'}}>
                        <Image style={{width: '100%', height: 300, resizeMode: 'cover'}} source={{uri: postImage[1].uri}}></Image>
                    </TouchableOpacity>
                </View> 
            )
        } else if (postImage.length == 3) {
            // display first image in the first column with 50% width, 2 other images in the second column with 50% width, each of them 50% height
            return (
                <View style={{flexDirection: 'row', marginTop: 9, justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{width: '49.6%', borderWidth: 1}}>
                        <Image style={{width: '100%', height: 300}} source={{uri: postImage[0].uri}}></Image>
                    </TouchableOpacity>

                    <View style={{width: '49.6%', height: 300, flexDirection: 'column', borderWidth: 1, justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{height: '49.6%'}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: postImage[1].uri}}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height: '49.6%'}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: postImage[2].uri}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else if (postImage.length == 4) {
            return (
                <View style={{flexDirection: 'row', marginTop: 9, justifyContent: 'space-between'}}>
                    <View style={{width: '49.6%', height: 300, flexDirection: 'column', justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{height: '49.6%'}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: postImage[0].uri}}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height: '49.6%'}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: postImage[1].uri}}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{width: '49.6%', height: 300, flexDirection: 'column', justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{height: '49.6%'}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: postImage[2].uri}}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height: '49.6%'}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: postImage[3].uri}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
    
    const onPostLike = async () => {
        console.log('on Post Like called')
        dispatch(actions.likePost.likePostRequest({postID: postID, mytoken: mytoken}))
    }

    const onDeletePost = async () => {
        console.log('id to delete', postData.id)
        dispatch(actions.deletePost.deletePostRequest({postID: postData.id, mytoken: mytoken}))
        hideDeleteModal()
    }

    const onSubmitReport = (postID, selectedTag, detail) => {
        dispatch(actions.reportPost.reportPostRequest({postID: postID, subject: selectedTag, detail: detail, mytoken: mytoken}))
    }
    
    const moveToCommentPage = () => {
        navigation.navigate('CommentPage', {
            postID: postData.id,
            likeCount: postData.like,
        })
    }

    const showAdvancedModal = () => {
        setAdvancedModalVisible(true)
    }

    const hideAdvancedModal = () => {
        setAdvancedModalVisible(false)
    }

    const showDeleteModal = () => {
        setDeleteModalVisible(true)
    }

    const hideDeleteModal = () => {
        setDeleteModalVisible(false)
    }

    const showReportModal = () => {
        setReportModalVisible(true)
    }

    const hideReportModal = () => {
        setReportModalVisible(false)
        // setSelectedTag('')
    }

    const showReportConfirmModal = () => {
        setReportConfirmModalVisible(true)
    }

    const hideReportConfirmModal = () => {
        setReportConfirmModalVisible(false)
    }

    

    return (
        <Container>
            <Divider style={{height: 10, backgroundColor: "#c9ccd1"}}></Divider>
            <DeleteModal deleteModalVisible={deleteModalVisible} hideDeleteModal={hideDeleteModal} makeDeletePost={onDeletePost}> postData={postData}</DeleteModal>

            <ReportModal  reportModalVisible={reportModalVisible} hideReportModal={hideReportModal} posterName={posterName} selectedTag={selectedTag} setSelectedTag={setSelectedTag} showReportConfirmModal={showReportConfirmModal}></ReportModal>

            <ReportConfirmModal postID={postID} onSubmitReport={onSubmitReport} selectedTag={selectedTag} setSelectedTag={setSelectedTag} reportConfirmModalVisible={reportConfirmModalVisible} hideReportConfirmModal={hideReportConfirmModal} posterName={posterName}></ReportConfirmModal>

            <AdvancedModal postData={postData} advancedModalVisible={advancedModalVisible} hideAdvancedModal={hideAdvancedModal} posterName={posterName} posterID={posterID} userID={myID} showDeleteModal={showDeleteModal} showReportModal={showReportModal}></AdvancedModal>

            <Header style={{borderWidth: 0, paddingTop: 0, alignItems: 'center'}}>
                <Row style={{borderWidth: 0, paddingTop: 0}}>

                    <Avatar source={avatarURL === '../../assets/fb1.png' ? require('../../assets/fb1.png') : { uri: avatarURL }}/>

                    <View style={{ paddingLeft: 5, borderWidth: 0, marginTop:0, paddingTop: 3}}>
                        <User style={{fontSize: 17}}>{posterName}</User>
                        {emotion && (<>
                            <View style={{borderWidth: 0}}>
                                <Text style={{ fontWeight: 'bold', color: variables.black, fontSize: 16 }}>
                                    <Text style={{ fontWeight: '400', color: variables.black, fontSize: 16, marginTop: 0 }}>- Đang </Text>
                                    <Image source={emotion.url} style={{width: 20, height: 20}}></Image>
                                    <Text style={{ fontWeight: '400', color: variables.black, fontSize: 16, marginTop: 0 }}> cảm thấy </Text>
                                    <Text style={{fontWeight: 'bold', color: variables.black, fontSize: 16}}>{emotion.status}</Text>
                                </Text>
                            </View>
                        </>)}
                        <Divider style={{height: 3}}></Divider>

                        <Row>
                            <Time style={{fontSize: 12}}>{lastModified}</Time>
                            <Entypo
                                name='dot-single'
                                size={12}
                                color='#747476'
                            />
                            <Entypo
                                name='globe'
                                size={10}
                                color='#747476'
                            />
                        </Row>
                    </View>
                </Row>

                <TouchableOpacity onPress={showAdvancedModal}>
                    <Entypo
                        name='dots-three-horizontal'
                        size={15}
                        color='#222121'
                    />
                </TouchableOpacity>
                
            </Header>
            
            <Divider style={{height: 10}}></Divider>

            <Post onPress={expandOrMoveToNewPage}>
                <Text style={{fontSize: 16, fontWeight: "400"}}>{displayPostContent}</Text>
            </Post>

            {/* <Photo source={require('../../assets/fb1.png')} /> */}
            {displayPostImage()}

            <Footer>
                <FooterCount>
                    <Row>
                        {postData.likedUserNames.length > 0 ? 
                            <IconCount>
                                <AntDesign
                                    name='like1'
                                    size={12}
                                    color='#FFFFFF'
                                />
                            </IconCount> : null}
                        <TextCount>{displayLikeText}</TextCount>
                    </Row>
                    <TextCount>{displayNumComment} comments</TextCount>
                </FooterCount>

                <Separator />

                <FooterMenu>
                    <Button onPress={onPostLike}>
                        <Icon>
                            <AntDesign
                                name='like2'
                                size={20}
                                color={displayIsLiked ? '#507bae':'black'}
                            />
                        </Icon>
                        <Text style={{color: displayIsLiked ? '#507bae':'black'}}>Like</Text>
                    </Button>

                    <Button onPress={moveToCommentPage}>
                        <Icon>
                            <MaterialCommunityIcons
                                name='comment-outline'
                                size={20}
                                color='#424040'
                            />
                        </Icon>
                        <Text>Comment</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons
                                name='share-outline'
                                size={20}
                                color='#424040'
                            />
                        </Icon>
                        <Text>Share</Text>
                    </Button>

                </FooterMenu>
            </Footer>
            <BottomDivider />
        </Container>
    )

}

const styles = StyleSheet.create({
    modal: {
        baseText: {
          fontFamily: "Cochin"
        },
        titleText: {
          fontSize: 25,
          fontWeight: "700",
          marginHorizontal: 10,
          color: "#0f0f0f"  
        },
        text: {
          marginHorizontal:10,
          fontSize: 17,
          fontWeight: "400"
        },
        confirmText: {
            marginHorizontal:10,
            fontSize: 17,
            fontWeight: "400"
        },
        button: {
          alignItems: "center",
          backgroundColor: "transparent",
          padding: 10
        },
        image: {
            flex: 1,
            width: 50,
            height: 50,
            resizeMode: 'contain' 
        }
      }
});

export default SinglePost;