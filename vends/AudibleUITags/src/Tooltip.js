import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Text from './Text';

class Tooltip extends React.Component {
    constructor(props) {
        super(props);
    }
		
	renderTooltip() {
	    let staticClasses = ['bc-tooltip'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
	    if(this.props.side) { staticClasses.push('bc-tooltip-' + this.props.side); }

	    let side = this.props.side;
	    let inlineStyles = {
	    	left: this.props.offsetX,
	    	top: this.props.offsetY
	    }

		return(
			<div
				{...this.props}
				id={this.props.id}
				className={classNames(staticClasses)}
				style={inlineStyles}>
				<div className={classNames(["bc-tooltip-inner", "bc-color-background-inverse"])}>
				<Text textColor="inverse">{this.props.children}</Text>
				</div>
			</div>
		);
	}

	render() {
		if (!this.props.active) {
			return null;
		}
		else {
			return this.renderTooltip();
		}
	}
}

Tooltip.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  side: PropTypes.string,
  active: PropTypes.bool,
  offsetY: PropTypes.string,
  offsetX: PropTypes.string
}

Tooltip.defaultProps = {
	side: "top"
}

export default Tooltip;
