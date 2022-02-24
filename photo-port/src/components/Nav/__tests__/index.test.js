import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);


describe('Renders Nav components', () => {
    // baseline test similar to test 1 in About 
    it('renders', () => {
        render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        />);
    });


    // snapshot test
    it('Matches Snapshot', () => {
        const { asFragment } = render(<Nav
                                    categories={categories}
                                    setCurrentCategory={mockSetCurrentCategory}
                                    currentCategory={mockCurrentCategory}
                                    />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Emojis are visable', () => {
    it('Inserts emoji into <h2>', () => {
        // Arrange
        const { getByLabelText } = render(<Nav
                                        categories={categories}
                                        setCurrentCategory={mockSetCurrentCategory}
                                        currentCategory={mockCurrentCategory}
            />);
        // Assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('Links are visible', () => {
    it('Inserts text into the links', () => {
        // we want to verify that text content is being inserted into the <a> tag's
        // Arrange 
        const { getByTestId } = render(<Nav
                                        categories={categories}
                                        setCurrentCategory={mockSetCurrentCategory}
                                        currentCategory={mockCurrentCategory}
                                        />);
        // Assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
});

