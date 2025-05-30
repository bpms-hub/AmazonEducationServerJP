import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = ['bc-Form'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    	if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    	if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

		return(
	      <form
	      	id={this.props.id}
	      	className={classNames(staticClasses)}
			name={this.props.name}
			method={this.props.method}
			novalidate={this.props.novalidate}
			action={this.props.action}
			target={this.props.target}
			autocomplete={this.props.autocomplete}>
	      	{this.props.children}
	      </form>
		);
	}
}

Form.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  name: PropTypes.string,
  target: PropTypes.string,
  method: PropTypes.string,
  action: PropTypes.string,
  novalidate: PropTypes.bool,
  autocomplete: PropTypes.string,
}

export default Form;
