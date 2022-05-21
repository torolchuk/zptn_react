import { ChangeEvent, FC, useState } from "react";
import { Button } from "../../elements";
import { PollAnswer } from "../../types/poll-answer";
import { PollQuestion } from "../../types/poll-question";
import { QuestionTitleChangeEvent, QuestionTitleField } from "../question-title-field/question-title-field";
import { questionCreatorTestid as testids } from "./question-creator.testid";
import { composeClassName } from "../../utils/compose-class-name/compose-class-name";
import { composeSelector } from "../../utils/compose-selector/compose-selector";
import { AnswerCreator } from "../anwers-creator/answer-creator";

import './question-creator.scss';

export interface QuestionCreatorProps {
    questionModel?: PollQuestion;
    className?: string;
}

const rootClassName = composeSelector('zpt-questioncreator');

export const QuestionCreator: FC<QuestionCreatorProps> = ({ 
    questionModel = {},
    className = '',
}) => {
    const { title: prevTitle, options: prevOptions } = questionModel;
    const [title, setTitle] = useState<string>(prevTitle ?? '');

    const handleTitleChange = (ev: QuestionTitleChangeEvent) => {
        const { value } = ev;
        setTitle(value);
    }

    return (
        <div className={composeClassName([rootClassName('wrapper')(), className])}>
            <div className={composeClassName(rootClassName('top-drawer')())}>
                <QuestionTitleField 
                    value={title} 
                    onChange={handleTitleChange} 
                    testid={testids.titleField()} 
                    className={composeClassName(rootClassName('title-box')())}
                    autofocus 
                />
                <AnswerCreator onChange={() => {}} />
            </div>
            <div className={composeClassName(rootClassName('bottom-drawer')())}>
                <Button 
                    text='Зберегти'
                    onClick={() => {}}
                />
            </div>
        </div>
    );
}
