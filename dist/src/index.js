"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createGist_1 = __importDefault(require("./createGist"));
const deleteGist_1 = __importDefault(require("./deleteGist"));
const getGist_1 = __importDefault(require("./getGist"));
class Gist {
    constructor(token) {
        this.token = token;
    }
    create(files, description, options) {
        return (0, createGist_1.default)(files, description, this.token, options);
    }
    delete(id) {
        return (0, deleteGist_1.default)(id, this.token);
    }
    get(id) {
        return (0, getGist_1.default)(id, this.token);
    }
}
exports.default = Gist;
