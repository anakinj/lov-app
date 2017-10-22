import * as types from './actionTypes';

export function fetchStuff() {
  return { type: types.RECEIVE_STUFF, stuff: ['test'] }
}
