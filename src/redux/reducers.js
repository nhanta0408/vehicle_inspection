import {SET_IS_FINISHED_ARR} from './actions';
import {CLEAR_IS_FINISHED_ARR} from './actions';

const initialState = {
  isFinishedArr: [false, false, false, false],
};

function isFinishedReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_FINISHED_ARR:
      console.log('Nhảy vô reducer', state.isFinishedArr);
      let newIsFinishedArr = [...state.isFinishedArr];
      newIsFinishedArr[action.indexUpdate - 1] = true;
      console.log('New state', newIsFinishedArr);
      return {isFinishedArr: newIsFinishedArr};
    case CLEAR_IS_FINISHED_ARR:
      newIsFinishedArr = [false, false, false, false];
      console.log('New state', newIsFinishedArr);
      return {isFinishedArr: newIsFinishedArr};
    default:
      return state;
  }
}

export default isFinishedReducer;
