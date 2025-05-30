import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Divider extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = [ this.props.type === 'vertical' ? 'bc-divider-vertical' : 'bc-divider-horizontal', 'bc-color-divider-' + this.props.dividerColor];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    	if(this.props.spacing) { staticClasses.push('bc-spacing-' + this.props.spacing); }
    	if(this.props.spacingTop) { staticClasses.push('bc-spacing-top-' + this.props.spacingTop); }
    	if(this.props.type) { staticClasses.push('bc-divider-' + this.props.type); }

		return(
	      <div
	      	id={this.props.id}
	      	className={classNames(staticClasses)}>
	      </div>
		);
	}
}

Divider.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  dividerColor: PropTypes.string,
  type: PropTypes.string
}

Divider.defaultProps = {
	dividerColor: 'secondary'
}

export default Divider;
