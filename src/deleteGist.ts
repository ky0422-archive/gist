import request from './structures/request';
import { ReqRet } from './types';

export default async (id: string, token: string): Promise<ReqRet<{}>> => {
    return await request<{}>(
        `https://api.github.com/gists/${id}`,
        token,
        'DELETE',
        {}
    )
        .then((response) => {
            return Promise.resolve({
                status: response.status,
            });
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
