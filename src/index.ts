import { GistFile, GistOptions, GistResponse, IGist } from "./types";
import createGist from "./createGist";

export default class Gist implements IGist {
    public readonly token: string;

    constructor(token: string) {
        this.token = token;
    }

    public create(
        files: GistFile,
        description: string,
        options?: GistOptions
    ): Promise<GistResponse> {
        return createGist(files, description, this.token, options);
    }

    public delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public get(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
