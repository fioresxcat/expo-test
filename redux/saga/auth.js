import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/auth'
import * as api from '../../api/auth'

export function* apiSignUp(action) {
    try {
        console.log('api signup saga called')
        const signUpData = yield call(api.fetchSignUp, action.payload)
        console.log('signUpData: ', signUpData)
        yield put(actions.signUp.signUpSuccess(signUpData.data))
    } catch(err) {
        yield put(actions.signUp.signUpFailure(err))
    }
}

export function* apiGetVerifyCode(action) {
    try {
        const getVerifyCodeData = yield call(api.fetchGetVerifyCode, action.payload)
        yield put(actions.getVerifyCode.getVerifyCodeSuccess(getVerifyCodeData.data))
    } catch(err) {
        yield put(actions.getVerifyCode.getVerifyCodeFailure(err))
    }
}

export function* apiCheckVerifyCode(action) {
    try {
        const checkVerifyCodeData = yield call(api.fetchCheckVerifyCode, action.payload)
        yield put(actions.checkVerifyCode.checkVerifyCodeSuccess(checkVerifyCodeData.data))
    } catch(err) {
        yield put(actions.checkVerifyCode.checkVerifyCodeFailure(err))
    }
}

export function* apiLogin(action) {
    try {
        console.log('api login saga called')
        const loginData = yield call(api.fetchLogin, action.payload)
        yield put(actions.login.loginSuccess(loginData.data))
    } catch(err) {
        yield put(actions.login.loginFailure(err))
    }
}

export function* apiChangeInfoAfterSignUp(action) {
    try {
        const changeInfoAfterSignUpData = yield call(api.fetchChangeInfoAfterSignUp, action.payload)
        yield put(actions.changeInfoAfterSignUp.changeInfoAfterSignUpSuccess(changeInfoAfterSignUpData.data))
    } catch(err) {
        yield put(actions.changeInfoAfterSignUp.changeInfoAfterSignUpFailure(err))
    }
}

export function* apiLogout(action) {
    try {
        const logoutData = yield call(api.fetchLogout, action.payload)
        yield put(actions.logout.logoutSuccess(logoutData.data))
    } catch(err) {
        yield put(actions.logout.logoutFailure(err))
    }
}