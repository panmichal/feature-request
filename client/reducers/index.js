import {SUBMIT_REQUEST, LOAD_REQUESTS, LOAD_CLIENTS, LOAD_AREAS} from 'actions/request-actions'

export default function (initialState) {
  return (state=initialState, action) => {
    switch(action.type) {
      case SUBMIT_REQUEST:
        return Object.assign({}, state, { requests: [...state.requests, { id: 5, title: 'Lorem new', description: 'a new one'}]
      });
      default:
        return state;
    }
  }
}
