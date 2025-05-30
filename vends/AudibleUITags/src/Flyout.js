import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Flyout extends React.Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
		  	height: null,
	 	};
	}

	calculateHeight(){
		if (!this.state.height) {
		  	let flyoutHeight =  this.props.active ? React.findDOMNode(this).scrollHeight : null;

			this.setState({
			  	height: flyoutHeight
			})
		}
		else {
		  	return;
		}
	}

	componentDidMount(){
		this.calculateHeight();
	}

	renderFlyout() {
	    let staticClasses = ['bc-flyout'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
	    if(this.props.side) { staticClasses.push('bc-flyout-' + this.props.side); }

	    let side = this.props.side;
	    let width = this.props.width;

	    let inlineStyles = {
	    	left: this.props.offsetX,
	    	top: this.props.offsetY,
	    	height: this.state.height,
	      width: this.props.width,
	    }

		return(
			<div
				id={this.props.id}
				className={classNames(staticClasses)}
				style={inlineStyles}>
				<div className="bc-flyout-inner">
					{this.props.children}
				</div>
			</div>
		);
	}

	render() {
		if (!this.props.active) {
			return null;
		}
		else {
			return this.renderFlyout();
		}
	}
}

Flyout.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  side: PropTypes.string,
  active: PropTypes.bool,
  offsetY: PropTypes.string,
  offsetX: PropTypes.string,
}

Flyout.defaultProps = {
	side: "bottom"
}

export default Flyout;
