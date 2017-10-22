import initialState from './initialState';
import { FETCH_STUFF, RECEIVE_STUFF } from '../actions/actionTypes';

export default function stuff(state = initialState.stuff, action) {
  switch (action.type) {
    case FETCH_STUFF:
      return action;
    case RECEIVE_STUFF:
      return action.stuff;
    default:
      return state;
  }
}
