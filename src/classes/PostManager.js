import LocalStoragePostList from "./LocalStoragePostList";
import Post from "./Post";
import PostList from "./PostList";

class PostManager
{
    static instance = null;

    constructor()
    {
        this.posts = new PostList();
        this.favoritePosts = new LocalStoragePostList();
    }

    static getInstance()
    {
        if(!PostManager.instance)
        {
            PostManager.instance = new PostManager();
        }

        return PostManager.instance;
    }

    getPosts()
    {
        return this.posts;
    }

    setPosts(data)
    {
        for(let i = 0; i < data.length; i++)
        {
            let postData = data[i];
            let post = new Post();

            post.setId(postData.id);
            post.setSrc(postData.src);
            post.setText(postData.text);

            this.posts.addPost(post);
        }

        for(let i = 0; i < this.posts.length(); i++)
        {
            for(let j = 0; j < this.favoritePosts.length(); j++)
            {
                if(this.posts.getPostAt(i).getId() === this.favoritePosts.getPostAt(j).getId())
                {
                    this.posts.getPostAt(i).setFavorite(true);
                    break;
                }
            }
        }
    }

    getFavoritePosts()
    {
        return this.favoritePosts;
    }

    favoritePost(postId)
    {
        let post = this.posts.getPostById(postId);

        if(post)
        {
            post.setFavorite(true);
            this.favoritePosts.addPost(post);
        }
    }

    unfavoritePost(postId)
    {
        let post = this.posts.getPostById(postId);

        if(post)
        {
            post.setFavorite(false);
        }

        post = this.favoritePosts.getPostById(postId);

        if(post)
        {
            this.favoritePosts.removePost(postId);
        }
    }

    togglePostFavoriteState(postId)
    {
        let post = this.posts.getPostById(postId);

        if(!post)
        {
            post = this.favoritePosts.getPostById(postId);
        }

        if(post)
        {
            if(post.isFavorite())
            {
                this.unfavoritePost(postId);
            }
            else
            {
                this.favoritePost(postId);
            }
        }
    }
}

export default PostManager;