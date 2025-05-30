import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Sticky extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return(
			<div className={classNames(staticClasses)}>
				{this.props.children}
			</div>
		);
	}
}

Sticky.PropTypes = {

}

export default Sticky;