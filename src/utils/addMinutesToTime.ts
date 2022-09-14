import { DateTime, Duration } from "luxon";

export default function addMinutesToTime(time: string, minutes: string | number) {
    return DateTime.fromISO(time).plus(Duration.fromObject({ minutes: Number(minutes) })).toISOTime({
        extendedZone: false,
        suppressMilliseconds: true,
        includeOffset: false,
        suppressSeconds: true,
    })
}