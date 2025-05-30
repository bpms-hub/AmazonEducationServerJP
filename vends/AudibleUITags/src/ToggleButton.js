import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Button from './Button';

class ToggleButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        active: this.props.active,
      };
  }

  handleSwitch() {
    this.setState({
     active: !this.state.active, /* toggle processing */
    });
  }

  render() {
    return (
      <Button 
        {...this.props}
        buttonType={this.state.active ? 'primary' : 'toggle'}
        size="small"
        checked={this.props.checked}
        disabled={this.props.disabled}
        id={this.props.id}
        cssClass={this.props.cssClass}
        spacing={this.props.spacing}
        spacingTop={this.props.spacingTop}
        onClick={this.handleSwitch.bind(this)}>
          {this.state.active ? this.props.activeText : this.props.inactiveText}
      </Button>
    );
  }
}

ToggleButton.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  activeText: PropTypes.string,
  inactiveText: PropTypes.string
};

export default ToggleButton;