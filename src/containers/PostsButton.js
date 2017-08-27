import {connect} from "react-redux";
import {POSTS} from "../constants";
import {showPosts} from "../actions";
import CheckButton from "../components/CheckButton";

const mapStateToProps  = function (state)
{
    return {
        checked: state.visiblePosts === POSTS
    };
};

const mapDispatchToProps = function (dispatch)
{
    return {
        onClick: () => {
            dispatch(showPosts());
        }
    };
};

const PostsButton = connect(mapStateToProps, mapDispatchToProps)(CheckButton);

export default PostsButton;