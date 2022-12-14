import axios from 'axios';
import { isExpired } from 'react-jwt';

const getToken = () => {
    const item = window.localStorage.getItem('persist:tlcnFE2022');

    if (item) {
        const { user } = JSON.parse(item);
        const { accessToken } = JSON.parse(user);

        if (accessToken) {
            if (isExpired(accessToken)) {
                return accessToken;
            } else {
                return accessToken;
            }
        } else {
            return null;
        }
    }
};

const requestApi = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

requestApi.interceptors.request.use(function (request) {
    const token = getToken();

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
});

export const get = async (path, options = {}) => {
    const response = await requestApi.get(path, options);
    return response.data;
};

export const post = async (path, options = {}, configs = {}) => {
    const response = await requestApi.post(path, options, configs);
    return response.data;
};

export const put = async (path, options = {}, configs = {}) => {
    const response = await requestApi.put(path, options, configs);
    return response.data;
};

export const requestDelete = async (path, options = {}, configs = {}) => {
    const response = await requestApi.delete(path, options, configs);
    return response.data;
};
