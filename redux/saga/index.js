import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from '../actions/index';
import * as postSaga from './post';

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, postSaga.getPostsSaga); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.getMorePosts.getMorePostsRequest, postSaga.getMorePostsSaga); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.updatePost.updatePostRequest, postSaga.updatePost); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.deletePost.deletePostRequest, postSaga.deletePost); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.reportPost.reportPostRequest, postSaga.reportPost); // getPostsSaga is called when action getPOstRequest is dispatched
    yield takeLatest(actions.likePost.likePostRequest, postSaga.likePost); // getPostsSaga is called when action getPOstRequest is dispatched
}


export default mySaga;