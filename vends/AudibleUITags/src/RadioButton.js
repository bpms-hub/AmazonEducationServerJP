import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Icon from './Icon';
import Text from './Text';
import LetterSpace from './LetterSpace';

class RadioButton extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    let staticClasses = ['bc-radio'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.disabled) staticClasses.push('bc-disabled');

    return (
      <div id={this.props.outerId} className={classNames(staticClasses)}>
        <label>
          <input 
            {...this.props} 
            id={this.props.inputId}
            type="radio"
            name={this.props.name} 
            value={this.props.value} 
            disabled={this.props.disabled} 
            checked={this.props.checked} />
          <span className="bc-radio-icon bc-color-border-base">
            { this.props.checked && 
              <span className="bc-radio-icon-inner bc-color-background-active"></span>
            }
          </span>
          <LetterSpace size="mini" />
          <Text textColor="base">{this.props.label}</Text>
        </label>
      </div>
    );
  }
}

RadioButton.propTypes = {
  inputId: PropTypes.string,
  outerId: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}

export default RadioButton;
