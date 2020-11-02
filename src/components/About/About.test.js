import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import About from './About';

configure({ adapter: new Adapter() });

describe('Test About component', () => {
 it('Checks if About component renders properly', () => {
   shallow(<About />);
 });

 it('Checks if About component renders a paragraph', () => {
   const wrapper = shallow(<About />);
   expect(wrapper.find("p").length).toEqual(2);
 });
});
