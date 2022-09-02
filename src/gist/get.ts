import request from '../structures/request'
import { GistResponse, ReqRet } from '../types'

export default async (id: string, token: string): Promise<ReqRet<GistResponse>> =>
    await request<GistResponse>(`https://api.github.com/gists/${id}`, token, 'GET', {})
        .then((response) =>
            Promise.resolve({
                data: response.data,
                status: response.status,
            })
        )
        .catch((err) => Promise.reject(err))
