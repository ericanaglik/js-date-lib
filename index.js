class EasyDate {
    constructor(...args) {
        this.date = new Date(...args)
    }

    year() {
        return this.date.getFullYear();
    }

    month() {
        return this.date.getMonth();
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

}
