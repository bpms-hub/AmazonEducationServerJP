import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import { Link as Linkrr } from 'react-router';
import Icon from './Icon';
import Text from './Text';
import LetterSpace from './LetterSpace';
import Link from './Link';

class TextButton extends React.Component {
    constructor(props) {
        super(props);
    }

  disableClick(e) {
    e.preventDefault();
  }

  render() {
    let staticClasses = [];
    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.disabled) staticClasses.push('bc-disabled');

    return (
      <Link
        {...this.props}
        className={classNames(staticClasses)}
        app={this.props.app}
        url={this.props.url}
        onClick={this.props.disabled ? this.disableClick.bind(this) : this.props.onClick}
        disabled={this.props.disabled}
        data-sitecatalyst={this.props.siteCatalyst}
        textColor={ this.props.buttonType === 'primary' ? 'primary' : 'base'}>
        <Icon 
          iconType={this.props.iconType} />
        <LetterSpace size="micro" />
        <Text>{this.props.label}</Text>
      </Link>
    );
  }

}

TextButton.propTypes = {
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  buttonType: PropTypes.string,
  iconType: PropTypes.string,
  label: PropTypes.string,
  app: PropTypes.bool,
  url: PropTypes.string,
  disabled: PropTypes.bool,
  siteCatalyst: PropTypes.string
};

export default TextButton;
