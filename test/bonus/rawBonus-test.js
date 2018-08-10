import { RawBonus } from '../../src/';

describe('RawBonus', () => {
    it('create new rawBonus', () => {
        let test = new RawBonus(100, 1);
        expect(test.BaseValue).toBe(100);
        expect(test.BaseMultiplier).toBe(1);
    });
});