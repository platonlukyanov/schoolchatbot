import addMinutesToTime from "../addMinutesToTime";
import subtractMinutesFromTime from "../subtractMinutesFromTime";

describe('subtractMinutesFromTime', () => {
    it('should subtract minutus from a string time and return a string time', () => {
        expect(subtractMinutesFromTime('10:35', '5')).toBe('10:30')
        expect(subtractMinutesFromTime('00:00', '5')).toBe('23:55')
    })
})