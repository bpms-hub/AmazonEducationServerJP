import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Text from './Text';
import Icon from './Icon';
import Pipe from './Pipe';
import LetterSpace from './LetterSpace';

class ReviewStars extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    let staticClasses = ['bc-review-stars'];

    return (
      <span className={classNames(staticClasses)}>
        <Icon iconType="star" verticalAlign="baseline" textColor="active" />
        <Icon iconType="star" verticalAlign="baseline" textColor="active" />
        <Icon iconType="star" verticalAlign="baseline" textColor="active" />
        <Icon iconType="star" verticalAlign="baseline" textColor="active" />
        <Icon iconType="star" textColor="tertiary" verticalAlign="baseline"/>
        {this.props.showAverageRating || this.props.numRatings ? <LetterSpace/> : null}
        {this.props.showAverageRating ? [<Text textBold={true} textColor={this.props.inverse ? "inverse" : "null"}>{this.props.averageRating} </Text>] : null}
        {this.props.showAverageRating && this.props.numRatings ? <Pipe textColor={this.props.inverse ? "inverse" : "primary"}/> : null}
        {this.props.numRatings ? [ < Text textColor = {this.props.inverse ? "inverse" : "null"} > ({this.props.numRatings}) < /Text>] : null}
      </span>
    );
  }

}
ReviewStars.propTypes = {
  numRatings: PropTypes.number,
  averageRating: PropTypes.number,
  showAverageRating: PropTypes.bool
}
export default ReviewStars;
