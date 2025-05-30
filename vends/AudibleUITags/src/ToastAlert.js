import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Icon from './Icon';
import Text from './Text';
import Link from './Link';
import Box from './Box';
import LetterSpace from './LetterSpace';

class ToastAlert extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
	    let staticClasses = ['bc-alert-toast'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    	if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    	if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

		return(
  			<Box 
  				cssClass={classNames(staticClasses)} 
  				spacing={this.props.spacing} 
  				spacingTop={this.props.spacingTop} 
  				paddingSize="small" 
  				backgroundColor="inverse">
  				
				<Text textColor="inverse">{this.props.children}</Text>
				<LetterSpace />
				<Link onClick={this.props.onClose}>
					<Icon iconType="close" textColor="inverse" />
				</Link>
  			</Box>
		);
	}
}

ToastAlert.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string
}

export default ToastAlert;
