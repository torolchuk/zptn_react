import { composeTestId } from "./testid";

describe('testid', () => {
    it('should return base testid tag', () => {
        const testid = composeTestId('button');
        expect(testid).toBe('button');
        expect(testid.split(' ').length).toBe(1);
    });

    it('should return joined base and params testid tag', () => {
        const testid = composeTestId('button', ['item_1', 'item_3']);
        expect(testid).toBe('button button__item_1 button__item_3');
        expect(testid.split(' ').length).toBe(3);
    });
})