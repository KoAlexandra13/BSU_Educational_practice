let modal = document.querySelector('.modal');
let signInBtn = document.querySelector('.sign-in-button');
let filter = document.getElementById('filter');
let main = document.querySelector('main');

function displayFilter() {
    (filter.style.display === 'none') ? filter.style.display = 'block' : filter.style.display = 'none';
}

function createSignInArea(){
    window.modals.buildSingInModal();
}

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function toggleAuthorisedPage(user) {
    const makeNewPost = document.querySelector('.make-new-post-area');
    makeNewPost.classList.toggle('active');
    document.querySelectorAll('article').forEach(article => {
        const id = article.id;
        if (user.postsId.includes(id)) {
            article.querySelector('.action-container').classList.toggle('active-action-container');
        }
        window.view.addDeleteLike(id);
    });

}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function readInputFields() {
    let username = document.getElementsByClassName('username-input').item(0).value;
    let password = document.getElementsByClassName('password').item(0).value;
    let user = window.usersCollection.setUser(username, password);
    if (user) {
        window.view.changeUser(user);
        window.view.createHeader();
        window.view.setIcon();
        toggleAuthorisedPage(user);
    }
    toggleModal();
    let modalContent = document.getElementsByClassName('modal-content').item(0);
    modalContent.remove();
}

function postActions() {
    let articles = document.querySelectorAll('article');
    articles.forEach(article => {
            const id = article.id;
            window.postEvent.setPostEventListener(article, id);
    });
}

signInBtn.addEventListener('click', createSignInArea);
filter.addEventListener('click', displayFilter);
main.addEventListener('click', postActions);





