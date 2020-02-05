import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

describe('Card Component Testing', () => {
    it('expect to render Card Component', () => {
        //expect(shallow(<Card />).length).toEqual(1);
        expect(shallow(<Card />)).toMatchSnapshot();
    })
})