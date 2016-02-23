import React, {Component} from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import AppBar from 'material-ui/lib/app-bar';
import RequestBox from 'components/request-box';
import RequestList from 'components/request-list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActionCreators from 'actions/search-actions';
import {} from './style.less';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
}, { userAgent: 'all' });


class App extends Component {
  render() {
    return <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          title="Feature request app"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <RequestList requests={this.props.requests}/>
        <RequestBox form={this.props.form} clients={this.props.clients} areas={this.props.areas}/>
      </div>
    </MuiThemeProvider>;
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    clients: state.clients,
    requests: state.requests,
    areas: state.areas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(searchActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
