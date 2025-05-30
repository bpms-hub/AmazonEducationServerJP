import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Icon from './Icon';
import TextInput from './TextInput';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }
     
  render() {
    let staticClasses = ['bc-search'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

    return (
      <div id={this.props.id} className={classNames(staticClasses)}>
        <TextInput
          id={this.props.nativeId}
          cssClass={this.props.nativeCssClass}
          required={this.props.required}
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          maxLength={this.props.maxLength}
          disabled={this.props.status === 'disabled'} />
        <Icon iconType="search" textColor="base" />
      </div>
    );
  }
}

Search.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  nativeId: PropTypes.string,
  nativeCssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  status: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool
}

export default Search;
