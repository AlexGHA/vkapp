import React from "react";
import FavoritePostsButton from "../containers/FavoritePostsButton";
import PostsButton from "../containers/PostsButton";

class Navigation extends React.Component
{
    render()
    {
        return (
            <div
                className="navigation"
            >
                <div>
                    <div><PostsButton>Posts</PostsButton></div>
                    <div><FavoritePostsButton>Favorite Posts</FavoritePostsButton></div>
                </div>
            </div>
        );
    }
}

export default Navigation;
