import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Box from './Box';

class TableColumn extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = ['bc-table-column', 'bc-color-base', 'bc-color-border-base'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

		return(
			<td id={this.props.id} className={classNames(staticClasses)}>
				<Box paddingSize="small" textAlign="left">{this.props.children}</Box>
			</td>
		);
	}
}

TableColumn.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
}

export default TableColumn;
