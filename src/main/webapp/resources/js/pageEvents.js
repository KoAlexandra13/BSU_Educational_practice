let modal = document.querySelector('.modal');
let loadingMorePosts = document.querySelector('.load-more-button');

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function toggleAuthorisedPage(user) {
    const makeNewPost = document.querySelector('.make-new-post-area');
    makeNewPost.classList.toggle('active', true);
    document.querySelectorAll('article').forEach(article => {
        const id = article.id;
        if (user.postsId.includes(id)) {
            article.querySelector('.action-container').classList.toggle('active-action-container', true);
        }
        window.view.addDeleteLike(id);
    });
}

function toggleUnauthorizedPage() {
    const makeNewPost = document.querySelector('.make-new-post-area');
    makeNewPost.classList.toggle('active', false);
    document.querySelectorAll('article').forEach(article => {
        const id = article.id;
        article.querySelector('.action-container').classList.toggle('active-action-container', false);
        const like = article.getElementsByClassName('add-like').item(0);
        like.src = "resources/img/like.png";
    });

}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function makePage(firstPostNumber, postNumber) {
    window.view.createPageView(firstPostNumber, postNumber);
    if (window.view.isUserSetUp()) {
        toggleAuthorisedPage(window.view.user);
        let logOutBtn = document.querySelector('.log-out-button');
        logOutBtn.addEventListener('click', window.modals.createLogOutModal);
    } else {
        toggleUnauthorizedPage();
        let signInBtn = document.querySelector('.sign-in-button');
        signInBtn.addEventListener('click', window.modals.createSingInModal);
    }
}

function readInputFields() {
    let username = document.getElementsByClassName('username-input').item(0).value;
    let password = document.getElementsByClassName('password').item(0).value;
    let user = window.usersCollection.getUser(username, password);
    if (user) {
        window.view.changeUser(user);
        makePage(0, loadingPostsNumber, user);
    }
    toggleModal();
    let modalContent = document.getElementsByClassName('modal-content').item(0);
    modalContent.remove();
}

function loadMorePosts() {
    makePage(0, loadingPostsNumber + 10);
    loadingMorePosts += 10;
    if (window.view.isUserSetUp()) {
        toggleAuthorisedPage(window.view.user);
    } else {
        toggleUnauthorizedPage();
    }
}

loadingMorePosts.addEventListener('click', loadMorePosts);







