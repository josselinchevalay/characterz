import { BaseAttribute } from '../../src/';

describe('BaseAttribute', () => {
    it('create new baseAttribute', () => {
        let test = new BaseAttribute(100, 1);
        expect(test.BaseValue).toBe(100);
        expect(test.BaseMultiplier).toBe(1);
    });
});