import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { AnswerCreator } from '../answer-creator';
import { createAnswerCreatorDriver } from '../answer-creator.driver';

const renderAndCreateDriver = (testElement: ReactElement) => {
    const { container } = render(testElement);
    const driver = createAnswerCreatorDriver(container); 
    return {
        container,
        driver,
    }
}

describe('<AnswerCreator />', () => {
    it('should render default empty state', () => {
        const { driver, container } = renderAndCreateDriver(<AnswerCreator />);
        const emptyStateEl = driver.getEmptyStateEl();
        expect(emptyStateEl).toBeInTheDocument();
        const addNewAnswerDriver = driver.getNewAnwerButtonDriver();
        expect (addNewAnswerDriver?.rootElement).toBeInTheDocument();
    });

    it.skip('should render answers list passed in props', () => {
        const mockAnswerList = [
            { name: 'First answer' },
            { name: 'Second one' },
            { name: 'Last option' },
        ]
        const renderEl = <AnswerCreator answersList={mockAnswerList} />;
        const { driver } = renderAndCreateDriver(renderEl);
        const emptyStateEl = driver.getEmptyStateEl();
        expect(emptyStateEl).not.toBeInTheDocument();
        const answerFieldElList = driver.getAnswersFieldElList();
        expect(answerFieldElList.length).toBe(mockAnswerList.length);
    })
});
