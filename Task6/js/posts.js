let posts = [];

function getPosts(current = 0, step = 10, filterParams = {author: null, createAt: null, tags: []}){
    let postsToReturn = [];
    let postCount = 0;
    let filterPosts = posts;
    if(!filterParams.tags){
        filterParams.tags = [];
    }
    if (filterParams.author && filterParams.author !== ''){
        filterPosts = filterPosts.filter(post => post.author === filterParams.author);
    }
    if (filterParams.createAt && filterParams.createAt instanceof Date){
        filterPosts = filterPosts.filter(post => filterParams.createAt.toDateString() === post.createAt.toDateString());
    }
    if (filterParams.tags.length !== 0){
        filterPosts = filterPosts.filter(post => {
            let tmp = [];
            tmp = filterParams.tags.filter(tag => post.tags.includes(tag));
            if(tmp.length !== 0) {
                return true;
            }
        });
    }

    filterPosts.sort((a, b) => {
        return b.createAt - a.createAt;
    });

    while(step !== postCount && filterPosts[current]){
        postsToReturn.push(filterPosts[current]);
        console.log(JSON.stringify(filterPosts[current]));
        current++;
        postCount++;
    }
    return postsToReturn;
}


function getPost(id){
    posts.forEach(post => {
        if (id === post.id) {
            console.log(JSON.stringify(post));
            return post;
        }
    });
}

function validatePost(post){
    return (post.id && (typeof post.id === "string") && post.id !== '' &&
        post.description && (typeof post.description === "string") && post.description !== '' &&
        post.description.length < 200 && post.author && (typeof post.id === "string") && post.author !== '' &&
        (post.createAt instanceof Date) && (typeof post.photoLink === "string"));
}

function addPost(newPost) {
    if(validatePost(newPost)){
        for(let post of posts){
            if(post.id === newPost.id) {
                return false;
            }
        }
        posts.push(newPost);
        return true;
    }
}

function editPost(id, changes) {
    let isEdit = false;
    if(!changes.tags){
        changes.tags = [];
    }
    for(let post of posts){
        if(post.id === id && validatePost(post)){
            if (changes.description && (typeof changes.description === "string") && changes.description.length < 200) {
                post.description = changes.description;
                isEdit = true;
            }
            if (changes.photoLink && (typeof changes.photoLink === "string")) {
                post.photoLink = changes.photoLink;
                isEdit = true;
            }
            if (changes.tags.length !== 0) {
                isEdit = true;
                post.tags.splice(0, post.tags.length);
                changes.tags.forEach(tag => {
                    if (typeof tag === "string") {
                        if (tag[0] !== '#')
                            post.tags.push('#' + tag);
                        else
                            post.tags.push(tag);
                    }
                });
            }
        }
    }
    return isEdit;
}

function removePost(id) {
    for( let i = 0; i < posts.length; i++){
        if (posts[i].id === id) {
            posts.splice(i, 1);
            return true;
        }
    }
    return false;
}

(function (){
    window._api = {};
    window._api.getPosts = getPosts;
    window._api.getPost = getPost;
    window._api.addPost = addPost;
    window._api.editPost = editPost;
    window._api.removePost = removePost;
})();
