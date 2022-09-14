import { DateTime } from 'luxon';

export default function getHours(time: string) {
    return DateTime.fromISO(time).hour
}