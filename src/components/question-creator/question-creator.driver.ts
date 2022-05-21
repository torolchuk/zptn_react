import { createButtonDriver } from "../../elements/button/button.driver";
import { createQuestionTitleFieldDriver } from "../question-title-field/question-title-field.driver";

import { questionCreatorTestid as testids } from "./question-creator.testid";

export type QuestionCreatorDriver = ReturnType<typeof createQuestionCreatorDriver>;

export const createQuestionCreatorDriver = (baseElement: HTMLElement) => {
    const titleFieldDriver = createQuestionTitleFieldDriver(baseElement.querySelector(`[data-testid="${testids.titleField}"]`) as HTMLElement);
    const addNewAnswerButtonDriver = createButtonDriver(baseElement.querySelector(`[data-testid="${testids.addNewAnswer()}"]`) as HTMLElement);
    return {
        getTitleFieldDriver: () => titleFieldDriver,
        getAddNewAnswerButtonDriver: () => addNewAnswerButtonDriver,
        
    }
}