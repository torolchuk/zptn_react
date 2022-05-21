import { composeClassName } from "./compose-class-name";

describe('composeClassName', () => {
    it('should return an simple string if argument is a string', () => {
        const className = composeClassName('1');
        expect(className).toBe('1');
    });
    
    it('should return an joined array of strings if argument is an array', () => {
        const className = composeClassName(['1', '2', undefined, '3']);
        expect(className).toBe('1 2 3');
    });

    it('should return an filtered string if argument is an collection of string to boolean relations', () => {
        const classNameA = composeClassName({
            '1': true,
            '2': false,
            '3': true
        });
        expect(classNameA).toBe('1 3');

        const classNameB = composeClassName({
            '1': true,
            '2': true,
            '3': true
        });
        expect(classNameB).toBe('1 2 3');
    });
});