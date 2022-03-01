import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park Bench',
    category: 'Landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);

describe('Modal Component', () => {
    it('renders modal', () => {
        // baseline render component test
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
    })
    // snapshot test
    it('Matches structure of DOM node', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);

            expect(asFragment()).toMatchSnapshot();
    })

})

describe('Click Event', () => {
    it('Calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
            fireEvent.click(getByText('Close this modal'))

            expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})