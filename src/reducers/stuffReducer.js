import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/actionTypes';

export default function stuff(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action')
      return action;
    case RECEIVE_STUFF:
      console.log('RECEIVE_STUFF Action')
      return action.stuff;
    default:
      console.log(state)
      return state;
  }
}
