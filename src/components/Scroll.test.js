import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

describe('Scroll Component Testing', () => {
    it('expect to render Scroll Component', () => {
        expect(shallow(<Scroll />)).toMatchSnapshot();
    })
})