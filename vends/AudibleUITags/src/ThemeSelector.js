import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class ThemeSelector extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    return (
      <div className={classNames(['bc-theme', this.props.theme ? 'bc-theme-' + this.props.theme : null])}>
        <div className={classNames(['bc-color-secondary', 'bc-color-background-base'])}>
        	{this.props.children}
        </div>
      </div>
    );
  }

}
ThemeSelector.propTypes = {
  theme: PropTypes.string
}

ThemeSelector.defaultProps = {
  theme: "light"
}

export default ThemeSelector;
