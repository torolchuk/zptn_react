import { render, screen } from '@testing-library/react';
import { Container } from '../container';

describe('<Container />', () => {
    it("should render child content", () => {
        const mockText = 'This is mock text';
        const mockChild = <div>{mockText}</div>;
        render(<Container>{mockChild}</Container>);

        const divElement = screen.getByText(mockText);
        expect(divElement).toBeInTheDocument();
    });

    it("should render children content", () => {
        const mockTextA = 'This is mock text A';
        const mockChildA = <div>{mockTextA}</div>;
        const mockTextB = 'And this is different text B';
        const mockChildB = <div>{mockTextB}</div>;
        render(<Container>
            {mockChildA}
            {mockChildB}
        </Container>);

        const divElementA = screen.getByText(mockTextA);
        const divElementB = screen.getByText(mockTextB);
        expect(divElementA).toBeInTheDocument();
        expect(divElementB).toBeInTheDocument();
    });
});
