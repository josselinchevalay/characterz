import RawBonus from './rawBonus';

export default class TimeBonus extends RawBonus {
    constructor(value, multiplier, timeToMillis) {
        super(value, multiplier);
        this.TimeToMillis = timeToMillis;
        this.state = "CREATED";
    }

    start() {
        let self = this;
        this.state = "STARTED";
        setTimeout(() => self.end(), this.TimeToMillis);
    }

    end() {
        this.started = false;
        this.state = "FINISHED";
        this.emit('finished', this);
    }
}