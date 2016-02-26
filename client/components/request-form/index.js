import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Text from 'components/request-form/text';
import TextArea from 'components/request-form/text-area';
import Select from 'components/request-form/select';
import Number from 'components/request-form/number';
import Date from 'components/request-form/date';
import {reduxForm} from 'redux-form';
import validUrl from 'valid-url';

const style = {
  submit: {
    float: 'right'
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length < 5 || values.title.length > 30) {
    errors.title = 'Title length must be between 5 and 30 characters';
  }
  if (!values.description) {
    errors.description = 'Request description is required';
  }
  if (values.url && !validUrl.isUri(values.url)) {
    errors.url = 'Must be a valid URL';
  }
  return errors;
}

class RequestForm extends Component {
  componentDidMount() {
  }
  render() {
    const {
      fields: {title, description, priority, client, date, url, area},
      handleSubmit
    } = this.props;
    return <form>
        <div className="box">
          <Text
            placeholder="Type the request title"
            label="Feature title"
            {...title}/>
          <TextArea
            placeholder="Type the request description"
            label="Feature description"
            rows={4}
            {...description}/>
          <Select {...client} items={this.props.clients} label="Client"/>
          </div>
          <div className="box">
          <Number
            placeholder="Set request priority"
            label="Priority"
            {...priority}/>
          <Date placeholder="Target date"/>
          <Text
            {...url}
            placeholder="url"
            label="Ticket URL"/>
          <Select {...area} items={this.props.areas} label="Area"/>
          <div id="submit-button">
            <RaisedButton onClick={this.props.handleSubmit} label="Submit" primary={true} />
          </div>
        </div>
      </form>;
  };
}

RequestForm = reduxForm({
  form: 'request',
  fields: ['title', 'description', 'priority', 'client', 'date', 'url', 'area'],
  validate
},
state => ({
  initialValues: state.initialValues || state.data.initialValues
}))(RequestForm);

export default RequestForm;
