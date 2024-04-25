import Boolean from "../Booleans/Boolean";
import String from "../Strings/String";

export default abstract class Number {
    public static readonly TYPE = "number";

    public static IsNumber(input: any): boolean {
        return typeof input === Number.TYPE;
    }

    public static ToInteger(input: any): number {
        if(Number.IsNumber(input)) return input as number;
        if(Number.isStringAndInteger(input)) return String.ToInteger(input);
        if(Boolean.IsBoolean(input)) return input? 1 : 0;
        return 0;
    }

    public static Clamp(value: number, min: number = 0, max: number = 1): number {
        if(value > max) return max;
        if(value < min) return min;
        return value;
    }

    public static IsInRange(value: number, min: number = 0, max: number = 1): boolean {
        return value >= min && value <= max;
    }

    private static isStringAndInteger(input: any): boolean {
        return String.IsString(input) && String.IsInteger(input);
    }

    private static isStringAndFloat(input: any): boolean {
        return String.IsString(input) && String.IsFloat(input);
    }
}