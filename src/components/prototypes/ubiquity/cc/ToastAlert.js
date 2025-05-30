import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class ToastAlert extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
	    let staticClasses = ['bc-alert-toast', 'bc-theme-dark'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    	if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    	if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

		return(
			<div style={{
				bottom: '20px',
				left: '50%',
				marginLeft: '-286px',
				position: 'fixed',
				maxWidth: '572px',
				width: '100%',
				zIndex: '999'
			}}>
				<div className={classNames(staticClasses)}>
					<BC.Box paddingSize="small">
						<BC.GridRow>
							<BC.GridColumn gridUnits={10}>
								<BC.Text textColor="secondary">{this.props.message}</BC.Text>
							</BC.GridColumn>

							<BC.GridColumn textAlign="right" gridUnits={2} position="last">
								<BC.Link>{this.props.actionText}</BC.Link>
							</BC.GridColumn>
						</BC.GridRow>
					</BC.Box>
				</div>
			</div>
		);
	}
}

ToastAlert.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  message: PropTypes.string,
  actionText: PropTypes.string
}

export default ToastAlert;