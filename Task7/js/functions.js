function displayFilter() {
    document.getElementById("filter").style.display = "block";
}
function addFilterParams(){
    let author = document.getElementById('author').value;
    let tag = document.getElementById('tag').value;
    //let date = new Date(document.getElementById('date').value);
    document.getElementById("filter").style.display = "none";
    //let postsToLoad = getPosts(0, posts.length, {author: author, createAt: date, tags: tag});
    //createPosts(postsToLoad);
}
function createPostHTML(author, createDate, photoLink, description, postTags){
    let article = document.createElement('article');
    document.getElementById('posts-area').append(article);

    let firstColumn = document.createElement('div');
    firstColumn.className = 'column-with-user-photo';
    article.append(firstColumn);

    let photo = document.createElement('img');
    photo.className = 'user-photo';
    photo.src = photoLink;
    photo.alt = 'User photo';
    firstColumn.append(photo);

    let secondColumn = document.createElement('div');
    secondColumn.className = 'column-2';
    article.append(secondColumn);

    let postInf = document.createElement('div');
    postInf.className = 'post-info';
    secondColumn.append(postInf);

    let usernameContainer = document.createElement('div');
    usernameContainer.className = 'username-container';
    postInf.append(usernameContainer);


    let username = document.createElement('h4');
    username.className = 'username';
    username.innerText = '@' + author;
    usernameContainer.append(username);

    let createAt = document.createElement('div');
    createAt.className = 'date-and-time';
    postInf.append(createAt);

    let pDate = document.createElement('p');
    pDate.innerText = createDate.getHours() + ':' + createDate.getMinutes() + ' '
        + createDate.getDate() + '.' + (createDate.getMonth() + 1)  + '.' + createDate.getFullYear();
    createAt.append(pDate);

    let postText = document.createElement('div');
    postText.className = 'post-text';
    secondColumn.append(postText);

    let pText = document.createElement('p');
    pText.innerHTML = description + '<br>';
    postTags.forEach( tag => pText.innerHTML += tag + ' ');
    postText.append(pText);

    let actionArea = document.createElement('div');
    actionArea.className = 'action-area';
    secondColumn.append(actionArea);

    actionArea.insertAdjacentHTML('afterbegin', `<div class="like">
                        <button class="like-button">
                            <img class="add-like" src="img/like.png" alt="Like" >
                        </button>
                    </div>`);


    if(author === 'username'){
        actionArea.insertAdjacentHTML('beforeend', `<div class="action-container">
        <div class="change-post">
        <button class="change-post-button">
        <img class="change-icon" src="img/add-post.png" alt="Change post" >
        </button>
        </div>
        <div class="delete-post">
        <button class="delete-post-button">
        <img class="delete-icon" src="img/delete.png" alt="Delete post" >
        </button>
        </div>`);
    }
}