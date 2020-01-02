/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import { datosTest } from '../utils';
import LaunchDetails from '../components/launches/launchDetails';
import { fetchLaunchApi } from '../redux/actions/launchesActions';

const mockStore = configureStore([]);
jest.mock('axios');

describe('[launchDetails.js]', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        results: datosTest[0],
      },
    }));

    store = mockStore({
      LaunchesReducers: {
        launch: datosTest[0],
        loadingLaunch: false,
      },
    });

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <LaunchDetails match={{ params: { id: datosTest[0].id } }} />
        </Provider>
      </BrowserRouter>,
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.resetAllMocks();
  });

  it('should have name=LauncherOne | Test Flight', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    const comp = wrapper.find('#name').find('span');
    expect(comp.text()).toBe('LauncherOne | Test Flight');
  });

  it('should expect somthing from click', () => {
    expect(wrapper.find('#button-back').first().props().to).toBe('/launches');
  });

  it('shoud be fetch datosTest[0]', async () => {
    const a = await fetchLaunchApi();
    expect(a.data).toEqual({
      results: datosTest[0],
    });
  });
});
