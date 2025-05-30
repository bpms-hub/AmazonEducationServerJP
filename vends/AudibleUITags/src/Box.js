import React,
{
  PropTypes
} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Box extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    let staticClasses = ['bc-box'];

    if (this.props.cssClass) staticClasses.push(this.props.cssClass);
    if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if (this.props.paddingSize) staticClasses.push('bc-box-padding-' + this.props.paddingSize);
    if (this.props.backgroundColor) staticClasses.push('bc-color-background-' + this.props.backgroundColor);
    if(this.props.textSize) staticClasses.push('bc-size-' + this.props.textSize);
    if(this.props.textColor) staticClasses.push('bc-color-' + this.props.textColor);
    if(this.props.textAlign) staticClasses.push('bc-text-' + this.props.textAlign);
    if (this.props.hasBorder) staticClasses.push('bc-box-border bc-color-border-base');
    if (this.props.hasShadow) staticClasses.push('bc-shadow');

    let inlineStyles = {
      height: this.props.heightCss,
      background: this.props.background? this.props.background: null
    }
    return (
      <div className={classNames(staticClasses)} id={this.props.id} style={inlineStyles} role={this.props.role}>
        {this.props.children}
      </div>
    );
  }

}
Box.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  paddingSize: PropTypes.string,
  heightCss: PropTypes.string,
  backgroundColor: PropTypes.string,
  background: PropTypes.string,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  textAlign: PropTypes.string,
  role: PropTypes.string,
  hasBorder: PropTypes.bool,
  hasShadow: PropTypes.bool
}

Box.defaultProps = {
  paddingSize: "base"
}

export default Box;