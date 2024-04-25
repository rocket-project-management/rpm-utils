"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Boolean_1 = __importDefault(require("../Booleans/Boolean"));
const String_1 = __importDefault(require("../Strings/String"));
class Number {
    static IsNumber(input) {
        return typeof input === Number.TYPE;
    }
    static ToInteger(input) {
        if (Number.IsNumber(input))
            return input;
        if (Number.isStringAndInteger(input))
            return String_1.default.ToInteger(input);
        if (Boolean_1.default.IsBoolean(input))
            return input ? 1 : 0;
        return 0;
    }
    static Clamp(value, min = 0, max = 1) {
        if (value > max)
            return max;
        if (value < min)
            return min;
        return value;
    }
    static IsInRange(value, min = 0, max = 1) {
        return value >= min && value <= max;
    }
    static isStringAndInteger(input) {
        return String_1.default.IsString(input) && String_1.default.IsInteger(input);
    }
    static isStringAndFloat(input) {
        return String_1.default.IsString(input) && String_1.default.IsFloat(input);
    }
}
Number.TYPE = "number";
exports.default = Number;
//# sourceMappingURL=Number.js.map