import React from 'react';
import BC from 'AudibleUITags';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';

class BestSellersB extends React.Component {
  renderBestSellers() {
    var rows = [];
    for (var x = 0; x < 5; x++) {
      rows.push(x)
    }
    var rowMap = rows.map(function () {
      return (
        <div>
          <BC.Divider spacing={"base"}/>
          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150}>
            {/* Search Results - Image Column */}
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
              <BC.Link app={true} url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/search/cover._V288436798_.jpg"/></BC.Link>
            </BC.FixedGridColumn>
            {/* Search Results - Text Column */}
            <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right" spacing="small">
              <BC.FixedGridRow fixedColumn="right" fixedColumnWidth={180}>
                <BC.FixedGridColumn columnPadding="20px" fixedColumn="right" side="left">
                <BC.List listDirection="nostyle" textSize="small">
                  <BC.ListItem >
                    <BC.Text textColor="secondary">Audiobook</BC.Text>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link textBold={true} textSize="base" url="/prototypes/brickcity/pdp">First Meetings: In the Enderverse</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="mini">
                    <BC.Text>by
                      <BC.Link textSize="mini"> Orson Scott Card</BC.Link>
                    </BC.Text>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Icon iconType="microphone"/>
                    <BC.LetterSpace size="small"/>
                    <BC.Link>Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Icon iconType="clock" />
                    <BC.LetterSpace size="small"/>
                    <BC.Text>
                      5 hrs & 18 mins, Unabridged</BC.Text>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Icon iconType="whispersync"/>
                    <BC.LetterSpace size="small"/>
                    <BC.Link>Whispersync for Voice-ready</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Icon iconType="series" />
                    <BC.LetterSpace size="small"/>
                    <BC.Link> Ender&#39;s Game</BC.Link>
                  </BC.ListItem>

                  <BC.ListItem spacing="micro">
                    <BC.Text>Release: 06-23-15</BC.Text>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.ReviewStars averageRating={4.8} iconColor="state" showAverageRating={true}/>
                  </BC.ListItem>
                </BC.List>
                </BC.FixedGridColumn>
                {/* Search Results - Button Column */}
                <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={180} side="right">
                  <BC.BuyBox />
                </BC.FixedGridColumn>
              </BC.FixedGridRow>
            </BC.FixedGridColumn>
          </BC.FixedGridRow>
        </div>
      )
    })
    return rowMap;
  }
  renderUserHistory() {
    var rows = [];
    for (var x = 0; x < 1; x++) {
      rows.push(x)
    }
    var rowMap = rows.map(function () {
      return (
        <div>
        <BC.Box paddingSize="small" hasBorder={true}>
            <BC.GridRow spacing="small" textAlign="right">
              <BC.Icon iconType="close"></BC.Icon>
            </BC.GridRow>
            <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150}>
              <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left" spacing={"small"}>
                <CC.Product  asinImageUrl={productData[0].product_images[500]} />
              </BC.FixedGridColumn>
              <BC.FixedGridColumn columnPadding="10px" fixedColumn="left" side="right">
                <BC.List listDirection="nostyle" textSize="small">
                  <BC.ListItem>
                    <BC.Link textBold="true" textSize="base" url="/prototypes/brickcity/pdp">First Meetings: In the Enderverse</BC.Link>
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
          </BC.Box>
        </div>
      )
    })
    return rowMap;
  }
  renderListenerHistory() {
    var rows = [];
    for (var x = 0; x < 1; x++) {
      rows.push(x)
    }
    var rowMap = rows.map(function () {
      return (
        <div>
          <BC.Box paddingSize="small" hasBorder={true}>
            <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="micro">
              <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
                <CC.Product  asinImageUrl={productData[0].product_images[500]} />
              </BC.FixedGridColumn>
              <BC.FixedGridColumn columnPadding="10px" fixedColumn="left" side="right">
                <BC.List listDirection="nostyle" textSize="small">
                  <BC.ListItem>
                    <BC.Link textBold="true" textSize="base" url="/prototypes/brickcity/pdp">First Meetings: In the Enderverse</BC.Link>
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
          <BC.Heading>Audible Best Sellers</BC.Heading>
          <BC.Paragraph>The most popular titles available at Audible.com, generating buzz from critics, publishers, and your fellow audio enthusiasts. For a list of the nation&#39;s best sellers, check out
            <BC.LetterSpace/>
            <BC.Link >
              New York Times Best Sellers.</BC.Link>
          </BC.Paragraph>
          {/*   view & sort by  */}
          <BC.Divider spacing="mini"/>
          <BC.Section spacing="mini">
            <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={200}>
              <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={200} side="left">
                <BC.Dropdown inline={true}>
                  <BC.DropdownOption>Audible - Past 7 Days</BC.DropdownOption>
                  <BC.DropdownOption>Option 2</BC.DropdownOption>
                  <BC.DropdownOption>Option 3</BC.DropdownOption>
                  <BC.DropdownOption>Option 4</BC.DropdownOption>
                </BC.Dropdown>
              </BC.FixedGridColumn>
              <BC.FixedGridColumn fixedColumn="left" side="right">
                <BC.Dropdown inline={true}>
                  <BC.DropdownOption>All Categories</BC.DropdownOption>
                  <BC.DropdownOption>Option 2</BC.DropdownOption>
                  <BC.DropdownOption>Option 3</BC.DropdownOption>
                  <BC.DropdownOption>Option 4</BC.DropdownOption>
                </BC.Dropdown>
              </BC.FixedGridColumn>
            </BC.FixedGridRow>
          </BC.Section>
          {this.renderBestSellers()}
          <BC.Divider/>
          <BC.Section spacing="extra-large">
            <BC.Pagination/>
          </BC.Section>

          {/* Audible History  */}
          <BC.Section spacing="medium">
            <BC.Heading spacing="mini">Your Audible History: (RETITLE!!!!)</BC.Heading>
            <BC.Divider spacing="medium"/>
            <BC.Heading headingLevel={3} spacing="mini">Recently Viewed Titles:</BC.Heading>

            <BC.GridRow>
              <BC.GridColumn gridUnits={4}>
              {this.renderUserHistory()}
              </BC.GridColumn>
              <BC.GridColumn gridUnits={4}>
              {this.renderUserHistory()}
              </BC.GridColumn>
              <BC.GridColumn gridUnits={4} position="last">
              {this.renderUserHistory()}
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Section>

          {/* Recommendations */}
          <BC.Section spacing="medium">
            <BC.Heading headingLevel={3} spacing="mini">Listeners with similar histories also bought:</BC.Heading>
            <BC.GridRow>
              <BC.GridColumn gridUnits={4}>
              {this.renderListenerHistory()}
              </BC.GridColumn>
              <BC.GridColumn gridUnits={4}>
              {this.renderListenerHistory()}
              </BC.GridColumn>
              <BC.GridColumn gridUnits={4} position="last">
              {this.renderListenerHistory()}
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Section>

          {/* Recent Searches  */}
          <BC.Section spacing="medium">
            <BC.Divider spacing="medium"/>
            <BC.Heading headingLevel={2} spacing="mini">Recent Searches</BC.Heading>
            <BC.Paragraph spacing="extra-large">You don&#39;t have any searches tracked in your history yet.</BC.Paragraph>
          </BC.Section>

          <ProdFooter/>
        </div>
      </div>
    )
  }
}
export default BestSellersB;
