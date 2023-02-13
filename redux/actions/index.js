import { getPosts, getMorePosts, updatePost, deletePost, reportPost, likePost } from "./post";
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
    

    signUp,
    login,
    logout,
    checkVerifyCode,
    getVerifyCode,
    changeInfoAfterSignUp

    
}
