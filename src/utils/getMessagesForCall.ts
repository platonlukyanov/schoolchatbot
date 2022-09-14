import { DateTime, Duration } from "luxon";
import { ScheduleItem } from "../types.js";
import addMinutesToTime from "./addMinutesToTime.js";
import subtractMinutesFromTime from "./subtractMinutesFromTime.js";

interface CallMessage {
    text: string,
    time: string,
}

export default function getMessagesForCall(call: Pick<ScheduleItem, 'start' | 'end' | 'breakTime' | 'order'>): CallMessage[] {
    const constantMessages: CallMessage[] = [
        {
            text: `🔔🔔🔔 Урок ${call.order} начнется через 5 минут в ${call.start} и закончится в ${call.end}`,
            time: subtractMinutesFromTime(call.start, 5),
        },
        {
            text: `Поторопись! 🏃 Урок ${call.order} начнется через 1 минуту в ${call.start} и закончится в ${call.end}`,
            time: subtractMinutesFromTime(call.start, 1),
        },
        {
            text: `🔚🕰️ Этот урок (${call.order}) закончится через 5 минут в ${call.end}`,
            time: subtractMinutesFromTime(call.end, 5),
        }
    ]
2
    const dynamicMessages: CallMessage[] = call.breakTime == '0' ? [] : [
        {
            text: `💨 Перемена продлится ${call.breakTime} минут и следующий урок начнется в ${addMinutesToTime(call.end, call.breakTime)}`,
            time: call.end,
        }
    ]

    const messages = [...constantMessages, ...dynamicMessages]

    return messages;
}