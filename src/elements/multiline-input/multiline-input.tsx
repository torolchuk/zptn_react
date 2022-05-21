import { FC, useEffect, useRef, useMemo, forwardRef, MutableRefObject } from "react";
import { composeTestidQuery } from "../../utils/testid";
import { multilineInputTestid as testids } from "./multiline-input.testid";
import { composeClassName } from "../../utils/compose-class-name/compose-class-name";
import { composeSelector } from "../../utils/compose-selector/compose-selector";

import './multiline-input.scss';

export type MultilineInputChangeEvent = {
    value: string;
}

export interface MultilineInputProps {
    value?: string;
    placeholder?: string;
    autofocus?: boolean;
    disabled?: boolean;
    className?: string;
    title?: string;
    testid?: string;
    onChange?: (event: MultilineInputChangeEvent) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const classNameRoot = composeSelector('zpt-multilineinput');
const rootElementClassName = classNameRoot('root-element');

export const MultilineInput = forwardRef<HTMLDivElement, MultilineInputProps>(({ 
    value = '',
    onChange,
    placeholder,
    title,
    className = '',
    autofocus = false,
    disabled = false,
    testid = '',
    onFocus,
    onBlur,
}, forwardedRef) => {
    const elementRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (forwardedRef && elementRef.current) 
            (forwardedRef as MutableRefObject<HTMLDivElement>).current = elementRef.current;
    }, [elementRef]);

    useEffect(() => {
        if (autofocus) elementRef.current?.focus();
    }, []);
    
    useEffect(() => {
        if (!elementRef.current) return;
        const currentContent = elementRef.current.innerText;
        if (currentContent === value) return;
        elementRef.current.innerText = value;
        
        moveCursorToTheEndOfField();
    }, [value]);

    function moveCursorToTheEndOfField() {
		let selection = document.getSelection();

		if (!selection) return;

		let range = document.createRange();

        if (!elementRef?.current?.childNodes[0]) return;

		const startPos = elementRef.current.childNodes[0] as ChildNode;
		const endPos = elementRef.current.innerText?.length || 0;
		range.setStart(startPos, endPos);
		range.collapse(true);
		selection.removeAllRanges();
		selection.addRange(range);
	}

    const handleInputEvent = () => {
        if (!elementRef.current) return;
        const newValue = elementRef.current.innerText;
        
        if (onChange) onChange({ value: newValue });        
    }

    const composedRootElementClassName: string = useMemo(() => {
        return composeClassName({
            [className]: !!className,
            [rootElementClassName()]: true,
            [rootElementClassName('not-empty')()]: value !== '',
        })
    }, [className, value]);
    
    return (
        <div
            className={composedRootElementClassName}
            contentEditable={!disabled}
            title={title}
            ref={elementRef}
            onInput={handleInputEvent}
            onFocus={onFocus}
            onBlur={onBlur}
            data-placeholder={placeholder}
            data-testid={composeTestidQuery([testid, testids.rootElement()])}
        />
    );
}
)