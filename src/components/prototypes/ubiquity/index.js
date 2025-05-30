import React from 'react';
import BC from 'AudibleUITags';
import ProdHeader from './Header/ProdHeader';
import ProdFooter from './Footer/ProdFooter';

class BrickCity extends React.Component {
  render() {
    return (
      <div>
        <div className="bc-container">
          <ProdHeader/>
        </div>
        <BC.Section backgroundColor="inverse" cssClass="overview-section-arrow overview-section-arrow-black" padding="extra-large" paddingTop="extra-large">
          <div className="bc-container">
            <BC.GridRow textColor="inverse">
              <BC.GridColumn gridPush={1} gridUnits={6}>
                <BC.Heading headingLevel={2} textBold={true} textSize="large">BrickCity Categories</BC.Heading>
              </BC.GridColumn>
            </BC.GridRow>
          </div>
        </BC.Section>

        <div className="bc-container">

          <BC.GridRow spacing="large" spacingTop="large">

            <BC.GridColumn gridPush={2} gridUnits={6}>
              <BC.Heading>Prototypes</BC.Heading>
              <BC.List listType="nostyle" spacing="medium" spacingTop="base" textSize="base">

                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/account-details"}>Account Details</BC.Link>
                </BC.ListItem>

                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/advanced-search"}>Advanced Search</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/best-sellers"}>Best Sellers</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/business-inquiries"}>Business Inquiries</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/cancel"}>Cancel Flow</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/cart-step1"}>Cart Step 1</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/cart-step2"}>Cart Step 2</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/cart-step3"}>Cart Step 3</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/category"}>Category</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/contact"}>Contact Us</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/device-video"}>Device Video</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/gift-center"}>Gift Center</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/glg"}>GLG</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/how-to-listen"}>How To Listen</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/library"}>Library</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/pdp"}>PDP</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/recommendations"}>Recommendations</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/redeem-promo"}>Redeem Promo</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/search"}>Search</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/showcase"}>Showcase</BC.Link>
                </BC.ListItem>

                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/trial-a"}>Trial A</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/prototypes/brickcity/trial-b"}>Trial B</BC.Link>
                </BC.ListItem>

              </BC.List>
            </BC.GridColumn>

            <BC.GridColumn gridPush={1} gridUnits={6} position="last">
              <BC.Heading>Tutorials</BC.Heading>
              <BC.List listType="nostyle" spacing="medium" spacingTop="base" textSize="base">
                <BC.ListItem>
                  <BC.Link url={"/tutorials/grid"}>Grid Documentation</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"/tutorials/redline"}>Redlining</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"hig/colors"}>Colors</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link url={"hig/alerts"}>Alerts</BC.Link>
                </BC.ListItem>

              </BC.List>
            </BC.GridColumn>

          </BC.GridRow>

        </div>

        <div>
          <ProdFooter/>
        </div>
      </div>
    )
  }
}
export default BrickCity;
