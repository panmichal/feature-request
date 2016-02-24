import {SUBMIT_REQUEST, LOAD_REQUESTS, LOAD_CLIENTS, LOAD_AREAS} from 'actions/request-actions'
import uuid from 'node-uuid';

export default function (initialState) {
  return (state=initialState, action) => {
    switch(action.type) {
      case SUBMIT_REQUEST:
        const newRequest = {
          ...action.data,
          id: uuid.v4()
        }
        return Object.assign({}, state, { requests: [...state.requests, newRequest]
      });
      default:
        return state;
    }
  }
}
