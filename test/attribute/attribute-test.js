import { Attribute, RawBonus } from '../../src/';

describe('Attribute', () => {
    it('create new attribute', () => {
        let test = new Attribute(100);
        expect(test.BaseValue).toBe(100);
        expect(test.BaseMultiplier).toBe(0);
    });

    describe('RawBonus', () => {
        it('add a rawBonus', () => {
            let strength = new Attribute(100);
            let sword = new RawBonus(10, 0.5);
            strength.addRawBonus(sword);
            expect(strength.RawBonuses.length).toBe(1);
        });
        it('delete a rawBonus', () => {
            let strength = new Attribute(100);
            let sword = new RawBonus(10, 0.5);
            strength.addRawBonus(sword);
            expect(strength.RawBonuses.length).toBe(1);
            strength.deleteRawBonus(sword)
            expect(strength.RawBonuses.length).toBe(0);
        });
        it('apply a rawBonus', () => {
            let strength = new Attribute(100);
            let sword = new RawBonus(10, 0.5);
            strength.addRawBonus(sword);
            expect(strength.applyRawBonuses()).toBe(15);
        });
    });

});