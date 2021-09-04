import { authHeader } from '../helpers';
import config from 'config';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(userIdentity, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userIdentity, password })
    };

    return fetch(`${config.apiUrl}/v1/auth/login`, requestOptions)
        .then(response => handleResponse(response, true))
        .then(auth => {
            // login successful if there's a jwt token in the response
            if (auth.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('auth', JSON.stringify(auth));
            }

            return auth;
        });
}

function logout() {
    let headers = authHeader();
    headers["Content-Type"] = "application/json"
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ "token" : localStorage.getItem('auth')})
    };

    fetch(`${config.apiUrl}/v1/auth/logout`, requestOptions);
    // remove user from local storage to log user out
    localStorage.removeItem('auth');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/v1/auth/register`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/auth/users`, requestOptions).then(handleResponse);
}


function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/auth/users/${id}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/v1/auth/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/auth/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response, ignoreRoute = false) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401 && !ignoreRoute) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}