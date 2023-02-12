import { mytoken, host } from "../constant"

export const getCommentsApi = async (postID, lastID) => {
    const numCommentToGet = 10
    let data
    try {
        const token = mytoken
        let url = `${host}/comment/get_comment?token=${token}&id=${postID}&lastID=${lastID}&index=0&count=${numCommentToGet}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        data = await response.json();

        console.log('return data from getComments: ', data)
        return data.data
    } catch (error) {   
        console.error('error from getComments: ', error);
        return error
    }
}

export const postCommentsApi = async (postID, comment) => {
    const numCommentToGet = 10
    let data
    try {
        const token = mytoken
        let url = `${host}/comment/set_comment?token=${token}&id=${postID}&index=0&count=${numCommentToGet}&comment=${comment}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        data = await response.json();

        console.log('return data from setComments: ', data)
        return data.data
    } catch (error) {   
        console.error('error from setComments: ', error);
        return error
    }
}