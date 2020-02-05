import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('MainPage Component Testing', () => {
    let wrapper;
    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false
        }
        wrapper = shallow(<MainPage {...mockProps} />)  
    })

    it('renders MainPage without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('filters robots correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'john',
                email: 'john@gmail.com'
            }],
            searchField: 'a',
            isPending: false
        }
        const wrapper2 = shallow(<MainPage {...mockProps2} />)  
        expect(wrapper2.instance().filteredRobots([])).toEqual([]);
        expect(wrapper2.instance().filteredRobots([])).toEqual([])
    })
})