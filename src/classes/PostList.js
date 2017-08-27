class PostList
{
    constructor()
    {
        this.posts = [];
    }

    addPost(post)
    {
        for(let i = 0; i < this.posts.length; i++)
        {
            if(this.posts[i].getId() === post.getId())
            {
                return;
            }
        }

        this.posts.push(post);
    }

    removePost(postId)
    {
        for(let i = 0; i < this.posts.length; i++)
        {
            if(this.posts[i].getId() === postId)
            {
                this.posts.splice(i, 1);
                break;
            }
        }
    }

    getPostById(postId)
    {
        for(let i = 0; i < this.posts.length; i++)
        {
            if(this.posts[i].getId() === postId)
            {
                return this.posts[i];
            }
        }

        return null;
    }

    getPostAt(index)
    {
        return this.posts[index];
    }

    length()
    {
        return this.posts.length;
    }

    json()
    {
        let _json = [];

        this.posts.forEach(function(post)
        {
            _json.push(post.json());
        });

        return _json;
    }
}

export default PostList;
