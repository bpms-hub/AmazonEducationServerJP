import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSearchResults() {
    var rows = [];

    for (var x = 0; x < 10; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function() {
      return (
        <div>
          <BC.Divider spacing={"base"}/>
          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150}>

            {/* Search Results - Image Column */}

            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left" >
                <CC.Product  asinImageUrl={productData[0].product_images[500]} />
            </BC.FixedGridColumn>

            {/* Search Results - Text Column */}

            <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right">
              <BC.FixedGridRow fixedColumn="right" fixedColumnWidth={180}>
                <BC.FixedGridColumn columnPadding="20px" fixedColumn="right" spacing="small" side="left">
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
                      <BC.Link>Gabrielle De Cuir</BC.Link>, <BC.Link>Amanda Karr</BC.Link>, <BC.Link>Stefan Kudnicki</BC.Link>
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

  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          {/* Left Side - Nav */}

          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={200} spacingTop="medium">
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={200} side="left">
              <BC.Heading headingLevel={2} textColor="tertiary" spacing="small">Categories</BC.Heading>


              <BC.GridRow spacing="base">
         <BC.Icon iconSize="mini" iconType="chevron-left" /> <BC.Text textSize="mini" textColor="secondary">See all categories</BC.Text>
         </BC.GridRow>

    <BC.Heading headingLevel={3} textColor="secondary" spacing="small">Sci-Fi &amp; Fantasy</BC.Heading>
              <BC.List listType="nostyle" textSize="small" spacing="base" >

                <BC.ListItem spacing="micro">
                  <BC.LetterSpace size="base" /><BC.Text textColor="secondary">Doctor Who</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.LetterSpace size="base" />
                  <BC.Text textColor="secondary">Dramatizations</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.LetterSpace size="base" />
  <BC.Text textColor="secondary">Fantasy: Contemporary</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.LetterSpace size="base" />
  <BC.Text textColor="secondary">Fantasy: Epic</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.LetterSpace size="base" />
  <BC.Text textColor="secondary">Fantasy: Paranormal</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.LetterSpace size="base" />
  <BC.Text textColor="secondary">Fantasy: Contemporary</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.LetterSpace size="base" />
  <BC.Text textColor="secondary">Star Trek</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.LetterSpace size="base" />
  <BC.Text textColor="secondary">Star Wars</BC.Text>
                </BC.ListItem>
              </BC.List>

              <BC.Divider spacing="base"/>


                <BC.Heading headingLevel={2} textColor="tertiary" spacing="small">Filters</BC.Heading>

            <BC.Icon iconType="caret-down" /><BC.Heading headingLevel="3" spacing="micro" >Language</BC.Heading>

              <BC.List listType="nostyle" spacing="base" textSize="small">
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">English</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">German</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Spanish</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Italian</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">French</BC.Text>
                </BC.ListItem>
              </BC.List>
              <BC.Text textColor="secondary">More Languages</BC.Text>

              <BC.Heading headingLevel="3" spacing="micro">Program Format</BC.Heading>
              <BC.List listType="nostyle" spacing="base" textSize="small">
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Unabridged (12)</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Abridged (4)</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Original (3)</BC.Text>
                </BC.ListItem>
              </BC.List>

              <BC.Heading headingLevel="3" spacing="micro">Release Date</BC.Heading>
              <BC.List listType="nostyle" spacing="base" textSize="small">
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Last 30 Days (12)</BC.Text>
                </BC.ListItem>
              </BC.List>

              <BC.Heading headingLevel="3" spacing="micro">Program Type</BC.Heading>
              <BC.List listType="nostyle" spacing="base" textSize="small">
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Audiobook (12)</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Radio & TV Program (4)</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Speech (3)</BC.Text>
                </BC.ListItem>
              </BC.List>

              <BC.Heading headingLevel="3" spacing="micro">Language</BC.Heading>
              <BC.List listType="nostyle" spacing="mini" textSize="small">
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">English (12)</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Text textColor="secondary">Danish (4)</BC.Text>
                </BC.ListItem>
              </BC.List>

            </BC.FixedGridColumn>

            {/* Right Side - Search Result */}

            <BC.FixedGridColumn columnPadding="40px" fixedColumn="left" side="right" spacing="extra-large">

            <BC.Text textBold={true} textColor="secondary">20 </BC.Text><BC.Text textColor="secondary">results for</BC.Text>

            <BC.Heading textSize="large" spacing="micro">Ender&#039;s Game</BC.Heading>

            <BC.GridRow spacing="small">
              <BC.Text>Related: </BC.Text>
              <BC.Link>Orson Scott Card</BC.Link>,
              <BC.Link> Enders Shadow</BC.Link>,
              <BC.Link> Enders Series</BC.Link>,
              <BC.Link> Enders Game Series</BC.Link>
            </BC.GridRow>

              <BC.Box paddingSize="mini" backgroundColor="secondary">
                  <BC.Paragraph spacing="none">Some results have been hidden from search. Change your preferences in <BC.Link url="./advanced-search">Account Details</BC.Link>.</BC.Paragraph>
              </BC.Box>

              <BC.Section spacing="micro">
                  <BC.Pagination/>
              </BC.Section>
              <BC.Divider spacing="mini" />

              <BC.GridRow>
                    <BC.GridColumn gridUnits={6}>
                      <BC.Text textColor="secondary" textSize="small"></BC.Text>
                      <BC.Dropdown inline={true} spacing="mini">
                        <BC.DropdownOption>Sort by</BC.DropdownOption>
                        <BC.DropdownOption>Option 2</BC.DropdownOption>
                        <BC.DropdownOption>Option 3</BC.DropdownOption>
                        <BC.DropdownOption>Option 4</BC.DropdownOption>
                      </BC.Dropdown>
                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={6} position="last" textAlign="right">
                      <BC.Text textColor="secondary" textSize="small">Results per page:</BC.Text>
                      <BC.LetterSpace/>
                      <BC.Dropdown inline={true}>
                        <BC.DropdownOption>20</BC.DropdownOption>
                        <BC.DropdownOption>15</BC.DropdownOption>
                        <BC.DropdownOption>10</BC.DropdownOption>
                        <BC.DropdownOption>5</BC.DropdownOption>
                      </BC.Dropdown>
                    </BC.GridColumn>
                </BC.GridRow>

                <BC.Divider spacing="small"/>

                <BC.Section spacing="small">
                  <BC.Text textColor="base" textSize="small">Showing:</BC.Text>
                  <CC.Filter closeable={true}>Sci-fi & Fantasy</CC.Filter>
                  <CC.Filter closeable={true}>Sci-Fi Contemporary</CC.Filter>
                </BC.Section>

              {this.renderSearchResults()}

              <BC.Pagination/>
            </BC.FixedGridColumn>

          </BC.FixedGridRow >

          <CC.ProductCarousel carouselTitle="You Might Also Like ..."/>

        </div>

        <ProdFooter/>
      </div>
    )
  }
}

export default Search;
