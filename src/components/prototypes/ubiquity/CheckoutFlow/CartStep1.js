import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class CartStep1 extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    var rows = [];

    for (var x = 0; x < 3; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function () {
      return (
        <div>

          <CC.ProductListingColumn4
            bookSeries="Ender's Games"
            bookTitleLink="First Meetings: In the Enderverse"
            bookAuthorLink="Orson Scott Card"
            bookPrice="29.99"
            bookCredit={true}
            remove={true}
            wishList={true}
            hasRadioBtn={true}
            userCost="0.00"
            />

        </div>
      )
    })
    return rowMap;
  }

  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
        <BC.GridRow>
        <BC.GridColumn gridUnits={9}>
          {/* Progress Bar */}
          <CC.ProgressBarRow textBold={true} textSize="medium">
            <CC.ProgressBar activeState={true} spacing="base" widthPercentage={33.3} number="1">Cart</CC.ProgressBar>
            <CC.ProgressBar spacing="base" widthPercentage={33.3} number="2">Place Order</CC.ProgressBar>
            <CC.ProgressBar spacing="base" widthPercentage={33.3} number="3">Ready to Download</CC.ProgressBar>
          </CC.ProgressBarRow>

          <BC.GridRow>
            <BC.GridColumn gridUnits={9} spacing="micro">
              <BC.Heading headingLevel="1" spacingTop="micro">Cart</BC.Heading>
            </BC.GridColumn>
            <BC.GridColumn gridUnits={3} position="last" textAlign="right">
              <BC.Button app={true} url="/prototypes/brickcity/cart-step2" buttonType="primary">Next Step</BC.Button>
            </BC.GridColumn>
          </BC.GridRow>

          {/* Free Membership */}
          <CC.ProductListingColumn4
            trialImage="true"
            trialPrice="true"
            userCost="0.00"
            />

            <BC.Section spacing="small">
              {this.renderItems()}
            </BC.Section>

            <BC.Divider spacing="mini"/>

            {/* Promo Code */}
            <BC.Expander anchor={true} hideText="Do you have a promotional code?" showText="Do you have a promotional code?">
              <BC.GridRow>
                <BC.GridColumn gridUnits={6}>
                  <BC.TextInput placeholder="Enter promo code" spacing="small"/>
                </BC.GridColumn>

                <BC.GridColumn gridPull={3} gridUnits={3} position="last">
                    <BC.Button buttonType="primary">Submit</BC.Button>
                </BC.GridColumn>
              </BC.GridRow>
            </BC.Expander>

            <BC.Divider dividerType="dotted" spacing="base"/>

          {/* Cart Buttons */}

            <BC.Section textAlign="right">
              <BC.GridRow spacing="small">
                <BC.GridColumn>
                  <BC.Text textBold={true} textSize="base">Available Credits:</BC.Text>
                  <BC.Text> 5</BC.Text>
                </BC.GridColumn>
                <BC.GridColumn position="last">
                  <BC.Text textBold={true} textSize="medium">Subtotal: $0.00</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>

              <BC.GridRow spacing="extra-large">
                <BC.GridColumn gridUnits={6} spacingTop="micro" textAlign="right">
                  <BC.Text textColor="secondary">Continue shopping</BC.Text>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={3}>
                  <BC.Button buttonType="secondary">Update</BC.Button>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={3} position="last">
                    <BC.Button app={true} url="/prototypes/brickcity/cart-step2" buttonType="primary">Next Step</BC.Button>
                </BC.GridColumn>
              </BC.GridRow>
            </BC.Section>

          </BC.GridColumn>

          <BC.GridColumn gridUnits={3} position="last">
              <CC.ProductDetail
              hasAsin = {true}
              productTitle="You might also like..."
              verticalProduct={true}
              bookTitle = "Both Flesh and Not"
              bookAuthor = "David Foster Wallace"
              bookRating = {true}
              addCartButton = {true}
              />
          </BC.GridColumn>

        </BC.GridRow>

        </div>

        <ProdFooter/>
      </div>
    )
  }

}
export default CartStep1;
