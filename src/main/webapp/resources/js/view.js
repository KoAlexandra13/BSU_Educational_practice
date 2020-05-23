class View {
    constructor(user) {
        this.user = user;
        this.filter = {};
    }

    changeUser(user) {
        this.user = user;
    }

    setFilter(newFilter){
        this.filter = newFilter;
    }

    resetFilter(){
        window.view.setFilter({});
    }

    isUserSetUp() {
        return !!this.user;
    }

    createHeader() {
        const user = document.getElementById('username-in-header');
        const headerBtn = document.getElementById('header-button');
        if (this.user) {
            user.innerText = '@' + this.user.username;
            headerBtn.innerHTML = `
                <button class="log-out-button">
                    <img class="header-icons" src="resources/img/log-out.png" title="Log out" alt="Log out">
                </button>`;
        } else {
            user.innerText = '';
            headerBtn.innerHTML = `<button class="sign-in-button">Sign in</button>`;
        }
    }

    _formatDate(date){
        return date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2) + ' '
            + date.getDate() + '.' + ('0' + (date.getMonth() + 1)).slice(-2)
            + '.' + date.getFullYear();
    }

    buildPostHTML(post, username) {
        const postCreateAt = this._formatDate(post.createAt);

        const postActionContainer = this.getPostActionContainer(post, username);
        const likeArea = this.getLikeArea(post, username);

        const postContainer = document.createElement('article');
        postContainer.id = post.id;
        postContainer.innerHTML = `
        <div class="column-with-user-photo">
                <img class="user-photo" src="${post.photoLink}" alt="User photo">
            </div>
            <div class="column-2">
                <div class="post-info">
                    <div class="username-container">
                        <h4 class="username">${'@' + post.author}</h4>
                    </div>
                    <div class="date-and-time">
                        <p>${postCreateAt}</p>
                    </div>
                </div>
                <div class="post-text">
                    <p>${post.description}<br>
                        ${post.tags.join(' ')}
                    </p>
                </div>
                <div class="action-area">
                    ${likeArea}
                    ${postActionContainer}
                </div>
            </div>
        </div>`;

        window.postEvent.setPostEventListener(postContainer, post.id);
        return postContainer;
    }

    getPostActionContainer(post, username){
        if (post.author === username){
            return `
                    <div class="action-container active-action-container">
                        <div class="change-post">
                            <button class="change-post-button">
                                <img class="change-icon" src="resources/img/add-post.png" alt="Change post" >
                            </button>
                        </div>
                        <div class="delete-post">
                            <button class="delete-post-button">
                                <img class="delete-icon" src="resources/img/delete.png" alt="Delete post" >
                            </button>
                        </div>
                    </div>
            `;
        } else {
            return "";
        }
    }

    getLikeArea(post, username){
        if (post.likes.includes(username)){
            return `
                <div class="like">
                    <button class="like-button">
                        <img class="add-like" src="resources/img/red_like.png" alt="Like" >
                    </button>
                </div>
            `;
        } else {
            return `
                <div class="like">
                    <button class="like-button">
                        <img class="add-like" src="resources/img/like.png" alt="Like" >
                    </button>
                </div>
            `
        }
    }

    pressLike(postId) {
        if (this.user) {
            const username = this.user.username;
            const post = window.postsCollection.get(postId);
            const likeIndex = post.likes.indexOf(username);
            if (likeIndex === -1) {
                post.likes.push(username);
                this.updateLike(postId);
            } else {
                post.likes.splice(likeIndex, 1);
                this.updateLike(postId);
            }
            window.postsCollection.save();
        }
    }

    updateLike(postId) {
        const username = this.user.username;
        const post = window.postsCollection.get(postId);
        const article = document.getElementById(post.id);
        let like = article.getElementsByClassName('add-like').item(0);
        if (post.likes.indexOf(username) !== -1) {
            like.src = "resources/img/red_like.png";
        } else {
            like.src = "resources/img/like.png";
        }
    }


    removePost(postId) {
        const postToDelete = document.getElementById(postId);
        if (window.postsCollection.remove(postId)) {
            postToDelete.remove();
        }
    }

    editPost(postId, changes) {
        if (window.postsCollection.edit(postId, changes)) {
            const post = window.postsCollection.get(postId);
            const tags = post.tags.join(' ');
            const postDOM = document.getElementById(postId);

            if (changes.description) {
                const description = postDOM.getElementsByClassName('post-text').item(0);
                description.innerHTML = `<p>${changes.description}<br>${tags}</p>`;
            }

            const photoLink = postDOM.getElementsByClassName('user-photo')[0];
            photoLink.src = window.postsCollection.get(postId).photoLink;
        }
    }

    createPageView(firstPost, postNumberToLoad) {
        this.destroyPosts();
        this.createPosts(firstPost, postNumberToLoad);
    }

    createPosts(firstPost, postNumberToLoad){
        let postsToLoad = window.postsCollection.getPage(firstPost, postNumberToLoad, this.filter);
        const containerEl = document.getElementById('posts-area');
        const username = this.user ? this.user.username : null;
        postsToLoad.forEach((post) => {
            containerEl.appendChild(window.view.buildPostHTML(post, username));
        });
    }

    destroyPosts(){
        const postArea = document.getElementById('posts-area');
        while (postArea.firstChild) {
            postArea.removeChild(postArea.firstChild);
        }
    }

}

(() => {
    window.view = new View(window.usersCollection.getUser("username", "1111"));
})();