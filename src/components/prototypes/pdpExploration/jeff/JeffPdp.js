import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../ubiquity/cc';
import ProdHeaderMobile from '../../ubiquity/Header/ProdHeaderMobile';
import ProdFooterMobile from '../../ubiquity/Footer/ProdFooterMobile';
import productData from '../../../../data/prototypes/products.json';

class JeffPdp extends React.Component {
  constructor(props,context) {
      super(props,context);
  }

  renderReviews() {
    return (
      <BC.GridRow cssClass="bc-theme-dark">
        <BC.FixedGridRow spacing="base" fixedColumn="left" fixedColumnWidth={80}>
          <BC.FixedGridColumn side="left" fixedColumn="left" fixedColumnWidth={80}>
            <BC.Image imageHeight="80px" imageWidth="80px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/pdp/profile_pic._V288437133_.png"/>
          </BC.FixedGridColumn>

          <BC.FixedGridColumn spacingTop="medium" side="right" fixedColumn="left" columnPadding="20px">
            <BC.List listType="nostyle" spacing="mini">
              <BC.ListItem>
                <BC.Link>Michael G. Kurilla</BC.Link>
              </BC.ListItem>
              <BC.ListItem>Nantucket, MA • 04-18-12</BC.ListItem>
            </BC.List>
          </BC.FixedGridColumn>
        </BC.FixedGridRow>

        <BC.GridRow spacing="micro">
          <BC.ReviewStars averageRating={3.0} />
          <BC.LetterSpace />
          <BC.Text>Overall</BC.Text>
        </BC.GridRow>

        <BC.GridRow spacing="micro">
          <BC.ReviewStars averageRating={2.7} />
          <BC.LetterSpace />
          <BC.Text>Performance</BC.Text>
        </BC.GridRow>

        <BC.GridRow spacing="base">
          <BC.ReviewStars averageRating={4.1} />
          <BC.LetterSpace />
          <BC.Text>Story</BC.Text>
        </BC.GridRow>

        <BC.Heading headingLevel={2} spacing="micro" textQuote={true}>Excellent book, narrator did such a good job!</BC.Heading>

        <BC.Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonnproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BC.Paragraph>

        <BC.Expander hideText="Show Less" showText="Show More">
          <BC.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </BC.Paragraph>
        </BC.Expander>

        <BC.Divider spacingTop="micro" />
      </BC.GridRow>
    )
  }

  render() {
    return (
      <div className="mobile">
        <ProdHeaderMobile />

        <BC.Container>
        	<BC.GridRow>
        		<BC.GridColumn gridUnits={6}>
        			<CC.Asin product={productData[0]} />

        			<BC.Button buttonType="primary" size="small">Free with Trail</BC.Button>
        			<BC.Button size="small">$9.99</BC.Button>

        			<BC.Heading>{productData[0].title}</BC.Heading>
        			<BC.Heading>{productData[0].subtitle}</BC.Heading>
        			<BC.Text>{productData[0].runtime_length_min}</BC.Text>
        			<BC.ReviewStars />
        		</BC.GridColumn>
      		</BC.GridRow>

            <BC.Tabs>
              <BC.TabPanel title="Details">

              </BC.TabPanel>

              <BC.TabPanel title="Reviews">
                {this.renderReviews()}
              </BC.TabPanel>

              <BC.TabPanel title="Related">
                <CC.ProductCarouselMobile />
              </BC.TabPanel>
            </BC.Tabs>
            
            <BC.GridRow spacing="base">
              <CC.MobileLink>See All Reviews</CC.MobileLink>
            </BC.GridRow>

            <BC.Heading headingLevel={2} spacing="mini">Book Details</BC.Heading>

            <BC.List listType="nostyle" textColor="secondary">
              <BC.ListItem>
                Release Date: 03-31-2015
              </BC.ListItem>
              <BC.ListItem>
                Publisher: <BC.Link>HarperAudio</BC.Link>
              </BC.ListItem>
            </BC.List>

        </BC.Container>

        <ProdFooterMobile />
      </div>
    )
  }
}

JeffPdp.contextTypes= {
  history: React.PropTypes.object,
};

export default JeffPdp;
