import { composeSelector } from './compose-selector';

const FIRST_TAG = 'base-tag';
const SECOND_TAG = 'secondary';
const THIRD_TAG = 'third-one';

describe('composeSelector', () => {
    it('should return an function if second does contain an argument', () => {
        const firstPass = composeSelector(FIRST_TAG);
        expect(typeof firstPass).toBe('function');
        const secondPass = firstPass(SECOND_TAG);
        expect(typeof secondPass).toBe('function');
        const thirdPass = secondPass(THIRD_TAG);
        expect(typeof thirdPass).toBe('function');
    });

    it('should return string if second call doesn\'nt contain any arguments', () => {
        const firstPass = composeSelector(FIRST_TAG);
        const firstPassResult = firstPass();
        
        const secondPassA = firstPass(SECOND_TAG);
        const secondPassAResult = secondPassA();

        const secondPassB = firstPass(SECOND_TAG + 'B');
        const secondPassBResult = secondPassB();
        
        const thirdPass = secondPassA(THIRD_TAG);
        const thirdPassResult = thirdPass();
        
        const forthPass = thirdPass(THIRD_TAG);
        const forthPassResult = forthPass();

        expect(firstPassResult).toBe(`${FIRST_TAG}`);
        expect(secondPassAResult).toBe(`${FIRST_TAG}__${SECOND_TAG}`);
        expect(thirdPassResult).toBe(`${FIRST_TAG}__${SECOND_TAG}__${THIRD_TAG}`);
        expect(secondPassBResult).toBe(`${FIRST_TAG}__${SECOND_TAG}B`);
        expect(forthPassResult).toBe(`${FIRST_TAG}__${SECOND_TAG}__${THIRD_TAG}__${THIRD_TAG}`);
    });
});