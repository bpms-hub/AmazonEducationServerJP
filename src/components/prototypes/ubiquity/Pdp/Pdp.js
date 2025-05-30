import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import {RouteHandler} from 'react-router';
import productData from '../../../../data/prototypes/products.json';
import classNames from 'classnames';

class Pdp extends React.Component {
  constructor(props,context) {
      super(props,context);
      this.state = {
        currentProduct: productData[0]
      }
  }

  componentDidMount() {
    this.updateAsin();
  }

  componentDidUpdate() {
    this.updateAsin();
  }

  updateAsin() {
    let asinSelected = this.props.params.asin;

    if (this.state.currentProduct.asin === asinSelected) {
      return;
    } else {
      for(var i=0; i < productData.length; i++) {
        if (productData[i].asin === asinSelected) {
          this.setState({
            currentProduct: productData[i]
          });
        }
      }
    }
  }

  renderReviews() {
    return (
      <BC.GridRow spacing="extra-large">
        <BC.GridColumn gridUnits={3}>
          <BC.GridRow spacing="base">
            <BC.GridColumn gridUnits={4}>
              <BC.Image imageHeight="80px" imageWidth="80px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/pdp/profile_pic._V288437133_.png"/>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={8} position="last">
              <BC.List listType="nostyle" spacing="mini">
                <BC.ListItem>
                  <BC.Link>Michael G. Kurilla</BC.Link>
                </BC.ListItem>
                <BC.ListItem>Nantucket, MA</BC.ListItem>
                <BC.ListItem>04-18-12</BC.ListItem>
              </BC.List>
            </BC.GridColumn>
          </BC.GridRow>

          <BC.GridRow spacing="micro">
            <BC.GridColumn gridUnits={4}>
              <BC.Text textSize="mini">Overall</BC.Text>
            </BC.GridColumn>
            <BC.GridColumn gridUnits={8} position="last">
              <BC.ReviewStars averageRating={3.0}/>
            </BC.GridColumn>
          </BC.GridRow>

          <BC.GridRow spacing="micro">
            <BC.GridColumn gridUnits={4}>
              <BC.Text textSize="mini">Performance</BC.Text>
            </BC.GridColumn>
            <BC.GridColumn gridUnits={8} position="last">
              <BC.ReviewStars averageRating={2.3}/>
            </BC.GridColumn>
          </BC.GridRow>

          <BC.GridRow>
            <BC.GridColumn gridUnits={4}>
              <BC.Text textSize="mini">Story</BC.Text>
            </BC.GridColumn>
            <BC.GridColumn gridUnits={8} position="last">
              <BC.ReviewStars averageRating={4.1}/>
            </BC.GridColumn>
          </BC.GridRow>
        </BC.GridColumn>

        <BC.GridColumn gridUnits={9} position="last">
          <BC.Heading headingLevel={2} spacing="small" textQuote={true}>Excellent book, narrator did such a good job!</BC.Heading>

          <BC.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonnproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </BC.Paragraph>

          <BC.GridRow textColor="tertiary" textSize="mini">
            <BC.GridColumn gridUnits={8}>
              <BC.Text>Was this review helpful?</BC.Text>
              <BC.LetterSpace/>
              <BC.Button inline={true} size="small">Yes</BC.Button>
              <BC.LetterSpace/>
              <BC.Button inline={true} size="small">No</BC.Button>
              <BC.LetterSpace/>
              <BC.Link>Report this</BC.Link>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={4} position="last" textAlign="right">
              <BC.Text>17 of 17 people found this helpful</BC.Text>
            </BC.GridColumn>
          </BC.GridRow>
        </BC.GridColumn>
      </BC.GridRow>
    )
  }

  render() {
    return (
      <div>
        <ProdHeader/>
          <BC.GridRow spacing="medium">
              <div className="bc-hero bc-theme-dark">
                <div className={classNames(["bc-container","bc-relative"])} style={{zIndex:2}}>
                  <BC.Section paddingTop="medium" padding="medium">
                    <BC.GridRow textColor="secondary">
                      <BC.GridColumn gridUnits={3}>
                        <CC.Asin product={this.state.currentProduct} />

                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={5}>
                        <BC.Heading textColor="base">Book Title Name Will Go Here</BC.Heading>

                        <BC.GridRow spacing="mini">
                          by <BC.Link textColor="base">Book Author Name</BC.Link>
                        </BC.GridRow>

                        <BC.List listType="nostyle" spacing="base">
                          <BC.ListItem spacing="micro">
                            Narrated by <BC.Link textColor="base">Book Narrator Name</BC.Link>
                          </BC.ListItem>
                          <BC.ListItem spacing="micro">
                            <BC.Text textColor="secondary">23 hrs & 38 mins, Unabridged</BC.Text>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Link textColor="base">Whispersync for Voice Ready</BC.Link>
                          </BC.ListItem>
                        </BC.List>

                        <BC.GridRow spacing="medium">
                          <BC.ReviewStars averageRating={4.8} numRatings={20535} showAverageRating={true}/>
                        </BC.GridRow>
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={3} position="last">
                        <CC.BuyBox/>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </BC.Section>
                </div>
                <div
                className="bc-hero-blur"
                  style={{
                    backgroundImage: "url(" + this.state.currentProduct.product_images[500].replace('.jpg', 'BL60.jpg') + ")",
                  }}>
                </div>
              <div className="bc-hero-mask"></div>
            </div>
        </BC.GridRow>

        <div className="bc-container">
          <BC.GridRow spacing="base">
            <BC.GridColumn gridUnits={8}>
              <BC.Heading headingLevel={2} spacing="small">Publisher&#39;s Summary</BC.Heading>

              <BC.GridRow spacing="base">
                <BC.Paragraph>
                  From the internationally best-selling author of the acclaimed novel The Power of the Dog comes The Cartel, a gripping, ripped-from-the-headlines story of power, corruption, revenge, and justice spanning the past decade of the Mexican-American drug wars.
                </BC.Paragraph>

                <BC.Paragraph>
                  It&#39;s 2004. DEA agent Art Keller has been fighting the war on drugs for 30 years in a blood feud against Adán Barrera, the head of El Federación, the world&#39;s most powerful cartel, and the man who brutally murdered Keller&#39;s partner. Finally putting Barrera away cost Keller dearly - the woman he loves, the beliefs he cherishes, the life he wants to lead.
                </BC.Paragraph>

                <BC.Paragraph>
                  Then Barrera gets out, determined to rebuild the empire that Keller shattered. Unwilling to live in a world with Barrera in it, Keller goes on a 10-year odyssey to take him down. His obsession with justice - or is it revenge? - becomes a ruthless struggle that stretches from the cities, mountains, and deserts of Mexico to Washington&#39;s corridors of power to the streets of Berlin and Barcelona.
                </BC.Paragraph>
              </BC.GridRow>

              <BC.Heading headingLevel={2} spacing="base">Publisher&#39;s Information</BC.Heading>

              <BC.List listType="nostyle">
                <BC.ListItem spacing="micro">
                  Release Date: 03-31-2015
                </BC.ListItem>
                <BC.ListItem>
                  Publisher: <BC.Link>HarperAudio</BC.Link>
                </BC.ListItem>
              </BC.List>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={3} position="last">
              <BC.Heading headingLevel={2} spacing="mini">More from the same...</BC.Heading>

              <BC.Tabs spacing="medium">
                <BC.TabPanel title="Author">
                  { productData.map((product, index)=>{
                      if (index < 3) {
                        return (
                          <BC.GridRow spacing="base">
                            <BC.GridColumn gridUnits={4}>
                              <CC.Asin
                                url={"/prototypes/brickcity/pdp/" + product.asin}
                                product={product} />
                            </BC.GridColumn>

                            <BC.GridColumn gridUnits={7} position="last">
                              <BC.Heading headingLevel={3}>{product.title}</BC.Heading>
                              <BC.GridRow spacing="micro">
                                <BC.Text>by Author</BC.Text>
                              </BC.GridRow>
                              <BC.ReviewStars />
                            </BC.GridColumn>
                          </BC.GridRow>
                          )
                      } else {
                        return false;
                      }
                    })
                  }
                </BC.TabPanel>

                <BC.TabPanel title="Narrator">
                  { productData.map((product, index)=>{
                      if (index > 3 && index < 7) {
                        return (
                          <BC.GridRow spacing="base">
                            <BC.GridColumn gridUnits={4}>
                              <CC.Asin
                                url={"/prototypes/brickcity/pdp/" + product.asin}
                                product={product} />
                            </BC.GridColumn>

                            <BC.GridColumn gridUnits={7} position="last">
                              <BC.Heading headingLevel={3}>{product.title}</BC.Heading>
                              <BC.GridRow spacing="micro">
                                <BC.Text>by Author</BC.Text>
                              </BC.GridRow>
                              <BC.ReviewStars />
                            </BC.GridColumn>
                          </BC.GridRow>
                          )
                      } else {
                        return false;
                      }
                    })
                  }
                </BC.TabPanel>
              </BC.Tabs>
            </BC.GridColumn>
          </BC.GridRow>

          <CC.ProductCarousel pagination={true} arrows={true} />

          <BC.Box backgroundColor="inverse" paddingSize="extra-large" spacing="medium">
            <BC.GridRow textAlign="center" textColor="inverse" textSize="large">Testimonials carousel goes here</BC.GridRow>
          </BC.Box>

          <BC.Divider spacing="medium"/>

          <BC.Heading headingLevel={2} spacing="small">What Members Say</BC.Heading>

          <BC.GridRow spacing="extra-large" spacingTop="base">
            <BC.GridColumn gridUnits={4}>
              <CC.Histogram averageRating={3.8} numFiveStars={60} numFourStars={140} numOneStars={3} numRatings={297} numThreeStars={51} numTwoStars={43}/>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={4}>
              <CC.Histogram averageRating={3.8} numFiveStars={60} numFourStars={140} numOneStars={3} numRatings={297} numThreeStars={51} numTwoStars={43}/>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={4} position="last">
              <CC.Histogram averageRating={3.8} numFiveStars={60} numFourStars={140} numOneStars={3} numRatings={297} numThreeStars={51} numTwoStars={43}/>
            </BC.GridColumn>
          </BC.GridRow>

          <BC.Tabs>
            <BC.TabPanel title="Audible.com">
              <BC.GridRow spacing="mini" textAlign="right">
                <BC.Text textColor="secondary">Sort by</BC.Text>
                <BC.LetterSpace/>
                <BC.Dropdown inline={true}>
                  <option>Rating</option>
                  <option>Date Added</option>
                  <option>Random</option>
                </BC.Dropdown>
              </BC.GridRow>

              {this.renderReviews()}
            </BC.TabPanel>

            <BC.TabPanel title="Amazon.com">
              <BC.GridRow spacing="mini" textAlign="right">
                <BC.Text textColor="secondary">Sort by</BC.Text>
                <BC.LetterSpace/>
                <BC.Dropdown inline={true}>
                  <option>test 1</option>
                  <option>test 2</option>
                  <option>test 3</option>
                </BC.Dropdown>
              </BC.GridRow>

              {this.renderReviews()}
            </BC.TabPanel>
          </BC.Tabs>
        </div>

        <ProdFooter/>
      </div>
    )
  }
}

export default Pdp;
