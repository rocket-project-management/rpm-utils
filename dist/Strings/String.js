"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class String {
    static IsNullOrEmpty(input) {
        if (input === undefined)
            return true;
        if (input === null)
            return true;
        if (typeof input === String.TYPE && input === this.EMPTY)
            return true;
        return false;
    }
    static IsString(input) {
        return typeof input === String.TYPE;
    }
    static IsInteger(input) {
        return /^\d+$/.test(input);
    }
    static IsFloat(input) {
        return /^-?\d*\.?\d+$/.test(input);
    }
    static IsNumber(input) {
        const isInteger = this.IsInteger(input);
        const isFloat = this.IsFloat(input);
        return isInteger || isFloat;
    }
    static ToInteger(input) {
        return parseInt(input);
    }
    static ToFloat(input) {
        return parseFloat(input);
    }
    static ToBoolean(input) {
        return input.toLowerCase() === String.TRUE;
    }
    static ToString(input) {
        return (input === null || input === undefined) ? null : input.toString();
    }
}
String.TYPE = "string";
String.EMPTY = "";
String.SPACE = " ";
String.SLASH = "/";
String.COMMA = ",";
String.LINE_BREAK = "\n";
String.NULL = "null";
String.DASH = "-";
String.DOT = ".";
String.TRUE = "true";
String.FALSE = "false";
exports.default = String;
//# sourceMappingURL=String.js.map