import {CLEAR_IS_FINISHED_ARR} from '../finishedReducers/isFinishedActions';

export const INSPECT_LOADING = 'INSPECT_LOADING';
export const INSPECT_SUCCESSFUL = 'INSPECT_SUCCESSFUL';
export const INSPECT_FAILED = 'INSPECT_FAILED';
export const INSPECT_FINISH = 'INSPECT_FINISH';
const API_URL = 'https://61762f8e03178d00173daaac.mockapi.io/inspect/result';

export const inspect_request = () => {
  try {
    return async dispatch => {
      dispatch({type: INSPECT_LOADING});
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      });
      const json = await response.json();
      if (json) {
        dispatch({type: INSPECT_SUCCESSFUL, result: json.result});
      } else {
        dispatch({type: INSPECT_FAILED});
      }
    };
  } catch (err) {
    console.log(err);
  }
};

export const inspect_finish = () => dispatch => {
  dispatch({type: INSPECT_FINISH});
  dispatch({type: CLEAR_IS_FINISHED_ARR});
};
