"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Number_1 = __importDefault(require("../Numbers/Number"));
const String_1 = __importDefault(require("../Strings/String"));
class Boolean {
    static IsBoolean(input) {
        return typeof input === Boolean.TYPE;
    }
    static ToBoolean(input) {
        if (Boolean.IsBoolean(input))
            return input;
        if (String_1.default.IsString(input))
            return String_1.default.ToBoolean(input);
        if (Number_1.default.IsNumber(input))
            return input !== 0;
        if (input)
            return true;
        return false;
    }
}
Boolean.TYPE = "boolean";
exports.default = Boolean;
//# sourceMappingURL=Boolean.js.map