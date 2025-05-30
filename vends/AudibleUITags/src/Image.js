import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    let staticClasses = ['bc-image'];
    if (this.props.cssClass) staticClasses.push(this.props.cssClass);
    if (this.props.lazyLoaded) staticClasses.push('bc-lazy-loaded');
    if (this.props.block) staticClasses.push('bc-block');

    let inlineStyles = {
      verticalAlign: this.props.verticalAlign,
    }
    return (
      <img
        alt={this.props.altText} 
        className={classNames(staticClasses)} 
        data-bc-hires={this.props.hiResSource} 
        height={this.props.imageHeight} 
        id={this.props.id} 
        src={this.props.source} 
        style={inlineStyles} 
        title={this.props.title} 
        width={this.props.imageWidth}/>
    );
  }
}
Image.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  source: PropTypes.string,
  hiResSource: PropTypes.string,
  title: PropTypes.string,
  altText: PropTypes.string,
  lazyLoaded: PropTypes.bool,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  verticalAlign: PropTypes.string,
}
export default Image;
