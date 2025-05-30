import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';

class TrayView extends React.Component {

  render() {
    return (
    	<div>
			{this.props.children}    		
    	</div>
    );
  }

}

TrayView.propTypes = {
	active: PropTypes.bool
}

export default TrayView;