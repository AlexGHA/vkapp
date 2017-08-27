import React from "react";
import Post from "./Post";

class Posts extends React.Component
{
    render()
    {
        let {posts} = this.props;
        let content = <p>There are no posts here.</p>;

        if(posts.length)
        {
            content = posts.map((item) => (
                <Post key={item.id} data={item} />
            ));
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Posts;
