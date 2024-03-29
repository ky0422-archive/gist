import { HTTPStatusRes } from './structures/http_status'

interface GistOptions {
    secret: boolean
}

interface IGist {
    create(files: GistFile, description: string, options?: Partial<GistOptions>): Promise<any>
    delete(id: string): Promise<any>
    get(id: string): Promise<any>
}

interface GistResponse {
    url: string
    forks_url: string
    commits_url: string
    id: string
    node_id: string
    git_pull_url: string
    git_push_url: string
    html_url: string
    files: GistFile
    public: boolean
    created_at: string
    updated_at: string
    description: string
    comments: number
    comments_url: string
    owner: {
        login: string
        id: number
        node_id: string
        avatar_url: string
        gravatar_id: string
        url: string
        html_url: string
        followers_url: string
        following_url: string
        gists_url: string
        starred_url: string
        subscriptions_url: string
        organizations_url: string
        repos_url: string
        events_url: string
        received_events_url: string
        type: string
        site_admin: boolean
    }
    truncated: boolean
}

interface ReqRet<T> {
    data?: T
    status: HTTPStatusRes
}

interface GistFile {
    [key: string]: {
        content: string
    }
}

export { GistOptions, IGist, GistResponse, GistFile, ReqRet }
