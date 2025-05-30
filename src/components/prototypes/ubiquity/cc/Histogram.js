import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class Histogram extends React.Component {
	getRatingPercentage(rating){
		let ratingPercentage = (rating / this.props.numRatings) * 100;

		return ratingPercentage;
	}

	render() {
	    let staticClasses = ['bc-histogram'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

		return(
	      <div id={this.props.id} className={classNames(staticClasses)}>
	      	<BC.Heading spacing="micro" headingLevel={3}>Overall</BC.Heading>

	      	<BC.GridRow spacing="micro">
	      		<BC.ReviewStars averageRating={this.props.averageRating} numRatings={this.props.numRatings} />
	      	</BC.GridRow>

	      	<BC.GridRow>
	      		<BC.GridColumn gridUnits={2}>
	      			<BC.Text textSize="mini">5 Star</BC.Text> 
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={8}>
	      			<BC.Meter meterHeight={18} percentage={this.getRatingPercentage(this.props.numFiveStars)} />
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={2} position="last">
	      			<BC.Text textSize="mini">{this.props.numFiveStars}</BC.Text> 
	      		</BC.GridColumn>
	      	</BC.GridRow>

	      	<BC.GridRow>
	      		<BC.GridColumn gridUnits={2}>
	      			<BC.Text textSize="mini">4 Star</BC.Text> 
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={8}>
	      			<BC.Meter meterHeight={18} percentage={this.getRatingPercentage(this.props.numFourStars)} />
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={2} position="last">
	      			<BC.Text textSize="mini">{this.props.numFourStars}</BC.Text> 
	      		</BC.GridColumn>
	      	</BC.GridRow>

	      	<BC.GridRow>
	      		<BC.GridColumn gridUnits={2}>
	      			<BC.Text textSize="mini">3 Star</BC.Text> 
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={8}>
	      			<BC.Meter meterHeight={18} percentage={this.getRatingPercentage(this.props.numThreeStars)} />
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={2} position="last">
	      			<BC.Text textSize="mini">{this.props.numThreeStars}</BC.Text> 
	      		</BC.GridColumn>
	      	</BC.GridRow>

	      	<BC.GridRow>
	      		<BC.GridColumn gridUnits={2}>
	      			<BC.Text textSize="mini">2 Star</BC.Text> 
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={8}>
	      			<BC.Meter meterHeight={18} percentage={this.getRatingPercentage(this.props.numTwoStars)} />
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={2} position="last">
	      			<BC.Text textSize="mini">{this.props.numTwoStars}</BC.Text> 
	      		</BC.GridColumn>
	      	</BC.GridRow>

	      	<BC.GridRow>
	      		<BC.GridColumn gridUnits={2}>
	      			<BC.Text textSize="mini">1 Star</BC.Text> 
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={8}>
	      			<BC.Meter meterHeight={18} percentage={this.getRatingPercentage(this.props.numOneStars)} />
	      		</BC.GridColumn>

	      		<BC.GridColumn gridUnits={2} position="last">
	      			<BC.Text textSize="mini">{this.props.numOneStars}</BC.Text> 
	      		</BC.GridColumn>
	      	</BC.GridRow>
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