"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createGist_1 = __importDefault(require("./createGist"));
class Gist {
    constructor(token) {
        this.token = token;
    }
    create(files, description, options) {
        return (0, createGist_1.default)(files, description, this.token, options);
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = Gist;
