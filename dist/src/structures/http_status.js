"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPStatus = void 0;
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["OK"] = 200] = "OK";
    HTTPStatus[HTTPStatus["CREATED"] = 201] = "CREATED";
    HTTPStatus[HTTPStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HTTPStatus[HTTPStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HTTPStatus[HTTPStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTPStatus[HTTPStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTPStatus[HTTPStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HTTPStatus[HTTPStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTPStatus[HTTPStatus["CONFLICT"] = 409] = "CONFLICT";
    HTTPStatus[HTTPStatus["VAILDATION_FAILED"] = 422] = "VAILDATION_FAILED";
    HTTPStatus[HTTPStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HTTPStatus[HTTPStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HTTPStatus[HTTPStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HTTPStatus[HTTPStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HTTPStatus[HTTPStatus["UNKNOWN"] = -1] = "UNKNOWN";
})(HTTPStatus = exports.HTTPStatus || (exports.HTTPStatus = {}));
const t = (v) => ({ code: v, data: HTTPStatus[v] });
exports.default = (status) => {
    switch (status) {
        case 200:
            return t(HTTPStatus.OK);
        case 201:
            return t(HTTPStatus.CREATED);
        case 204:
            return t(HTTPStatus.NO_CONTENT);
        case 304:
            return t(HTTPStatus.NOT_MODIFIED);
        case 400:
            return t(HTTPStatus.BAD_REQUEST);
        case 401:
            return t(HTTPStatus.UNAUTHORIZED);
        case 403:
            return t(HTTPStatus.FORBIDDEN);
        case 404:
            return t(HTTPStatus.NOT_FOUND);
        case 409:
            return t(HTTPStatus.CONFLICT);
        case 422:
            return t(HTTPStatus.VAILDATION_FAILED);
        case 500:
            return t(HTTPStatus.INTERNAL_SERVER_ERROR);
        case 502:
            return t(HTTPStatus.BAD_GATEWAY);
        case 503:
            return t(HTTPStatus.SERVICE_UNAVAILABLE);
        case 504:
            return t(HTTPStatus.GATEWAY_TIMEOUT);
        default:
            return t(HTTPStatus.UNKNOWN);
    }
};
