import { render, screen } from '@testing-library/react';
import { Card } from '../card';

describe('<Card />', () => {
    it('should render passed content', () => {
        const mockContent = (
            <div>
                Hello world!
            </div>
        );
        render(<Card>{mockContent}</Card>);
        const element = screen.getByText(/hello world/i);
        expect(element).toBeInTheDocument();
    })
})