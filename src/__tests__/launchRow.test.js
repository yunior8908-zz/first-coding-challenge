/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { datosTest } from '../utils';
import LaunchRow from '../components/launches/launchRow';

const props = datosTest[0];

describe('[LaunchRow.js]', () => {
  const wrapper = shallow(<LaunchRow {...props} />);
  it('should be td with name=LauncherOne | Test Flight', () => {
    const comp = wrapper.find('#name');
    expect(comp.text()).toBe('LauncherOne | Test Flight');
  });

  it('should be status-name="" if status is undefined', () => {
    const wrpr = shallow(<LaunchRow id="" name="" />);
    const comp = wrpr.find('#status-name');
    expect(comp.text()).toBe('');
  });
});
