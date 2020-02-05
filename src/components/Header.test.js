import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header Component Testing', () => {
    it('expect to render Header Component', () => {
        expect(shallow(<Header  />)).toMatchSnapshot();
    })
})