let modal = document.querySelector('.modal');
let loadingMorePosts = document.querySelector('.load-more-button');

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function createAuthorisedPage(user) {
    initializeFilter();
    initializeNewPostsArea(user);
}

function createUnauthorizedPage() {
    initializeFilter();
    document.getElementById("add-post-container").innerHTML = "";
}

function initializeFilter(){
    const filterContent = document.getElementsByClassName("filter-content").item(0);
    filterContent.innerHTML = `
        <form id="filter-form">
            <label>
                <fieldset>
                    <legend>Filter by...</legend>
                    <div class="filter-container" id="filter">
                        <input type="text" class="filter-textarea" id="filter-author" placeholder=" username">
                        <input type="text" class="filter-textarea" id="filter-tags" placeholder=" #tag #tag">
                        <input type="date" class="filter-textarea" id="filter-createAt" placeholder=" dd-mm-yyyy">
                        <div>
                            <input type="submit" class="apply-button" value="Apply">
                        </div>
                    </div>
                </fieldset>
            </label>
        </form>
    `;
    const filter = document.getElementsByClassName("filter-container").item(0);
    filter.addEventListener('click', e => {
        filter.classList.add("display");
        e.stopPropagation();
    });
    const form = document.getElementById("filter-form");
    form.onsubmit = () => {return false;};
    form.addEventListener("submit", e => {
        const filterConf = {};
        const author = document.getElementById("filter-author").value;
        if (author){
            filterConf.author = author;
        }
        const tags = document.getElementById("filter-tags").value;
        if (tags){
            filterConf.tags = tags.split(" ");
        }
        const createAt = document.getElementById("filter-createAt").value;
        if (createAt){
            filterConf.createAt = new Date(createAt);
        }
        window.view.setFilter(filterConf);
        window.view.createPageView(0, 10);
    })

}

function initializeNewPostsArea(user) {
    const makeNewPost = document.getElementById("add-post-container");
    makeNewPost.innerHTML = `
        <div class="make-new-post-area">
            <form id="new-post-form">
                <div class="column-with-user-photo">
                    <img class="user-photo" src="${user.photoLink}" alt="User photo" >
                </div>
    
                <div class="column-2">
                    <div id="add-new-post">
                        <label>
                            <textarea id="new-post-textarea" placeholder="The text of your post..."
                                          maxlength="280" spellcheck="true"></textarea>
                            <textarea id="tags-area" placeholder="Your tags..."></textarea>
                        </label>
                    </div>
                    <div class="action-area">
                        <div class="add-photo-area">
                            <a href="#" class="upload-a-photo" title="Upload a Photo">
                                <img class="add-photo" src="resources/img/add-image.png" alt="Add photo" >
                            </a>
                        </div>
                        <div class="add-new-post">
                            <input type="submit" class="add-post-button" value="Add">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `;
    window.postEvent.setNewPostEventListener(makeNewPost);
    document.getElementById("new-post-form").onsubmit = () => {return false;}
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }

}

function makePage(firstPostNumber, postNumber) {
    window.view.createPageView(firstPostNumber, postNumber);
    window.view.createHeader();
    if (window.view.isUserSetUp()) {
        createAuthorisedPage(window.view.user);
        let logOutBtn = document.querySelector('.log-out-button');
        logOutBtn.addEventListener('click', window.modals.createLogOutModal);
    } else {
        createUnauthorizedPage();
        let signInBtn = document.querySelector('.sign-in-button');
        signInBtn.addEventListener('click', window.modals.createSingInModal);
    }
    window.postsCollection.restore();
}

function readInputFields() {
    const username = document.getElementsByClassName('username-input').item(0).value;
    const password = document.getElementsByClassName('password').item(0).value;
    const user = window.usersCollection.getUser(username, password);
    if (user) {
        window.view.changeUser(user);
        makePage(0, loadingPostsNumber);
    }
    toggleModal();
}

function loadMorePosts() {
    makePage(0, loadingPostsNumber + 10);
    loadingMorePosts += 10;
}

function addNewPost() {
    const postText = document.getElementById('new-post-textarea').value;
    const tagsStr = document.getElementById('tags-area').value;
    let tags = tagsStr.split(' ');
    let post = {};
    post.id = Date.now().toString(32) + (Math.random() * Math.pow(2, 20)).toString(32);
    post.description = postText;
    post.author = window.view.user.username;
    post.photoLink = window.view.user.photoLink;
    post.createAt = new Date();
    post.tags = tags;
    post.likes = [];
    if (window.postsCollection.add(post)) {
        makePage(0, loadingPostsNumber);
    }
}

loadingMorePosts.addEventListener('click', loadMorePosts);







