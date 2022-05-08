import request from './structures/request';
import { GistResponse } from './types';

export default async (id: string, token: string): Promise<GistResponse> => {
    return await request<GistResponse>(
        `https://api.github.com/gists/${id}`,
        token,
        'GET',
        {}
    )
        .then((response) => {
            return Promise.resolve(response);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
