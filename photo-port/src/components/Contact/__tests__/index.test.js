import React from 'react';
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'
import Contact from '..'

afterEach(cleanup)

describe('Renders Contact components', () => {
    it('renders', () => {
        render(<Contact/>);
    });

    it('Matches Snapshot', () => {
        const { asFragment } = render(<Contact/>)
        expect(asFragment()).toMatchSnapshot()
    });

    it('renders <h1> tag', () => {
        const { getByTestId } = render(<Contact />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
    })

    it('renders the submit button', () => {
        const {getByTestId} = render(<Contact />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('button')).toHaveTextContent('submit')
    })
})

