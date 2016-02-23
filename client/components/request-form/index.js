import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Text from 'components/request-form/text';
import TextArea from 'components/request-form/text-area';
import Select from 'components/request-form/select';
import Number from 'components/request-form/number';
import Date from 'components/request-form/date';

const style = {
  submit: {
    float: 'right'
  }
}

class RequestForm extends Component {
  render() {
    return <div id="request-form">
      <Text
        value={this.props.form.title}
        placeholder="Type the request title"
        label="Feature title"/>
      <TextArea
        value={this.props.form.description}
        placeholder="Type the request description"
        label="Feature description"
        rows={4}/>
      <Select items={this.props.clients} label="Client"/>
      <Number
        value={this.props.form.priority}
        placeholder="Set request priority"
        label="Priority"/>
      <Date placeholder="Target date"/>
        <Text
          value={this.props.form.url}
          placeholder="url"
          label="Ticket URL"/>
      <Select items={this.props.areas} label="Area"/>
      <div id="submit-button">
        <RaisedButton label="Submit" primary={true} />
      </div>
    </div>;
  };
}

export default RequestForm;
