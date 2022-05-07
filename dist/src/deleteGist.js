"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./structures/request"));
exports.default = async (id, token) => {
    return await (0, request_1.default)(`https://api.github.com/gists/${id}`, token, "DELETE", {})
        .then((response) => {
        return Promise.resolve(response);
    })
        .catch((err) => {
        return Promise.reject(err);
    });
};
