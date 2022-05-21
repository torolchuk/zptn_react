import { fireEvent } from "@testing-library/react";
import { questionTitleFieldTestid as testids } from "./question-title-field.testid"
const getInputElement = (baseElement: HTMLElement) => baseElement.querySelector(`[data-testid='${testids.input()}']`) as HTMLInputElement

export type QuestionTitleFieldDriver = ReturnType<typeof createQuestionTitleFieldDriver>;

export const createQuestionTitleFieldDriver = (baseElement: HTMLElement) => {
    const rootElement = baseElement.querySelector(`[data-testid="${testids.rootElement()}"]`);
    const inputElement = getInputElement(baseElement);
    return {
        rootElement, 
        getValue: () => inputElement.value,
        updateValue: (value: string) => fireEvent.change(inputElement, { target: { value } }),
    }
}