import { FC, useEffect, useState } from "react";
import { Button } from "../../elements";
import { composeClassName } from "../../utils/compose-class-name/compose-class-name";
import { answerCreatorTestid as testids } from "./answer-creator.testid";
import { uniqueId } from 'lodash';
import { NewAnswerField } from "../new-answer-field/new-answer-field";

import './answer-creator.scss';
import { composeSelector } from "../../utils/compose-selector/compose-selector";

const classNameRoot = composeSelector('zpt-answer-creator');

const EmptyStateEl = ({ onClick }: { onClick: () => void }) => (
    <div className={classNameRoot('empty-state')()}>
        Це запитання поки пусте,
        <Button role='secondary' text='додай свой варіант відповіді!' onClick={onClick} />
    </div>
)

type AnswersProtoItem = {
    name: string;
}

type AnswersProtoList = Record<string, AnswersProtoItem>;

export interface AnswerCreatorChangeEvent {
    items: AnswersProtoItem[];
}

export interface AnswerCreatorProps {
    answersList?: AnswersProtoItem[];
    dataTestid?: string;
    className?: string;
    onChange?: (event: AnswerCreatorChangeEvent) => void;
}

export const AnswerCreator: FC<AnswerCreatorProps> = ({ 
    answersList,
    dataTestid,
    className,
    onChange,
}) => {
    const [answers, setAnswers] = useState<AnswersProtoList>({});
    const [activeFieldId, setActiveFieldId] = useState<string>('');

    useEffect(() => {
        if (!answersList) return;
        const answersWithKeys: Record<string, AnswersProtoItem> = {};
        answersList.forEach(answer => {
            const newId = uniqueId();
            answersWithKeys[newId] = answer;
        });

        setAnswers(answersWithKeys);
    }, [answersList]);


    useEffect(() => {
        const answersList = Object.values(answers);
        if (onChange) onChange({items: answersList});
    }, [answers])

    const answersRenderList = Object.keys(answers).map(key => ({ key, model: answers[key] }));
    const showEmptyState = answersRenderList.length === 0;
    

    const handleAddNewAnswerClick = () => {
        const key = uniqueId('newanswerfield');
        setAnswers({
            ...answers,
            [key]: {
                name: '',
            }
        });
        setActiveFieldId(key);
    } 

    return (
        <div 
            className={composeClassName([className, classNameRoot('wrapper')()])}
            data-testid={composeClassName([dataTestid, testids.rootElement()])}
        >
            { showEmptyState && <EmptyStateEl onClick={handleAddNewAnswerClick} /> }
            { !showEmptyState && 
            <>
                <div className={classNameRoot('options-container')()}> 
                    { answersRenderList.map(({ key, model }, index) => {
                        const sIndex = answersRenderList.findIndex(({key}) => key === activeFieldId);
                        const moveUp = sIndex !== -1 && sIndex < index;
                        const moveDown = sIndex !== -1 && sIndex > index;
                        return (<NewAnswerField 
                            className={composeClassName({
                                [classNameRoot('option-item')()]: true,
                                [classNameRoot('option-item')('move-up')()]: moveUp,
                                [classNameRoot('option-item')('move-down')()]: moveDown,
                            })}
                            key={key}
                            active={activeFieldId === key}
                            initialValue={model.name}
                            onClick={() => {
                                console.log('click! ', key);
                                setActiveFieldId(key)
                            }} 
                            onBlur={({ value }) => {
                                if (!value) {
                                    const filteredAnswers = { ...answers };
                                    delete filteredAnswers[key];
                                    setAnswers(filteredAnswers);
                                } else {
                                    console.log('blured! ', key);
                                    const changedAnswers = { ...answers };
                                    changedAnswers[key] = { 
                                        ...answers[key],
                                        name: value,
                                    };
                                    setAnswers(changedAnswers);
                                }
                                setActiveFieldId('');
                            }}
                        />)}
                    ) }
                </div>
                <Button 
                    text='Add new answer option...'
                    role='secondary'
                    onClick={handleAddNewAnswerClick}
                    testid={testids.newAnswerButton()}
                />
            </>
        }
        </div>
    );
}