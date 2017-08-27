import {connect} from "react-redux";
import {togglePostFavoriteState} from "../actions";
import CheckButton from "../components/CheckButton";
import PostManager from "../classes/PostManager";

const mapDispatchToProps = function (dispatch, ownProps)
{
    return {
        onClick: () => {
            let postManager = PostManager.getInstance();

            postManager.togglePostFavoriteState(ownProps.postId);
            dispatch(togglePostFavoriteState(postManager.getPosts().json(), postManager.getFavoritePosts().json()));
        }
    };
};

const FavoriteButton = connect(null, mapDispatchToProps)(CheckButton);

export default FavoriteButton;