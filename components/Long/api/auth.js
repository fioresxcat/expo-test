import axios from 'axios';

const URL = 'http://192.168.88.215:5000'   //home
//const URL = 'http://192.168.108.8:5000'   //company

/*export const fetchSignUp = (payload) => axios.post(`${URL}/it4788/auth/signup`, {}, {
    params: {
        phonenumber: payload.phonenumber,
        password: payload.password,
        name: payload.name,
        birthDay: payload.birthDay
    }
})*/

export const fetchSignUp = async (payload) => {
    const url = `${URL}/it4788/auth/signup?phonenumber=${payload.phonenumber}&password=${payload.password}&name=${payload.name}&birthDay=${payload.birthDay}`
    console.log('url: ', url)
    const response = await fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type": 'application/json' 
            },
            body: JSON.stringify({})
        }
    )
    const data = await response.json()
    console.log(data.data)
    return data.data
}

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
        console.log(response.data);
        return response.data;
    })
};


export const fetchChangeInfoAfterSignUp = (payload) => axios({
    method: "post",
    url: `${URL}/it4788/auth/change_info_after_signup?token=${payload.token}&username=${payload.username}`,
    data: payload.formData,
    headers: { "Content-Type": "multipart/form-data" },
})

export const fetchLogout = (payload) => axios.post(`${URL}/it4788/auth/logout`, {}, {
    params: {
        token: payload.token
    }
})

