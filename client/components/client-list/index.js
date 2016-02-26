import React, {Component, PropTypes} from 'react';
import RequestForm from 'components/request-form';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';

const style = {
  // float: 'left',
}

const SelectableList = SelectableContainerEnhance(List);

class ClientList extends Component {
  render() {
    const clients = this.props.clients.map(r => {
      return <ListItem key={r.id}  value={r.id} primaryText={r.name}/>
    })
    return <div id="client-list" className="box" style={style}>
     <Paper zDepth={1}>
       <SelectableList subheader="Select client" valueLink={ {value: this.props.value || this.props.clients[0].id, requestChange: this.props.onSelect }}>
         {clients}
       </SelectableList>
      </Paper>
    </div>;
  };
}

export default ClientList;
