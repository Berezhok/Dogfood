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

    }
    export default new Api(config);
    
    
    // getPosts() {
    //     return fetch(`${this._url}/posts`);
    // }
