import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Radio } from 'antd';
import Options from './Options';

configure({ adapter: new Adapter() });

describe('Test Options component', () => {
 const props = {
    question: 'Test question 1',
    options: ['option1', 'option2', 'option3', 'option4'],
    submitted: true,
    handleChange: jest.fn(),
    selected: 'option1',
  }; 

  it('Checks if Options component renders properly', () => {
    shallow(<Options {...props} />);
  });
    
  it('Checks elements inside Options component (radio group and radio items)', () => {
  const wrapper = shallow(<Options {...props} />);
    const radio = wrapper.find(Radio);
    const radioGroup = wrapper.find(Radio.Group);

    expect(radio).toHaveLength(4);
    expect(radioGroup).toHaveLength(1);
    expect(radio.exists()).toBeTruthy();
    expect(radioGroup.exists()).toBeTruthy();
  });
});
