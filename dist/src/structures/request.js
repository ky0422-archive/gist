"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = async (url, token, method, options) => {
    return await axios_1.default
        .request({
        url,
        method,
        headers: {
            "content-type": "application/json",
            accept: "application/vnd.github.v3+json",
            Authorization: `Bearer ${token}`,
        },
        ...options,
    })
        .then((response) => {
        return Promise.resolve(response.data);
    })
        .catch((error) => {
        return Promise.reject(error);
    });
};
