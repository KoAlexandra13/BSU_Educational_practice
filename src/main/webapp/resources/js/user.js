users = [
    {
        username: 'username',
        password: '1111',
        photoLink: 'resources/photos/user-photo.jpg',
        postsId: ['1', '4', '6', '8', '13', '16']
    },
    {
        username: 'dog_robbi',
        password: '2222',
        photoLink: 'resources/photos/dog.jpg',
        postsId: ['2', '7', '12', '19']
    },
    {
        username: 'japan_fish',
        password: '3333',
        photoLink: 'resources/photos/fish.jpg',
        postsId: ['3', '10', '15', '20']
    },
    {
        username: 'big_panda',
        password: '4444',
        photoLink: 'resources/photos/panda.jpg',
        postsId: ['5', '11', '17']
    },
    {
        username: 'cute_koala',
        password: '5555',
        photoLink: 'resources/photos/koala.jpg',
        postsId: ['9', '14', '18']
    }

];

class UsersCollection {
    constructor(initialUsers) {
        this._users = (initialUsers || []);
    }

    setUser(username, password) {
        return this._users.find(user => (user.username === username && user.password === password));
    }


    add(newUser) {
        if (this._users.find(user => (user.username === newUser.username
            || user.password === newUser.password))) {
            return false;
        }
        this._users.push(newUser);
        return true;
    }

    addAll(usersArray) {
        return usersArray.filter((user) => !this.add(user));
    }
}

(() => {
    window.usersCollection = new UsersCollection();
    window.usersCollection.addAll(users);
})();
