const initialState = {
  launches: [],
  total: 0,
  launch: {},
  loadingList: false,
  loadingLaunch: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return {
        ...state, loadingList: true,
      };
    case 'FETCH_LIST_SUCCESS':
      return {
        ...state,
        launches: action.launches.results,
        total: action.launches.count,
        loadingList: false,
      };
    case 'FETCH_LAUNCH':
      return {
        ...state, loadingLaunch: true,
      };
    case 'FETCH_LAUNCH_SUCCESS':
      return {
        ...state, launch: action.launch, loadingLaunch: false,
      };
    default:
      return state;
  }
};
