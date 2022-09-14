import { DateTime, Duration } from "luxon";

export default function subtractMinutesFromTime(time: string, minutes: string | number) {
    return DateTime.fromISO(time).minus(Duration.fromObject({ minutes: Number(minutes) })).toISOTime({
        extendedZone: false,
        suppressMilliseconds: true,
        includeOffset: false,
        suppressSeconds: true,
    })
}