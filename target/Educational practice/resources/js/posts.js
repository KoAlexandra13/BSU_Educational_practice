class PostsCollection{
    constructor(initialPosts) {
        this._posts = (initialPosts || []);
    }

    _filter(filterParams){
        let filterPosts = this._posts;
        let filterParamsProps = Object.keys(filterParams);
        filterParamsProps.forEach(prop =>
        {if (filterParams[prop] instanceof Array){
            filterPosts = filterPosts.filter(post => {
                let tmp = [];
                tmp = filterParams[prop].filter(tag => post[prop].includes(tag));
                if (tmp.length !== 0) {
                    return true;
                }
            });
        }else if(filterParams[prop] instanceof Date){
            filterPosts = filterPosts.filter(post => post[prop].toDateString() === filterParams[prop].toDateString());
        }else {
            filterPosts = filterPosts.filter(post => post[prop] === filterParams[prop]);
        }
        });
        return filterPosts;
    };

    _changePost(post, changes){
        let changesProps = Object.keys(changes);
        changesProps.forEach(prop => {
            if(prop !== "author" && prop !== "id" && prop!== "createAt") {
                if (!(changes[prop] instanceof Array)) {
                    post[prop] = changes[prop];
                } else {
                    post[prop].splice(0, post.tags.length);
                    changes[prop].forEach(tag => {
                        if (typeof tag === "string") {
                            if (tag[0] !== '#')
                                post[prop].push('#' + tag);
                            else
                                post[prop].push(tag);
                        }
                    });
                }
            }
        });
    }

    getPage(current = 0, step = 10, filterParams = {}) {
        let postsToReturn = [];
        let postCount = 0;
        let filterPosts = this._filter(filterParams);

        filterPosts.sort((a, b) => {
            return b.createAt - a.createAt;
        });

        while (step !== postCount && filterPosts[current]) {
            postsToReturn.push(filterPosts[current]);
            current++;
            postCount++;
        }
        console.log(postsToReturn);
        return postsToReturn;
    }

    get(id) {
        this._posts.forEach(post => {
            if (id === post.id) {
                return post;
            }
        });
    }

    add(newPost) {
        if (PostsCollection.validate(newPost)) {
            for (let post of this._posts) {
                if (post.id === newPost.id) {
                    return false;
                }
            }
            this._posts.push(newPost);
            return true;
        }
    }

    edit(id, changes) {
        let isEdit = false;
        let i = this._posts.findIndex(post => {
            if (post.id === id) {
                let changedPost = {};
                for (let key in post) {
                    changedPost[key] = post[key];
                }
                this._changePost(changedPost, changes);
                if (PostsCollection.validate(changedPost)){
                    this._posts.splice(i, 1, changedPost);
                    isEdit = true;
                }
            }
        });
        return isEdit;
    }

    remove(id) {
        let i = this._posts.findIndex(post => {
            if(post.id === id){
                this._posts.splice(i, 1);
                return true;
            }
        });
        return false;
    }

    static validate(post) {
        return (post.id && (typeof post.id === "string") && post.id !== '' &&
            post.description && (typeof post.description === "string") && post.description !== '' &&
            post.description.length < 200 && post.author && (typeof post.id === "string") && post.author !== '' &&
            (post.createAt instanceof Date) && (typeof post.photoLink === "string") && (post.tags instanceof Array) &&
            (post.likes instanceof Array));
    }

    clear() {
        this._posts = [];
    }

    addAll(postsArray) {
        let notAddedPosts = [];
        postsArray.forEach(post => {
            if (!(this.add(post))) {
                notAddedPosts.push(post);
            }
        });
        return notAddedPosts;
    }

}
(() => {
    window.postsCollection = new PostsCollection();
})();
