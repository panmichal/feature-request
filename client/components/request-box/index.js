import React, {Component, PropTypes} from 'react';
import RequestForm from 'components/request-form';
import Paper from 'material-ui/lib/paper';

const style = {
  display: 'inline-block',
  verticalAlign: 'top',
  horizontalAlign: 'center',
  margin: 'auto',
  width: '40%',
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
       <div id="request-form">
         <RequestForm onSubmit={this.props.handleSubmit} form={this.props.form} areas={areas} clients={clients} form={this.props.form}/>
       </div>
      </Paper>
    </div>;
  };
}

export default RequestBox;
