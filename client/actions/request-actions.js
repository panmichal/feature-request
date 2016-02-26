import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const SUBMIT_REQUEST = 'submit-request';
export const ADD_REQUEST    = 'add-request';
export const REQUEST_ADDED  = 'request-added';
export const SELECT_CLIENT  = 'select-client';
export const SHOW_REQUESTS  = 'show-requests';
export const RESET_FORM     = 'reset-form';

export function submitRequest(data) {
  return function(dispatch) {
      return axios.post("/requests", data)
      .then(res => res.data)
      .then(request => {
        console.log(request);
        dispatch(selectClient(request.client));
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

export function resetForm() {
  return { type: RESET_FORM };
}

export function loadRequestsForClient(client) {
  return function(dispatch) {
      return axios.get(`/requests?client=${client}`)
      .then(response => response.data)
      .then(requests => {
        dispatch(showRequests(requests));
      })
      .catch(error => {
      });
  }
}

export function selectClient(client) {
  return function(dispatch) {
    dispatch(loadRequestsForClient(client));
    dispatch(markSelectedClient(client))
  }
}

export function markSelectedClient(client) {
  return { type: SELECT_CLIENT, client };
}

export function showRequests(requests) {
  return { type: SHOW_REQUESTS, requests };
}
