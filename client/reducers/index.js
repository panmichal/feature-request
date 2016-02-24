import {SUBMIT_REQUEST, LOAD_REQUESTS, LOAD_CLIENTS, LOAD_AREAS} from 'actions/request-actions'

export default function (initialState) {
  return (state=initialState, action) => {
    console.log('## red');
    switch(action.type) {
      case SUBMIT_REQUEST:
        return Object.assign({}, state, { requests: [...state.requests, { id: 5, title: 'Lorem new', description: 'a new one'}]
        });
      case LOAD_REQUESTS:
        return Object.assign({}, state, { requests: [
          { id: 1, title: 'Lorem Ipsum1', description: 'Really nice and easy to implement'},
          { id: 2, title: 'Lorem Ipsum2', description: 'Really nice and easy to implement'},
          { id: 3, title: 'Lorem Ipsum3', description: 'Really nice and easy to implement'},
          { id: 4, title: 'Lorem Ipsum4', description: 'Really nice and easy to implement'},
        ] });
      case LOAD_CLIENTS:
        return Object.assign({}, state, { clients: [
          { id: 1, title: 'Lorem Ipsum1', description: 'Really nice and easy to implement'},
          { id: 2, title: 'Lorem Ipsum2', description: 'Really nice and easy to implement'},
          { id: 3, title: 'Lorem Ipsum3', description: 'Really nice and easy to implement'},
          { id: 4, title: 'Lorem Ipsum4', description: 'Really nice and easy to implement'},
        ]});
      case LOAD_AREAS:
        return Object.assign({}, state, { areas: [
          { id: 1, name: 'Policies'},
          { id: 2, name: 'Billing'},
          { id: 3, name: 'Claims'},
          { id: 4, name: 'Reports'}
        ]});
      default:
        return state;
    }
  }
}
