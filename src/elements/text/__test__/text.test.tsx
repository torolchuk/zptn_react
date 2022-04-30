import { render, screen } from '@testing-library/react';
import { Text } from '../text';

describe('<Text />', () => {
    it('should render passed content', () => {
        const mockText = 'Hello world!';
        render(<Text text={mockText} />);
        const element = screen.getByText(/hello world/i);
        expect(element).toBeInTheDocument();
    })
})