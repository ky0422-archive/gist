import axios, { AxiosRequestConfig, Method } from 'axios';

export default async <T>(
    url: string,
    token: string,
    method: Method,
    options: AxiosRequestConfig
): Promise<T> => {
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
            return Promise.resolve(response.data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};
