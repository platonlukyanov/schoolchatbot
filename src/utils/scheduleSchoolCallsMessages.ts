import { scheduleJob } from "node-schedule";
import { ScheduleItem } from "../types.js";
import getMessagesForCall from "./getMessagesForCall.js";
import scheduleTaskByTimeAndDayOfTheWeek from "./scheduleTaskByTimeAndDayOfTheWeek.js";

function defaultSendMessage(message: string) {
    console.log(message)
}

export default function scheduleSchoolCallsMessages(calls: ScheduleItem[], options?: {
    sendMessage: (message: string) => void
}) {
    const { sendMessage = defaultSendMessage } = options ?? {};
    // so we have a for loop
    calls.forEach(call => {
        // for each day of the week? when call rings
        call.days.forEach(day => {
            // we get a few messages, let's schedule each
            getMessagesForCall(call).forEach(message => {
                scheduleTaskByTimeAndDayOfTheWeek({
                    dayOfTheWeek: day,
                    time: message.time,
                    onTime: () => {
                        sendMessage(message.text);
                    }
                })
            })
        })
    })
}