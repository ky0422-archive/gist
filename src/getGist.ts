import request from './structures/request';
import { GistResponse, ReqRet } from './types';

export default async (
    id: string,
    token: string
): Promise<ReqRet<GistResponse>> => {
    return await request<GistResponse>(
        `https://api.github.com/gists/${id}`,
        token,
        'GET',
        {}
    )
        .then((response) => {
            return Promise.resolve({
                data: response.data,
                status: response.status,
            });
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
