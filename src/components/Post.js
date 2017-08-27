import React from "react";
import FavoriteButton from "../containers/FavoriteButton";
import Image from "./Image";

class Post extends React.Component
{
    render()
    {
        const {data} = this.props;

        return (
            <div className="post">
                <FavoriteButton postId={data.id} checked={data.favorite} className="add-to-favorites-button" />
                <Image src={data.src} />
                <div className="content" dangerouslySetInnerHTML={{__html: data.text}} />
            </div>
        );
    }
}

export default Post;
