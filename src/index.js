var monthNames = [
    "January", "February", "March", "April", "May","June",
    "July", "August", "September", "October", "November",
    "December"
];


class EasyDate {
    constructor(...args) {
        this.date = new Date(...args)
        this.conversions = {
            'Y': this.year(),
            'y': String(this.year()).slice(2),
            'M': this.month(),
            'm': this.month().slice(0,3),
            'D': String(this.day()).padStart(2, '0'),
            'd': this.day(),
            'H': String(this.hours()).padStart(2, '0'),
            'h': this.hours(),
            'I': String(this.minutes()).padStart(2, '0'),
            'i': this.minutes(),
            'S': String(this.seconds()).padStart(2, '0'),
            's': this.seconds()
        };
    }

    year() {
        return this.date.getFullYear();
    }

    month() {
        return monthNames[this.date.getMonth()];
    }

    day() {
        return this.date.getDate();
    }

    hours() {
        return this.date.getHours();
    }

    minutes() {
        return this.date.getMinutes();
    }

    seconds() {
        return this.date.getSeconds();
    }

    milliseconds() {
        return this.date.getMilliseconds();
    }

    getTime() {
        return this.date.getTime();
    }

    format(str='Y M D') {
        let formatted = '';
        var i;

        for (i in str) {
            let char = str[i];
            if (char in this.conversions) {
                formatted += this.conversions[char];
            }
            else {
                formatted += char;
            }
        }
        return formatted;
    }

    when() {
        let time_in_milliseconds = {
            'year': 31536000000,
            'month': 2628000000,
            'day': 86400000,
            'hour': 3600000,
            'minute': 60000,
            'second': 1000,
            'millisecond': 1
        };
        let now = new Date()
        let old_remains = now - this.date
        let output = ''
        Object.keys(time_in_milliseconds).forEach(function(interval) {
            let milli_in_current = time_in_milliseconds[interval]
            let remains = old_remains % milli_in_current
            let num_current =  (old_remains - remains) / milli_in_current
            old_remains = remains

            output += num_current + ' ' + interval + 's, '
        })

        return output
    }

};
module.exports.EasyDate = EasyDate

// var ed = new EasyDate(2019, 11, 8, 10, 10, 10, 1)
// console.log(ed.when())
