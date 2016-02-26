import React, {Component} from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import AppBar from 'material-ui/lib/app-bar';
import RequestBox from 'components/request-box';
import RequestList from 'components/request-list';
import ClientList from 'components/client-list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as requestActionCreators from 'actions/request-actions';
import {} from './style.less';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
}, { userAgent: 'all' });


class App extends Component {
  onClientSelect(e, id) {
    this.props.selectClient(id);
  }
  render() {
    return <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Feature request app"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div id="container">
            <ClientList value={this.props.selectedClient} onSelect={this.onClientSelect.bind(this)} clients={this.props.clients}/>
            <RequestBox form={this.props.form} handleSubmit={this.props.submitRequest} form={this.props.form} clients={this.props.clients} areas={this.props.areas}/>
            <div className="container25"></div>
            <RequestList requests={this.props.requests}/>
          </div>
        </div>
    </MuiThemeProvider>;
  }
}

function mapStateToProps(state) {
  return {
    form: 'request',
    clients: state.clients || state.data.clients,
    requests: state.requests ||state.data.requests,
    areas: state.areas || state.data.areas,
    selectedClient: state.selectedClient || state.data.selectedClient
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(requestActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
