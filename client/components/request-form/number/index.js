import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';

class Number extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string
  }
  render() {
    return <div>
      <TextField
          hintText={this.props.placeholder}
          floatingLabelText={this.props.label}
          value={this.props.value}
          type="number"/>
    </div>;
  };
}

export default Number;
