import { render, screen } from '@testing-library/react';
import { Heading } from '../heading';

describe('<Heading />', () => {
    const mockText = 'Lorem ipsum.';
    it("should render proper text", () => {
        render(<Heading text={mockText} />);
        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent(mockText);
    });

    it("should render h1 element by default", () => {
        const { container } = render(<Heading text={mockText} />);
        const element = container.querySelector('h1');
        expect(element).toBeInTheDocument();
    });

    it("should render element type passed in props", () => {
        const mockType = 'h2';
        const { container } = render(<Heading text={mockText} type={mockType} />);
        const element = container.querySelector(mockType);
        expect(element).toBeInTheDocument();
    });
})
