import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class DropdownOption extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    let staticClasses = ['bc-color-base'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);

    return (
      <option
        {...this.props} 
        className={classNames(staticClasses)}
        id={this.props.id} 
        value={this.props.value} 
        disabled={this.props.disabled} 
        selected={this.props.selected}> 
        {this.props.children}
      </option>
    );
  }

}

DropdownOption.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  selected: PropTypes.bool,
  value: PropTypes.string,
  disabled: PropTypes.bool,
}

export default DropdownOption;
