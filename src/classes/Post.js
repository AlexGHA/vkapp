class Post
{
    constructor()
    {
        this.id = 0;
        this.src = null;
        this.text = "";
        this.favorite = false;
    }

    getId()
    {
        return this.id;
    }

    getSrc()
    {
        return this.src;
    }

    getText()
    {
        return this.text;
    }

    isFavorite()
    {
        return this.favorite;
    }

    setId(id)
    {
        this.id = id;
    }

    setSrc(src)
    {
        this.src = src;
    }

    setText(text)
    {
        this.text = text;
    }

    setFavorite(favorite)
    {
        this.favorite = favorite;
    }

    json()
    {
        return {
            id: this.id,
            src: this.src,
            text: this.text,
            favorite: this.favorite
        };
    }
}

export default Post;