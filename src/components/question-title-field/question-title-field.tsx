import { FC, useState, useRef, useMemo } from "react";
import { required } from "../../utils/validators";
import { questionTitleFieldTestid as testids } from "./question-title-field.testid";

import './question-title-field.scss';
import { MultilineInput, MultilineInputChangeEvent } from "../../elements/multiline-input/multiline-input";

import { composeClassName } from "../../utils/compose-class-name/compose-class-name";
import { composeSelector } from "../../utils/compose-selector/compose-selector";

export type QuestionTitleChangeEvent = {
	value: string;
	valid: boolean;
};

export interface QuestionTitleFieldProps {
	value?: string;
	onChange?: (ev: QuestionTitleChangeEvent) => void;
	testid?: string;
	className?: string;
	autofocus?: boolean;
	forceValidation?: boolean;
}

const classNameRoot = composeSelector('zpt-questiontitlefield');

export const QuestionTitleField: FC<QuestionTitleFieldProps> = ({ 
	value='', 
	onChange,
	testid = '',
	className = '',
	forceValidation = false,
}) => {
	const [isTouched, setTouchedState] = useState<boolean>(false);

	const valid = useMemo(() => {
		return required(value);
	}, [value]) ?? false;

	const showError = !valid && (isTouched || forceValidation);

	const handleInputChange = (ev: MultilineInputChangeEvent) => {
		const { value } = ev;
		setTouchedState(true);
		if (onChange) onChange({ value, valid });
	}

	return (<>
		<div 
			className={composeClassName([className, classNameRoot('wrapper')()])}
			data-testid={`${testids.rootElement()} ${testid}`}>

			<MultilineInput 
				value={value} 
				className={classNameRoot('input')()}
				placeholder='Введіть ваше запитання...' 
				onChange={handleInputChange}
				autofocus
			/>
			{showError && <div className={classNameRoot('error-circle')()} />}
		</div>
	</>)
}