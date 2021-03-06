let posts = [
    {
        _id : '1',
        description : `A man from Australia has a snake. He feeds it a rat with tongs. This is dangerous for the snake. 
        Doctors operate on it and take out the tongs. The snake is getting better.`,
        _createAt : new Date('2020-03-10'),
        _author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#snake'],
        likes: [],
    },
    {
        _id : '2',
        description : `Hello students, there is a group on Facebook.
        This group is for all students and teachers of English who use newsinlevels.com.
        You can be in this group too.`,
        _createAt : new Date('2020-03-11'),
        _author : 'dog_robbi',
        photoLink : 'photos/dog.jpg',
        tags: ['#english'],
        likes: []
    },
    {
        _id : '3',
        description : `This year, there are the Olympics in Tokyo, Japan.
        The coronavirus is in Japan. Japanese officials say that 100 people are ill.
        They think that it is not a problem for the Olympics.`,
        _createAt : new Date('2020-03-12'),
        _author : 'japan_fish',
        photoLink : 'photos/fish.jpg',
        tags: ['#olimpics'],
        likes: []
    },
    {
        _id : '4',
        description : `A hairdresser has an idea. He makes a picture on somebody’s head.
        The picture looks like a famous person. Now, many people know about the hairdresser.
        He is happy.`,
        _createAt : new Date('2020-03-13'),
        _author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#hairdresser'],
        likes: []
    },
    {
        _id : '5',
        description : `A man attacks two bars in Hanau, Germany.It lies about 12 miles from Frankfurt, 
        Germany. The man kills nine people. He injures many other people.Some of the people are Iranian.`,
        _createAt : new Date('2020-03-14'),
        _author : 'big_panda',
        photoLink : 'photos/panda.jpg',
        tags: ['#Germany'],
        likes: []
    },
    {
        _id : '6',
        description : `Last weekend, a big storm hits the UK. Wales and Southern England have a lot of problems.
        There is heavy rain. There is more rain in two days than in the whole month.`,
        _createAt : new Date('2020-03-14'),
        _author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#hstorm', '#UK'],
        likes: []
    },
    {
        _id : '7',
        description : `Some people go to Chernobyl. They see a fox. One person films the fox.
        The fox is not afraid of the people. They give it some bread.
        They give it some meat.`,
        _createAt : new Date('2020-03-15'),
        _author : 'dog_robbi',
        photoLink : 'photos/dog.jpg',
        tags: ['#animal', '#funny', '#fox'],
        likes: []
    },
    {
        _id : '8',
        description : `Scientists find out that the number of penguins goes down. Some populations go 
        down by more than 75% in the last 50 years. The situation is very serious.`,
        _createAt : new Date('2020-03-16'),
        _author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#peguins', '#Antarctica'],
        likes: []
    },
    {
        _id : '9',
        description : `Last month, the US kills an important Iranian general. 
        Iran attacks a US military base in Iraq. The US president says that no one at the military base is hurt or killed.`,
        _createAt : new Date('2020-03-17'),
        _author : 'cute_koala',
        photoLink : 'photos/koala.jpg',
        tags: ['#US'],
        likes: []
    },
    {
        _id : '10',
        description : `Experts work on a church. It is a very old church. During the work, they find
        something. It is 500 years old crypt. There are bones inside the crypt. They are human bones.`,
        _createAt : new Date('2020-03-18'),
        _author : 'japan_fish',
        photoLink : 'photos/fish.jpg',
        tags: ['#Peru', '#bones'],
        likes: []
    },
    {
        _id : '11',
        description : `The coronavirus could cut 50 million tourism jobs worldwide. The World 
        Travel and Tourism Council said the industry could become 25 per cent smaller. People 
        are not travelling.`,
        _createAt : new Date('2020-03-19'),
        _author : 'big_panda',
        photoLink : 'photos/panda.jpg',
        tags: ['#coronavirus'],
        likes: []
    },
    {
        _id : '12',
        description : `Amazon will sell its cashier-less technology to other stores. The technology, 
        called "Just Walk Out,". Shoppers go into a store, put their shopping in their bag and then... just walk out.`,
        _createAt : new Date('2020-03-20'),
        _author : 'dog_robbi',
        photoLink : 'photos/dog.jpg',
        tags: ['#Amazon'],
        likes: []
    },
    {
        _id : '13',
        description : `The spread of COVID-19 is making men wash their hands more often. A survey of 2,000 men 
        found that a third did not wash their hands after using the toilet.`,
        _createAt : new Date('2020-03-21'),
        _author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#coronavirus'],
        likes: []
    },
    {
        _id : '14',
        description : `Japan closed its elementary, junior-high and high schools. It wants to 
        protect children from the COVID-19 virus. Schools will stay closed until April the 8th.`,
        _createAt : new Date('2020-03-22'),
        _author : 'cute_koala',
        photoLink : 'photos/koala.jpg',
        tags: ['#coronavirus'],
        likes: []
    },
    {
        _id : '15',
        description : `Microsoft's Flight Simulator now includes all the world's airports. Gamers can choose over 
        37,000 airports to take off from and land at.`,
        _createAt : new Date('2020-03-23'),
        _author : 'japan_fish',
        photoLink : 'photos/fish.jpg',
        tags: ['#games'],
        likes: []
    },
    {
        _id : '16',
        description : `London St Pancras is the best railway station in Europe. It is also called 
        St Pancras International because of the Eurostar trains to France, Belgium and Holland.`,
        _createAt : new Date('2020-03-24'),
        _author : 'username',
        photoLink : 'photos/user-photo.jpg',
        tags: ['#London', '#railway'],
        likes: []
    },
    {
        _id : '17',
        description : `A study found that antisocial people could have smaller areas of the brain. 
        It said criminals brains had a different structure to the brains of non-criminals`,
        _createAt : new Date('2020-03-25'),
        _author : 'big_panda',
        photoLink : 'photos/panda.jpg',
        tags: ['#interesting'],
        likes: []
    },
    {
        _id : '18',
        description : `The researchers mission is, "to understand and explain the origin of life and the evolution 
        of intelligence". Scientists will scan the sky for signs of alien life.`,
        _createAt : new Date('2020-03-26'),
        _author : 'cute_koala',
        photoLink : 'photos/koala.jpg',
        tags: ['#space'],
        likes: []
    },
    {
        _id : '19',
        description : `Brazil will use security forces to fight deforestation in the Amazon.
        Too many trees are being cut down in the world's largest rainforest. Deforestation could 
        increase in 2020.`,
        _createAt : new Date('2020-03-27'),
        _author : 'dog_robbi',
        photoLink : 'photos/dog.jpg',
        tags: ['#nature'],
        likes: []
    },
    {
        _id: '20',
        description: `Parents in Finland will get more time to spend with their babies. The government 
        will give parents seven months of leave. This is almost double the amount of its current leave.`,
        _createAt: new Date('2020-03-28'),
        _author: 'japan_fish',
        photoLink: 'photos/fish.jpg',
        tags: ['#Finland'],
        likes: []
    },
];
class PostsList{
    constructor(initialPosts){
        this._posts = (initialPosts || []);
    }

    getPage(current = 0, step = 10, filterParams = {author: null, createAt: null, tags: []}){
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

    get(id){
        posts.forEach(post => {
            if (id === post.id) {
                console.log(JSON.stringify(post));
                return post;
            }
        });
    }

    add(newPost) {
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

    edit(id, changes) {
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

    remove(id) {
        for( let i = 0; i < posts.length; i++){
            if (posts[i].id === id) {
                posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static validate(post){
        return (post.id && (typeof post.id === "string") && post.id !== '' &&
            post.description && (typeof post.description === "string") && post.description !== '' &&
            post.description.length < 200 && post.author && (typeof post.id === "string") && post.author !== '' &&
            (post.createAt instanceof Date) && (typeof post.photoLink === "string"));
    }
}

(function createPosts() {
    posts.forEach(post => createPostHTML(post.author, post.createAt,
        post.photoLink, post.description,post.tags))
})();
