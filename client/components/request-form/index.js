import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Text from 'components/request-form/text';
import TextArea from 'components/request-form/text-area';
import Select from 'components/request-form/select';

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
      <Select items={this.props.clients}/>
    </div>;
  };
}

export default RequestForm;
