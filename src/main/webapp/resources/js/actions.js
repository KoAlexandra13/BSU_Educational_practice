let likes = document.querySelectorAll('.add-like');
let modal = document.querySelector('.modal');
let signInBtn = document.querySelector('.sign-in-button');
let closeBtn = document.querySelector('.close');
let modalSignInBtn = document.querySelector('.sign-in-modal-button');
let filter = document.getElementById('filter');
let applyFilterBtn = document.querySelector('.apply-button');

function displayFilter() {
    filter.style.display = "block";
}

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function readInputFields() {
    let username = document.getElementsByClassName('username-input')[0].value;
    let password = document.getElementsByClassName('password')[0].value;
    let user = window.usersCollection.setUser(username, password);
    if (user) {
        window.view.changeUser(user);
        window.view.createHeader();
        window.view.createAddPostArea();
        let postsToLoad = window.postsCollection.getPage(0, 10);
        postsToLoad.forEach(post => document.getElementById('posts-area').append(window.view.createPost(post)));
    }
    toggleModal();
}

for (let like of likes) {
    like.addEventListener('click', () => {
        if (like.src.includes("/resources/img/like.png")) {
            like.src = "resources/img/red_like.png"
        } else {
            like.src = "resources/img/like.png"
        }
    });
}

function applyFilter() {
    let author = document.getElementById('author').value;
    let tags = document.getElementById('tags').value.split(" ");
    let createAt = new Date(document.getElementById('createAt').value);
    let filterConfig = Object.create(Object.prototype);
    if (author) {
        filterConfig.author = author;
    }
    if (createAt) {
        filterConfig.createAt = createAt;
    }
    if ((!tags.includes(""))) {
        filterConfig.tags = tags;
    }
    let postsToLoad = window.postsCollection.getPage(0, 10, filterConfig);
    postsToLoad.forEach(post =>
        document.getElementById('posts-area').append(window.view.createPost(post)));
}

signInBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
modalSignInBtn.addEventListener('click', readInputFields);
filter.addEventListener('click', displayFilter);
applyFilterBtn.addEventListener('click', applyFilter);




