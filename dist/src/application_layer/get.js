"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
var data_validation_1 = __importDefault(require("../domain_layer/data_validation"));
function get(from, to) {
    try {
        var result = data_validation_1.default.getBetweenDateRanges(from, to);
        return result;
    }
    catch (err) {
        console.log(err);
        return {
            success: false
        };
    }
}
exports.get = get;
