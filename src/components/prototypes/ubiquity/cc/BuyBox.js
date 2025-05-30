import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class BuyBox extends React.Component {

  render() {
    let staticClasses = ['bc-buybox'];
    if (this.props.cssClass)
      staticClasses.push(this.props.cssClass);
    if (this.props.spacing)
      staticClasses.push('bc-spacing-' + this.props.spacing);
    if (this.props.spacingTop)
      staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

    return (
      <BC.GridRow spacing="base">
        <BC.Button spacing="small" buttonType="primary">Buy with <BC.Text textBold={true}>1 Credit</BC.Text></BC.Button>
        <BC.Button spacing="small">Buy for <BC.Text textBold={true}>$14.95</BC.Text> <BC.Text textStrike={true}>$29.95</BC.Text></BC.Button>
        
        <BC.GridColumn gridUnits={6} textAlign="center">
          {!this.props.inWishlist &&
            <BC.TextButton iconType="add" label="Wishlist" />
          }
          {this.props.inWishlist &&
            <BC.TextButton buttonType="primary" iconType="close" label="In Wishlist" />
          }
        </BC.GridColumn>

        <BC.GridColumn gridUnits={6} textAlign="center" position="last">
          <BC.TextButton iconType="gift" label="Gift" />
        </BC.GridColumn>
      </BC.GridRow>
    );
  }

}
BuyBox.propTypes = {
  inWishlist: PropTypes.bool
}

export default BuyBox;