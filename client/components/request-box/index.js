import React, {Component, PropTypes} from 'react';
import RequestForm from 'components/request-form';
import Paper from 'material-ui/lib/paper';
import ContentUndo from 'material-ui/lib/svg-icons/content/undo';

const style = {
}

class RequestBox extends Component {
  render() {
    const clients = this.props.clients.map(client => {
      return { id: client.id, value: client.name }
    })
    const areas = this.props.areas.map(area => {
      return { id: area.id, value: area.name }
    })
    return <div id="request-box" className="box" style={style}>
     <Paper zDepth={2} >
       <span className="top-left-icon"><ContentUndo onClick={this.props.hideForm} /></span>
       <div id="request-form">
        <h2>Add a new feature request</h2>
         <RequestForm onSubmit={this.props.handleSubmit} form={this.props.form} areas={areas} clients={clients} form={this.props.form}/>
       </div>
      </Paper>
    </div>;
  };
}

export default RequestBox;
