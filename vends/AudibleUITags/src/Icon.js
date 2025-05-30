import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Icon  extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = ['bc-icon'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
	    if(this.props.iconType) { staticClasses.push('bc-icon-' + this.props.iconType); }
	    if(this.props.iconSize) { staticClasses.push('bc-icon-size-' + this.props.iconSize); }
	    if(this.props.textColor) { staticClasses.push('bc-color-' + this.props.textColor); }

	    let inlineStyles = {
	      verticalAlign: this.props.verticalAlign,
	    }

		return(
	      <i {...this.props} id={this.props.id} className={classNames(staticClasses)} style={inlineStyles} ></i>
		);
	}
}

Icon.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  iconType: PropTypes.string.isRequired,
  verticalAlign: PropTypes.string,
  textColor: PropTypes.string,
  iconSize: PropTypes.string
}

export default Icon;
