import React, {Component, PropTypes} from 'react';
import RequestForm from 'components/request-form';
import Paper from 'material-ui/lib/paper';

class RequestBox extends Component {
  render() {
    const clients = this.props.clients.map(client => {
      return { id: client.id, value: client.name }
    })
    return <div id="request-box">
     <Paper zDepth={2}>
       <RequestForm clients={clients} form={this.props.form}/>
      </Paper>
    </div>;
  };
}

export default RequestBox;
