export const SET_IS_FINISHED_ARR = 'SET_IS_FINISHED_ARR';
export const CLEAR_IS_FINISHED_ARR = 'CLEAR_IS_ FINISHED_ARR';

export const setIsFinishedArr = indexUpdate => dispatch => {
  dispatch({
    type: SET_IS_FINISHED_ARR,
    indexUpdate: indexUpdate,
  });
};

export const clearIsFinishedArr = () => dispatch => {
  dispatch({
    type: CLEAR_IS_FINISHED_ARR,
  });
};
