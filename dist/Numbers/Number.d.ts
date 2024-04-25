export default abstract class Number {
    static readonly TYPE = "number";
    static IsNumber(input: any): boolean;
    static ToInteger(input: any): number;
    static Clamp(value: number, min?: number, max?: number): number;
    static IsInRange(value: number, min?: number, max?: number): boolean;
    private static isStringAndInteger;
    private static isStringAndFloat;
}
