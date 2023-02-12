import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from '../actions';
import * as postApi from '../../api/post';

export function* getPostsSaga(current_action) {
    console.log('get post saga hereeeeeeeeeeeeeeeeeeeeeeeeeee')
    try {
      const data = yield call(postApi.getPosts, current_action.payload); // call api after action is dispatched by useDispatch() in componenta
      console.log('data here: ', data)
      yield put(actions.getPosts.getPostsSuccess(data)); // dispatch action to reducer
    } catch(err) {
      console.log('error happen, calling getpostfailure')
      yield put(actions.getPosts.getPostsFailure(err)); 
    }
}

export function* getMorePostsSaga(current_action) {
    console.log('get MORE post saga hereeeeeeeeeeeeeeeeeeeeeeeeeee')

    try {
      // console.log('action here: ', current_action)
      const data = yield call(postApi.getPosts, current_action.payload); // call api after action is dispatched by useDispatch() in componenta
      // console.log('data here: ', data)
      yield put(actions.getMorePosts.getMorePostsSuccess(data)); // dispatch action to reducer
    } catch (err) {
      console.error('error is: ', err);
      console.log('hereeeeeeeeeeeeeeeeeeeeeeeeeeeee get error')
      yield put(actions.getMorePosts.getMorePostsFailure(err)); 
    }
}

export function* updatePost(current_action) {
    console.log('update post saga hereeeeeeeeeeeeeeeeeeeeeeeeeee')
    const updateData = current_action.payload
    try {
      const data = yield call(postApi.updatePost, updateData); // call api after action is dispatched by useDispatch() in componenta
      yield put(actions.updatePost.updatePostSuccess(updateData)); // dispatch action to reducer
    } catch(err) {
      console.log('error happen, calling updatepostfailure')
      yield put(actions.updatePost.updatePostFailure(err)); 
    }
}

export function* deletePost(current_action) {
    console.log('delete post saga hereeeeeeeeeeeeeeeeeeeeeeeeeee')
    try {
      const data = yield call(postApi.deletePost, current_action.payload); // call api after action is dispatched by useDispatch() in componenta
      yield put(actions.deletePost.deletePostSuccess(current_action.payload)); // dispatch action to reducer
    } catch(err) {
      console.log('error happen, calling deletepostfailure')
      yield put(actions.deletePost.deletePostFailure(err)); 
    }

}

export function* reportPost(current_action) {
    console.log('report post saga hereeeeeeeeeeeeeeeeeeeeeeeeeee')
    try {
      const data = yield call(postApi.reportPost, current_action.payload); // call api after action is dispatched by useDispatch() in componenta
      yield put(actions.reportPost.reportPostSuccess(current_action.payload)); // dispatch action to reducer
    } catch(err) {
      console.log('error happen, calling reportpostfailure')
      yield put(actions.reportPost.reportPostFailure(err)); 
    }

}

export function* likePost(current_action) {
    console.log('like post saga hereeeeeeeeeeeeeeeeeeeeeeeeeee')
    try {
      const data = yield call(postApi.likePost, current_action.payload); // call api after action is dispatched by useDispatch() in componenta
      yield put(actions.likePost.likePostSuccess(data.data)); // dispatch action to reducer
    } catch(err) {
      console.log('error happen, calling likepostfailure')
      yield put(actions.likePost.likePostFailure(err)); 
    }
}



  