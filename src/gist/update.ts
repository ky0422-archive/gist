import request from '../structures/request';
import { GistFile, GistOptions, ReqRet } from '../types';

export default async (
    id: string,
    files: GistFile,
    description: string,
    token: string,
    options?: GistOptions
): Promise<ReqRet<{}>> =>
    await request<{}>(`https://api.github.com/gists/${id}`, token, 'PATCH', {
        data: {
            description: description,
            files: {
                ...files,
            },
            public: options?.secret ? true : false,
        },
    })
        .then((response) =>
            Promise.resolve({
                status: response.status,
            })
        )
        .catch((err) => Promise.reject(err));
