import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import classNames from 'classnames';
import productData from '../../../../data/prototypes/products.json';

class BestSellers extends React.Component {
  renderBestSellers() {
    var rows = [];
    for (var x = 0; x < 5; x++) {
      rows.push(x)
    }
    var rowMap = rows.map(function () {
      return (
        <div>
        <CC.ProductListingColumn3
          hasBuyBox={true}
          bookTitle="First Meetings: In the Enderverse"
          bookAuthor="Orson Scott Card"
          bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
          bookSeries="Ender&#39;s Game"
          bookRating={true}
          />
        </div>
      )
    })
    return rowMap;
  }
  renderUserHistory() {
    var rows = [];
    for (var x = 0; x < 2; x++) {
      rows.push(x)
    }
    var rowMap = rows.map(function () {
      return (
        <div>
          <BC.Box backgroundColor="secondary" spacing="small" paddingSize="small">
            <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="micro">
              <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
              <CC.Product  asinImageUrl={productData[0].product_images[500]} />
              </BC.FixedGridColumn>
              <BC.FixedGridColumn columnPadding="10px" fixedColumn="left" side="right">
                <BC.List listDirection="nostyle" textSize="small">
                  <BC.ListItem>
                    <BC.Link textBold="true" textSize="base" app={true} url={"/prototypes/brickcity/pdp"}>First Meetings: In the Enderverse</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Text>
                      Orson Scott Card</BC.Text>
                  </BC.ListItem>
                  <BC.ListItem spacing="mini">
                    <BC.Text textBold={true}>$17.99</BC.Text>
                  </BC.ListItem>
                  <BC.ListItem spacing="mini">
                    <BC.ReviewStars iconColor="state"/>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Button buttonType="primary" size="small" spacing="micro">Add to Cart</BC.Button>
                    <BC.Button size="small">Add to Wish List</BC.Button>
                  </BC.ListItem>
                </BC.List>
              </BC.FixedGridColumn>
            </BC.FixedGridRow>

            <BC.GridRow spacing="micro" textAlign="center">
              <BC.Text textColor="secondary">Remove</BC.Text>
            </BC.GridRow>
          </BC.Box>
        </div>
      )
    })
    return rowMap;
  }
  renderListenerHistory() {
    var rows = [];
    for (var x = 0; x < 2; x++) {
      rows.push(x)
    }
    var rowMap = rows.map(function () {
      return (
        <div>
        <BC.Box backgroundColor="secondary" spacing="small" paddingSize="small">
          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="micro">
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
            <CC.Product  asinImageUrl={productData[0].product_images[500]} />
            </BC.FixedGridColumn>
            <BC.FixedGridColumn columnPadding="10px" fixedColumn="left" side="right">
              <BC.List listDirection="nostyle" textSize="small">
                <BC.ListItem>
                  <BC.Link textBold="true" textSize="base" app={true} url={"/prototypes/brickcity/pdp"}>First Meetings: In the Enderverse</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Text>
                    Orson Scott Card</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="mini">
                  <BC.Text textBold={true}>$17.99</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="mini">
                  <BC.ReviewStars iconColor="state"/>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Button buttonType="primary" size="small" spacing="micro">Add to Cart</BC.Button>
                  <BC.Button size="small">Add to Wish List</BC.Button>
                </BC.ListItem>
              </BC.List>
            </BC.FixedGridColumn>
          </BC.FixedGridRow>
          <BC.GridRow spacing="micro" textAlign="center">
            <BC.Link>Improve recommendations</BC.Link>
          </BC.GridRow>
        </BC.Box>
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
        {/* Left Side - Nav */}

        <BC.GridRow spacingTop="base">
          <BC.GridColumn gridUnits={3}>
          <CC.BrowseSearch filters={true} />
          </BC.GridColumn>

          {/* Right Side - Search Result */}

          <BC.GridColumn gridUnits={9} position="last">
              <BC.Heading spacing="micro">Audible Best Sellers</BC.Heading>
                <BC.Paragraph>The most popular titles available at Audible.com, generating buzz from critics, publishers, and your fellow audio enthusiasts. For a list of the nation&#39;s best sellers, check out
                  <BC.LetterSpace/>
                  <BC.Link>New York Times Best Sellers.</BC.Link>
                </BC.Paragraph>

                <BC.Divider spacing="small"  />

                {this.renderBestSellers()}
                <BC.Section spacing="extra-large">
                <BC.Box backgroundColor="inverse" heightCss="60px" >
                    <BC.Text textColor="inverse">Progressive Load</BC.Text>
                </BC.Box>
                </BC.Section>
                {/* Audible History  */}
                {/*<BC.Section spacing="extra-large">
                <BC.Box hasBorder={true}>
                  <BC.GridRow>
                    <BC.GridColumn gridUnits={6}>
                      <BC.Heading spacing="mini">Your Audible History</BC.Heading>
                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={6} textAlign="right" position="last" spacingTop="mini">
                        <BC.Link>Clear All</BC.Link>
                        <BC.Pipe/>
                        <BC.Link>Turn History Off</BC.Link>
                        <BC.Pipe/>
                        <BC.Text textColor="inactive">Show More</BC.Text>
                    </BC.GridColumn>
                  </BC.GridRow>
                  <BC.Divider spacing="medium"/>

                  <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={300}>
                    <BC.FixedGridColumn fixedColumnWidth={300} fixedColumn="left" side="left">
                      <BC.GridRow spacing="medium">
                        <BC.Heading headingLevel={3}>Recently Viewed Titles</BC.Heading>
                      </BC.GridRow>
                      {this.renderUserHistory()}
                    </BC.FixedGridColumn>
                    <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="50px">
                      <BC.GridRow spacing="medium">
                        <BC.Heading headingLevel={3}>Listeners with similar histories also bought</BC.Heading>
                      </BC.GridRow>
                      <BC.GridRow>
                        <BC.GridColumn gridUnits={6}>
                          {this.renderListenerHistory()}
                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={6} position="last">
                          {this.renderListenerHistory()}
                        </BC.GridColumn>
                      </BC.GridRow>
                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>

                  <BC.Divider spacing="medium"/>
                  <BC.Heading headingLevel={2} spacing="mini">Recent Searches</BC.Heading>
                  <BC.Paragraph spacing="small">You don&#39;t have any searches tracked in your history yet.</BC.Paragraph>
                </BC.Box>
                </BC.Section>*/}
          </BC.GridColumn>
        </BC.GridRow>
        </div>

        <ProdFooter/>
      </div>
    )
  }
}
export default BestSellers;
