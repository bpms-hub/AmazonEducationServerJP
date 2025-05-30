import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import LetterSpace from './LetterSpace';
import Text from './Text';

class ToggleSwitch extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        checked: this.props.checked
      };      
  }

  handleChecked(event) {
    this.setState({
      checked: !this.state.checked
    })
    this.props.onChange(event);
  }

  render() {
    let staticClasses = ['bc-switch-row'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);

    return (
      <div id={this.props.outerId} className={classNames(staticClasses)}>
        <label className="bc-switch-label">
          	{this.props.children}

            <input
              {...this.props}
              onChange={this.handleChecked.bind(this)}
              id={this.props.inputId}
              className="bc-switch-input"
              type="checkbox"
              name={this.props.name} 
              disabled={this.props.disabled} 
              checked={this.state.checked} />

      			<div className="bc-switch">
      				<a className="bc-switch-control"></a>
      			</div>
            <LetterSpace size="mini" />
            <Text textColor="base">{this.state.checked ? this.props.labelOn : this.props.labelOff}</Text>
        </label>
      </div>
    );
  }
}

ToggleSwitch.propTypes = {
  inputId: PropTypes.string,
  outerId: PropTypes.string,
  cssClass: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}

export default ToggleSwitch;