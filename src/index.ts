import { GistFile, GistOptions, GistResponse, IGist, ReqRet } from './types';
import { _create, _delete, _get } from './gist';

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
        return _create(files, description, this.token, options);
    }

    public delete(id: string): Promise<ReqRet<any>> {
        return _delete(id, this.token);
    }

    public get(id: string): Promise<ReqRet<GistResponse>> {
        return _get(id, this.token);
    }
}
