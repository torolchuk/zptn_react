import { FC, useEffect, useRef, useState } from "react";
import { MultilineInput } from "../../elements/multiline-input/multiline-input";
import { composeClassName } from "../../utils/compose-class-name/compose-class-name";
import { composeSelector } from "../../utils/compose-selector/compose-selector";

import './new-answer-field.scss';

interface NewAnswerFieldOnBlurEvent {
    value: string;
}

export interface NewAnswerFieldProps {
    initialValue: string;
    active: boolean;
    onClick: () => void;
    onBlur: (event: NewAnswerFieldOnBlurEvent) => void;
    className?: string;
}

const classNameRoot = composeSelector('zpt-new-answer-field');

export const NewAnswerField: FC<NewAnswerFieldProps> = ({
    initialValue,
    onClick,
    onBlur,
    active,
    className = '',
}) => {
    const [value, setValue] = useState<string>(initialValue);
    const multilineInputRef = useRef<HTMLInputElement>(null);


    const handleElementBlur = () => { 
        onBlur({ value });
    }

    useEffect(() => {
        if (active) multilineInputRef.current?.focus();
    }, [active])

    return (
        <div 
            onClick={onClick}
            className={composeClassName({
                [className]: true,
                [classNameRoot('wrapper')()]: true,
                [classNameRoot('wrapper')('active')()]: active,
            })}    
        >
            <MultilineInput 
                className={classNameRoot('input')()}
                ref={multilineInputRef} 
                value={value} 
                onChange={({value}) => setValue(value)} 
                onBlur={handleElementBlur}
                disabled={!active} 
                placeholder='Введіть відповідь...' 
            />
        </div>
    );
}