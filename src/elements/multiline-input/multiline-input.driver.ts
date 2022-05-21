import fireEvent from "@testing-library/user-event";
import { composeTestidQuery } from "../../utils/testid";
import { multilineInputTestid as testids } from "./multiline-input.testid";

export type MultilineInputDriver = ReturnType<typeof createMultilineInputDriver>;

export const createMultilineInputDriver = (baseElement: HTMLElement) => {
    const rootElement = baseElement.querySelector<HTMLInputElement>(composeTestidQuery(testids.rootElement()));

    if (rootElement === null) throw new Error('Root element for MultilineInputDriver is missing.');

    return {
        rootElement,
        getValue: () => rootElement.innerText ?? '',
        setValue: (value: string) => {
            rootElement.focus();
            fireEvent.keyboard(value);
        }
    }
}