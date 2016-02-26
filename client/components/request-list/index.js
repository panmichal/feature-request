import React, {Component, PropTypes} from 'react';
import RequestForm from 'components/request-form';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';

const style = {
  // display: 'inline-block',
}

const nestedItems = (r) => {
  return [
    <ListItem key={1}  leftIcon={<ActionDelete />} primaryText="Delete"/>,
    <ListItem key={2}  leftIcon={<ContentDrafts />} primaryText="Resolve"/>
  ]
}

class RequestList extends Component {
  render() {
    const requests = this.props.requests.map(r => {
      return <ListItem key={r.id}  leftIcon={<ContentDrafts />} nestedItems={nestedItems(r)} primaryText={r.title + "   -   " + r.date}/>
    })
    return <div id="request-list" className="box" style={style}>
     <Paper zDepth={1}>
       <List subheader="Client's requests">
         {requests}
       </List>
      </Paper>
    </div>;
  };
}

export default RequestList;
