import { TimeBonus } from '../../src';

describe("timeBonus", () => {
    it("create final bonus", () => {
        let test = new TimeBonus(2, 0.5, 10 * 60);
        expect(test.BaseValue).toBe(2);
        expect(test.BaseMultiplier).toBe(0.5);
        expect(test.TimeToMillis).toBe(600);
        expect(test.state).toBe("CREATED");
    });

    it("test event finished", async() => {
        let test = new TimeBonus(2, 0.5, 10 * 60);
        test.start();
        test.on('finished', (obj) => {
            expect(obj.BaseValue).toBe(2);
            expect(obj.finished).toBe("FINISHED");
        });
    });
});