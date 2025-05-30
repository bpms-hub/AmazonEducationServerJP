import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class TabPanel extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
	    let staticClasses = ['bc-tab-container'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }


		return(
			<div 
				id={this.props.id} 
				className={classNames(staticClasses)} 
				role="tabpanel">
				{this.props.children}
			</div>
		);
	}
}

TabPanel.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default TabPanel;