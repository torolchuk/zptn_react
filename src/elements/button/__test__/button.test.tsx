import { fireEvent, render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { Button } from '../button';
import { createButtonDriver } from '../button.driver';

const renderButtonAndGetDriver = (buttonComponent: ReactElement) => {
    const { container } = render(buttonComponent);
    const driver = createButtonDriver(container);
    return { container, driver };
}

describe('<Button />', () => {
    const mockText = 'Button';
    const mockCallback = jest.fn();

    beforeEach(() => mockCallback.mockReset());
    
    test('Should render proper text', () => {
        render(<Button text={mockText} onClick={mockCallback}/>);
        const buttonEl = screen.getByRole('button');
        expect(buttonEl.textContent).toBe(mockText);
    });

    test('Should call callback on click', async () => {
        const buttonEl = <Button text={mockText} onClick={mockCallback} />;
        expect(mockCallback).toBeCalledTimes(0);
        const { driver } = renderButtonAndGetDriver(buttonEl);
        driver.click();
        expect(mockCallback).toBeCalledTimes(1);
    });
});
