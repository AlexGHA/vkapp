import {
    FAVORITE_POSTS,
    POSTS,
    POSTS_LOADED,
    POSTS_LOADING,
    POSTS_LOADING_ERROR
} from "./constants";

import {
    SHOW_POSTS,
    SHOW_FAVORITE_POSTS,
    RECEIVE_POSTS,
    TOGGLE_POST_FAVORITE_STATE,
    SHOW_POSTS_ERROR,
    REQUEST_POSTS,
    ASK_USER_TO_LOGIN
} from "./actions";

import PostManager from "./classes/PostManager";

const initialState = {
    userLogin: false,
    visiblePosts: POSTS,
    posts: [],
    postsStatus: POSTS_LOADING,
    postsErrorMessage: "",
    favoritePosts: PostManager.getInstance().getFavoritePosts().json()
};

function app(state = initialState, action)
{
    switch(action.type)
    {
    case SHOW_POSTS:
        return Object.assign({}, state, {visiblePosts: POSTS});

    case SHOW_FAVORITE_POSTS:
        return Object.assign({}, state, {visiblePosts: FAVORITE_POSTS});

    case REQUEST_POSTS:
        return Object.assign({}, state, {postsStatus: POSTS_LOADING, userLogin: true});

    case RECEIVE_POSTS:
        return Object.assign({}, state, {postsStatus: POSTS_LOADED, posts: action.posts});

    case TOGGLE_POST_FAVORITE_STATE:
        return Object.assign({}, state, {posts: action.posts, favoritePosts: action.favoritePosts});

    case SHOW_POSTS_ERROR:
        return Object.assign({}, state, {postsStatus: POSTS_LOADING_ERROR, postsErrorMessage: action.postsErrorMessage});

    case ASK_USER_TO_LOGIN:
        return Object.assign({}, state, {userLogin: false});

    default:
        return state;
    }
}

export default app;