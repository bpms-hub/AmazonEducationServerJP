import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Section extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    let staticClasses = ['bc-section'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.padding) staticClasses.push('bc-padding-' + this.props.padding);
    if(this.props.paddingTop) staticClasses.push('bc-padding-top-' + this.props.paddingTop);
    if(this.props.textAlign) staticClasses.push('bc-text-' + this.props.textAlign);
    if(this.props.backgroundColor) staticClasses.push('bc-color-background-' + this.props.backgroundColor);
    if(this.props.textSize) staticClasses.push('bc-size-' + this.props.textSize);
    if(this.props.textColor) staticClasses.push('bc-color-' + this.props.textColor);

    let inlineStyles = {
      height: this.props.heightCss,
      background: this.props.background? this.props.background: null
    }

    return (
  		<div id={this.props.id} className={classNames(staticClasses)} style={inlineStyles} role={this.props.role}>
  			{this.props.children}
  		</div>
    );
  }

}

Section.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  padding: PropTypes.string,
  paddingTop: PropTypes.string,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  background: PropTypes.string,
  role: PropTypes.string,
  textAlign: PropTypes.string
}

export default Section;
