import { GistFile, GistOptions, GistResponse, IGist, ReqRet } from './types';
import createGist from './createGist';
import deleteGist from './deleteGist';
import getGist from './getGist';

export default class Gist implements IGist {
    public readonly token: string;

    constructor(token: string) {
        if (!token || token === 'token') {
            throw new Error('Token required');
        }
        this.token = token;
    }

    public create(
        files: GistFile,
        description: string,
        options?: GistOptions
    ): Promise<ReqRet<GistResponse>> {
        return createGist(files, description, this.token, options);
    }

    public delete(id: string): Promise<ReqRet<any>> {
        return deleteGist(id, this.token);
    }

    public get(id: string): Promise<ReqRet<GistResponse>> {
        return getGist(id, this.token);
    }
}
