import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import { Router, Link as Linkrr } from 'react-router'

class Link extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    onClickDisabled(e){
    	e.preventDefault();
    }

	render() {
	    let staticClasses = ['bc-link'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
	    if(this.props.textSize) { staticClasses.push('bc-size-' + this.props.textSize); }
		if(this.props.textColor) { staticClasses.push('bc-color-' + this.props.textColor); }
		if(this.props.textBold) { staticClasses.push('bc-text-bold'); }
		if(this.props.textCapitalize) { staticClasses.push('bc-text-capitalize'); }
		if(this.props.textEmphasis) { staticClasses.push('bc-text-emphasis'); }
		if(this.props.textQuote) { staticClasses.push('bc-text-quote'); }
		if(this.props.textStrike) { staticClasses.push('bc-text-strike'); }
		if(this.props.textNormal) { staticClasses.push('bc-text-normal'); }
		if(this.props.disabled) { staticClasses.push('bc-disabled'); }
	    if(this.props.linkType) { staticClasses.push('bc-link-' + this.props.linkType); }
	    if(this.props.app){
			return(
				<Linkrr {...this.props} id={this.props.id} className={classNames(staticClasses)} onClick={this.props.disabled ? this.onClickDisabled.bind(this) : this.props.onClick} to={this.props.url} params={this.props.params} query={this.props.query} title={this.props.title} disabled={this.props.disabled} rel={this.props.rel}>
					{this.props.children}
				</Linkrr> )
	    } else{
			return(
				<a {...this.props} id={this.props.id} className={classNames(staticClasses)} onClick={this.props.disabled ? this.onClickDisabled.bind(this) : this.props.onClick} href={this.props.url} title={this.props.title} target={this.props.target} disabled={this.props.disabled} rel={this.props.rel}>
					{this.props.children}
				</a>
		    )
	    }
	}
}

Link.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  textBold: PropTypes.bool,
  textCapitalize: PropTypes.bool,
  textEmphasis: PropTypes.bool,
  textQuote: PropTypes.bool,
  textStrike: PropTypes.bool,
  textNormal: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  linkType: PropTypes.string,
  disabled: PropTypes.bool
}

Link.defaultProps = {
	textColor: "link"
}

Link.contextTypes = {
	router: function contextType() {
    return React.PropTypes.func.isRequired;
  }
}

export default Link;
