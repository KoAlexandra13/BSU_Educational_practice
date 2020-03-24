debugger;
let posts = [
    {
        id : '1',
        description : `A man from Australia has a snake. He feeds it a rat with tongs. This is dangerous for the snake. 
        Doctors operate on it and take out the tongs. The snake is getting better.`,
        createAt : new Date('2020-03-10'),
        author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#snake'],
        likes: [],
    },
    {
        id : '2',
        description : `Hello students, there is a group on Facebook.
        This group is for all students and teachers of English who use newsinlevels.com.
        You can be in this group too.`,
        createAt : new Date('2020-03-11'),
        author : 'dog_robbi',
        photoLink : 'photos/dog.jpg',
        tags: ['#english'],
        likes: []
    },
    {
        id : '3',
        description : `This year, there are the Olympics in Tokyo, Japan.
        The coronavirus is in Japan. Japanese officials say that 100 people are ill.
        They think that it is not a problem for the Olympics.`,
        createAt : new Date('2020-03-12'),
        author : 'japan_fish',
        photoLink : 'photos/fish.jpg',
        tags: ['#olimpics'],
        likes: []
    },
    {
        id : '4',
        description : `A hairdresser has an idea. He makes a picture on somebody’s head.
        The picture looks like a famous person. Now, many people know about the hairdresser.
        He is happy.`,
        createAt : new Date('2020-03-13'),
        author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#hairdresser'],
        likes: []
    },
    {
        id : '5',
        description : `A man attacks two bars in Hanau, Germany.It lies about 12 miles from Frankfurt, 
        Germany. The man kills nine people. He injures many other people.Some of the people are Iranian.`,
        createAt : new Date('2020-03-14'),
        author : 'big_panda',
        photoLink : 'photos/panda.jpg',
        tags: ['#Germany'],
        likes: []
    },
    {
        id : '6',
        description : `Last weekend, a big storm hits the UK. Wales and Southern England have a lot of problems.
        There is heavy rain. There is more rain in two days than in the whole month.`,
        createAt : new Date('2020-03-14'),
        author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#hstorm', '#UK'],
        likes: []
    },
    {
        id : '7',
        description : `Some people go to Chernobyl. They see a fox. One person films the fox.
        The fox is not afraid of the people. They give it some bread.
        They give it some meat.`,
        createAt : new Date('2020-03-15'),
        author : 'dog_robbi',
        photoLink : 'photos/dog.jpg',
        tags: ['#animal', '#funny', '#fox'],
        likes: []
    },
    {
        id : '8',
        description : `Scientists find out that the number of penguins goes down. Some populations go 
        down by more than 75% in the last 50 years. The situation is very serious.`,
        createAt : new Date('2020-03-16'),
        author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#peguins', '#Antarctica'],
        likes: []
    },
    {
        id : '9',
        description : `Last month, the US kills an important Iranian general. 
        Iran attacks a US military base in Iraq. The US president says that no one at the military base is hurt or killed.`,
        createAt : new Date('2020-03-17'),
        author : 'cute_koala',
        photoLink : 'photos/koala.jpg',
        tags: ['#US'],
        likes: []
    },
    {
        id : '10',
        description : `Experts work on a church. It is a very old church. During the work, they find
        something. It is 500 years old crypt. There are bones inside the crypt. They are human bones.`,
        createAt : new Date('2020-03-18'),
        author : 'japan_fish',
        photoLink : 'photos/fish.jpg',
        tags: ['#Peru', '#bones'],
        likes: []
    },
    {
        id : '11',
        description : `The coronavirus could cut 50 million tourism jobs worldwide. The World 
        Travel and Tourism Council said the industry could become 25 per cent smaller. People 
        are not travelling.`,
        createAt : new Date('2020-03-19'),
        author : 'big_panda',
        photoLink : 'photos/panda.jpg',
        tags: ['#coronavirus'],
        likes: []
    },
    {
        id : '12',
        description : `Amazon will sell its cashier-less technology to other stores. The technology, 
        called "Just Walk Out,". Shoppers go into a store, put their shopping in their bag and then... just walk out.`,
        createAt : new Date('2020-03-20'),
        author : 'dog_robbi',
        photoLink : 'photos/dog.jpg',
        tags: ['#Amazon'],
        likes: []
    },
    {
        id : '13',
        description : `The spread of COVID-19 is making men wash their hands more often. A survey of 2,000 men 
        found that a third did not wash their hands after using the toilet.`,
        createAt : new Date('2020-03-21'),
        author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#coronavirus'],
        likes: []
    },
    {
        id : '14',
        description : `Japan closed its elementary, junior-high and high schools. It wants to 
        protect children from the COVID-19 virus. Schools will stay closed until April the 8th.`,
        createAt : new Date('2020-03-22'),
        author : 'cute_koala',
        photoLink : 'photos/koala.jpg',
        tags: ['#coronavirus'],
        likes: []
    },
    {
        id : '15',
        description : `Microsoft's Flight Simulator now includes all the world's airports. Gamers can choose over 
        37,000 airports to take off from and land at.`,
        createAt : new Date('2020-03-23'),
        author : 'japan_fish',
        photoLink : 'photos/fish.jpg',
        tags: ['#games'],
        likes: []
    },
    {
        id : '16',
        description : `London St Pancras is the best railway station in Europe. It is also called 
        St Pancras International because of the Eurostar trains to France, Belgium and Holland.`,
        createAt : new Date('2020-03-24'),
        author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#London', '#railway'],
        likes: []
    },
    {
        id : '17',
        description : `A study found that antisocial people could have smaller areas of the brain. 
        It said criminals brains had a different structure to the brains of non-criminals`,
        createAt : new Date('2020-03-25'),
        author : 'big_panda',
        photoLink : 'photos/panda.jpg',
        tags: ['#interesting'],
        likes: []
    },
    {
        id : '18',
        description : `The researchers mission is, "to understand and explain the origin of life and the evolution 
        of intelligence". Scientists will scan the sky for signs of alien life.`,
        createAt : new Date('2020-03-26'),
        author : 'cute_koala',
        photoLink : 'photos/koala.jpg',
        tags: ['#space'],
        likes: []
    },
    {
        id : '19',
        description : `Brazil will use security forces to fight deforestation in the Amazon.
        Too many trees are being cut down in the world's largest rainforest. Deforestation could 
        increase in 2020.`,
        createAt : new Date('2020-03-27'),
        author : 'dog_robbi',
        photoLink : 'photos/dog.jpg',
        tags: ['#nature'],
        likes: []
    },
    {
        id: '20',
        description: `Parents in Finland will get more time to spend with their babies. The government 
        will give parents seven months of leave. This is almost double the amount of its current leave.`,
        createAt: new Date('2020-03-28'),
        author: 'japan_fish',
        photoLink: 'photos/fish.jpg',
        tags: ['#Finland'],
        likes: []
    },
];

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
(function createPosts() {
     posts.forEach(post => createPostHTML(post.author, post.createAt,
         post.photoLink, post.description,post.tags))
})();

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
