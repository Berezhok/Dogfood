import { PublicTwoTone } from '@mui/icons-material';
import { config } from './config';

const oneResponce = (res) => {
   return res.ok ?  res.json() : Promise.reject(`ошибка ${res.status}`)
}

class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
    }

    getProducts() {
        return fetch(`${this._url}/products`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(oneResponce)
    }

    search(searchQuery){
        return fetch(`${this._url}/products/search?query=${searchQuery}`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(oneResponce)
    }

    addLike(itemId){
        return fetch(`${this._url}/products/likes/${itemId}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(oneResponce)
    }

    deleteLike(itemId){
        return fetch(`${this._url}/products/likes/${itemId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(oneResponce)
    }

    getCurentUser() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(oneResponce)

    }

    }
    export default new Api(config);
    
    
    // getPosts() {
    //     return fetch(`${this._url}/posts`);
    // }
