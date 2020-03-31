import * as Firebase from 'firebase'

export interface IUser {
    id: string;
    email: string;
    name: string;
}

export interface IUserHash {
    [key: string]: IUser
}

export default class User implements IUser {
    id: string
    name: string
    email: string
    constructor(user: Firebase.User) {
        this.id = user.uid
        this.email = user.email || ''
        this.name = user.displayName || 'User'
    }
}