const i = require('../src/index');

let date = new i.EasyDate(2019, 11, 8, 10, 10, 10, 1)
test('intervals', () => {
    expect(date.year()).toBe(2019)
    expect(date.month()).toBe('December')
    expect(date.day()).toBe(8)
    expect(date.hours()).toBe(10)
    expect(date.minutes()).toBe(10)
    expect(date.seconds()).toBe(10)
    expect(date.milliseconds()).toBe(1)
});

test('format', () => {
    expect(date.format()).toBe('2019 December 08')
    expect(date.format('ymd')).toBe('19Dec8')
    expect(date.format('m-D-Y H:I:S')).toBe('Dec-08-2019 10:10:10')
    expect(date.format('asdoinasodin')).toBe('a108o10na10o810n')
})

test('when', () => {
    expect(new i.EasyDate().when()).toBe(
        '0 years, 0 months, 0 days, 0 hours, 0 minutes, 0 seconds, 0 milliseconds, '
    )
})