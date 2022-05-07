"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./structures/request"));
exports.default = async (files, description, token, options) => {
    return await (0, request_1.default)("https://api.github.com/gists", token, "POST", {
        data: {
            description: description,
            files: {
                ...files,
            },
            public: options?.secret ? false : true,
        },
    })
        .then((response) => {
        return Promise.resolve(response);
    })
        .catch((err) => {
        return Promise.reject(err);
    });
};
