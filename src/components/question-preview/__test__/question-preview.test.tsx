import { render, screen } from "@testing-library/react";
import { PollQuestion } from "../../../types/poll-question";
import { QuestionPreview } from "../question-preview";

describe('<QuestionPreview />', () => {
    it('should render proper title and options', () => {
        const mockQuestion: PollQuestion = {
            title: 'Mock question',
            options: [
                {
                    title: 'Mock answer',
                    isRight: false,
                },
                {
                    title: 'Mock answer B',
                    isRight: true,
                }
            ]
        }
        render(<QuestionPreview question={mockQuestion} />);
        const titleEl = screen.getByText(mockQuestion.title);
        expect(titleEl).toBeInTheDocument();
    });
});