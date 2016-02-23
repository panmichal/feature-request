import React, {Component} from 'react';
import Divider from 'material-ui/lib/divider';

const styles = {
  siteName: {
    marginBottom: '5px',
    color: '#9E9E9E',
    fontSize: '13px'
  },
  showMore: {
    marginTop: '10px',
    textAlign: 'right',
    fontSize: '13px'
  }
};

class SearchResult extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return <div id="search-result">
        <div className="search-result-site" style={styles.siteName}>{this.props.result.site}</div>
        <Divider />
          {this.props.result.body}
      <div style={styles.showMore}>Show full content</div>
      </div>
  };
}

export default SearchResult;
