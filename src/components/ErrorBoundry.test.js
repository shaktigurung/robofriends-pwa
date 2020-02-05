import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';

describe('ErrorBoundry Component Testing', () => {
    it('expect to render ErrorBoundry Component', () => {
        expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
    })
})