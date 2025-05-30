import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Icon from './Icon';
import DropdownOption from './DropdownOption';

class Dropdown extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    let staticClasses = ['bc-dropdown'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.inline) staticClasses.push('bc-dropdown-inline');

    let nativeClasses = ['bc-input', 'bc-color-base', 'bc-color-border-base', 'bc-color-background-base'];
    if(this.props.nativeCssClass) nativeClasses.push(this.props.nativeCssClass);
    if(this.props.inline) nativeClasses.push('bc-input-inline');

    return (
      <span id={this.props.id} className={classNames(staticClasses)}>
        <select {...this.props}
          id={this.props.nativeId}
          className={classNames(nativeClasses)}
	         disabled={this.props.disabled}
          name={this.props.name}>
          {this.props.children}
        </select>
        <Icon iconType="chevron-down" textColor="base" />
      </span>
    );
  }

}

Dropdown.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  nativeId: PropTypes.string,
  nativeCssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  inline: PropTypes.bool
}

export default Dropdown;
