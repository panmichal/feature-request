import React, {Component, PropTypes} from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

class Date extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string
  }
  render() {
    return <div>
      <DatePicker
          hintText={this.props.placeholder}
          container="inline"/>
    </div>;
  };
}

export default Date;
