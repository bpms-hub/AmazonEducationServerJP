import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Modal from './Modal';

class ModalTrigger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	isModalShown: this.props.isModalShown
       	};
    }

	show() {
		this.setState({
		  	isModalShown: true
		});
	}

	hide() {
		this.setState({
		  	isModalShown: false
		});
	}

	// componentDidMount() {
	// 	this._mountNode = document.createElement('div');
	// 	document.body.appendChild(this._mountNode);
	// 	React.render(this._modal, this._mountNode);
	// }

	render() {
		// this._modal = this.renderModal();

		return(
			<span>
				<span onClick={this.show.bind(this)}>
					{this.props.children}
				</span>
				
				<Modal onClick={this.hide.bind(this)} active={this.state.isModalShown} title={this.props.modalTitle}>{this.props.modalContent}</Modal>
			</span>
		);
	}
}

ModalTrigger.PropTypes = {
	modalTitle: PropTypes.string,
	modalContent: PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.node
	]),
	isModalShown: PropTypes.bool
}

export default ModalTrigger;