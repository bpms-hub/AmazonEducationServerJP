import React from 'react';
import BC from 'AudibleUITags';
import CC from './cc';
import ProdHeaderMobile from './Header/ProdHeaderMobile';
import ProdFooterMobile from './Footer/ProdFooterMobile';
import productData from '../../../data/prototypes/products.json';

class ProductVersionsMobile extends React.Component {
  constructor(props,context) {
      super(props,context);
  }

  render() {
    return (
      <div>
        <ProdHeaderMobile/>
        {/* Banner Asin */}
        <div className="bc-container">
          <BC.Divider spacing={"base"}/>
            <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity-mobile/pdp/" + productData[0].asin}>PDP</BC.Link></BC.Heading>
          <br />
        </div>
            <BC.GridRow textAlign="center">
              <BC.GridRow spacingTop="base" spacing="mini">
                <CC.Product  asinImageUrl={productData[0].product_images[500]} />
              </BC.GridRow>

              <BC.Heading>Book Title Name Will Go Here</BC.Heading>

              <BC.GridRow spacing="small">
                by <BC.Link>Book Author Name</BC.Link>
              </BC.GridRow>

              <BC.GridRow spacing="medium">
                <BC.ReviewStars averageRating={4.8} numRatings={20535} showAverageRating={true}/>
              </BC.GridRow>

              <BC.List listType="nostyle" spacing="medium">
                <BC.ListItem spacing="micro">
                  <BC.Icon iconType="microphone" verticalAlign="middle"/>
                  <BC.LetterSpace/>
                  <BC.Link>Book Narrator Name</BC.Link>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Icon iconType="clock" verticalAlign="middle"/>
                  <BC.LetterSpace/>
                  <BC.Text>23 hrs & 38 mins, Unabridged</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Icon iconType="series" verticalAlign="middle"/>
                  <BC.LetterSpace/>
                  <BC.Link>Series Name Here</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Icon iconType="whispersync" verticalAlign="middle"/>
                  <BC.LetterSpace/>
                  <BC.Link>Whispersync for Voice</BC.Link>
                </BC.ListItem>
              </BC.List>
            </BC.GridRow>

            <div className="bc-container">

          {/* Asin 1 */}

          <BC.Divider spacing={"base"}/>
            <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity-mobile/best-sellers"}>Best Sellers</BC.Link></BC.Heading>
          <br />

          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={80}>
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={80} side="left" spacing={"small"}>
              <BC.Link app={true} url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/search/cover._V288436798_.jpg"/></BC.Link>
            </BC.FixedGridColumn>

            <BC.FixedGridColumn fixedColumn="left" side="right" spacing="small" columnPadding="10px">
                  <BC.List listDirection="nostyle" textSize="mini">
                    <BC.ListItem spacing="micro">
                      <BC.Heading headingLevel={3}>First Meetings: In the Enderverse</BC.Heading>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                        <BC.Text>by Orson Scott Card</BC.Text>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">

                      <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={25}>
                        <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={25} side="left">
                          <BC.Icon iconType="microphone"/>
                        </BC.FixedGridColumn>
                        <BC.FixedGridColumn fixedColumn="left" side="right">
                          <BC.Text>Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki</BC.Text>
                        </BC.FixedGridColumn>
                      </BC.FixedGridRow>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={25}>
                        <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={25} side="left">
                          <BC.Icon iconType="clock"/>
                        </BC.FixedGridColumn>
                        <BC.FixedGridColumn fixedColumn="left" side="right">
                          <BC.Text>5 hrs & 18 mins, Unabridged</BC.Text>
                        </BC.FixedGridColumn>
                      </BC.FixedGridRow>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={25}>
                        <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={25} side="left">
                          <BC.Icon iconType="whispersync"/>
                        </BC.FixedGridColumn>
                        <BC.FixedGridColumn fixedColumn="left" side="right">
                          <BC.Text>Whispersync for Voice</BC.Text>
                        </BC.FixedGridColumn>
                      </BC.FixedGridRow>
                    </BC.ListItem>
                    <BC.ListItem spacing="mini">
                      <BC.Text>Release: 06-23-15</BC.Text>
                    </BC.ListItem>
                    <BC.ListItem spacing="small">
                      <BC.Text>Publisher: Blackstone Audio</BC.Text>
                    </BC.ListItem>
                    <BC.ListItem>
                    <BC.ReviewStars averageRating={4.8} iconColor="state" showAverageRating={true}/>
                    </BC.ListItem>
                  </BC.List>
                </BC.FixedGridColumn>
              </BC.FixedGridRow>

              {/* Asin 2 */}

              <BC.Divider spacing={"base"}/>
                <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity-mobile/series-list"}>Series List</BC.Link></BC.Heading>
              <br />

              <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={80}>
                <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={80} side="left" spacing={"small"}>
                  <CC.Product  asinImageUrl={productData[0].product_images[500]} />
                </BC.FixedGridColumn>

                <BC.FixedGridColumn fixedColumn="left" side="right" spacing="small" columnPadding="10px">
                      <BC.List listDirection="nostyle" textSize="mini">
                        <BC.ListItem spacing="micro">
                          <BC.Heading headingLevel={3}>First Meetings: In the Enderverse</BC.Heading>
                        </BC.ListItem>
                        <BC.ListItem spacing="micro">
                            <BC.Text>by Orson Scott Card</BC.Text>
                        </BC.ListItem>
                        <BC.ListItem spacing="micro">

                          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={25}>
                            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={25} side="left">
                              <BC.Icon iconType="microphone"/>
                            </BC.FixedGridColumn>
                            <BC.FixedGridColumn fixedColumn="left" side="right">
                              <BC.Text>Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki</BC.Text>
                            </BC.FixedGridColumn>
                          </BC.FixedGridRow>
                        </BC.ListItem>
                        <BC.ListItem spacing="micro">
                          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={25}>
                            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={25} side="left">
                              <BC.Icon iconType="clock"/>
                            </BC.FixedGridColumn>
                            <BC.FixedGridColumn fixedColumn="left" side="right">
                              <BC.Text>5 hrs & 18 mins, Unabridged</BC.Text>
                            </BC.FixedGridColumn>
                          </BC.FixedGridRow>
                        </BC.ListItem>
                        <BC.ListItem spacing="micro">
                          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={25}>
                            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={25} side="left">
                              <BC.Icon iconType="whispersync"/>
                            </BC.FixedGridColumn>
                            <BC.FixedGridColumn fixedColumn="left" side="right">
                              <BC.Text>Whispersync for Voice</BC.Text>
                            </BC.FixedGridColumn>
                          </BC.FixedGridRow>
                        </BC.ListItem>
                        <BC.ListItem spacing="mini">
                          <BC.Text>Release: 06-23-15</BC.Text>
                        </BC.ListItem>
                        <BC.ListItem>
                          <BC.ReviewStars averageRating={4.8} iconColor="state" showAverageRating={true}/>
                        </BC.ListItem>
                      </BC.List>
                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>

                  {/* Asin 3 */}

                  <BC.Divider spacing={"base"}/>
                    <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity-mobile/search"}>Search</BC.Link></BC.Heading>
                  <br />

                  <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={80}>
                    <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={80} side="left" spacing={"small"}>
                      <CC.Product  asinImageUrl={productData[0].product_images[500]} />
                    </BC.FixedGridColumn>

                    <BC.FixedGridColumn fixedColumn="left" side="right" spacing="small" columnPadding="10px">
                          <BC.List listDirection="nostyle" textSize="mini">
                            <BC.ListItem spacing="micro">
                              <BC.Heading headingLevel={3}>First Meetings: In the Enderverse</BC.Heading>
                            </BC.ListItem>
                            <BC.ListItem spacing="micro">
                                <BC.Text>by Orson Scott Card</BC.Text>
                            </BC.ListItem>
                            <BC.ListItem spacing="micro">

                              <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={25}>
                                <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={25} side="left">
                                  <BC.Icon iconType="microphone"/>
                                </BC.FixedGridColumn>
                                <BC.FixedGridColumn fixedColumn="left" side="right">
                                  <BC.Text>Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki</BC.Text>
                                </BC.FixedGridColumn>
                              </BC.FixedGridRow>
                            </BC.ListItem>
                            <BC.ListItem spacing="micro">
                              <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={25}>
                                <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={25} side="left">
                                  <BC.Icon iconType="clock"/>
                                </BC.FixedGridColumn>
                                <BC.FixedGridColumn fixedColumn="left" side="right">
                                  <BC.Text>5 hrs & 18 mins, Unabridged</BC.Text>
                                </BC.FixedGridColumn>
                              </BC.FixedGridRow>
                            </BC.ListItem>
                            <BC.ListItem spacing="micro">
                              <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={25}>
                                <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={25} side="left">
                                  <BC.Icon iconType="whispersync"/>
                                </BC.FixedGridColumn>
                                <BC.FixedGridColumn fixedColumn="left" side="right">
                                  <BC.Text>Whispersync for Voice</BC.Text>
                                </BC.FixedGridColumn>
                              </BC.FixedGridRow>
                            </BC.ListItem>
                            <BC.ListItem spacing="mini">
                              <BC.Text>Release: 06-23-15</BC.Text>
                            </BC.ListItem>
                            <BC.ListItem spacing="small">
                              <BC.Text>Publisher: Blackstone Audio</BC.Text>
                            </BC.ListItem>
                            <BC.ListItem>
                            <BC.ReviewStars averageRating={4.8} iconColor="state" showAverageRating={true}/>
                            </BC.ListItem>
                          </BC.List>
                        </BC.FixedGridColumn>
                      </BC.FixedGridRow>
                      <BC.Divider spacing={"small"}/>

            {/* Carousel 1 */}

            <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/pdp/" + productData[0].asin}>PDP</BC.Link></BC.Heading>
            <br />

            <BC.FixedGridRow>
              <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={280} side="right">
                <BC.Tabs spacing="medium">
                  <BC.TabPanel title="Author">
                    <CC.Product  asinImageUrl={productData[0].product_images[500]} />
                    <BC.LetterSpace size="extra-large"/>
                  <CC.Product  asinImageUrl={productData[3].product_images[500]} />
                    <BC.LetterSpace size="extra-large"/>
                  <CC.Product  asinImageUrl={productData[4].product_images[500]} />
                  </BC.TabPanel>

                  <BC.TabPanel title="Narrator">
                    <CC.Product  asinImageUrl={productData[4].product_images[500]} />
                    <BC.LetterSpace size="extra-large"/>
                  <CC.Product  asinImageUrl={productData[2].product_images[500]} />
                    <BC.LetterSpace size="extra-large"/>
                  <CC.Product  asinImageUrl={productData[1].product_images[500]} />
                  </BC.TabPanel>
                </BC.Tabs>
              </BC.FixedGridColumn>
            </BC.FixedGridRow>
            </div>
        <ProdFooterMobile/>
      </div>
    )
  }
}

export default ProductVersionsMobile;
