import axios, { AxiosRequestConfig, Method } from 'axios';
import { ReqRet } from '../types';
import st from './http_status';

export default async <T>(
    url: string,
    token: string,
    method: Method,
    options: AxiosRequestConfig
): Promise<ReqRet<T>> => {
    return await axios
        .request<T>({
            url,
            method,
            headers: {
                'content-type': 'application/json',
                accept: 'application/vnd.github.v3+json',
                Authorization: `Bearer ${token}`,
            },
            ...options,
        })
        .then((response) => {
            return Promise.resolve({
                data: response.data,
                status: st(response.status),
            });
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};
