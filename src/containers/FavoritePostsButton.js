import {connect} from "react-redux";
import {FAVORITE_POSTS} from "../constants";
import {showFavoritePosts} from "../actions";
import CheckButton from "../components/CheckButton";

const mapStateToProps  = function (state)
{
    return {
        checked: state.visiblePosts === FAVORITE_POSTS
    };
};

const mapDispatchToProps = function (dispatch)
{
    return {
        onClick: () => {
            dispatch(showFavoritePosts());
        }
    };
};

const FavoritePostsButton = connect(mapStateToProps, mapDispatchToProps)(CheckButton);

export default FavoritePostsButton;