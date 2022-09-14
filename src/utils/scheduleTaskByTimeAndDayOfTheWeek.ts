import { Day } from "../types.js";
import schedule from 'node-schedule';
import getHours from "./getHours.js";
import getMinutes from "./getMinutes.js";

const dayOfWeekCodeToNumber: {
    [property in Day]: number
} = {
    'MON': 1,
    'TUE': 2,
    'WED': 3,
    'THU': 4,
    'FRI': 5,
    'SAT': 6,
    'SUN': 0,
}

export default function scheduleTaskByTimeAndDayOfTheWeek({
    time,
    dayOfTheWeek,
    onTime
}: {
    time: string,
    dayOfTheWeek: Day,
    onTime: () => void
}) {
    const job = schedule.scheduleJob({
        hour: getHours(time),
        minute: getMinutes(time),
        dayOfWeek: dayOfWeekCodeToNumber[dayOfTheWeek]
    }, onTime);

    return job
}