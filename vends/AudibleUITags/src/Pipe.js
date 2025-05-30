import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Pipe extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    let staticClasses = ['bc-pipe'];
    if(this.props.letterSpacing) staticClasses.push('bc-letter-space-' + this.props.letterSpacing);
    if(this.props.textColor) staticClasses.push('bc-color-' + this.props.textColor);

    let inlineStyles = {
      height: this.props.heightCss,
    }

    return (
		<span className={classNames(staticClasses)} style={inlineStyles}></span>
    );
  }
}

Pipe.propTypes = {
  heightCss: PropTypes.string,
  letterSpacing: PropTypes.string,
  textColor: PropTypes.string
}

Pipe.defaultProps = {
	letterSpacing: "base"
}

export default Pipe;
