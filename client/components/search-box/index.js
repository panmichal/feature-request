import React, {Component} from 'react';
import SearchForm from 'components/search-form';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

class SearchBox extends Component {
  render() {
    return <div id="search-box">
     <Paper zDepth={2}>
        <SearchForm
          dataSource={this.props.autocompleteData}
          onUpdate={this.props.onSearchUpdate}
          onSubmit={this.props.onSearchSubmit}/>
      </Paper>
    </div>;
  };
}

export default SearchBox;
