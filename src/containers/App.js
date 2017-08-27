import React, { Component } from "react";
import {connect} from "react-redux";
import FavoritePosts from "./FavoritePosts";
import Navigation from "../components/Navigation";
import Posts from "./Posts";
import ProgressBar from "../components/ProgressBar";
import {fetchPosts} from "../actions";

import {
    POSTS,
    POSTS_LOADED,
    POSTS_LOADING,
    POSTS_LOADING_ERROR
} from "../constants";

class App extends Component
{
    componentDidMount()
    {
        window.VK.init({apiId: 6149844});
        this.props.dispatch(fetchPosts());
    }

    render()
    {
        const {userLogin, postsStatus, visiblePosts, postsErrorMessage} = this.props;
        let content = null;

        if(visiblePosts === POSTS)
        {
            if(userLogin)
            {
                if(postsStatus === POSTS_LOADING)
                {
                    content = <ProgressBar />;
                }
                else if(postsStatus === POSTS_LOADING_ERROR)
                {
                    content = <p>{postsErrorMessage}</p>;
                }
                else if(postsStatus === POSTS_LOADED)
                {
                    content = <Posts />;
                }
            }
            else
            {
                content = <p>To see posts you need to login VK.</p>;
            }
        }
        else
        {
            content = <FavoritePosts />;
        }

        return (
            <div className="app">
                <Navigation />
                <div className="content">
                    {content}
                </div>
            </div>
        );
    }
}

const mapStateToProps  = function (state)
{
    return {
        userLogin: state.userLogin,
        postsStatus: state.postsStatus,
        visiblePosts: state.visiblePosts,
        postsErrorMessage: state.postsErrorMessage
    };
};

export default connect(mapStateToProps)(App);
