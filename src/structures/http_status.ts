export enum HTTPStatus {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    VAILDATION_FAILED = 422,
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    UNKNOWN = -1,
}

export interface HTTPStatusRes {
    code: HTTPStatus
    data: string
}

const t = (v: HTTPStatus): HTTPStatusRes => ({ code: v, data: HTTPStatus[v] })

export default (status: number): HTTPStatusRes => {
    switch (status) {
        case 200:
            return t(HTTPStatus.OK)
        case 201:
            return t(HTTPStatus.CREATED)
        case 204:
            return t(HTTPStatus.NO_CONTENT)
        case 304:
            return t(HTTPStatus.NOT_MODIFIED)
        case 400:
            return t(HTTPStatus.BAD_REQUEST)
        case 401:
            return t(HTTPStatus.UNAUTHORIZED)
        case 403:
            return t(HTTPStatus.FORBIDDEN)
        case 404:
            return t(HTTPStatus.NOT_FOUND)
        case 409:
            return t(HTTPStatus.CONFLICT)
        case 422:
            return t(HTTPStatus.VAILDATION_FAILED)
        case 500:
            return t(HTTPStatus.INTERNAL_SERVER_ERROR)
        case 502:
            return t(HTTPStatus.BAD_GATEWAY)
        case 503:
            return t(HTTPStatus.SERVICE_UNAVAILABLE)
        case 504:
            return t(HTTPStatus.GATEWAY_TIMEOUT)
        default:
            return t(HTTPStatus.UNKNOWN)
    }
}
