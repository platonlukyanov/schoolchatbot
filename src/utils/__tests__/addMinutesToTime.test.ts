import addMinutesToTime from "../addMinutesToTime";

describe('addMinutesToTime', () => {
    it('should add minutus to a string time and return a string time', () => {
        expect(addMinutesToTime('10:30', '5')).toBe('10:35')
        expect(addMinutesToTime('23:55', '5')).toBe('00:00')
    })
})