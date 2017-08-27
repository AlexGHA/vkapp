import PostManager from "./classes/PostManager";

export const SHOW_POSTS = "SHOW_POSTS";
export const SHOW_FAVORITE_POSTS = "SHOW_FAVORITE_POSTS";
export const TOGGLE_POST_FAVORITE_STATE = "TOGGLE_POST_FAVORITE_STATE";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const SHOW_POSTS_ERROR = "SHOW_POSTS_ERROR";
export const ASK_USER_TO_LOGIN = "ASK_USER_TO_LOGIN";

function getData(vkData)
{
    let data = [];

    for(let i = 0; i < vkData.length; i++)
    {
        let postData = vkData[i];

        let post = {};
        post.id = postData.id;

        if(postData.attachments)
        {
            for (let j = 0; j < postData.attachments.length; j++) {
                if (postData.attachments[j].type === "photo") {
                    post.src = postData.attachments[j].photo.photo_1280;
                    break;
                }
            }
        }

        post.text = postData.text.replace(/\n/gm, "<br>");
        data.push(post);
    }

    return data;
}

export function showPosts()
{
    return {
        type: SHOW_POSTS
    };
}

export function showFavoritePosts()
{
    return {
        type: SHOW_FAVORITE_POSTS
    };
}

export function showPostsError(postsErrorMessage)
{
    return  {
        type: SHOW_POSTS_ERROR,
        postsErrorMessage: postsErrorMessage
    };
}

export function togglePostFavoriteState(posts, favoritePosts)
{
    return {
        type: TOGGLE_POST_FAVORITE_STATE,
        posts: posts,
        favoritePosts: favoritePosts
    };
}

export function requestPosts()
{
    return {
        type: REQUEST_POSTS
    };
}

export function receivePosts(posts)
{
    return {
        type: RECEIVE_POSTS,
        posts: posts
    };
}

export function askUserToLogin()
{
    return {
        type: ASK_USER_TO_LOGIN
    };
}

export function fetchPosts()
{
    return dispatch => {
        window.VK.Auth.getLoginStatus(function(response)
        {
            if(response.session)
            {
                dispatch(requestPosts());

                window.VK.Api.call("wall.get", {
                    "owner_id": "-46648358",
                    "access_token": "fc8c3623fc8c3623fc8c362301fcd1e0f7ffc8cfc8c3623a51f1df2af9c1f5943d1afd2",
                    "count": 50,
                    "filter": "owner",
                    "v": 5.68
                },
                function(response)
                {
                    if(response.error)
                    {
                        dispatch(showPostsError(response.error.error_msg));
                    }
                    else if(response.response)
                    {
                        let postManager = PostManager.getInstance();

                        postManager.setPosts(getData(response.response.items));
                        dispatch(receivePosts(postManager.getPosts().json()));
                    }
                });
            }
            else
            {
                dispatch(askUserToLogin());
            }
        });
    };
}