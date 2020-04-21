class View {
    constructor(username) {
        this._user = username;
    }

    createHeader() {
        const user = document.getElementById('username-in-header');
        const headerBtn = document.getElementById('header-button');
        if (this._user) {
            user.innerText = '@' + this._user;
            headerBtn.innerHTML = `
                <a href="#" class="new-post" title="New post">
                    <img class="header-icons" src="resources/img/add-post.png" title="Profile" alt="Add new post">
                </a>
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

        if (post.author === this._user) {
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

        actionArea.insertAdjacentHTML('afterBegin', `
                    <div class="like">
                        <button class="like-button">
                            <img class="add-like" src="resources/img/like.png" alt="Like" >
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
}

(() => {
    window.View = new View('username');
})();