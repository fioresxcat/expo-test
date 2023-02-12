import { getPosts, getMorePosts, updatePost, deletePost, reportPost, likePost } from "./post";

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const actions = {
    getPosts,
    getMorePosts,
    updatePost,
    deletePost,
    reportPost,
    likePost
}
