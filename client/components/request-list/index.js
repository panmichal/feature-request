import React, {Component, PropTypes} from 'react';
import RequestForm from 'components/request-form';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const style = {
  // display: 'inline-block',
}

class RequestList extends Component {
  render() {
    const requests = this.props.requests.map(r => {
      return <ListItem key={r.id}  primaryText={r.title}/>
    })
    return <div id="request-list" style={style}>
     <Paper zDepth={1}>
       <List>
         {requests}
       </List>
      </Paper>
    </div>;
  };
}

export default RequestList;
