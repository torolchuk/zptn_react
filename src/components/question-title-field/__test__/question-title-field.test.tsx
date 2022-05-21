import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionTitleField } from '../question-title-field';
import { createQuestionTitleFieldDriver } from '../question-title-field.driver';
import { questionTitleFieldTestid as testids } from '../question-title-field.testid';

describe('<QuestionTitleField />', () => {
    it.skip('should render input field with proper default state', () => {
        const { container } = render(<QuestionTitleField />);
        const driver = createQuestionTitleFieldDriver(container);
        const inputEl = screen.getByTestId(testids.input()) as HTMLInputElement;
        expect(inputEl).toBeInTheDocument();
        expect(driver.getValue()).toBe('');
    });

    it.skip('should pass testid from props to root element', () => {
        const mockTestid = 'thisistestid';
        render(<QuestionTitleField testid={mockTestid} />);
        const rootEl = screen.getByTestId(mockTestid);
        expect(rootEl).toBeInTheDocument();
    })

    it.skip('should render input field with value passed in props', () => {
        const mockTitle = 'This is mock title';
        const { container } = render(<QuestionTitleField value={mockTitle} />);
        const driver = createQuestionTitleFieldDriver(container);
        expect(driver.getValue()).toBe(mockTitle);
    });

    it.skip('should fire change event when field is updated', () => {
        const mockTitle = 'This is mock title';
        const mockCallback = jest.fn();
        const { container } = render(<QuestionTitleField onChange={mockCallback} />);
        const driver = createQuestionTitleFieldDriver(container);
        driver.updateValue('mockTitle');
        expect(mockCallback).toBeCalled();
    });
});

