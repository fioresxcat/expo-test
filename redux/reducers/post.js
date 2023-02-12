import { getType, actions } from '../actions/index';
import { globalState } from '../constant';

export default function postsReducers(state = globalState.posts, current_action) {
  let newData
  let currentData

  switch (current_action.type) {
    case getType(actions.getPosts.getPostsRequest):
        return {
          ...state,
          isLoading: true,
        };

    case getType(actions.getPosts.getPostsSuccess):
        console.log('get posts success here')

        newData = current_action.payload.data
        return {
          ...state,
          isLoading: false,
          data: newData,
        };

    case getType(actions.getPosts.getPostsFailure):
        return {
          ...state,
          isLoading: false,
          error: true
        };
    

    case getType(actions.getMorePosts.getMorePostsRequest):
        return {
          ...state,
          isLoading: true,
        };
  
    case getType(actions.getMorePosts.getMorePostsSuccess):
        console.log('get more posts success here')
        newData = current_action.payload.data
        currentData = state.data

        if (newData) {
          for (let i = 0; i < newData.posts.length; i++) {
              currentData.posts.push(newData.posts[i])
          }
          currentData.lastID = newData.lastID
        }

        return {
          ...state,
          isLoading: false,
          data: currentData,
        };
  
    case getType(actions.getMorePosts.getMorePostsFailure):
        return {
          ...state,
          isLoading: false,
        };

    case getType(actions.updatePost.updatePostSuccess):
        return {
          ...state,
          data: {
            ...state.data,
            posts: state.data.posts.map((post) => {
                if (post.id === current_action.payload.id) {
                    return {
                        ...post,
                        ...current_action.payload
                    }
                } else {
                    return post
                }
            }
            ),
          }
        };
    
    case getType(actions.deletePost.deletePostSuccess):
        const deletedPostID = current_action.payload.postID
        return {
          ...state,
          data: {
            ...state.data,
            posts: state.data.posts.filter((post) => post.id !== deletedPostID),
          }
        };
    
    case getType(actions.likePost.likePostSuccess):
        const {like, is_liked, likedUserNames, id} = current_action.payload
        console.log('data in likepost reducer', like, is_liked, likedUserNames, id)
        return {
          ...state,
          data: {
            ...state.data,
            posts: state.data.posts.map((post) => {
                if (post.id==id) {
                    return {
                        ...post,
                        like,
                        is_liked,
                        likedUserNames
                    }
                } else {
                    return post
                }
            })
          }
        }

    default:
      return state;
  }
}

  