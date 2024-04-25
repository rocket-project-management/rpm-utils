export default abstract class String {
    public static readonly TYPE = "string";
    public static readonly EMPTY = "";
    public static readonly SPACE = " ";
    public static readonly SLASH = "/";
    public static readonly COMMA = ",";
    public static readonly LINE_BREAK = "\n";
    public static readonly NULL = "null";
    public static readonly DASH = "-";
    public static readonly DOT = ".";
    public static readonly TRUE = "true";
    public static readonly FALSE = "false";

    public static IsNullOrEmpty(input: any): boolean {
        if(input === undefined) return true;
        if(input === null) return true;
        if(typeof input === String.TYPE && input === this.EMPTY) return true;
        return false;
    }

    public static IsString(input: any): boolean {
        return typeof input === String.TYPE;
    }

    public static IsInteger(input: string): boolean {
        return /^\d+$/.test(input);
    }

    public static IsFloat(input: string): boolean {
        return /^-?\d*\.?\d+$/.test(input);
    }

    public static IsNumber(input: string): boolean {
        const isInteger: boolean = this.IsInteger(input);
        const isFloat: boolean = this.IsFloat(input);
        return isInteger || isFloat;
    }

    public static ToInteger(input: string): number {
        return parseInt(input);
    }

    public static ToFloat(input: string): number {
        return parseFloat(input)
    }

    public static ToBoolean(input: string): boolean {
        return input.toLowerCase() === String.TRUE;
    }

    public static ToString(input: any): string {
        return (input === null || input === undefined)? null : input.toString();
    }
}