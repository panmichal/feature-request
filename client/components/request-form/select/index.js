import React, {Component, PropTypes} from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

class Select extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string
  }
  render() {
    const menuItems = this.props.items.map(item => {
      return <MenuItem key={item.id} value={item.id} primaryText={item.value}/>
    })
    return <div>
      <SelectField
        onChange={this.props.onChange}
        value={this.props.items[0].id}
        floatingLabelText={this.props.label}>
        {menuItems}
      </SelectField>
    </div>;
  };
}

export default Select;
