import request from './structures/request';
import { GistFile, GistOptions, GistResponse } from './types';

export default async (
    files: GistFile,
    description: string,
    token: string,
    options?: GistOptions
): Promise<GistResponse> => {
    return await request<GistResponse>(
        'https://api.github.com/gists',
        token,
        'POST',
        {
            data: {
                description: description,
                files: {
                    ...files,
                },
                public: options?.secret ? true : false,
            },
        }
    )
        .then((response) => {
            return Promise.resolve(response);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
