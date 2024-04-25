import Number from "../Numbers/Number";
import String from "../Strings/String";

export default abstract class Boolean {
    public static readonly TYPE = "boolean";

    public static IsBoolean(input: any): boolean {
        return typeof input === Boolean.TYPE;
    }

    public static ToBoolean(input: any): boolean {
        if(Boolean.IsBoolean(input)) return input as boolean;
        if(String.IsString(input)) return String.ToBoolean(input);
        if(Number.IsNumber(input)) return input !== 0;
        if(input) return true;
        return false;
    }
}