import {connect} from "react-redux";
import {default as PostsComponent} from "../components/Posts";

const mapStateToProps  = function (state)
{
    return {
        posts: state.favoritePosts
    };
};

const Posts = connect(mapStateToProps)(PostsComponent);

export default Posts;