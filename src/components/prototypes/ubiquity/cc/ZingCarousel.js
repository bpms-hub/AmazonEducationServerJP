import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class ZingCarousel extends React.Component {
  render() {
    let staticClasses = ['bc-zing-carousel'];
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    
    return (
      <div          
        id={this.props.id}
        className={classNames(staticClasses)}>
        <BC.Box backgroundColor="inverse" paddingSize="extra-large" heightCss="400px">
          <BC.GridRow textAlign="center" textSize="large" textColor="inverse">Zing Carousel Goes Here</BC.GridRow>
        </BC.Box>
      </div>
    );
  }
}

ZingCarousel.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string
}

export default ZingCarousel;