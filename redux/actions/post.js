import { createActions, createAction } from 'redux-actions';

export const getPosts = createActions({
    getPostsRequest: (payload) => payload,

    getPostsSuccess: (payload) => {console.log('action get post seccess called'); return payload},

    getPostsFailure: (err) => err,

    
});

export const getMorePosts = createActions({
    getMorePostsRequest: (payload) => payload,

    getMorePostsSuccess: (payload) => payload,

    getMorePostsFailure: (err) => err,
});

export const updatePost = createActions({
    updatePostRequest: (payload) => payload,

    updatePostSuccess: (payload) => payload,

    updatePostFailure: (err) => err,
});

export const deletePost = createActions({
    deletePostRequest: (payload) => payload,

    deletePostSuccess: (payload) => payload,

    deletePostFailure: (err) => err,
});

export const reportPost = createActions({
    reportPostRequest: (payload) => payload,

    reportPostSuccess: (payload) => payload,

    reportPostFailure: (err) => err,
});

export const likePost = createActions({
    likePostRequest: (payload) => payload,

    likePostSuccess: (payload) => payload,

    likePostFailure: (err) => err,
});