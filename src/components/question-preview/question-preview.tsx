import { FC } from "react";
import { Card, Heading, Text } from "../../elements";
import { PollQuestion } from "../../types/poll-question";

export interface QuestionPreviewProps {
    question: PollQuestion;
}

export const QuestionPreview: FC<QuestionPreviewProps> = ({ 
    question
}) => {
    const { title, options } = question; 

    return (
        <Card>
            <Heading type='h4' text={title} />
            {
                options.map(({ title, isRight }, i) => (
                    <div key={i}>{ title }</div>
                ))
            }
        </Card>
    )
}