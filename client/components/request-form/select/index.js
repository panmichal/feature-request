import React, {Component, PropTypes} from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

class Select extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string
  }
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  handleChange(e, i, value) {
    this.props.onChange(value);
  }
  render() {
    const menuItems = this.props.items.map(item => {
      return <MenuItem key={item.id} value={item.id} primaryText={item.value}/>
    });
    return <div>
      <SelectField
        value={this.props.value || this.props.items[0].id}
        onChange={this.handleChange.bind(this)}
        floatingLabelText={this.props.label}>
        {menuItems}
      </SelectField>
    </div>;
  };
}

export default Select;
