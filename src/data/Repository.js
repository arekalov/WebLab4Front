import {AUTH_ERROR, ERROR, OK, USER_EXIST_ERROR} from "./Strings.js";

export const login = async (username, password) => {
    try {
        const response = await fetch('http://localhost:8080/users/loginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ' Basic YXJla2Fsb3Y6cXdlcnR5MTIzNA=='
            },
            body: JSON.stringify({ login:username, password:password }),
        });
        console.log(JSON.stringify({ login:username, password:password }))

        if (response.ok) {
            return OK;
        }
        return AUTH_ERROR;
    } catch (error) {
        return `${AUTH_ERROR}:, ${error}`
    }
};

export const register = async (username, password) => {
    const existUser = await login(username, password)
    if (existUser === OK) {
        return USER_EXIST_ERROR
    }
    try {
        const response = await fetch('http://localhost:8080/users/signUpUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ' Basic YXJla2Fsb3Y6cXdlcnR5MTIzNA=='
            },
            body: JSON.stringify({ login:username, password:password }),
        });
        console.log(JSON.stringify({ login:username, password:password }))

        if (response.ok) {
            return OK;
        }
        return ERROR;
    } catch (error) {
        return ERROR
    }
}

