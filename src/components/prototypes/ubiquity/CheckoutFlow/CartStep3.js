import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';

class CartStep3 extends React.Component {
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

        <CC.ProductListingColumn2
          hasAsin={true}
          bookTitle="First Meetings: In the Enderverse"
          bookAuthor="Orson Scott Card"
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

          <BC.Heading headingLevel="2" spacing="base" textAlign="center">Your book is now available in your Library.</BC.Heading>

          {/* Banner */}

          <BC.Section background="url(http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/banner/cart-step3-banner._V291253980_.jpg)" heightCss="421px" spacing="base" width="998px">
              <BC.Section paddingTop="large">
                  <BC.Heading headingLevel={1} textAlign="center" textColor="inverse">Join Audible and save</BC.Heading>
                  <BC.Heading headingLevel={2} textAlign="center" textColor="inverse">Audible members enjoy:</BC.Heading>
              </BC.Section>
              <BC.GridRow spacing="small" spacingTop="medium">
                <BC.GridColumn spacingTop="mini" gridUnits={3} gridPush={2}>
                  <BC.Image cssClass="bc-membersOnly-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/membersonly._V288437082_.svg" />
                  <BC.Heading headingLevel={2} textAlign="center" textColor="inverse">Member-only pricing</BC.Heading>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={2} gridPush={2}>
                  <BC.GridRow spacingTop="small" spacing="small">
                    <BC.Image cssClass="bc-deals-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/deals._V288437077_.svg" />
                  </BC.GridRow>
                  <BC.Heading headingLevel={2} textAlign="center" textColor="inverse">Exclusive sales</BC.Heading>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={3} gridPull={2} position="last">
                  <BC.Image cssClass="bc-glg-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/glg._V288437082_.svg" />
                  <BC.Heading headingLevel={2} textAlign="center" textColor="inverse">Our listening guarantee</BC.Heading>
                </BC.GridColumn>
              </BC.GridRow>
              <BC.GridRow>
              <BC.GridColumn gridPush={2} gridUnits={8}>
                <BC.Divider spacing="large" />
              </BC.GridColumn>
            </BC.GridRow>
            <BC.GridRow>
              <BC.GridColumn gridPush={5} gridUnits={2}>
                <BC.Button buttonType="primary">Join Now</BC.Button>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Section>

          {/* Purchase Summary */}

          <BC.GridRow>
            <BC.GridColumn gridUnits={7} spacing="medium" spacingTop="small">
              <BC.Heading headingLevel="1">Purchase Summary</BC.Heading>
            </BC.GridColumn>
            <BC.GridColumn gridUnits={5} position="last" spacing="small" spacingTop="base" textAlign="right">
              <BC.Text textBold={true} textColor="secondary" textSize="base">Order ID# D01-2611356-589029</BC.Text>
              <BC.Link app={true} url="/prototypes/brickcity/account-details-b"><BC.Pipe/>
                View order details</BC.Link>
            </BC.GridColumn>
          </BC.GridRow>


          {/* 30-day Membership */}
          <BC.Divider spacing="base" spacingTop="small" />

          <CC.ProductListingColumn2
            trialImage={true}
          />

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

export default CartStep3;
