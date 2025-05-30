import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class LetterSpace extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    let staticClasses = ['bc-inline-block'];
    if(this.props.size) staticClasses.push('bc-horizontal-spacing-' + this.props.size);

    return (
      <span {...this.props} className={classNames(staticClasses)}></span>
    );
  }
}

LetterSpace.propTypes = {
  size: PropTypes.string
}

LetterSpace.defaultProps = {
  size: "base"
}

export default LetterSpace;
