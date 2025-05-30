import React from 'react';
import classNames from 'classnames';

class BaseLayout extends React.Component {
	constructor(props,context) {
	  super(props,context);
	  this.state = {
	    fontType: null,
	    theme: null
	  };
	}

	componentWillMount(){
		this.setState({
		  fontType: this.props.location.query.fontType,
		  theme: this.props.location.query.theme
		});
	}


	  render() {
	    return (
	      <div className={classNames(
	      	[
	      		this.state.fontType ? 'bc-fonttype-' + this.state.fontType : null, 
	      		this.state.theme ? 'bc-theme-' + this.state.theme : null
	      	])}>
	      	<div className="bc-color-background-base bc-color-secondary">
	        	{this.props.children}
	        </div>
	      </div>
	    )
	  }
}

BaseLayout.contextTypes= {
    location: React.PropTypes.object
};

export default BaseLayout;        