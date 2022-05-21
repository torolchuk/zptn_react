import { fireEvent } from "@testing-library/react";
import { buttonTestid as testids } from "./button.testid"

export type ButtonDriver = ReturnType<typeof createButtonDriver>;

export const createButtonDriver = (baseElement: HTMLElement) => {
    const rootElement = baseElement.querySelector(`[data-testid*='${testids.button()}']`) as HTMLButtonElement;
    
    return {
        rootElement,
        click: () => fireEvent.click(rootElement),
    }
}