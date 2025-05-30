import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class GridColumn extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = ['bc-col'];
	    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
	    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
	    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
	    if(this.props.textAlign) staticClasses.push('bc-text-' + this.props.textAlign);
	    if(this.props.gridUnits) staticClasses.push('bc-col-' + this.props.gridUnits);
	    if(this.props.gridPush) staticClasses.push('bc-push-' + this.props.gridPush);
	    if(this.props.gridPull) staticClasses.push('bc-pull-' + this.props.gridPull);
	    if(this.props.position) staticClasses.push('bc-col-' + this.props.position);

	    let inlineStyles = {
	      height: this.props.heightCss
	    }

		return (
			<div id={this.props.id} className={classNames(staticClasses)}>
				{this.props.children}
			</div>
		);
	}
}

GridColumn.propTypes = {
	id: PropTypes.string,
	cssClass: PropTypes.string,
	spacing: PropTypes.string,
	spacingTop: PropTypes.string,
	textAlign: PropTypes.string,
	gridUnits: PropTypes.number,
	gridPush: PropTypes.number,
	gridPull: PropTypes.number,
  	heightCss: PropTypes.string,
	position: PropTypes.string
}

export default GridColumn;
