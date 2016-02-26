import React, {Component, PropTypes} from 'react';
import RequestForm from 'components/request-form';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';
import ActionArchive from 'material-ui/lib/svg-icons/action/done';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';

const getActions = function (r) {
  const actions = [<ListItem key={r.id + "delete"} onTouchTap={this.props.delete.bind(null, r)} leftIcon={<ActionDelete />} primaryText="Delete"/>];
  return r.resolved
    ? actions
    : [...actions, <ListItem key={r.id + "resolve"} onTouchTap={this.props.resolve.bind(null, r)} leftIcon={<ActionArchive />} primaryText="Resolve"/>]
}

const getModalTitle = (data) => {
  const title = data.currentRequest && data.open === true
    ? data.currentRequest.title + " - due date: " + data.currentRequest.date
    : ""

  return title;
}
const getModalContent = (data) => {
  const content = data.currentRequest && data.open === true
    ? data.currentRequest.description
    : ""

  return content;
}

const getLeftIcon = (request) => {
  return request.resolved ? <ActionArchive /> : <ContentDrafts />;
}

class RequestList extends Component {
  render() {
    const requests = this.props.requests.map(r => {
      return <ListItem key={r.id}
        onTouchTap={this.props.showRequest.bind(this, r)}
        leftIcon={getLeftIcon(r)}
        nestedItems={getActions.call(this, r)}
        primaryText={r.title + "   -   " + r.date}/>
    })
    return <div id="request-list" className="box">

     <Paper zDepth={1}>
       <Dialog
          title={getModalTitle(this.props.modalData)}
          modal={false}
          open={this.props.modalData.open}
          onRequestClose={this.props.hideRequest}
        >{getModalContent(this.props.modalData)}</Dialog>
       <List subheader="Client's requests">
         <ListItem key="add" onTouchTap={this.props.onClickAdd} primaryText={<RaisedButton onTouchTap={this.props.onClickAdd} primary={true} label="Add new"/>}></ListItem>
         {requests}
       </List>
      </Paper>
    </div>;
  };
}

export default RequestList;
