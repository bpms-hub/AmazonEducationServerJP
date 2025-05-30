import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';


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

    let nativeClasses = ['bc-input'];
    if(this.props.nativeCssClass) nativeClasses.push(this.props.nativeCssClass);
    if(this.props.inline) nativeClasses.push('bc-input-inline');

    return (
      <span className={classNames(staticClasses)}>
        <select {...this.props}
          id={this.props.nativeId}
          className={classNames(nativeClasses)}
          name={this.props.name}>
          {this.props.children}
        </select>
        <Icon iconType="chevron-down" />
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
  status: PropTypes.string,
  name: PropTypes.string,
  selectedOption: PropTypes.string,
  inline: PropTypes.bool
}

export default Dropdown;
