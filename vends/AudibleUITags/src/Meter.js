import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Meter extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    let meterPercentage = {
      width: this.props.percentage ? this.props.percentage + '%' : null
    }

    let meterHeight = {
      height: this.props.meterHeight ? this.props.meterHeight + 'px' : null,
    }

    return (
  		<div className={classNames(['bc-meter', 'bc-color-background-tertiary'])} style={meterHeight}>
  			<div className={classNames(['bc-meter-bar', 'bc-color-background-active'])} style={meterPercentage}></div>
  		</div>
    );
  }
}

Meter.propTypes = {
  percentage: PropTypes.number,
  meterHeight: PropTypes.number
}

export default Meter;
