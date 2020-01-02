/* eslint-disable no-undef,no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchLaunchesApi } from '../redux/actions/launchesActions';
import LaunchesIndex from '../components/launches/launchesIndex';
import { configureStore } from '../redux/store';
import { datosTest } from '../utils';

jest.mock('axios');

describe('[LaunchesIndex.js]', async () => {
  beforeEach(() => {
    jest.resetAllMocks();
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        results: datosTest,
        count: 1,
      },
    }));
  });

  it('get list results', async () => {
    const a = await fetchLaunchesApi({});
    expect(a.data).toEqual({
      results: datosTest,
      count: 1,
    });
  });

  it('should be called api', async () => {
    const wrapper = mount(
      <BrowserRouter>
        <Provider store={configureStore()}>
          <LaunchesIndex />
        </Provider>
      </BrowserRouter>,
    );
    expect(axios.get).toHaveBeenCalledWith('https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?limit=5&offset=5');
  });
});
