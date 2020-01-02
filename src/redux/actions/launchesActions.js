import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export async function fetchLaunchesApi(params) {
  const { page = 1, limit = 5, search } = params;
  const query = `limit=${limit}&offset=${limit * page}${search ? `${'&search='}${search}` : ''}`;
  const response = await axios.get(`https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?${query}`);
  return response;
}

export async function fetchLaunchApi(id) {
  const response = await axios.get(`https://spacelaunchnow.me/api/3.3.0/launch/${id}`);
  return response;
}

function fetchLaunchesRequestSuccess(launches) {
  return {
    type: 'FETCH_LIST_SUCCESS',
    launches,
  };
}

export function fetchLaunchSuccess(data) {
  return {
    type: 'FETCH_LAUNCH_SUCCESS',
    launch: data,
  };
}

export function* requestLaunchesFromApi(params) {
  try {
    const data = yield call(fetchLaunchesApi, params.params);
    yield put(fetchLaunchesRequestSuccess(data.data));
  } catch (error) {
    console.error(error);
  }
}

export function* requestLaunchFromApi(param) {
  try {
    const data = yield call(fetchLaunchApi, param.id);
    yield put(fetchLaunchSuccess(data.data));
  } catch (error) {
    console.error(error);
  }
}

export function FetchLaunchesRequest(params) {
  return {
    type: 'FETCH_LIST',
    params,
  };
}


export function FetchLaunch(id) {
  return {
    type: 'FETCH_LAUNCH',
    id,
  };
}


export function* rootSaga() {
  yield [
    yield takeEvery('FETCH_LIST', requestLaunchesFromApi),
    yield takeEvery('FETCH_LAUNCH', requestLaunchFromApi),
  ];
}
