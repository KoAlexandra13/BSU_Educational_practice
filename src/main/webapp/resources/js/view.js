class View {
    constructor(user) {
        this.user = user;
    }

    changeUser(user) {
        this.user = user;
    }

    isUserSetUp() {
        return !(this.user === undefined);
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

    buildPostHTML(post) {
        const postCreateAt = post.createAt.getHours() + ':' + ('0' + post.createAt.getMinutes()).slice(-2) + ' '
            + post.createAt.getDate() + '.' + ('0' + (post.createAt.getMonth() + 1)).slice(-2)
            + '.' + post.createAt.getFullYear();
        let postTags = '';
        post.tags.forEach(tag => postTags += tag + ' ');

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
                        ${postTags}
                    </p>
                </div>
                <div class="action-area">
                    <div class="like">
                        <button class="like-button">
                            <img class="add-like" src="resources/img/like.png" alt="Like" >
                        </button>
                    </div>
                    <div class="action-container">
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
                </div>
            </div>
        </div>`;

        window.postEvent.setPostEventListener(postContainer, post.id);
        return postContainer;
    }

    pressLike(postId) {
        if (this.user) {
            const username = this.user.username;
            const post = window.postsCollection.get(postId);
            const likeIndex = post.likes.indexOf(username);
            if (likeIndex === -1) {
                post.likes.push(username);
                this.addDeleteLike(postId);
            } else {
                post.likes.splice(likeIndex, 1);
                this.addDeleteLike(postId);
            }
        }
    }

    addDeleteLike(postId) {
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

            if (changes.description) {
                let description = post.getElementsByClassName('post-text')[0];
                description.innerHTML = `<p>${changes.description}<br>${tags}</p>`;
            }

            const photoLink = post.getElementsByClassName('user-photo')[0];
            photoLink.src = window.postsCollection.get(postId).photoLink;
        }
    }

    setIcon() {
        const userIcon = document.getElementsByClassName('user-photo')[0];
        userIcon.src = this.user.photoLink;
    }

    createPageView(firstPost, postNumberToLoad) {
        window.view.createHeader();
        if (this.isUserSetUp()) {
            window.view.setIcon();
        }
        this.destroyPosts();
        this.createPosts(firstPost, postNumberToLoad);
    }

    createPosts(firstPost, postNumberToLoad){
        let postsToLoad = window.postsCollection.getPage(firstPost, postNumberToLoad);
        const containerEl = document.getElementById('posts-area');
        postsToLoad.forEach((post) => {
            containerEl.appendChild(window.view.buildPostHTML(post));
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
    window.view = new View();
})();