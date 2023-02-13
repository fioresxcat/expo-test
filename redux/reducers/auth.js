import { signUp, getType, getVerifyCode, checkVerifyCode, login, changeInfoAfterSignUp, logout } from "../actions/auth"
import { globalState } from "../constant"

const initState = globalState.auth

const authReducers = (state = initState, action) => {
    switch (action.type) {
        case getType(signUp.signUpRequest):
            return {
                ...state,
                isLoading: true
            }
        case getType(signUp.signUpSuccess):
            console.log('sigup success reducer called')
            console.log('payload in signup success reducer: ', action.payload)
            return {
                isLoading: false,
                authData: { ...action.payload }
            }
        case getType(signUp.signUpFailure):
            return {
                isLoading: false,
                authData: {
                    //code: action.payload.response.data.code
                }
            }

        case getType(getVerifyCode.getVerifyCodeRequest):
            return {
                authData: {
                    name: state.authData.name ? state.authData.name : state.authData.data.name,
                    birthDay: state.authData.birthDay ? state.authData.birthDay : state.authData.data.birthDay,
                    id: state.authData.id ? state.authData.id : state.authData.data.id,
                    phoneNumber: state.authData.phoneNumber ? state.authData.phoneNumber : state.authData.data.phoneNumber,
                    isVerified: state.authData.isVerified ? state.authData.isVerified : state.authData.data.isVerified,
                    verifyCode: state.authData.verifyCode ? state.authData.verifyCode : null,
                    ...action.payload
                },
                isLoading: true
            }
        case getType(getVerifyCode.getVerifyCodeSuccess):
            return {
                isLoading: false,
                authData: {
                    ...state.authData,
                    verifyCode: action.payload.data.verifyCode,
                }
            }
        case getType(getVerifyCode.getVerifyCodeFailure):
            return {
                isLoading: false,
                authData: {
                    ...state.authData,
                    code: action.payload.response.data.code,
                    details: action.payload.response.data.details,
                    verifyCode: state.authData.verifyCode,
                }
            }

        case getType(checkVerifyCode.checkVerifyCodeRequest):
            return {
                authData: {
                    name: state.authData.name ? state.authData.name : state.authData.data.name,
                    birthDay: state.authData.birthDay ? state.authData.birthDay : state.authData.data.birthDay,
                    id: state.authData.id ? state.authData.id : state.authData.data.id,
                    phoneNumber: state.authData.phoneNumber ? state.authData.phoneNumber : state.authData.data.phoneNumber,
                    isVerified: state.authData.isVerified ? state.authData.isVerified : state.authData.data.isVerified,
                    ...action.payload
                },
                isLoading: true
            }
        case getType(checkVerifyCode.checkVerifyCodeSuccess):
            return {
                isLoading: false,
                authData: {
                    ...state.authData,
                    ...action.payload,
                }
            }
        case getType(checkVerifyCode.checkVerifyCodeFailure):
            return {
                isLoading: false,
                authData: {
                    ...state.authData,
                    code: action.payload.response.data.code
                }
            }

        case getType(login.loginRequest):
            return {
                authData: {
                    ...action.payload
                },
                isLoading: true
            }
        case getType(login.loginSuccess):
            return {
                isLoading: false,
                authData: {
                    ...action.payload,
                    ...state.authData
                }
            }
        case getType(login.loginFailure):
            return {
                isLoading: false,
                authData: {
                    ...action.payload,
                    ...state.authData
                }
            }

        case getType(changeInfoAfterSignUp.changeInfoAfterSignUpRequest):
            return {
                isLoading: true,
                authData: {
                    ...state.authData,
                }
            }
        case getType(changeInfoAfterSignUp.changeInfoAfterSignUpSuccess):
            console.log('payload in changeInfoAfterSignUpSuccess reducer: ', action.payload)
            return {
                isLoading: false,
                authData: {
                    ...state.authData,
                    avatar_url: action.payload.avatar_url,
                }
            }
        case getType(changeInfoAfterSignUp.changeInfoAfterSignUpFailure):
            return {
                isLoading: false,
                authData: {
                    ...state.authData,
                    // ...action.payload
                }
            }

            case getType(logout.logoutRequest):
                return {
                    authData: {
                        ...state.authData
                    },
                    isLoading: true
                }
            case getType(logout.logoutSuccess):
                return {
                    isLoading: false,
                    authData: {
                        ...action.payload,
                        ...state.authData
                    }
                }
            case getType(logout.logoutFailure):
                return {
                    isLoading: false,
                    authData: {
                        ...action.payload,
                        ...state.authData
                    }
                }

        default:
            return state
    }
}

export default authReducers