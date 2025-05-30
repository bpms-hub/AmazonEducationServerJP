import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Box from './Box';

class TableColumnHeading extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = ['bc-table-heading', 'bc-color-background-secondary', 'bc-color-secondary', 'bc-color-border-base'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

		return(
			<th id={this.props.id} className={classNames(staticClasses)}>
				<Box paddingSize="mini" textAlign="left">{this.props.children}</Box>
			</th>
		);
	}
}

TableColumnHeading.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
}

export default TableColumnHeading;
