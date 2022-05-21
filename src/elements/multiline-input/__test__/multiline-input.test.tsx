import { render, screen } from '@testing-library/react';
import { MultilineInput } from '../multiline-input';
import { createMultilineInputDriver } from '../multiline-input.driver';

describe('<MultilineInput />', () => {
    it('should render an element with a proper default state', () => {
        // const mockPlaceholder = 'This is my mock placeholder.';
        const { container } = render(<MultilineInput />);
        const driver = createMultilineInputDriver(container);
        expect(driver.getValue()).toBe('');
        
        // TODO: check if it's possible to catch after element in our test
        // const placeholderEl = screen.getByText(mockPlaceholder);
        // expect(placeholderEl).toBeInTheDocument();
    });

    it('should render proper value that is passed from props',  () => {
        const mockValue = 'value';
        const { container, baseElement } = render(<MultilineInput value={mockValue} />);
        const driver = createMultilineInputDriver(container);
        expect(driver.getValue()).toBe(mockValue);

        // TODO: find the way to wait for react rerender cycle
        // const matchedEl = screen.getByText(mockValue);
        // expect(matchedEl).toBeInTheDocument();
    });

    it('should fire an event when value is changed', () => {
        const mockValue = 'this is my mock value...';
        const mockCallback = jest.fn();
        const { container } = render(<MultilineInput value={mockValue} onChange={mockCallback} />);
        const driver = createMultilineInputDriver(container);
        driver.setValue(mockValue);

        expect(mockCallback).toBeCalled();
    });

    // TODO: Look up. Same shit as in previous one (get after element by text issue)
    it.skip('should hide placeholder after value has been passed', () => {
        const mockValue = 'this is my mock value';
        const mockPlaceholder = 'this is my mock value';
        const { container } = render(<MultilineInput placeholder={mockPlaceholder} />);
        const driver = createMultilineInputDriver(container);
        
        expect(screen.getByText(mockPlaceholder)).toBeInTheDocument();

        driver.setValue(mockValue);
        expect(screen.getByText(mockPlaceholder)).not.toBeInTheDocument();
    });

    it('should not focus element on mount if autofocus props is not passed', () => {
        const { container } = render(<MultilineInput />);
        const driver = createMultilineInputDriver(container);

        expect(document.activeElement).not.toBe(driver.rootElement);
    });

    it('should focus element on mount if autofocus props is passed', () => {
        const { container } = render(<MultilineInput autofocus />);
        const driver = createMultilineInputDriver(container);

        expect(document.activeElement).toBe(driver.rootElement);
    });

    it('should pass className to rootElement if related props is passed', () => {
        const mockClassName = 'class_name';
        const { container } = render(<MultilineInput className={mockClassName} />);
        const driver = createMultilineInputDriver(container);

        expect(driver.rootElement.classList.contains(mockClassName)).toBe(true);
    });

    it('should prevent value update if disabled props is passed', () => {
        const mockValue = '';
        const mockKeyboardEvent = 'Mock';
        const mockCallback = jest.fn();
        
        const { container } = render(<MultilineInput value={mockValue} onChange={mockCallback} disabled />);
        const driver = createMultilineInputDriver(container);

        driver.setValue(mockKeyboardEvent);
        expect(driver.getValue()).toBe(mockValue);
        expect(mockCallback).not.toBeCalled();
    })
});
