import { required } from '../required';

describe('Validators: Required', () => {
    it('should return false if value is \'empty\'', () => {
        expect(required('')).toBe(false);
    });

    it('should always return true if value is not empty', () => {
        const results = [
            required('this is proper value'),
            required(250),
            required(0),
            required(0),
            required(true),
            required(false),
        ];

        expect(results.every(value => value === true)).toBe(true);
    });
});