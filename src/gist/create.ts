import request from '../structures/request';
import { GistFile, GistOptions, GistResponse, ReqRet } from '../types';

export default async (
    files: GistFile,
    description: string,
    token: string,
    options?: GistOptions
): Promise<ReqRet<GistResponse>> =>
    await request<GistResponse>('https://api.github.com/gists', token, 'POST', {
        data: {
            description: description,
            files: {
                ...files,
            },
            public: options?.secret ? true : false,
        },
    });
