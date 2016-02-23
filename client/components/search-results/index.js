import React, {Component} from 'react';
import Paper from 'material-ui/lib/paper';
import CardTitle from 'material-ui/lib/card/card-title';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import SearchResult from 'components/search-result';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return <div id="search-results" className="container-fluid">
          <List>
            {this.props.results.map(result =>
              <ListItem disabled={true}><SearchResult key={result.id} result={result} /></ListItem>
            )}
          </List>
      </div>
  };
}

export default SearchResults;
