import React, {Component, PropTypes} from 'react';
import RequestForm from 'components/request-form';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';
import ActionArchive from 'material-ui/lib/svg-icons/action/done';
import RaisedButton from 'material-ui/lib/raised-button';

const nestedItems = (r) => {
  return [
    <ListItem key={1}  leftIcon={<ActionDelete />} primaryText="Delete"/>,
    <ListItem key={2}  leftIcon={<ActionArchive />} primaryText="Resolve"/>
  ]
}

class RequestList extends Component {
  render() {
    const requests = this.props.requests.map(r => {
      return <ListItem key={r.id}  leftIcon={<ContentDrafts />} nestedItems={nestedItems(r)} primaryText={r.title + "   -   " + r.date}/>
    })
    return <div id="request-list" className="box">
     <Paper zDepth={1}>
       <List subheader="Client's requests">
         <ListItem key="add" onTouchTap={this.props.onClickAdd} primaryText={<RaisedButton onTouchTap={this.props.onClickAdd} primary={true} label="Add new"/>}></ListItem>
         {requests}
       </List>
      </Paper>
    </div>;
  };
}

export default RequestList;
