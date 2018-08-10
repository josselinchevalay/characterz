import BaseAttribute from './baseAttribute';
import { without } from 'lodash';

export default class Attribute extends BaseAttribute {
    constructor(startingValue) {
        super(startingValue, 0);
        this.RawBonuses = [];
        this.TimeBonuses = [];
        this.FinalValue = startingValue;
    }

    addRawBonus(rawBonus) {
        this.RawBonuses.push(rawBonus);
    }

    addTimeBonus(timeBonus) {
        this.TimeBonuses.push(timeBonus);
        this.calculateFinalValue();
    }

    deleteRawBonus(rawBonus) {
        this.RawBonuses = without(this.RawBonuses, rawBonus);
    }

    deleteTimeBonus(timeBonus) {
        this.TimeBonuses = without(this.TimeBonuses, timeBonus);
        this.calculateFinalValue();
    }

    applyRawBonuses() {
        let rawBonus = 0;
        this.RawBonuses.forEach((bonus) => {
            rawBonus += bonus.BaseValue * (1 + bonus.BaseMultiplier);
        });
        return rawBonus;
    }

    applyTimeBonuses() {

    }
}