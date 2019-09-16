// Test away!

import React from 'react';

import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
    it('matches snapshot', () => {

        //* This generates a DOM tree from the Display.js *//
        const tree = renderer.create(<Display />); 

        expect(tree.toJSON()).toMatchSnapshot();
    });
});