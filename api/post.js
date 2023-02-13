import axios from "axios"
import { mytoken, host } from "../constant"

export const getPosts = async (payload) => {
    const numPostToGet = 4
    const numPostFromLastID = 0

    let url = `${host}/post/get_list_posts?token=${mytoken}&lastID=${payload.lastID}&index=${numPostFromLastID}&count=${numPostToGet}`
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        const data = await response.json()

        console.log('response from get post api: ', data)
        return data
    } catch (err) {
        console.log(err)
        // return err
        throw new Error('get post failed')
    }
}


export const updatePost = async (payload) => {
    console.log('updataPost api called with payload: ', payload)
    const id = payload.id
    const status = payload.status
    const described = payload.described
    const listDelID = JSON.stringify(payload.listDelID)
    const listNewImages = payload.listNewImages
    
    const url = `${host}/post/edit_post?token=${mytoken}&id=${id}&status=${status}&described=${described}&image_del=${listDelID}`
    const formData = new FormData();
    for (let i = 0; i < listNewImages.length; i++) {
        formData.append('image', {
            uri: listNewImages[i].uri,
            type: 'image/jpeg',
            name: `image${i}.jpg`
        });
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: listNewImages.length > 0 ? formData : JSON.stringify({})
        });
        const data = await response.json()
        console.log('response from update post api: ', data)

        if (data.code != "1000") {
            throw new Error('update post failed')
        }
        return data
    } catch (err) {
        console.log('error in updatePost api: ', err)
        throw new Error('update post failed')
    }
}


export const deletePost = async (payload) => {
    const postID = payload.postID
    const url = `${host}/post/delete_post?token=${mytoken}&id=${postID}`
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json()
        console.log('response from delete post api: ', data)

        if (data.code != "1000") {
            throw new Error('delete post failed')
        }
        return data
    } catch (err) {
        console.log('error in deletePost api: ', err)
        throw new Error('delete post failed')
    }
}

export const reportPost = async (payload) => {
    const {postID, subject, detail} = payload

    const url = `${host}/post/report_post?token=${mytoken}&id=${postID}&subject=${subject}&details=${detail}`
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json()
        console.log('response from report post api: ', data)

        if (data.code != "1000") {
            throw new Error('report post failed')
        }
        return data
    } catch (err) {
        console.log('error in reportPost api: ', err)
        throw new Error('report post failed')
    }
}

export const likePost = async (payload) => {
    const {postID} = payload
    console.log('postID in like post api: ', postID)

    const url = `${host}/like/like?token=${mytoken}&id=${postID}`
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        const data = await response.json()
        console.log('response from like post api: ', data)

        if (data.code != "1000") {
            throw new Error('like post failed')
        }
        return data
    } catch (err) {
        console.log('error in likePost api: ', err)
        throw new Error('like post failed')
    }
}

