import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('CounterButton Component Testing', () => {
    it('expect to render CounterButton Component', () => {
        const mockColor = 'red'
        expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
    })

    it('correctly increments the counter', () => {
        const mockColor = 'red'
        const wrapper = shallow(<CounterButton color={mockColor} />);

        wrapper.find('[id="counter"]').simulate('click')
        expect(wrapper.state()).toEqual({count: 1});
    })
})