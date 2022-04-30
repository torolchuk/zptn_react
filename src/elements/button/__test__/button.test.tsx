import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('<Button />', () => {
    const mockText = 'Button';
    const mockCallback = jest.fn();
    
    test('Should render proper text', () => {
        render(<Button text={mockText} onClick={mockCallback}/>);
        const buttonEl = screen.getByRole('button');
        expect(buttonEl.textContent).toBe(mockText);
    });

    test('Should call callback on click', async () => {
        expect(mockCallback).toBeCalledTimes(0);
        render(<Button text={mockText} onClick={mockCallback}/>)
        const btnText = screen.getByRole('button');
        fireEvent.click(btnText);
        expect(mockCallback).toBeCalledTimes(1);
    });
});
