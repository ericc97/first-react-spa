import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


afterEach(cleanup);


describe('Nav components', () => {
    // baseline test similar to test 1 in About 
    it('renders', () => {
        render(<Nav/>);
    });


    // snapshot test
    it('Matches Snapshot', () => {
        const { asFragment } = render(<Nav/>);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Emojis are visable', () => {
    it('Inserts emoji into <h2>', () => {
        // Arrange
        const { getByLabelText } = render(<Nav/>);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('Links are visible', () => {
    it('Inserts text into the links', () => {
        // we want to verify that text content is being inserted into the <a> tag's
        // Arrange 
        const { getByTestId } = render(<Nav />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
});

