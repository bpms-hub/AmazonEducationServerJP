import React from 'react';
import BC from 'AudibleUITags';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import productData from '../../data/prototypes/products.json';

class Prototypes extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        currentOffer: 1,
        showOther: false
      }
  }

  selectOffers(offerNumber, otherOption) {
    console.log(otherOption);

    this.setState({
      currentOffer: offerNumber,
      showOther: otherOption
    })
  }

  render() {
    return (
<div>
  <Header/>

  <div className="bc-container">
    <BC.Heading spacing="large" spacingTop="medium" textSize="extra-large">Prototypes</BC.Heading>

    <BC.GridRow textAlign="left">
      <BC.GridColumn gridUnits={6}>
        <BC.Box hasBorder={true} spacing="extra-large">
          <BC.Heading headingLevel={2} spacing="base">Brick City Desktop</BC.Heading>

          <BC.Divider spacing="base"/>

          <BC.Paragraph spacing="medium">Prototype for Brick City on Ubiquity.</BC.Paragraph>

          <BC.Button app={true} buttonType="primary" inline={true} url={"/prototypes/brickcity"}>View Prototype</BC.Button>
        </BC.Box>
      </BC.GridColumn>

      <BC.GridColumn gridUnits={6} position="last">
        <BC.Box hasBorder={true} spacing="extra-large">
          <BC.Heading headingLevel={2} spacing="base">Brick City Mobile</BC.Heading>

          <BC.Divider spacing="base"/>

          <BC.Paragraph spacing="medium">Prototype for Brick City Mobile on Ubiquity.</BC.Paragraph>

          <BC.Button app={true} buttonType="primary" inline={true} url={"/prototypes/brickcity-mobile"}>View Prototype</BC.Button>
        </BC.Box>
      </BC.GridColumn>

      <BC.GridColumn gridUnits={6}>
        <BC.Box hasBorder={true} spacing="extra-large">
          <BC.Heading headingLevel={2} spacing="base">Tray</BC.Heading>

          <BC.Divider spacing="base"/>

          <BC.Paragraph spacing="medium">Prototype for the tray inside the grid and list views</BC.Paragraph>

          <BC.Button app={true} buttonType="primary" inline={true} url={"/prototypes/tray"}>View Prototype</BC.Button>
        </BC.Box>
      </BC.GridColumn>
    </BC.GridRow>

    <BC.GridRow spacing="extra-large" textAlign="left">
      <BC.GridColumn gridUnits={6}>
        <BC.Heading headingLevel={2} spacing="micro">
          Status:
          <BC.Text textColor="#cc0000"> [In Progress]</BC.Text>
        </BC.Heading>

        <BC.Divider spacing="small" />

        <BC.Link app={true} url={"/prototypes/brickcity/account-details"}>
          <BC.Heading spacing="mini" headingLevel={2}>Account Details</BC.Heading>
        </BC.Link>

        <BC.Text>
          Profile / Membership / Billings / Order History / Subscriptions
        </BC.Text>
        <BC.GridRow spacingTop="small">
          <BC.List listType="horizontal" spacing="base">
            <BC.Heading headingLevel={3} spacing="mini">Details Sub Pages</BC.Heading>
            <BC.ListItem>
              <BC.Link app={true} url={"/prototypes/brickcity/update-profile"}>Update Profile</BC.Link>
            </BC.ListItem>

            <BC.ListItem>
              <BC.Link app={true} url={"/prototypes/brickcity/upgrade-membership_b"}>Switch Membership</BC.Link>
            </BC.ListItem>

            <BC.ListItem>
              <BC.Link app={true} url={"/prototypes/brickcity/glg"}>GLG</BC.Link>
            </BC.ListItem>

            <BC.ListItem>
              <BC.Link app={true} url={"/prototypes/brickcity/payment-information"}>Edit Card</BC.Link>
            </BC.ListItem>
          </BC.List>
        </BC.GridRow>
        <BC.Divider />

        <BC.Heading headingLevel={2}  spacingTop="small" spacing="small">Audible Software Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/audible-software1-pc"}>Audible Software 1</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/audible-software2-pc"}>Audible Software 2</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/audible-software3-pc"}>Audible Software 3</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/audible-software"}>Audible Software for PC</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">Cancel Flow Links</BC.Heading>

        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cancel"}>Cancel Credits</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cancel/form"}>Cancel Form</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cancel/offers/" + this.state.currentOffer}>Cancel Offers</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cancel/offers-b/" + this.state.currentOffer}>Cancel Offers B</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cancel/success-pause"}>Cancel Success</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cancel/success-cancel"}>Cancel Success B</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">Categories Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/all-categories"}>All Category</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/category-archive"}>Category Archive</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/all-categories/category"}>Category</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base" >Checkout Flow Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cart-no-card"}>Cart No Card</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cart-step1"}>Cart Step 1</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cart-step2"}>Cart Step 2</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cart-step3"}>Cart Step 3</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/cart-step3-member"}>Cart Step 3 - Member</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">Contact Flow Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/contact"}>Contact Us</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">Gateway Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base" >
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity"}>Gateway</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">Library Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/library"}>Library</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">MT Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/business-inquiries"}>Business Inquiries</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/gift-center"}>Gift Center</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/how-to-listen"}>How To Listen</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/pick-a-plan"}>Pick A Plan</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/special-offer"}>Special Offer</BC.Link>
          </BC.ListItem>

        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">
          <BC.Link app={true} url={"/prototypes/brickcity/pdp/" + productData[0].asin}>Product Detail Page (PDP)</BC.Link>
        </BC.Heading>

        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">Search Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/advanced-search"}>Advanced Search</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/best-sellers"}>Best Sellers</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/search"}>Search</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/series-list"}>Series List</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">T1 Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/trial-a"}>Trial A</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/trial-b"}>Trial B</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">Other Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/device-video"}>Device Video</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/redeem-promo"}>Redeem Promo</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/recommendations"}>Recommendations</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity/write-review"}>Write Review</BC.Link>
          </BC.ListItem>
        </BC.List>
      </BC.GridColumn>

      <BC.GridColumn gridUnits={6} position="last">
        <BC.Heading headingLevel={2} spacing="micro">Mobile Status: [In Progress]</BC.Heading>
        <BC.Divider />

      <BC.Heading headingLevel={2} spacingTop="base" spacing="base"><BC.Link url={"/prototypes/brickcity-mobile/account-details"}>Account Details</BC.Link></BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/add-card"}>Add Card</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/edit-card"}>Edit Card</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />


        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">Gateway Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile"}>Gateway Mobile</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">
          <BC.Link app={true} url={"/prototypes/brickcity-mobile/help-center"}>Help Center</BC.Link>
        </BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/help-center/category/article"}>Help Center Article - Mobile</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/help-center/category"}>Help Center Category - Mobile</BC.Link>
          </BC.ListItem>

        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">
          <BC.Link app={true} url={"/prototypes/brickcity-mobile/pdp/"}>Pick A Plan</BC.Link>
        </BC.Heading>

        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">
          <BC.Link app={true} url={"/prototypes/brickcity-mobile/pdp/" + productData[0].asin}>Product Detail Page (PDP)</BC.Link>
        </BC.Heading>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">
          <BC.Link app={true} url={"/prototypes/brickcity-mobile/search"}>Search</BC.Link>
        </BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/best-sellers"}>Best Sellers - Mobile</BC.Link>
          </BC.ListItem>

          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/series-list"}>Series List - Mobile</BC.Link>
          </BC.ListItem>
        </BC.List>
        <BC.Divider />

        <BC.Heading headingLevel={2} spacingTop="base" spacing="base">T1 Links</BC.Heading>
        <BC.List listType="horizontal" spacing="base">
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/trial-a"}>Trial A - Mobile</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/trial-b"}>Trial B - Mobile</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/trial-c"}>Trial C - Mobile</BC.Link>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Link app={true} url={"/prototypes/brickcity-mobile/trial-d"}>Trial D - Mobile</BC.Link>
          </BC.ListItem>
        </BC.List>

      </BC.GridColumn>
    </BC.GridRow>
  </div>

  <Footer/>
</div>
)
  }
}

export default Prototypes;
