import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Container extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
		return(
	      <div 
	      	className={classNames([
	      			'bc-container',
	      		 	'bc-size-base',
	      		 	'bc-color-secondary'
	      		 ])}>{this.props.children}
	      	</div>
		);
	}
}

export default Container;
