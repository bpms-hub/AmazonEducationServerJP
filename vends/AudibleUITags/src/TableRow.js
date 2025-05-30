import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = ['bc-table-row'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    	if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    	if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

		return(
			<tr id={this.props.id} className={classNames(staticClasses)}>
				{this.props.children}
			</tr>
		);
	}
}

TableRow.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string
}

export default TableRow;
