import { composeSelector } from "../../utils/compose-selector/compose-selector"

const answerCreatorBase = composeSelector('zptanswer-creator');

export const answerCreatorTestid = {
    rootElement: answerCreatorBase('root-element'),
    emptyState: answerCreatorBase('empty-state'),
    newAnswerButton: answerCreatorBase('new-answer-button'),
    answerField: answerCreatorBase('answer-field')
}
