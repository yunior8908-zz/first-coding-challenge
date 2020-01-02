/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';
import HeaderComponent from '../components/headerComponent';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should be render without problem', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have headerComponent of child', () => {
    expect(wrapper.find(HeaderComponent).exists()).toBeTruthy();
  });
});
