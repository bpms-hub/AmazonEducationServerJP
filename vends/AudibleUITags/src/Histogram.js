import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Meter from './Meter';
import ReviewStars from './ReviewStars';
import Heading from './Heading';
import GridRow from './GridRow';
import Text from './Text';

class Histogram extends React.Component {
    constructor(props) {
        super(props);
    }
		
	getRatingPercentage(rating){
		let ratingPercentage = (rating / this.props.numRatings) * 100;

		return ratingPercentage;
	}

	render() {
	    let staticClasses = ['bc-histogram'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

		return(
	      <div id={this.props.id} className={classNames(staticClasses)}>
	      	<Heading spacing="micro" headingLevel={3}>Overall</Heading>

	      	<GridRow spacing="micro">
	      		<ReviewStars averageRating={this.props.averageRating} numRatings={this.props.numRatings} />
	      	</GridRow>

	      	<div className="bc-histogram-row">
	      		<Text textSize="mini">5 Star</Text> <Meter percentage={this.getRatingPercentage(this.props.numFiveStars)} /> <Text textSize="mini">{this.props.numFiveStars}</Text>
	      	</div>
	      	<div className="bc-histogram-row">
	      		<Text textSize="mini">4 Star</Text> <Meter percentage={this.getRatingPercentage(this.props.numFourStars)} /> <Text textSize="mini">{this.props.numFourStars}</Text>
	      	</div>
	      	<div className="bc-histogram-row">
	      		<Text textSize="mini">3 Star</Text> <Meter percentage={this.getRatingPercentage(this.props.numThreeStars)} /> <Text textSize="mini">{this.props.numThreeStars}</Text>
	      	</div>
	      	<div className="bc-histogram-row">
	      		<Text textSize="mini">2 Star</Text> <Meter percentage={this.getRatingPercentage(this.props.numTwoStars)} /> <Text textSize="mini">{this.props.numTwoStars}</Text>
	      	</div>
	      	<div className="bc-histogram-row">
	      		<Text textSize="mini">1 Star</Text> <Meter percentage={this.getRatingPercentage(this.props.numOneStars)} /> <Text textSize="mini">{this.props.numOneStars}</Text>
	      	</div>
	      </div>
		);
	}
}

Histogram.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  numFiveStars: PropTypes.number,
  numFourStars: PropTypes.number,
  numThreeStars: PropTypes.number,
  numTwoStars: PropTypes.number,
  numOneStars: PropTypes.number,
  numRatings: PropTypes.number,
  averageRating: PropTypes.string
}

export default Histogram;
