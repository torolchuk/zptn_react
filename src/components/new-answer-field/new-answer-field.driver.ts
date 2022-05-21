import { newAnswerFieldTestid as testids } from "./new-answer-field.testid";

export const createNewAnswerFieldDriver = (baseElement: HTMLElement) => {
    const rootElement = baseElement.querySelector(`[data-testid*="${testids.rootElement()}"]`)
    
    return ({
        rootElement,
    });
}