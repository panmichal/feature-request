import fetch from 'isomorphic-fetch';

export const SHOW_SEARCH_AUTOCOMPLETE_RESULTS = 'show-search-autocomplete-results';
export const SHOW_SEARCH_RESULTS = 'show-search-results';

export function fetchAutocompleteResults(input) {
  return function(dispatch) {
      return fetch("/autocomplete?input=" + input)
      .then(res => res.json())
      .then(autocomplete => {
        dispatch(showAutocompleteResults(autocomplete));
      });
  }
}

export function showAutocompleteResults(results) {
  return { type: SHOW_SEARCH_AUTOCOMPLETE_RESULTS, results };
}

export function search(query) {
  return function(dispatch) {
    return fetch("/search?query=" + query)
    .then(res => res.json())
    .then(results => dispatch(showSearchResults(results)));
  }
}

export function showSearchResults(results) {
  return { type: SHOW_SEARCH_RESULTS, results };
}
