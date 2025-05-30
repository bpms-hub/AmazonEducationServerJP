import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import { Link as Linkrr } from 'react-router'
import Icon from './Icon';

class FunctionalLink extends React.Component {
    constructor(props) {
        super(props);
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
	    if(this.props.linkType) { staticClasses.push('bc-link-' + this.props.linkType); }

	    if(this.props.app){
		return(
	      <Linkrr {...this.props} id={this.props.id} className={classNames(staticClasses)} to={this.props.url} params={this.props.params} query={this.props.query} title={this.props.title}  rel={this.props.rel}>
	        <Icon iconType={this.props.iconType} />  {this.props.children}
	      </Linkrr>
		)
	    }else{
		return(
	      <a {...this.props} id={this.props.id} className={classNames(staticClasses)} href={this.props.url} title={this.props.title} target={this.props.target} rel={this.props.rel}>
	        <Icon iconType={this.props.iconType} /> {this.props.children}
	      </a>)
	    }
	}
}

FunctionalLink.PropTypes = {
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
  iconType: PropTypes.string
}

export default FunctionalLink;
