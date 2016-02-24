import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const SUBMIT_REQUEST = 'submit-request';
export const ADD_REQUEST = 'add-request';
export const REQUEST_ADDED = 'request-added';
export const LOAD_REQUESTS = 'load-requests';
export const LOAD_CLIENTS = 'load-clients';
export const LOAD_AREAS = 'load-areas';

export function submitRequest(data) {
  return function(dispatch) {
      dispatch(addRequest(data));

      return axios.post("/requests", data)
      .then(res => res.json())
      .then(request => {
        dispatch(requestAdded(autocomplete));
      })
      .catch(error => {
        dispatch(removeRequest());
      });
  }
}

export function addRequest(data) {
  return { type: ADD_REQUEST, data };
}

export function requestAdded(data) {
  return { type: REQUEST_ADDED, data };
}

export function removeRequest(id) {
  return { type: SUBMIT_REQUEST, data };
}

export function loadRequests() {
  return { type: LOAD_REQUESTS };
}

export function loadClients() {
  return { type: LOAD_CLIENTS };
}

export function loadAreas() {
  return { type: LOAD_AREAS };
}
