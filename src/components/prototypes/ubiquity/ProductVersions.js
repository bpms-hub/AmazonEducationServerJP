import React from 'react';
import BC from 'AudibleUITags';
import CC from './cc';
import ProdHeader from './Header/ProdHeader';
import ProdFooter from './Footer/ProdFooter';
import productData from '../../../data/prototypes/products.json';

class ProductVersions extends React.Component {
  constructor(props,context) {
      super(props,context);
  }

  render() {
    return (
      <div>
        <ProdHeader/>

        {/* Banner Asin */}
        <div className="bc-container">
        <BC.Section spacing="base">
          <BC.Heading headingLevel={2}>Search</BC.Heading>
          <BC.Heading headingLevel={2}>Best Sellers</BC.Heading>
          <br />
          <CC.ProductListingColumn3
            hasBuyBox={true}
            hasAsin={true}
            bookHasAudiobook={true}
            bookTitle="First Meetings: In the Enderverse"
            bookAuthor="Orson Scott Card"
            bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
            bookLength="5 hrs & 18 mins, Unabridged"
            bookHasWhispersync={true}
            bookSeries="Ender&#39;s Game"
            bookRelease="06-23-15"
            bookRating={true}
            />
          </BC.Section>

          <BC.Section spacing="base">
            <BC.Heading headingLevel={2}>Cart 1</BC.Heading>
            <br />
            <CC.ProductListingColumn4
              bookTitle="First Meetings: In the Enderverse"
              bookAuthor="Orson Scott Card"
              bookPrice="29.99"
              bookCredit={true}
              remove={true}
              wishList={true}
              hasRadioBtn={true}
              userCost="0.00"
              />

              <br />

              <CC.ProductListingColumn4
                trialImage="true"
                trialPrice="true"
                userCost="0.00"

                />
              </BC.Section>

            <BC.Section spacing="base">
              <BC.Heading headingLevel={2}>Cart 2</BC.Heading>
              <br />
              <CC.ProductListingColumn4
                bookTitle="First Meetings: In the Enderverse"
                bookAuthor="Orson Scott Card"
                bookCredit={true}
                userCost="0.00"
                />

                <br />

                <CC.ProductListingColumn3
                trialImage="true"
                userCost="0.00"

                />
            </BC.Section>

            <BC.Section spacing="base">
              <BC.Heading headingLevel={2}>Cart 3(Anon)</BC.Heading>
              <BC.Heading headingLevel={2}>Cart 3(Member)</BC.Heading>
              <br />
              <CC.ProductListingColumn2
                hasAsin={true}
                bookTitle="First Meetings: In the Enderverse"
                bookAuthor="Orson Scott Card"
                bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
                />

                <br />

              <CC.ProductListingColumn2
                  trialImage="true"
                />
            </BC.Section>

            <BC.Section spacing="base">
              <BC.Heading headingLevel={2}>Recomendations</BC.Heading>
              <br />
              <CC.ProductListingColumn3
                bookTitle="First Meetings: In the Enderverse"
                bookAuthor="Orson Scott Card"
                bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
                bookRating={true}
                hasRadioBtn={true}
                recommendations={true}
                />
            </BC.Section>

            <BC.Section spacing="base">
              <BC.Heading headingLevel={2}>Write Review</BC.Heading>
              <br />
              <CC.ProductListingColumn2
                bookTitle="First Meetings: In the Enderverse"
                bookAuthor="Orson Scott Card"
                bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
                />
            </BC.Section>
          <BC.Divider spacing="base" spacingTop="base"/>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/pdp/" + productData[0].asin}>PDP</BC.Link></BC.Heading>
          <br />
        </div>

        <BC.GridRow spacing="large">
          <div className="bc-hero">
            <div className="bc-container">
              <BC.Section paddingTop="small">

                <BC.Breadcrumbs
                  breadcrumbTrail={[{name: "home", url: "/prototypes/brickcity"},{name: "Pdp"}]}
                  spacing="base"
                  inverse={true} />

                <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={320}>
                  <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={320} side="left">
                      <CC.Product  asinImageUrl={productData[0].product_images[500]} />
                  </BC.FixedGridColumn>

                  <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right">
                    <BC.FixedGridRow fixedColumn="right" fixedColumnWidth={250}>
                      <BC.FixedGridColumn columnPadding="20px" fixedColumn="right" side="left" spacingTop="none">
                        <BC.Heading textColor="inverse">Book Title Name Will Go Here</BC.Heading>

                        <BC.GridRow spacing="mini" textColor="inverse">
                          by <BC.Link linkType="inverse">Book Author Name</BC.Link>
                        </BC.GridRow>

                        <BC.GridRow spacing="medium">
                          <BC.ReviewStars averageRating={4.8} inverse={true} numRatings={20535} showAverageRating={true}/>
                        </BC.GridRow>

                        <BC.List listType="nostyle" spacing="base" textColor="inverse">
                          <BC.ListItem spacing="micro">
                            <BC.Icon iconType="microphone" verticalAlign="middle"/>
                            <BC.LetterSpace/>
                            <BC.Link linkType="inverse">Book Narrator Name</BC.Link>
                          </BC.ListItem>
                          <BC.ListItem spacing="micro">
                            <BC.Icon iconType="clock" verticalAlign="middle"/>
                            <BC.LetterSpace/>
                            <BC.Text>23 hrs & 38 mins, Unabridged</BC.Text>
                          </BC.ListItem>
                          <BC.ListItem spacing="micro">
                            <BC.Icon iconType="series" verticalAlign="middle"/>
                            <BC.LetterSpace/>
                            <BC.Link linkType="inverse">Series Name Here</BC.Link>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Icon iconType="whispersync" verticalAlign="middle"/>
                            <BC.LetterSpace/>
                            <BC.Link linkType="inverse">Whispersync for Voice</BC.Link>
                          </BC.ListItem>
                        </BC.List>
                      </BC.FixedGridColumn>

                      <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={250} side="right">
                        <BC.BuyBox/>
                      </BC.FixedGridColumn>
                    </BC.FixedGridRow>
                  </BC.FixedGridColumn>
                </BC.FixedGridRow>
              </BC.Section>
            </div>
            <div
            className="bc-hero-blur"
              style={{
              }}>
            </div>
          <div className="bc-hero-mask"></div>
        </div>
      </BC.GridRow>

        <div className="bc-container">

                {/* Asin 1 */}

                <BC.Divider spacing={"base"}/>
                <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/search"}>Search</BC.Link></BC.Heading>
                <br />
                <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150}>

                  <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left" >
                      <CC.Product  asinImageUrl={productData[0].product_images[500]} />
                  </BC.FixedGridColumn>

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

                      <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={180} side="right">
                        <BC.BuyBox />
                      </BC.FixedGridColumn>
                    </BC.FixedGridRow>

                  </BC.FixedGridColumn>
                </BC.FixedGridRow>

                {/* Asin 2 */}

                <BC.Divider spacing={"base"}/>
                <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/series-list"}>Series List</BC.Link></BC.Heading>
                <br />

                <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={205}>
                  <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={205} side="left">
                    <BC.GridRow>
                      <BC.GridColumn gridUnits={2}>
                        <BC.Heading headingLevel={2}>1</BC.Heading>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={10} position="last">
                        <CC.Product  asinImageUrl={productData[0].product_images[500]} />
                      </BC.GridColumn>
                    </BC.GridRow>
                  </BC.FixedGridColumn>

                  <BC.FixedGridColumn fixedColumn="left" side="right">
                      <BC.FixedGridRow fixedColumn="right" fixedColumnWidth={180}>
                        <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={180} side="left" >
                          <BC.GridRow>
                            <BC.GridColumn gridUnits={8}>
                              <BC.List listDirection="nostyle" textSize="small">
                                <BC.ListItem>
                                  <BC.Link textBold="true" textSize="base" url="/prototypes/brickcity/pdp">First Meetings: In the Enderverse</BC.Link>
                                </BC.ListItem>
                                <BC.ListItem spacing="small">
                                  <BC.Text>by
                                    <BC.Link> Orson Scott Card</BC.Link>
                                  </BC.Text>
                                </BC.ListItem>
                                <BC.ListItem spacing="micro">
                                  <BC.Icon iconType="microphone" verticalAlign="middle"></BC.Icon>
                                  <BC.LetterSpace size="small"/>
                                  <BC.Link>Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki</BC.Link>
                                </BC.ListItem>
                                <BC.ListItem spacing="micro">
                                  <BC.Icon iconType="clock" verticalAlign="middle"></BC.Icon>
                                  <BC.LetterSpace size="small"/>
                                  <BC.Text>5 hrs & 18 mins, Unabridged</BC.Text>
                                </BC.ListItem>
                                <BC.ListItem spacing="micro">
                                <BC.Icon iconType="whispersync" verticalAlign="middle"></BC.Icon>
                                <BC.LetterSpace size="small"/>
                                <BC.Link>Whispersync for Voice</BC.Link>
                                </BC.ListItem>
                                <BC.ListItem>
                                  <BC.Text>Release: 06-23-15</BC.Text>
                                </BC.ListItem>
                              </BC.List>
                            </BC.GridColumn>

                            <BC.GridColumn gridUnits={4} position="last">
                              <BC.List listDirection="nostyle">
                                <BC.ListItem>
                                  <BC.ReviewStars  iconColor="state" showAverageRating={true}/>
                                </BC.ListItem>
                                <BC.ListItem>
                                  <BC.Text textQuote={true}>Couldn&#39;t turn it off!</BC.Text>
                                </BC.ListItem>
                                <BC.ListItem>
                                  <BC.Link>Amazon Customer</BC.Link>
                                </BC.ListItem>
                              </BC.List>
                            </BC.GridColumn>
                        </BC.GridRow>
                    </BC.FixedGridColumn>
                    <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={180} side="right" >
                      <BC.BuyBox/>
                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>

                  </BC.FixedGridColumn>
                </BC.FixedGridRow>

                {/* Asin 3 */}

                <BC.Divider spacing={"base"}/>
                <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/best-sellers"}>Best Sellers</BC.Link></BC.Heading>
                <br />

                <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="small">
                  {/* Search Results - Image Column */}
                  <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
                    <BC.Link app={true} url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/search/cover._V288436798_.jpg"/></BC.Link>
                  </BC.FixedGridColumn>
                  {/* Search Results - Text Column */}
                  <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right">
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


                {/* Asin 4 */}

                <BC.Divider spacing="small"/>
                <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/cart-step1"}>Cart Step 1</BC.Link></BC.Heading>
                <br />
                <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="small">
                  <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
                    <BC.Link url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover1._V288437077_.jpg"/></BC.Link>
                  </BC.FixedGridColumn>

                  <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right">
                    <BC.GridRow spacing="small">
                      <BC.GridColumn gridUnits={5}>
                        <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                          <BC.ListItem>
                            <BC.Link textSize="base">The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia</BC.Link>
                          </BC.ListItem>
                          <BC.ListItem spacing="medium">
                            <BC.Text>by C.S. Lewis</BC.Text>
                          </BC.ListItem>
                          <BC.ListItem spacing="micro">
                            <BC.Icon iconType="trash"/>
                            <BC.LetterSpace size="small"/>
                            <BC.Text>Remove Item</BC.Text>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Icon iconType="add-to-list"/>
                            <BC.LetterSpace size="small"/>
                            <BC.Text>Move to Wish List</BC.Text>
                          </BC.ListItem>
                        </BC.List>
                      </BC.GridColumn>

                      <BC.GridColumn gridPush={3} gridUnits={2} textSize="medium">
                        <BC.GridRow>
                        <BC.RadioButton spacing="mini"/>
                          <BC.Text>$29.99</BC.Text>
                        </BC.GridRow>
                        <BC.GridRow>
                        <BC.RadioButton spacing="mini"/>
                          <BC.Text>1 Credit</BC.Text>
                        </BC.GridRow>
                      </BC.GridColumn>

                      <BC.GridColumn gridPush={1} gridUnits={2} position="last">
                        <BC.Text textBold={true}>$0.00</BC.Text>
                      </BC.GridColumn>

                    </BC.GridRow>
                  </BC.FixedGridColumn>
                </BC.FixedGridRow>

                {/* Asin 5 */}
                <BC.Divider spacing="small"/>

                <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="small">
                  <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
                    <BC.Link url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg"/></BC.Link>
                  </BC.FixedGridColumn>

                  <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right">
                      <BC.GridRow>
                        <BC.GridColumn gridUnits={5}>
                          <BC.Text spacing="micro" textColor="base" textSize="base">30-day Free Membership</BC.Text>

                          <BC.List spacing="micro">
                            <BC.ListItem spacing="micro">
                              <BC.Text>1 book per month</BC.Text>
                            </BC.ListItem>
                            <BC.ListItem spacing="micro">
                              <BC.Text>Free for the first 30 days and $14.95/month thereafter</BC.Text>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Text>Membership Continues until you cancel (by visiting your aBCount or contacting customer service)</BC.Text>
                            </BC.ListItem>
                          </BC.List>
                        </BC.GridColumn>

                        <BC.GridColumn gridPush={3} gridUnits={2} textSize="medium">
                          <BC.Text spacing="mini" textStrike={true}>$14.99</BC.Text>
                        </BC.GridColumn>

                        <BC.GridColumn gridPush={1} gridUnits={2} position="last">
                          <BC.Text textBold={true}>$0.00</BC.Text>
                        </BC.GridColumn>
                      </BC.GridRow>

                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>

                  {/* Asin 6 */}

                  <BC.Divider spacing="small"/>
                  <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/cart-step2"}>Cart Step 2</BC.Link></BC.Heading>
                  <br />

                  <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="small">
                    <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
                      <BC.Link url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover1._V288437077_.jpg"/></BC.Link>
                    </BC.FixedGridColumn>

                    <BC.FixedGridColumn columnPadding="20" fixedColumn="left" side="right">
                      <BC.GridRow spacing="small">
                        <BC.GridColumn gridUnits={5}>
                          <BC.List listDirection="nostyle" textColor="base" textSize="small">
                            <BC.ListItem>
                              <BC.Text textSize="base">The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia</BC.Text>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Text textColor="secondary">by C.S. Lewis</BC.Text>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Text>$29.99</BC.Text>
                            </BC.ListItem>
                          </BC.List>
                        </BC.GridColumn>

                        <BC.GridColumn gridPush={3} gridUnits={2} textSize="medium">
                          <BC.Text >1 Credit</BC.Text>
                        </BC.GridColumn>

                        <BC.GridColumn gridPush={1} gridUnits={2} position="last">
                          <BC.Text textBold={true}>$0.00</BC.Text>
                        </BC.GridColumn>

                      </BC.GridRow>
                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>

                  {/* Asin 7 */}
                  <BC.Divider spacing="small"/>

                  <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150} spacing="small">
                    <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={150} side="left">
                      <BC.Link url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg"/></BC.Link>
                    </BC.FixedGridColumn>

                    <BC.FixedGridColumn columnPadding="20" fixedColumn="left" side="right">
                      <BC.GridRow spacing="small">
                        <BC.GridColumn gridUnits={8}>
                          <BC.Text textColor="base" textSize="base">30-day Free Membership</BC.Text>

                          <BC.List spacing="small" textColor="secondary">
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

                        <BC.GridColumn gridPush={1} gridUnits={2} position="last">
                          <BC.Text textBold={true}>$0.00</BC.Text>
                        </BC.GridColumn>
                      </BC.GridRow>

                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>

                  {/* Asin 8 */}

                  <BC.Divider spacing="small"/>
                  <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/cart-step3"}>Cart - Step 3 (Anon)</BC.Link></BC.Heading>
                  <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/cart-step3-member"}>Cart - Step 3 (Member)</BC.Link></BC.Heading>
                  <br />

                  <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={150}>
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


                  {/* Asin 9 */}

                  <BC.Divider spacing="small"/>
                  <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/recommendations"}>Recommendations</BC.Link></BC.Heading>
                  <br />

                  <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={200}>
                    <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={200} side="left" spacing="mini">
                      <BC.Link app={true} url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/recommendations/cover1._V288436862_.jpg"/></BC.Link>
                    </BC.FixedGridColumn>

                    <BC.FixedGridColumn fixedColumn="left" side="right" spacing="mini">
                      <BC.GridRow>
                        <BC.GridColumn gridUnits={8}>
                          <BC.List listType="nostyle" textSize="small">
                            <BC.ListItem spacing="micro" textSize="base">
                              <BC.Link>Brave New World</BC.Link>
                            </BC.ListItem>
                            <BC.ListItem spacing="mini">
                              <BC.Text>by
                                <BC.Link> Alduous Huxley</BC.Link>
                              </BC.Text>
                            </BC.ListItem>
                            <BC.ListItem spacing="micro">
                              <BC.Icon iconType="microphone" verticalAlign="middle"/>
                              <BC.LetterSpace size="small"/>
                              <BC.Link>Michael York</BC.Link>
                            </BC.ListItem>
                            <BC.ListItem spacing="base">
                              <BC.Text>Overall</BC.Text>
                              <BC.LetterSpace size="small"/>
                              <BC.ReviewStars averageRating={4.8} iconColor="#f7991c" numRatings={20535} showAverageRating={true}/>

                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Text>Recommended based on 2 of your past purchases.
                              </BC.Text>
                              <BC.Link> Fix This</BC.Link>
                            </BC.ListItem>
                          </BC.List>
                        </BC.GridColumn>

                        <BC.GridColumn gridUnits={2} position="last">
                          <BC.GridRow>
                            <BC.RadioButton spacing="mini"/>
                            <BC.Text>I own it</BC.Text>
                          </BC.GridRow>
                          <BC.GridRow>
                            <BC.RadioButton spacing="mini"/>
                            <BC.Text>Not Interested</BC.Text>
                          </BC.GridRow>
                        </BC.GridColumn>
                      </BC.GridRow>

                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>

                  {/* Asin 10 */}

                  <BC.Divider spacing="small"/>
                  <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/write-review"}>Write Review</BC.Link></BC.Heading>
                  <br />

                  <BC.FixedGridRow  spacing="base" fixedColumn="left" fixedColumnWidth={184}>
                    <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={184} side="left">
                      <BC.Link app={true} url="/prototypes/brickcity/pdp"><BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover1._V288437077_.jpg"/></BC.Link>
                    </BC.FixedGridColumn>
                    <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right">
                      <BC.List listDirection="nostyle" textSize="small">
                        <BC.ListItem>
                          <BC.Link textBold="true" textSize="base" url="/prototypes/brickcity/pdp">First Meetings: In the Enderverse</BC.Link>
                        </BC.ListItem>
                        <BC.ListItem>
                            <BC.Text>by</BC.Text>
                            <BC.Link> Orson Scott Card</BC.Link>
                        </BC.ListItem>
                        <BC.ListItem spacing="mini">
                          <BC.Text>Narrated by </BC.Text>
                          <BC.Link>Alan Cumming, Tim Curry, Simon Vance</BC.Link>
                        </BC.ListItem>
                      </BC.List>
                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>

          {/* Carousel 1 */}

          <BC.Divider spacing={"base"}/>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/cancel"}>Cancel Credits</BC.Link></BC.Heading>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/search"}>Search</BC.Link></BC.Heading>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/category"}>Category</BC.Link></BC.Heading>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/category/sub-category"}>Sub Category</BC.Link></BC.Heading>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity"}>Gateway</BC.Link></BC.Heading>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity"}>Gateway</BC.Link></BC.Heading>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/pdp/" + productData[0].asin}>PDP</BC.Link></BC.Heading>

          <br />
          <CC.ProductCarousel carouselTitle="Choose from Your Wish List" />

          {/* Carousel 2 */}

          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity"}>Gateway</BC.Link></BC.Heading>
          <br />
          <CC.ProductCarousel carouselSize="large" />

          {/* Carousel 3 */}

          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/category"}>Category</BC.Link></BC.Heading>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/category/sub-category"}>Sub Category</BC.Link></BC.Heading>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity"}>Gateway</BC.Link></BC.Heading>

          <CC.ProductCarousel editorsPick={true} />

          {/* Carousel 4 */}
          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={235} >
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={235} side="left">
                <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/cart-step1"}>Cart - Step 1</BC.Link></BC.Heading>
                <CC.ProductDetail productTitle="You might also like..." verticalSize="mini" verticalProduct={true}/>
            </BC.FixedGridColumn>

            <BC.FixedGridColumn columnPadding="40px" fixedColumn="left" side="right" spacing={"medium"}>
              <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={235}>
                <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={235} side="left">
                  <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/cart-step2"}>Cart - No Credit Card</BC.Link></BC.Heading>
                  <CC.ProductDetail productTitle="In your Cart" verticalSize="mini" cartProduct={true}/>
                </BC.FixedGridColumn>
                <BC.FixedGridColumn columnPadding="40px" fixedColumn="left" side="right">
                </BC.FixedGridColumn>
              </BC.FixedGridRow>
            </BC.FixedGridColumn>

          </BC.FixedGridRow>

          <BC.Divider spacing={"base"}/>
          <BC.Heading headingLevel={2}><BC.Link app={true} url={"/prototypes/brickcity/pdp/" + productData[0].asin}>PDP</BC.Link></BC.Heading>
          <br />

          <BC.FixedGridRow>
            <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={280} side="right">
              <BC.Tabs spacing="medium">
                <BC.TabPanel title="Author">
                  <CC.Product  asinImageUrl={productData[0].product_images[500]} />
                  <BC.LetterSpace size="extra-large"/>
                <CC.Product  asinImageUrl={productData[4].product_images[500]} />
                  <BC.LetterSpace size="extra-large"/>
                <CC.Product  asinImageUrl={productData[3].product_images[500]} />
                </BC.TabPanel>

                <BC.TabPanel title="Narrator">
                  <CC.Product  asinImageUrl={productData[2].product_images[500]} />
                  <BC.LetterSpace size="extra-large"/>
                <CC.Product  asinImageUrl={productData[1].product_images[500]} />
                  <BC.LetterSpace size="extra-large"/>
                  <CC.Product  asinImageUrl={productData[0].product_images[500]} />
                </BC.TabPanel>
              </BC.Tabs>
            </BC.FixedGridColumn>
          </BC.FixedGridRow>

        </div>

        <ProdFooter/>
      </div>
    )
  }
}

export default ProductVersions;
