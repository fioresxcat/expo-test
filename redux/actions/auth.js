import { createActions } from 'redux-actions'

export const getType = (reduxAction) => {
    return reduxAction().type
}

export const signUp = createActions({
    signUpRequest: (payload) => payload,
    signUpSuccess: (payload) => payload,
    signUpFailure: (err) => err
})

export const getVerifyCode = createActions({
    getVerifyCodeRequest: (payload) => payload,
    getVerifyCodeSuccess: (payload) => payload,
    getVerifyCodeFailure: (err) => err
})

export const checkVerifyCode = createActions({
    checkVerifyCodeRequest: (payload) => payload,
    checkVerifyCodeSuccess: (payload) => payload,
    checkVerifyCodeFailure: (err) => err
})

export const login = createActions({
    loginRequest: (payload) => payload,
    loginSuccess: (payload) => payload,
    loginFailure: (err) => err
})

export const changeInfoAfterSignUp = createActions({
    changeInfoAfterSignUpRequest: (payload) => payload,
    changeInfoAfterSignUpSuccess: (payload) => payload,
    changeInfoAfterSignUpFailure: (err) => err
})

export const logout = createActions({
    logoutRequest: (payload) => payload,
    logoutSuccess: (payload) => payload,
    logoutFailure: (err) => err
})