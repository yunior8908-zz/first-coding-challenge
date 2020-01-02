/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import LaunchesList from '../components/launches/launchesList';
import { datosTest } from '../../utils';
import LaunchRow from "../components/launches/launchRow";

const mockStore = configureMockStore([]);
const datos = datosTest;

describe('[LaunchesList.js]', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      LaunchesReducers: {
        total: 1,
        launches: datos,
        loadingList: true,
      },
    });

    wrapper = mount(<BrowserRouter>
      <Provider store={store}>
        <LaunchesList />
      </Provider>
    </BrowserRouter>);
  });

  it('should LaunchesList render without problem', () => {
    const list = wrapper.find(LaunchesList);
    expect(toJson(list)).toMatchSnapshot();
    expect(list.exists()).toBeTruthy();
  });

  it('shoud LaunchRow render 1 element', () => {
    const launchRow = wrapper.find(LaunchRow);
    expect(launchRow).toHaveLength(1);
  })
});
