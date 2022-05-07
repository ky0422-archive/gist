import axios, { AxiosRequestConfig } from "axios";

export default async <T>(
    url: string,
    options: AxiosRequestConfig
): Promise<T> => {
    return await axios
        .request<T>({
            url,
            ...options,
        })
        .then((response) => {
            return Promise.resolve(response.data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};
