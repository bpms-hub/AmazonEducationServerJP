import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    let staticClasses = ['bc-input', 'bc-textarea', 'bc-color-border-base', 'bc-color-base'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.status) staticClasses.push('bc-form-' + this.props.status);

    let inlineStyles = {
	height: this.props.heightCss
    }

    return (
      <textarea
        {...this.props}
        id={this.props.id}
        className={classNames(staticClasses)}
        style={inlineStyles}
	type={this.props.type}
        required={this.props.required}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.value}
        maxLength={this.props.maxLength}
        disabled={this.props.status === 'disabled'}>
      </textarea>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  heightCss: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  status: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool
}

export default TextArea;
