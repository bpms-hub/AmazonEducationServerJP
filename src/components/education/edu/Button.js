import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import { Link as Linkrr } from 'react-router';

class Button {

  disableClick(e) {
    e.preventDefault();
  }

  renderAnchor() {
    if(this.props.app){
      return(
        <Linkrr
          {...this.props}
          className="edu-button-text"
          to={this.props.url}
          disabled={this.props.disabled}
          onClick={this.props.disabled ? this.disableClick.bind(this) : null}
          role="button">
          {this.props.children}
        </Linkrr>
      )
    }else{
      return(
        <a
          {...this.props}
          className="edu-button-text"
          href={this.props.url}
          disabled={this.props.disabled}
          onClick={this.props.disabled ? this.disableClick.bind(this) : null}
          role="button">
          {this.props.children}
        </a>
      )
    }
  }

  renderButton() {
    return (
      <button
        {...this.props}
        className="edu-button-text"
        disabled={this.props.disabled}
        type={this.props.htmlButtonType}
	data-sitecatalyst={this.props.siteCatalyst}>
        {this.props.children}
      </button>
    );
  }

  render() {
    let staticClasses = ['edu-button'];
    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    if(this.props.spacing) staticClasses.push('edu-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('edu-spacing-top-' + this.props.spacingTop);
    if(this.props.size) staticClasses.push('edu-button-' + this.props.size);
    if(this.props.buttonType) staticClasses.push('edu-button-' + this.props.buttonType);
    if(this.props.inverse) staticClasses.push('edu-button-inverse');
    if(this.props.inline) staticClasses.push('edu-button-inline');
    if(this.props.disabled) staticClasses.push('edu-button-disabled');

    let renderButtonType = this.props.url ? 'renderAnchor' : 'renderButton';

    return (
      <span id={this.props.id} className={classNames(staticClasses)}>
        {this[renderButtonType]()}
      </span>
    );
  }

}

Button.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  buttonType: PropTypes.string,
  inverse: PropTypes.bool,
  inline: PropTypes.bool,
  htmlButtonType: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  url: PropTypes.string,
  disabled: PropTypes.string,
  siteCatalyst: PropTypes.string
};

export default Button;
