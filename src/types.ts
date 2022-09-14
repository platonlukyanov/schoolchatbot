
export type Day = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'

export interface ScheduleItem  {
    order: string,
    start: string,
    end: string,
    breakTime: string,
    days: Day[]
}