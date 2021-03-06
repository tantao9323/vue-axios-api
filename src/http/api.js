import fetch from './fetch';
import * as url from './url';

export function login(username, password) {
    return fetch({
        url: url.login,
        method: 'post',
        data: {
            username: username,
            password: password
        }
    });
}