import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Text extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    let staticClasses = ['bc-text'];
    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    if(this.props.textSize) { staticClasses.push('bc-size-' + this.props.textSize); }
    if(this.props.textColor) { staticClasses.push('bc-color-' + this.props.textColor); }
    if(this.props.textBold) { staticClasses.push('bc-text-bold'); }
    if(this.props.textCapitalize) { staticClasses.push('bc-text-capitalize'); }
    if(this.props.textEmphasis) { staticClasses.push('bc-text-emphasis'); }
    if(this.props.textQuote) { staticClasses.push('bc-text-quote'); }
    if(this.props.textStrike) { staticClasses.push('bc-text-strike'); }
    if(this.props.textNormal) { staticClasses.push('bc-text-normal'); }
    if(this.props.textNowrap) { staticClasses.push('bc-text-nowrap'); }

    let inlineStyles = {
      verticalAlign: this.props.verticalAlign,
    }

    return (
      <span id={this.props.id} className={classNames(staticClasses)} style={inlineStyles}>
        {this.props.children}
      </span>
    );
  }

}

Text.propTypes = {
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
  textNowrap: PropTypes.bool,
  verticalAlign: PropTypes.string
};

export default Text;
