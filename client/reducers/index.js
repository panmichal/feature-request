import {ADD_REQUEST, LOAD_REQUESTS, SHOW_REQUESTS, SELECT_CLIENT, RESET_FORM, SHOW_ADD_FORM, HIDE_ADD_FORM} from 'actions/request-actions'
import uuid from 'node-uuid';

export default function (initialState) {
  return (state=initialState, action) => {
    switch(action.type) {
      case ADD_REQUEST:
        const newRequest = {
          ...action.data,
          id: uuid.v4()
        }
        return Object.assign({}, state, { requests: [...state.requests, action.data]});
      case SELECT_CLIENT:
        return Object.assign({}, state, { selectedClient: action.client  })
      case SHOW_REQUESTS:
        return Object.assign({}, state, { requests: action.requests}, { view: 'list' });
      case SHOW_ADD_FORM:
        return Object.assign({}, state, { view: 'form'});
      case HIDE_ADD_FORM:
        return Object.assign({}, state, { view: 'list'});
      case RESET_FORM:
        return state;
      default:
        return state;
    }
  }
}
