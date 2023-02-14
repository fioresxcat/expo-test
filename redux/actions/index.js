import { getPosts, getMorePosts, updatePost, deletePost, reportPost, likePost, addPost } from "./post";
import {signUp, login, logout, checkVerifyCode, getVerifyCode, changeInfoAfterSignUp} from "./auth";

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const actions = {
    getPosts,
    getMorePosts,
    updatePost,
    deletePost,
    reportPost,
    likePost,
    addPost,

    signUp,
    login,
    logout,
    checkVerifyCode,
    getVerifyCode,
    changeInfoAfterSignUp

    
}
