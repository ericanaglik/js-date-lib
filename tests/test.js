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
})