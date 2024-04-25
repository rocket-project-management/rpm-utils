"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = __importDefault(require("../Strings/String"));
class Timestamp {
    static Stamp() {
        return new Date().getTime();
    }
    static CustomStamp(date) {
        return date.getTime();
    }
    static GetAgeInMiliseconds(timestamp) {
        return this.Stamp() - timestamp;
    }
    static GetAgeInSeconds(timestamp) {
        return this.GetAgeInMiliseconds(timestamp) / 1000;
    }
    static GetAgeInMinutes(timestamp) {
        return this.GetAgeInSeconds(timestamp) / 60;
    }
    static GetAgeInHours(timestamp) {
        return this.GetAgeInMinutes(timestamp) / 60;
    }
    static GetAgeInDays(timestamp) {
        return this.GetAgeInHours(timestamp) / 24;
    }
    static ToDate(timestamp) {
        if (String_1.default.IsString(timestamp)) {
            const thisTimestamp = timestamp;
            const castedTimestamp = String_1.default.ToInteger(thisTimestamp);
            return new Date(castedTimestamp);
        }
        return new Date(timestamp);
    }
}
exports.default = Timestamp;
//# sourceMappingURL=Timestamp.js.map