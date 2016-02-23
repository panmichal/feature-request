import {UPDATE_SEARCH_AUTOCOMPLETE, SHOW_SEARCH_AUTOCOMPLETE_RESULTS, SHOW_SEARCH_RESULTS} from 'actions/search-actions'

export default function (initialState) {
  return (state=initialState, action) => {
    switch(action.type) {
      case SHOW_SEARCH_AUTOCOMPLETE_RESULTS:
        return Object.assign({}, state, { searchAutocomplete: action.results });
      case SHOW_SEARCH_RESULTS:
        return Object.assign({}, state, { searchResults: action.results });
      default:
        return state;
    }
  }
}
