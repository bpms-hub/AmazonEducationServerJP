import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Heading extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = ['bc-heading'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
	    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
	    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
	    if(this.props.inline) staticClasses.push('bc-inline-block');
	    if(this.props.textAlign) staticClasses.push('bc-text-' + this.props.textAlign);
	    if(this.props.textSize) { staticClasses.push('bc-size-' + this.props.textSize); }
	    if(this.props.textColor) { staticClasses.push('bc-color-' + this.props.textColor); }
	    if(this.props.textBold) { staticClasses.push('bc-text-bold'); }
	    if(this.props.textCapitalize) { staticClasses.push('bc-text-capitalize'); }
	    if(this.props.textEmphasis) { staticClasses.push('bc-text-emphasis'); }
	    if(this.props.textQuote) { staticClasses.push('bc-text-quote'); }
	    if(this.props.textStrike) { staticClasses.push('bc-text-strike'); }
	    if(this.props.textNormal) { staticClasses.push('bc-text-normal'); }
    	if(this.props.textNowrap) { staticClasses.push('bc-text-nowrap'); }

		let Component = 'h' + this.props.headingLevel;

		return(
			<Component
				{...this.props}
				id={this.props.id}
				className={classNames(staticClasses)}>
				{this.props.children}
			</Component>
		);
	}
}

Heading.PropTypes = {
	id: PropTypes.string,
	cssClass: PropTypes.string,
	spacing: PropTypes.string,
	spacingTop: PropTypes.string,
	inline: PropTypes.bool,
	textAlign: PropTypes.string,
	textSize: PropTypes.string,
	textColor: PropTypes.string,
	textBold: PropTypes.bool,
	textCapitalize: PropTypes.bool,
	textEmphasis: PropTypes.bool,
	textQuote: PropTypes.bool,
	textStrike: PropTypes.bool,
	textNormal: PropTypes.bool,
  	textNowrap: PropTypes.bool,
	headingLevel: PropTypes.number,
}

Heading.defaultProps = {
  headingLevel: 1,
  textColor: "base",
  spacing: 'none',
  spacingTop: 'none'
}

export default Heading;
