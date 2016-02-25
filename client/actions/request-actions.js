import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const SUBMIT_REQUEST = 'submit-request';
export const ADD_REQUEST    = 'add-request';
export const REQUEST_ADDED  = 'request-added';
export const LOAD_REQUESTS  = 'load-requests';
export const LOAD_CLIENTS   = 'load-clients';
export const LOAD_AREAS     = 'load-areas';
export const SELECT_CLIENT  = 'select-client';
export const SHOW_REQUESTS  = 'show-requests';
export const RESET_FORM     = 'reset-form';

export function submitRequest(data) {
  return function(dispatch) {
      dispatch(selectClient(data.client));

      return axios.post("/requests", data)
      .then(res => res.json())
      .then(request => {
        dispatch(resetForm());
        dispatch(requestAdded(request));
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

export function loadClients() {
  return { type: LOAD_CLIENTS };
}

export function loadAreas() {
  return { type: LOAD_AREAS };
}
