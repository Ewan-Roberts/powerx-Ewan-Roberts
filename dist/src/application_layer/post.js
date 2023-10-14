"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
var dataValidation_1 = __importDefault(require("../domain_layer/dataValidation"));
function post(bodyString) {
    var parsedBody;
    try {
        dataValidation_1.default.parseSave(bodyString);
        return {
            success: true
        };
    }
    catch (err) {
        console.log(err);
        return {
            success: false
        };
    }
}
exports.post = post;
