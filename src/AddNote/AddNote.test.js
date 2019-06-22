import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddNote from './AddNote'

//refactor to add support for context testing
describe(`AddNote component`, () => {
    it.skip('renders without crashing', () => {
        const wrapper = shallow(<AddNote />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});