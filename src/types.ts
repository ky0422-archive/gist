interface GistOptions {
    secret: boolean;
}

type Optional<T> = { readonly [k in keyof T]?: T[k] };

interface IGist {
    create(
        files: GistFile,
        description: string,
        options?: Optional<GistOptions>
    ): Promise<any>;
    delete(id: string): Promise<any>;
    get(id: string): Promise<any>;
}

interface GistResponse {
    url: string;
    id: string;
    created_at: string;
    updated_at: string;
    html_url: string;
}

interface GistFile {
    [key: string]: {
        content: string;
    };
}

export { GistOptions, IGist, GistResponse, GistFile };
