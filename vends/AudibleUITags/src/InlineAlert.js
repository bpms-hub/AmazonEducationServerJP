import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Icon from './Icon';
import FixedGridRow from './FixedGridRow';
import FixedGridColumn from './FixedGridColumn';

class InlineAlert extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = ['bc-alert', 'bc-alert-inline'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    	if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    	if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
	    if(this.props.alertType) { staticClasses.push('bc-alert-' + this.props.alertType); }

	    let alertTypeIcon;

	    if (this.props.alertType === "info") alertTypeIcon = 'info-circle';
	    else if (this.props.alertType === "success") alertTypeIcon = 'check';
	    else alertTypeIcon = 'exclamation-triangle';

		return(
			<div
				id={this.props.id}
	      		className={classNames(staticClasses)}
	      		role="alert">
	      		<FixedGridRow fixedColumn="left" fixedColumnWidth={16}>
		      		<FixedGridColumn side="left" fixedColumn="left" fixedColumnWidth={16}>
			      		<Icon iconType={alertTypeIcon} />
			      	</FixedGridColumn>

		      		<FixedGridColumn side="right" fixedColumn="left" columnPadding="10px">
		      			<span className="alert-content">
							{this.props.children}
						</span>
					</FixedGridColumn>
				</FixedGridRow>
			</div>
		);
	}
}

InlineAlert.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  alertType: PropTypes.string
}

InlineAlert.defaultProps = {
  alertType: 'error'
}

export default InlineAlert;
