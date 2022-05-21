import { composeTestidQuery } from './compose-testid-query';

describe('composeTestidQeury util function', () => {
    it('should return empty string if param is empty', () => {
        const dataTestid = composeTestidQuery('');
        expect(dataTestid).toBe("");
    });

    it('should return proper data-attr if param is single string', () => {
        const dataTestid = composeTestidQuery('uniq-testid');
        expect(dataTestid).toBe("[data-testid*='uniq-testid']");
    });

    it('should return proper data-attr if param is array of string', () => {
        const dataTestid = composeTestidQuery(['uniq-testid', 'another-testid', undefined, 'lastone-testid', undefined]);
        expect(dataTestid).toBe("[data-testid*='uniq-testid another-testid lastone-testid']");
    });
})