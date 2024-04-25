export default abstract class Timestamp {
    static Stamp(): number;
    static CustomStamp(date: Date): number;
    static GetAgeInMiliseconds(timestamp: number): number;
    static GetAgeInSeconds(timestamp: number): number;
    static GetAgeInMinutes(timestamp: number): number;
    static GetAgeInHours(timestamp: number): number;
    static GetAgeInDays(timestamp: number): number;
    static ToDate(timestamp: number | string): Date;
}
