import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class CartStep2 extends React.Component {
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
            bookTitle="First Meetings: In the Enderverse"
            bookAuthor="Orson Scott Card"
            bookPrice="29.99"
            bookCredit={true}
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
            <CC.ProgressBar spacing="base" widthPercentage={33.3} number="1">Cart</CC.ProgressBar>
            <CC.ProgressBar activeState={true} spacing="base" widthPercentage={33.3} number="2">Place Order</CC.ProgressBar>
            <CC.ProgressBar spacing="base" widthPercentage={33.3} number="3">Ready to Download</CC.ProgressBar>
          </CC.ProgressBarRow>

          <BC.GridRow>
              <BC.Heading headingLevel="1" spacingTop="micro">Place Order</BC.Heading>
          </BC.GridRow>

          {/* Free Membership */}
          <CC.ProductListingColumn4
            trialImage="true"
            userCost="0.00"
            />

            <BC.Section spacing="small">
              {this.renderItems()}
            </BC.Section>

            <BC.Divider  spacing="mini"/>

            {/* Order Summary */}

            <BC.Text textSize="base">Summary</BC.Text>
            <BC.Table spacingTop="mini">
              <BC.TableRow>
                <BC.TableColumn>Purchase</BC.TableColumn>
                <BC.TableColumn>$0.00</BC.TableColumn>
              </BC.TableRow>
              <BC.TableRow>
                <BC.TableColumn>Subtotal</BC.TableColumn>
                <BC.TableColumn>$0.00</BC.TableColumn>
              </BC.TableRow>
              <BC.TableRow textBold={true}>
                <BC.TableColumn>
                  <BC.Text textBold={true}>Total</BC.Text>
                </BC.TableColumn>
                <BC.TableColumn>
                  <BC.Text textBold={true}>$0.00</BC.Text>
                </BC.TableColumn>
              </BC.TableRow>
            </BC.Table>

            <BC.Section spacing="extra-large" spacingTop="base">

              <BC.GridRow spacing="base">
                <BC.GridColumn gridUnits={3}>
                    <BC.Button app={true} url="/prototypes/brickcity/cart-step1" buttonType="secondary">Back</BC.Button>
                </BC.GridColumn>

                <BC.GridColumn gridUnits={3} position="last">
                    <BC.Button app={true} url="/prototypes/brickcity/cart-step3" buttonType="primary">Complete</BC.Button>
                </BC.GridColumn>
              </BC.GridRow>

              <BC.Text textColor="secondary" textSize="mini">By completing your purchase you agree to Audible&#39;s Conditions of Use and Privacy Notice and authorize us to charge your designated credit card or another available credit card on file for any outstanding balances on your aBCount as they become due.</BC.Text>

            </BC.Section>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={3} position="last">
            <BC.Section spacing="small">
              <BC.Text textSize="medium">Account Information</BC.Text>
            </BC.Section>
            <BC.List listType="nostyle" textSize="small">
              <BC.ListItem spacingTop="micro" textBold={true}>Name on Card:</BC.ListItem>
              <BC.ListItem>Lisa Del Monte</BC.ListItem>
              <BC.ListItem textBold={true}>Credit Card Type:</BC.ListItem>
              <BC.ListItem>Visa</BC.ListItem>
              <BC.ListItem textBold={true}>Card Number:</BC.ListItem>
              <BC.ListItem spacing="mini">xxxx-5683</BC.ListItem>
              <BC.ListItem spacing="mini">
                <BC.Link>Edit payment method</BC.Link>
              </BC.ListItem>
            </BC.List>
          </BC.GridColumn>

        </BC.GridRow>

        </div>

        <ProdFooter/>
      </div>
    )
  }

}
export default CartStep2;
