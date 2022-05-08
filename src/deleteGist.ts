import request from './structures/request';

export default async (id: string, token: string): Promise<{}> => {
    return await request<{}>(
        `https://api.github.com/gists/${id}`,
        token,
        'DELETE',
        {}
    )
        .then((response) => {
            return Promise.resolve(response);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
