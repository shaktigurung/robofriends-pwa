import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

describe('SearchBox Component Testing', () => {
    it('expect to render SearchBox Component', () => {
        const mockSearchChange = "test"
        expect(shallow(<SearchBox searchChange={mockSearchChange} />)).toMatchSnapshot();
    })
})