class UsersCollection {
    constructor(initialUsers) {
        this._users = (initialUsers || []);
    }

    getUser(username, password) {
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
})();
