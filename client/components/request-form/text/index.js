import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';

class Text extends Component {
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
          hintText={this.props.placeholder}
          errorText={this.props.error}
          floatingLabelText={this.props.label}
          onChange={this.props.onChange}
          value={this.props.value}/>
    </div>;
  };
}

export default Text;
