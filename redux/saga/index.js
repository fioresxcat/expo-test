import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from '../actions/index';
import * as postSaga from './post';
import * as authSaga from './auth';

function* mySaga() {
    // post saga
    yield takeLatest(actions.getPosts.getPostsRequest, postSaga.getPostsSaga); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.getMorePosts.getMorePostsRequest, postSaga.getMorePostsSaga); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.updatePost.updatePostRequest, postSaga.updatePost); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.deletePost.deletePostRequest, postSaga.deletePost); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.reportPost.reportPostRequest, postSaga.reportPost); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.likePost.likePostRequest, postSaga.likePost); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.addPost.addPostRequest, postSaga.addPost); // getPostsSaga is called when action getPOstRequest is dispatched

    // auth saga
    yield takeLatest(actions.signUp.signUpRequest, authSaga.apiSignUp)
    yield takeLatest(actions.getVerifyCode.getVerifyCodeRequest, authSaga.apiGetVerifyCode)
    yield takeLatest(actions.checkVerifyCode.checkVerifyCodeRequest, authSaga.apiCheckVerifyCode)
    yield takeLatest(actions.login.loginRequest, authSaga.apiLogin)
    yield takeLatest(actions.changeInfoAfterSignUp.changeInfoAfterSignUpRequest, authSaga.apiChangeInfoAfterSignUp)
    yield takeLatest(actions.logout.logoutRequest, authSaga.apiLogout)
}


export default mySaga;