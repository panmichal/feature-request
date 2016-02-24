import fetch from 'isomorphic-fetch';

export const SUBMIT_REQUEST = 'submit-request';
export const LOAD_REQUESTS = 'load-requests';
export const LOAD_CLIENTS = 'load-clients';
export const LOAD_AREAS = 'load-areas';

export function submitRequest() {
  return { type: SUBMIT_REQUEST };
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
