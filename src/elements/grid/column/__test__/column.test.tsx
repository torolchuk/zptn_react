import { render, screen } from '@testing-library/react';
import { Column } from '../column';

describe('<Column />', () => {
    it("should render child content", () => {
        const mockText = 'This is mock text';
        const mockChild = <div>{mockText}</div>;
        render(<Column>{mockChild}</Column>);

        const divElement = screen.getByText(mockText);
        expect(divElement).toBeInTheDocument();
    });

    it("should render children content", () => {
        const mockTextA = 'This is mock text A';
        const mockChildA = <div>{mockTextA}</div>;
        const mockTextB = 'And this is different text B';
        const mockChildB = <div>{mockTextB}</div>;
        render(<Column>
            {mockChildA}
            {mockChildB}
        </Column>);

        const divElementA = screen.getByText(mockTextA);
        const divElementB = screen.getByText(mockTextB);
        expect(divElementA).toBeInTheDocument();
        expect(divElementB).toBeInTheDocument();
    });
});
