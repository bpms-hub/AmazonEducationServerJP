import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Icon from './Icon';
import FixedGridRow from './FixedGridRow';
import FixedGridColumn from './FixedGridColumn';
import Container from './Container';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {alertActive: true};
    }

	closeAlert(e) {
		e.preventDefault();
		
		this.setState({
			alertActive: false
		})
	}

	render() {
	    let staticClasses = ['bc-alert', 'bc-alert-normal'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
	    if(this.props.alertType) { staticClasses.push('bc-alert-' + this.props.alertType); }

	    let alertTypeIcon;

	    if (this.props.alertType === "info") alertTypeIcon = 'info-circle';
	    else if (this.props.alertType === "success") alertTypeIcon = 'check';
	    else alertTypeIcon = 'exclamation-triangle';

		return(
			<div>
				{this.state.alertActive &&
					<div
						id={this.props.id} 
			      		className={classNames(staticClasses)}
			      		role="alert">
			      		<Container>
			      			<span className="alert-content">
								{this.props.children}
							</span>

				            {this.props.closeable &&
					            <a title="Close alert" href="#" className="alert-close" onClick={this.closeAlert.bind(this)}>
					                <Icon iconType="close" />
					            </a>
					        }
					    </Container>
					</div>
				}
			</div>
		);
	}
}

Alert.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  alertType: PropTypes.string,
  closeable: PropTypes.bool,
  alertActive: PropTypes.bool
}

Alert.defaultProps = {
  alertType: 'error'
}

export default Alert;