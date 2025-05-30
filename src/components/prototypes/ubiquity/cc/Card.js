import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';


class Card extends React.Component {


	render() {
		let staticClasses = ['bc-box'];

		if (this.props.cssClass) staticClasses.push(this.props.cssClass);
		if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
		if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
		if (this.props.paddingSize) staticClasses.push('bc-box-padding-' + this.props.paddingSize);
		if (this.props.backgroundColor) staticClasses.push('bc-color-background-' + this.props.backgroundColor);
				if (this.props.headerColor) staticClasses.push('bc-color-background-' + this.props.headerColor);
		if (this.props.hasBorder) staticClasses.push('bc-box-border');


			// if(this.props.boxColor) staticClasses.push('bc-box-colors-') + this.props.boxColor);

			let inlineStyles = {
	      height: this.props.heightCss,
	      background: this.props.background? this.props.background: null

			}
		return(

      <div className={classNames(staticClasses)} id={this.props.id} style={inlineStyles}>
	<BC.GridRow textAlign="center">

				<BC.Box background={this.props.headerColor} paddingSize="none" hasBorder={false}>
					<BC.Heading headingLevel={3} textColor="inverse">
					{this.props.headerName}
					</BC.Heading>
				</BC.Box>



	<BC.Box background={this.props.backgroundColor} hasBorder={false} paddingSize="base" spacing="none">
		<BC.GridRow spacing="micro">
			{/*<BC.Image imageHeight="48px" source={this.props.logoType}/>*/}
		<BC.Text spacing="small" textSize="large" textColor="inverse" textBold={true}>
			 {this.props.cardName}
		</BC.Text>


	</BC.GridRow>
	</BC.Box>


<BC.Box paddingSize="small" background="#F9F9F9" hasBorder={false}>
	<BC.GridRow spacing="none" spacingTop="none" textAlign="center">

	<BC.Text textBold={true} textSize="base" textColor="base">{this.props.primaryPrice}
	</BC.Text><br/>
<BC.Text textBold={false} textSize="small" textColor="secondary">{this.props.secondaryPrice}
	</BC.Text>

			{this.props.children}

</BC.GridRow>


</BC.Box>
</BC.GridRow>
</div>

		);
	}
}

Card.PropTypes = {
	id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  paddingSize: PropTypes.string,
  heightCss: PropTypes.string,

  background: PropTypes.string,
  hasBorder: PropTypes.bool,

	headerName: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	headerColor: PropTypes.string,
	primaryPrice: PropTypes.string,
	secondaryPrice: PropTypes.string,
	logoType: PropTypes.string,
	cardName: PropTypes.string,
}

Card.defaultProps = {
  paddingSize: "none",
	hasBorder: true,
	backgroundColor: "#197397",
	// #1999cb
}

export default Card;
