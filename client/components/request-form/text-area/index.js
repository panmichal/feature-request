import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';

class TextArea extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }
  render() {
    return <div>
      <TextField
          errorText={this.props.error}
          hintText={this.props.placeholder}
          floatingLabelText={this.props.label}
          value={this.props.value}
          multiLine={true}
          onChange={this.props.onChange}
          rows={this.props.rows}/>
    </div>;
  };
}

export default TextArea;
