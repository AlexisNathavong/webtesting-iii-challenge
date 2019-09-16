// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';


import Controls from './Controls';

describe('<Controls />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);

        expect(tree.toJSON()).toMatchSnapshot();

    });

    it("displays if gate is open/close and if it is locked/unlocked", () => {
        const mockOpen = jest.fn();
        const mockLock = jest.fn();

        const wrapper = render(<Controls toggleLocked={mockLock} toggleClosed={mockOpen} />)

        const openBtn = wrapper.getByText('Close Gate')

        const lockBtn = wrapper.getByText('Lock Gate')

            fireEvent.click(lockBtn);
       

            fireEvent.click(openBtn);

       

        expect(mockLock).not.toHaveBeenCalled();
        expect(mockOpen).toBeCalled();
    })

    
})