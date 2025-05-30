import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';

class CartStep3Member extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSummary() {
    var rows = [];

    for (var x = 0; x < 3; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function() {
      return (
        <div>

        {/* Cart Items */}

          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="small">
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
                <CC.Product  asinImageUrl={productData[0].product_images[500]} />
            </BC.FixedGridColumn>

            <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right">
              <BC.GridRow spacing="small">
                <BC.GridColumn gridPull={5} gridUnits={7} position="last">
                  <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                    <BC.ListItem>
                      <BC.Text textColor="base" textSize="base">The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia</BC.Text>
                    </BC.ListItem>
                    <BC.ListItem>
                      <BC.Text>by C.S. Lewis</BC.Text>
                    </BC.ListItem>
                    <BC.ListItem>
                      <BC.Text>Narrated by Kenneth Branagh</BC.Text>
                    </BC.ListItem>
                  </BC.List>
                </BC.GridColumn>
              </BC.GridRow>

            </BC.FixedGridColumn>
          </BC.FixedGridRow>

          <BC.Divider spacing="small"/>

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

          <BC.Heading headingLevel="2" spacing="base" textAlign="center">Your book is now available in your Library.</BC.Heading>

          {/* Banner */}

          <BC.Section textAlign="center" backgroundImage="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cart-step3-banner._V288437077_.jpg" heightCss="421px" spacing="base" width="998px">
              <BC.Section paddingTop="large">
                  <BC.Heading headingLevel={1} textAlign="center" textColor="inverse">Start listening with your favorite devices</BC.Heading>
                  <BC.Paragraph textAlign="center" textColor="inverse">Select one to get started or, for more info on all of the ways you can listen, <BC.Link>click here</BC.Link>.</BC.Paragraph>
              </BC.Section>

              <BC.GridRow spacing="small" spacingTop="medium">
                <BC.GridColumn spacingTop="mini" gridUnits={2} gridPush={2}>
                  <BC.Section heightCss="50px">
                    <BC.Icon iconSize="large" iconType="apple" textColor="inverse"/>
                  </BC.Section>
                  <BC.Heading headingLevel={2} textColor="inverse">Apple</BC.Heading>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={2} gridPush={2}>
                  <BC.GridRow spacingTop="small" spacing="small">
                  <BC.Section heightCss="30px">
                    <BC.Icon iconSize="large" iconType="android" textColor="inverse" />
                  </BC.Section>
                  </BC.GridRow>
                  <BC.Heading headingLevel={2} textColor="inverse">Android</BC.Heading>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={2} gridPush={2}>
                  <BC.GridRow spacingTop="small" spacing="small">
                  <BC.Section heightCss="30px">
                    <BC.Icon iconSize="large" iconType="amazon" textColor="inverse"/>
                  </BC.Section>
                  </BC.GridRow>
                  <BC.Heading headingLevel={2} textColor="inverse">Kindle</BC.Heading>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={2} gridPull={2} position="last">
                <BC.Section heightCss="45px" spacingTop="small">
                  <BC.Icon iconSize="large" iconType="windows" textColor="inverse"/>
                </BC.Section>
                  <BC.Heading headingLevel={2} textColor="inverse">Windows</BC.Heading>
                </BC.GridColumn>
              </BC.GridRow>
              <BC.GridRow>
              <BC.GridColumn gridPush={2} gridUnits={8}>
                <BC.Divider spacing="large" />
              </BC.GridColumn>
            </BC.GridRow>
            <BC.GridRow>
              <BC.Paragraph textAlign="center" textColor="inverse">If you prefer, have a link sent to you</BC.Paragraph>
            </BC.GridRow>

            <BC.GridRow>
              <BC.GridColumn gridUnits={4} gridPush={3}>
                <BC.TextInput placeholder="Enter your phone number or email" spacing="small"/>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={2} gridPull={3} position="last">
                <BC.Link>
                  <BC.Button buttonType="primary">Send me the link</BC.Button>
                </BC.Link>
              </BC.GridColumn>
            </BC.GridRow>

          </BC.Section>

          {/* Purchase Summary */}

          <BC.GridRow>
            <BC.GridColumn gridUnits={7} spacing="micro" spacingTop="small">
              <BC.Heading headingLevel="1">Purchase Summary</BC.Heading>
            </BC.GridColumn>
            <BC.GridColumn gridUnits={5} position="last" spacing="small" spacingTop="base" textAlign="right">
              <BC.Text textBold={true} textColor="secondary" textSize="base">Order ID# D01-2611356-589029</BC.Text>
              <BC.Link><BC.Pipe/>
                View order details</BC.Link>
            </BC.GridColumn>
          </BC.GridRow>


          {/* 30-day Membership */}

          <BC.Divider spacing="small"/>
          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="small">
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
              <BC.Link url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg"/></BC.Link>
            </BC.FixedGridColumn>

            <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right">
              <BC.GridRow spacing="small">
                <BC.GridColumn gridPull={5} gridUnits={7} position="last">
                  <BC.Text textColor="base" textSize="base">30-day Free Membership</BC.Text>
                  <BC.List spacing="small">
                    <BC.ListItem spacing="micro" spacingTop="micro">
                      <BC.Text>1 book per month</BC.Text>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      <BC.Text>Free for the first 30 days and $14.95/month thereafter</BC.Text>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      <BC.Text>Membership Continues until you cancel (by visiting your aBCount or contacting customer service)</BC.Text>
                    </BC.ListItem>
                  </BC.List>
                </BC.GridColumn>
              </BC.GridRow>

            </BC.FixedGridColumn>
          </BC.FixedGridRow>

          <BC.Divider spacing="small"/>

          {this.renderSummary()}

          {/* Bottom Text */}

          <BC.Heading headingLevel="2"  textAlign="center" spacing="micro">Questions? Give us a call</BC.Heading>
          <BC.Paragraph textAlign="center" spacing="extra-large">We’re here for you 24/7. Give us a call at
            <BC.Text textColor="link"> 1-888-283-5051 </BC.Text>
            (US & Canada),
            <BC.Text textColor="link"> 1-973-820-0400 </BC.Text>
            (International)
          </BC.Paragraph>

        </div>

        <ProdFooter/>
      </div>
    )
  }

}

export default CartStep3Member;
