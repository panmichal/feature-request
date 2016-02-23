import React, {Component} from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import RaisedButton from 'material-ui/lib/raised-button';

class SearchForm extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return <div id="search-input">
        <AutoComplete
          hintText='Place name'
          dataSource={this.props.dataSource}
          onUpdateInput={this.props.onUpdate}
        />
        <div id="search-button">
          <RaisedButton label="Search" primary={true} onClick={this.props.onSubmit}/>
        </div>
      </div>
  };
}

export default SearchForm;
