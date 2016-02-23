import React, {Component, PropTypes} from 'react';
import RequestForm from 'components/request-form';
import Paper from 'material-ui/lib/paper';

const style = {
  margin: 'auto',
  width: '50%',
  padding: '20px'
}

class RequestBox extends Component {
  render() {
    const clients = this.props.clients.map(client => {
      return { id: client.id, value: client.name }
    })
    const areas = this.props.areas.map(area => {
      return { id: area.id, value: area.name }
    })
    return <div id="request-box" style={style}>
     <Paper zDepth={2} >
       <RequestForm areas={areas} clients={clients} form={this.props.form}/>
      </Paper>
    </div>;
  };
}

export default RequestBox;
