import { timeStamp } from "console";
import String from "../Strings/String";

export default abstract class Timestamp {
    public static Stamp(): number {
        return new Date().getTime();
    }

    public static CustomStamp(date: Date): number {
        return date.getTime();
    }

    public static GetAgeInMiliseconds(timestamp: number): number {
        return this.Stamp() - timestamp;
    }

    public static GetAgeInSeconds(timestamp: number): number {
        return this.GetAgeInMiliseconds(timestamp) / 1000;
    }

    public static GetAgeInMinutes(timestamp: number): number {
        return this.GetAgeInSeconds(timestamp) / 60;
    }

    public static GetAgeInHours(timestamp: number): number {
        return this.GetAgeInMinutes(timestamp) / 60;
    }

    public static GetAgeInDays(timestamp: number): number {
        return this.GetAgeInHours(timestamp) / 24;
    }

    public static ToDate(timestamp: number | string) {
        if(String.IsString(timestamp)) {
            const thisTimestamp: string = timestamp as string;
            const castedTimestamp: number = String.ToInteger(thisTimestamp);
            return new Date(castedTimestamp);
        }
        return new Date(timestamp);
    }
}