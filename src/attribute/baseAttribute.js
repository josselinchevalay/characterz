import { EventEmitter } from 'events';

export default class BaseAttribute extends EventEmitter {
    constructor(value, multiplier) {
        super();
        this.BaseValue = value;
        this.BaseMultiplier = multiplier;
    }
}