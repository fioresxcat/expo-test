import axios from 'axios';

const URL = 'http://192.168.0.108:5000'   //home
//const URL = 'http://192.168.108.8:5000'   //company


export const fetchSignUp = (payload) => axios.post(`${URL}/it4788/auth/signup`, {}, {
    params: {
        phonenumber: payload.phonenumber,
        password: payload.password,
        name: payload.name,
        birthDay: payload.birthDay
    }
})


export const fetchGetVerifyCode = (payload) => axios.post(`${URL}/it4788/auth/get_verify_code`, {}, {
    params: {
        phonenumber: payload.phonenumber,
    }
})

export const fetchCheckVerifyCode = (payload) => axios.post(`${URL}/it4788/auth/check_verify_code`, {}, {
    params: {
        phonenumber: payload.phonenumber,
        code_verify: payload.code_verify
    }
})


export const fetchLogin = (payload) => {
    console.log('fetch login api called')
    return axios.post(`${URL}/it4788/auth/login`, {}, {
        params: {
            phonenumber: payload.phonenumber,
            password: payload.password
        }
    })
    .then(response => {
        console.log('response from login api: ', response);
        return response.data;
    })
};


// export const fetchChangeInfoAfterSignUp = (payload) => axios({
//     method: "post",
//     url: `${URL}/it4788/auth/change_info_after_signup?token=${payload.token}&username=${payload.username}`,
//     data: payload.formData,
//     headers: { "Content-Type": "multipart/form-data" },
// })
export const fetchChangeInfoAfterSignUp = async (payload) => {
    let {token, username, uri} = payload;
    console.log('payload in up avatar api: ', payload)
    const formData = new FormData()
    formData.append('avatar', {
        uri: uri,
        type: 'image/jpeg',
        name: 'image0.jpg'
    });
    const url = `${URL}/it4788/auth/change_info_after_signup?token=${token}&username=${username}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const data = await response.json()
        console.log('response from up avatar api: ', data)

        if (data.data.code != "1000") {
            throw new Error('update post failed')
        }

        return data.data
    } catch (err) {
        console.log('error in up avatar api: ', err)
        throw new Error('up avatar failed')
    }
}

export const fetchLogout = (payload) => axios.post(`${URL}/it4788/auth/logout`, {}, {
    params: {
        token: payload.token
    }
})

