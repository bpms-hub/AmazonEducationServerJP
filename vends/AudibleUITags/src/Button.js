import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import { Link as Linkrr } from 'react-router';
import Icon from './Icon';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

  disableClick(e) {
    e.preventDefault();
  }

  render() {
    let staticClasses = [
      'bc-button', 
      this.props.size === 'small' ? 'bc-size-small' : 'bc-size-base',
      this.props.buttonType ? 'bc-button-' + this.props.buttonType : 'bc-button-default'
    ];
    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.size) staticClasses.push('bc-button-' + this.props.size);
    if(this.props.inline) staticClasses.push('bc-button-inline');
    if(this.props.disabled) staticClasses.push('bc-disabled');
    if(this.props.iconType && this.props.size != 'small' ) staticClasses.push('bc-button-has-icon');

    let Component = 
      this.props.url 
        ? this.props.app ? Linkrr : 'a'
        : 'button';

    return (
      <Component
        {...this.props}
        id={this.props.id} 
        className={classNames(staticClasses)}
        to={this.props.url && this.props.app ? this.props.url : null}
        href={this.props.url && !this.props.app ? this.props.url : null}
        onClick={this.props.disabled ? this.disableClick.bind(this) : this.props.onClick}
        disabled={this.props.disabled}
        type={this.props.htmlButtonType}
        role="button"
        data-sitecatalyst={this.props.siteCatalyst}>
        {(this.props.iconType && this.props.size != 'small') &&
          <span className="bc-button-icon">
            <Icon iconType={this.props.iconType} />
          </span>
        }
        <span className="bc-button-text">
          {this.props.children}
        </span>
      </Component>
    );
  }

}

Button.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  buttonType: PropTypes.string,
  iconType: PropTypes.string,
  inline: PropTypes.bool,
  app: PropTypes.bool,
  htmlButtonType: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  url: PropTypes.string,
  disabled: PropTypes.bool,
  siteCatalyst: PropTypes.string
};

export default Button;
