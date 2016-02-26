import React, {Component} from 'react';
import {reset} from 'redux-form';
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
    const form = this.props.view === 'form'
      ? <RequestBox
          handleSubmit={this.props.submitRequest}
          hideForm={this.props.hideAddForm}
          form={this.props.form}
          clients={this.props.clients}
          areas={this.props.areas}/>
      : "";
    const requests = this.props.selectedClient && this.props.view === 'list'
      ? <RequestList
        modalData={this.props.featureDescriptionModal}
        onClickAdd={this.props.showAddForm}
        resolve={this.props.resolveRequest}
        delete={this.props.deleteRequest}
        requests={this.props.requests}
        showRequest={this.props.showRequest}
        hideRequest={this.props.hideRequest}/>
      : ""
    return <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Feature request app"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div id="container">
            <ClientList value={this.props.selectedClient} onSelect={this.onClientSelect.bind(this)} clients={this.props.clients}/>
            {form}
            {requests}
            <div className="container25"></div>
          </div>
        </div>
    </MuiThemeProvider>;
  }
}

function mapStateToProps(state) {
  //short-circuit operators are needed for consistency between server-side and client-side render
  return {
    form: 'request',
    clients: state.clients || state.data.clients,
    requests: state.requests ||state.data.requests,
    areas: state.areas || state.data.areas,
    selectedClient: state.selectedClient || state.data.selectedClient,
    view: state.view || state.data.view,
    initialValues: state.initialValues || state.data.initialValues,
    featureDescriptionModal: state.featureDescriptionModal || state.data.featureDescriptionModal,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(requestActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
