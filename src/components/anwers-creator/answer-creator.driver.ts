import { createButtonDriver } from "../../elements/button/button.driver";
import { answerCreatorTestid as testids } from "./answer-creator.testid";

export const createAnswerCreatorDriver = (container: HTMLElement) => {
    const rootElement = container.querySelector(`[data-testid*='${testids.rootElement()}']`);
    if (!rootElement) throw new Error('failed to get root element for answerCreatorDriver');

    return ({
        rootElement,
        getEmptyStateEl: () => rootElement?.querySelector(`[data-testid*="${testids.emptyState()}"]`),
        getNewAnwerButtonDriver: () => {
            const newAnswerButtonEl = rootElement.querySelector(`[data-testid*="${testids.newAnswerButton()}"]`);
            return newAnswerButtonEl ? createButtonDriver(newAnswerButtonEl as HTMLElement) : null;
        },
        getAnswersFieldElList: () => {
            return Array.from(rootElement.querySelectorAll(`[data-testid*="${testids.answerField()}"]`) ?? []);
        }
    });
};