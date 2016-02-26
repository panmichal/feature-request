import React, {Component, PropTypes} from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

class Date extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }
  render() {
    return <div>
      <DatePicker
          hintText={this.props.placeholder}
          onChange={this.props.onChange}/>
    </div>;
  };
}

export default Date;
