class View {
    constructor(user) {
        this._user = user;
    }

    changeUser(user){
        this._user = user;
    }

    createHeader() {
        const user = document.getElementById('username-in-header');
        const headerBtn = document.getElementById('header-button');
        if (this._user) {
            user.innerText = '@' + this._user.username;
            headerBtn.innerHTML = `
                <button class="log-out-button">
                    <img class="header-icons" src="resources/img/log-out.png" title="Log out" alt="Log out">
                </button>`;
        } else {
            headerBtn.innerHTML = `<button class="sign-in-button">Sign in</button>`;
        }
    }

    createPost(post) {
        const postCreateAt = post.createAt.getHours() + ':' + ('0' + post.createAt.getMinutes()).slice(-2) + ' '
            + post.createAt.getDate() + '.' + ('0' + (post.createAt.getMonth() + 1)).slice(-2)
            + '.' + post.createAt.getFullYear();
        let postTags = '';
        post.tags.forEach(tag => postTags += tag + ' ');

        let postContainer = document.createElement('article');
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
            </div>
        </div>`;

        let actionArea = document.createElement('div');
        actionArea.className = 'action-area';

        let likeImg = "resources/img/like.png";

        if (this._user) {
            likeImg = (post.likes.includes(this._user.username)) ? "resources/img/red_like.png"
                : "resources/img/like.png";

            if(post.author === this._user.username) {
                actionArea.innerHTML = `
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
                    </div>`;
            }
        }

        actionArea.insertAdjacentHTML('afterBegin', `
                    <div class="like">
                        <button class="like-button">
                            <img class="add-like" src=${likeImg} alt="Like" >
                        </button>
                    </div>`);

        postContainer.append(actionArea);
        return postContainer;
    }


    removePost(postId) {
        let postToDelete = document.getElementById(postId);
        if (window.postsCollection.remove(postId)) {
            postToDelete.remove();
        } else {
            alert(`No post with this id = ${postId}`);
        }

    }

    editPost(postId, changes) {
        if (window.postsCollection.edit(postId, changes)) {
            let postToEdit = document.getElementById(postId);
            let tags = '';
            window.postsCollection.get(postId).tags.forEach(tag => tags += tag + ' ');

            if (changes.description) {
                let description = postToEdit.getElementsByClassName('post-text')[0];
                description.innerHTML = `<p>${changes.description}<br>${tags}</p>`;
            }

            let photoLink = postToEdit.getElementsByClassName('user-photo')[0];
            photoLink.src = window.postsCollection.get(postId).photoLink;
        }
    }

    createAddPostArea() {
        if (this._user) {
            let postMaker = document.createElement('div');
            postMaker.className = 'make-new-post-area';
            postMaker.innerHTML = `
        <form>
            <div class="column-1">
                <img class="user-photo" src=${this._user.photoLink} alt="User photo">
            </div>

            <div class="column-2">
                <div class="post-text">
                    <label>
                        <textarea class="new-post-textarea" placeholder="The text of your post..."
                                  maxlength="280" spellcheck="true"></textarea>
                    </label>
                </div>
                <div class="action-area">
                    <div class="add-photo-area">
                        <a href="#" class="upload-a-photo" title="Upload Photo">
                            <img class="add-photo" src="resources/img/add-image.png" alt="Add photo">
                        </a>
                    </div>
                    <div class="add-new-post">
                        <button class="add-post-button"><strong>Add</strong></button>
                    </div>
                </div>
            </div>
        </form>
`;
            document.getElementsByClassName('posts-container')[0].prepend(postMaker);
        }
    }
}

(() => {
    window.view = new View();
})();