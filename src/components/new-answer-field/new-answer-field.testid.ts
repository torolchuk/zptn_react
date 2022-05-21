import { composeSelector } from "../../utils/compose-selector/compose-selector";

const testidBase = composeSelector('newanswerfield');

export const newAnswerFieldTestid = {
    rootElement: testidBase('root-element'),
}