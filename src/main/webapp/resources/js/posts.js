const CREATION_COMPARATOR = (a, b) => b.createAt - a.createAt;
const IMMUTABLE_KEYS = ['id', 'author', 'createAt'];

class PostsCollection {
    constructor(initialPosts) {
        this._posts = (initialPosts || []);
    }

    _filter(filterParams) {
        let filterPosts = this._posts;

        Object.entries(filterParams).forEach(([prop, filterValue]) => {
            if (filterValue instanceof Array) {
                filterPosts = filterPosts.filter(post => post[prop].some((tag) => filterValue.includes(tag)));
            } else if (filterValue instanceof Date) {
                filterPosts = filterPosts.filter(post => post[prop].toDateString() === filterValue.toDateString());
            } else {
                filterPosts = filterPosts.filter(post => post[prop] === filterValue);
            }
        });

        return filterPosts;
    };

    _changePost(post, changes) {
        Object.keys(changes)
            .filter((prop) => !IMMUTABLE_KEYS.includes(prop))
            .forEach((prop) => post[prop] = changes[prop]);
    }

    getPage(current = 0, step = 10, filterParams = {}) {
        let filterPosts = this._filter(filterParams);
        filterPosts.sort(CREATION_COMPARATOR);

        return filterPosts.slice(current, step + current);
    }

    get(id) {
        return this._posts.find(post => post.id === id);
    }

    add(newPost) {
        if (PostsCollection.validate(newPost)) {

            if (this._posts.find(post => post.id === newPost.id)) {
                return false;
            }
            this._posts.push(newPost);
            this.save();
            return true;
        }
    }

    edit(id, changes) {
        let postIndex = this._posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            let changedPost = Object.assign({}, this._posts[postIndex]);
            this._changePost(changedPost, changes);
            if (PostsCollection.validate(changedPost)) {
                this._posts.splice(postIndex, 1, changedPost);
                this.save();
                return true;
            }
        }
        return false;
    }

    remove(id) {
        let i = this._posts.findIndex(post => post.id === id);
        if (i !== -1) {
            this._posts.splice(i, 1);
            this.save();
            return true;
        }
        return false;
    }

    static validate(post) {
        return post.id && (typeof post.id === "string") && post.id !== '' &&
            post.description && (typeof post.description === "string") && post.description !== '' &&
            post.description.length < 200 && post.author && (typeof post.id === "string") && post.author !== '' &&
            (post.createAt instanceof Date) && (typeof post.photoLink === "string") && (post.tags instanceof Array) &&
            (post.likes instanceof Array);
    }

    clear() {
        this._posts = [];
        this.save();
    }

    addAll(postsArray) {
        return postsArray.filter((post) => !this.add(post));
    }

    save(){
        localStorage.removeItem("posts");
        localStorage.setItem("posts", JSON.stringify(this._posts));
    }

    restore(){
        const postsStr = localStorage.getItem("posts");
        const posts = JSON.parse(postsStr);
        posts.forEach(post => {
            post.createAt = new Date(post.createAt);
        });
        this._posts = posts;
    }
}

(() => {
    window.postsCollection = new PostsCollection();
})();
