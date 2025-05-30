import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Icon from './Icon';
import Text from './Text';
import LetterSpace from './LetterSpace';

class Checkbox extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: this.props.checked
      }
  }

  handleChange(event) {
    this.setState({
      value: event.target.checked
    });
  }

  render() {
    let staticClasses = ['bc-checkbox'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.disabled) staticClasses.push('bc-disabled');

    return (
      <div {...this.props} id={this.props.outerId} className={classNames(staticClasses)}>
        <label>
          <input
            ref="checkbox"
            id={this.props.inputId}
            type="checkbox"
            name={this.props.name}
            value={this.props.value}
            disabled={this.props.disabled}
            checked={this.state.value}
            onChange={this.handleChange.bind(this)} />

            <span 
              className={classNames([
                "bc-checkbox-icon",
                this.state.value ? "bc-color-border-active" : "bc-color-border-base", 
                this.state.value ? "bc-color-background-active" : null
              ])}>
              <span className="bc-checkbox-icon-aligner">
                {this.state.value &&
                  <Icon iconType="check" />
                }
              </span>
          </span>
          <LetterSpace size="mini" />
          <Text textColor="base">{this.props.label}</Text>
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
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

export default Checkbox;
