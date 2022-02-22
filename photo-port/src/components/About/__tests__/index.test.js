// import react
import React from 'react';
// import react testing library
import { render, cleanup } from '@testing-library/react';
// import jest pre-DOM package 
import '@testing-library/jest-dom/extend-expect';
// import about component
import About from '..';
// render will render the component
// cleanup will remove components from the DOM to prevent memory leaking


// ensured no leftover memory data
afterEach(cleanup);

describe('About component', () => {
    // first test to verify component is running
    it('renders', () => {
        render(<About />)
    });
    // second test to compare versions of the DOM 
    it('Matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})