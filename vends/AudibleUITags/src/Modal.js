import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Icon from './Icon';
import Box from './Box';
import Heading from './Heading';
import Link from './Link';
import GridRow from './GridRow';
import GridColumn from './GridColumn';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

	preventClose(e) {
		e.stopPropagation();
	}

	renderModal() {
	    let staticClasses = ['bc-modal'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

		return(
	      	<span onClick={this.props.onClick}>
	      		<div className="bc-modal-backdrop"></div>
	      		<div
	      			id={this.props.id}
	      			className={classNames(staticClasses)}>

	      			<div className={classNames(["bc-modal-container"])} onClick={this.preventClose.bind(this)}>
		      			<Box paddingSize="small" textAlign="left" backgroundColor="secondary">
		      				<GridRow>
		      					<GridColumn gridUnits={11}>
		      						<Heading headingLevel={3}>{this.props.title}</Heading>
		      					</GridColumn>

		      					<GridColumn textAlign="right" gridUnits={1} position="last">
				      				<Link textColor="base" onClick={this.props.onClick}>
					      				<Icon iconType="close" />
				      				</Link>
		      					</GridColumn>
		      				</GridRow>
	      				</Box>
	      				
		      			<Box paddingSize="small" backgroundColor="base">
		      				{this.props.children}
	      				</Box>
	      			</div>
	      		</div>
	      	</span>
		);
	}

	render() {
		if (!this.props.active) {
			return null;
		}
		else {
			return this.renderModal();
		}
	}
}

Modal.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  active: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Modal;
