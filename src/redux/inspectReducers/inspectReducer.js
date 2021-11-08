import {
  INSPECT_LOADING,
  INSPECT_FAILED,
  INSPECT_SUCCESSFUL,
  INSPECT_FINISH,
} from './inspectActions';

const API_URL = 'https://61762f8e03178d00173daaac.mockapi.io/inspect/result';
const initialState = {
  stateType: 'Idle',
  error: null,
  resultArr: [false, false, false, false],
};

function inspectReducer(state = initialState, action) {
  switch (action.type) {
    case INSPECT_LOADING:
      console.log('Vào loading ');
      return {
        ...state,
        stateType: 'Loading',
        loading: true,
      };
    case INSPECT_SUCCESSFUL:
      console.log('Vào Success và có result là: ', action.result);
      return {
        ...state,
        stateType: 'Successful',
        resultArr: action.result,
      };
    case INSPECT_FAILED:
      console.log('Vào Failed ');
      return {
        ...state,
        stateType: 'Failed',
        error: 'Fetch loi',
      };
    case INSPECT_FINISH:
      return {
        ...state,
        stateType: 'Idle',
      };
    default:
      return state;
  }
}

export default inspectReducer;
