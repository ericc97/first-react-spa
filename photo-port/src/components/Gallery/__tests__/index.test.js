import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'


const portrait = { name: 'Portraits', description: 'Portraits of people in my life' };

afterEach(cleanup);

describe('Should render the Gallery', () => {
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });

    it('Matches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />)
        expect(asFragment()).toMatchSnapshot()
    });
    
    // test to make sure the title of <h1> = portraits
    it('renders h1 text', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    })
})


