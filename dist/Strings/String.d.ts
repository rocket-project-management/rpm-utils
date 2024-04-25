export default abstract class String {
    static readonly TYPE = "string";
    static readonly EMPTY = "";
    static readonly SPACE = " ";
    static readonly SLASH = "/";
    static readonly COMMA = ",";
    static readonly LINE_BREAK = "\n";
    static readonly NULL = "null";
    static readonly DASH = "-";
    static readonly DOT = ".";
    static readonly TRUE = "true";
    static readonly FALSE = "false";
    static IsNullOrEmpty(input: any): boolean;
    static IsString(input: any): boolean;
    static IsInteger(input: string): boolean;
    static IsFloat(input: string): boolean;
    static IsNumber(input: string): boolean;
    static ToInteger(input: string): number;
    static ToFloat(input: string): number;
    static ToBoolean(input: string): boolean;
    static ToString(input: any): string;
}
