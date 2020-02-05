import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

describe('CardList Component Testing', () => {
    it('expect to render CardList Component', () => {
        const mockRobots = [
            {
                id: 1,
                name: 'John Doe',
                username: 'johndoe',
                email: 'johndoe@gmail.com'
            }
        ]
        expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
    })
})