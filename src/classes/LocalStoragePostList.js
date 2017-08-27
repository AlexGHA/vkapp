import Post from "./Post";
import PostList from "./PostList";

class LocalStoragePostList extends PostList
{
    constructor()
    {
        super();

        let _this = this;
        let postsJSON = localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : [];

        postsJSON.forEach(function(postJSON)
        {
            let post = new Post();
            post.setId(postJSON.id);
            post.setSrc(postJSON.src);
            post.setText(postJSON.text);
            post.setFavorite(postJSON.favorite);

            _this.addPost(post);
        });


    }

    addPost(post)
    {
        post.setFavorite(true);
        super.addPost(post);
        this.updateLocalStorage();
    }

    removePost(post)
    {
        super.removePost(post);
        this.updateLocalStorage();
    }

    updateLocalStorage()
    {
        localStorage.setItem("posts", JSON.stringify(this.json()));
    }
}

export default LocalStoragePostList;