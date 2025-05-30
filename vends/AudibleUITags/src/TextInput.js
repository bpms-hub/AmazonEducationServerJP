import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    let staticClasses = ['bc-input', 'bc-color-border-base', 'bc-color-base', 'bc-color-background-base'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.status) staticClasses.push('bc-form-' + this.props.status);
    if(this.props.inline) staticClasses.push('bc-input-inline');

    return (
      <input {...this.props}
        id={this.props.id}
        className={classNames(staticClasses)}
        type={this.props.type}
        required={this.props.required}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.value}
        maxLength={this.props.maxLength}
        disabled={this.props.status === 'disabled'} />
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  status: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  inline: PropTypes.bool
}

TextInput.defaultProps = {
  type: 'text'
}

export default TextInput;
