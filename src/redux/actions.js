export const SET_IS_FINISHED_ARR = 'SET_IS_FINISHED_ARR';

export const setIsFinishedArr = indexUpdate => dispatch => {
  dispatch({
    type: SET_IS_FINISHED_ARR,
    indexUpdate: indexUpdate,
  });
};
