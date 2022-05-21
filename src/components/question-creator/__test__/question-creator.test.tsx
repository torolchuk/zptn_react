import { render, screen } from '@testing-library/react';
import { QuestionCreator } from '../question-creator';
import { createQuestionTitleFieldDriver } from '../../question-title-field/question-title-field.driver';
import { questionCreatorTestid as testids } from '../question-creator.testid';

describe('<QuestionCreator />', () => {
    it.skip('should render all default fields', () => {
        const { container } = render(<QuestionCreator />);

        const titleFieldEl = screen.getByTestId(testids.titleField()) as HTMLElement;
        expect(titleFieldEl).toBeInTheDocument();

        const titleFieldDriver = createQuestionTitleFieldDriver(container);
        expect(titleFieldDriver.getValue()).toBe('');

        const saveButtonEl = screen.getByTestId(testids.save()) as HTMLButtonElement;
        expect(saveButtonEl).toBeInTheDocument();
        expect(saveButtonEl.disabled).toBe(true);

        const addNewAnswerEl = screen.getByTestId(testids.addNewAnswer()) as HTMLButtonElement;
        expect(addNewAnswerEl).toBeInTheDocument();
        expect(addNewAnswerEl.disabled).toBe(false);
        
        const revertButtonEl = screen.getByTestId(testids.revert()) as HTMLButtonElement;
        expect(revertButtonEl).not.toBeInTheDocument();
    });
});
