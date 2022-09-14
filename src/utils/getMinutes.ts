import { DateTime } from 'luxon';

export default function getMinutes(time: string) {
    return DateTime.fromISO(time).minute
}