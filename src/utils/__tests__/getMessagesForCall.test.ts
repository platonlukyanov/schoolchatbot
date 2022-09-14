import getMessagesForCall from "../getMessagesForCall"

const call = {
    "order": "4",
    "start": "11:35",
    "end": "12:20",
    "breakTime": "15",
}

describe('getMessagesForCall', () => {
    it('should compose messages correctly', () => {
        const messages = getMessagesForCall(call);

        expect(messages).toEqual([
            {
                text: `Урок 4 начнется через 5 минут в 11:35 и закончиться в 12:20`,
                time: '11:30',
            },
            {
                text: `Поторопись! Урок 4 начнется через 1 минуту в 11:35 и закончиться в 12:20`,
                time: '11:34',
            },
            {
                text: `Этот урок (4) закончиться через 5 минут в 12:20`,
                time: '12:15',
            },
            {
                text: `Перемена продлится 15 минут и следующий урок начнется в 12:35`,
                time: '12:20',
            }
        ])
    })
    
})