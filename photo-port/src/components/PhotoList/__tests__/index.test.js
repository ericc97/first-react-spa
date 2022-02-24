import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhotoList from '../'


afterEach(cleanup)

describe('should render the photoList', () => {
    it('renders', () => {
        render(<PhotoList />)
    });

    it('renders PhotoList', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    })
})