import { TOGGLE_STATUS } from '../constants/index';

var initialState = {
  status: false,
  sort: {
    by: 'name',
    value: 1
  }
}

export const status = (state = initialState, action) => {
  if(action.type === TOGGLE_STATUS) {
    state.status = !state.status;
  }
  return state
}