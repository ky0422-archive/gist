import request from '../structures/request'
import { ReqRet } from '../types'

export default async (id: string, token: string): Promise<ReqRet<{}>> =>
    await request<{}>(`https://api.github.com/gists/${id}`, token, 'DELETE', {})
        .then((response) =>
            Promise.resolve({
                status: response.status,
            })
        )
        .catch((err) => Promise.reject(err))
