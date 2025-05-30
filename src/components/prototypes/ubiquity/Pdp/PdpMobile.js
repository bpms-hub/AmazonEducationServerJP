import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';
import {RouteHandler} from 'react-router';
import productData from '../../../../data/prototypes/products.json';

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
      <BC.GridRow>
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

        <div className="bc-relative">
          <div className="bc-hero">
            <div
              className="bc-hero-blur"
                style={{
                  backgroundImage: "url(" + this.state.currentProduct.product_images[500].replace('.jpg', 'BL60.jpg') + ")",
                }}>
              </div>
            <div className="bc-hero-mask"></div>
          </div>
        </div>

        <BC.GridRow spacing="large">
          <div className="bc-container">
            <BC.GridRow textAlign="center">
              <BC.GridRow spacingTop="base" spacing="mini">
                <BC.GridColumn gridUnits={2}>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={8}>
                  <CC.Asin product={this.state.currentProduct} />
                </BC.GridColumn>
              </BC.GridRow>

              <BC.Heading>Book Title Name Will Go Here</BC.Heading>

              <BC.List listType="nostyle" spacing="micro" textColor="secondary">
                <BC.ListItem>
                  By Book Author Name
                </BC.ListItem>
                <BC.ListItem>
                  Narrated by Book Narrator Name
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Text>23 hrs & 38 mins, Unabridged</BC.Text>
                </BC.ListItem>
                <BC.ListItem>
                  Whispersync for Voice
                </BC.ListItem>
              </BC.List>

              <BC.GridRow spacing="medium">
                <BC.ReviewStars averageRating={4.8} numRatings={20535} showAverageRating={true}/>
              </BC.GridRow>
            </BC.GridRow>

            <CC.BuyBox />

            <BC.Divider spacing="medium"/>

            <BC.Heading headingLevel={2} spacing="small">Publisher&#39;s Summary</BC.Heading>

            <BC.GridRow textcolor="secondary">
              <BC.Paragraph>
                From the internationally best-selling author of the acclaimed novel The Power of the Dog comes The Cartel, a gripping, ripped-from-the-headlines story of power, corruption, revenge, and justice spanning the past decade of the Mexican-American drug wars.
              </BC.Paragraph>

              <BC.Expander hideText="Show Less" showText="Show More">
                <BC.Paragraph>
                  It&#39;s 2004. DEA agent Art Keller has been fighting the war on drugs for 30 years in a blood feud against Adán Barrera, the head of El Federación, the world&#39;s most powerful cartel, and the man who brutally murdered Keller&#39;s partner. Finally putting Barrera away cost Keller dearly - the woman he loves, the beliefs he cherishes, the life he wants to lead.
                </BC.Paragraph>

                <BC.Paragraph>
                  Then Barrera gets out, determined to rebuild the empire that Keller shattered. Unwilling to live in a world with Barrera in it, Keller goes on a 10-year odyssey to take him down. His obsession with justice - or is it revenge? - becomes a ruthless struggle that stretches from the cities, mountains, and deserts of Mexico to Washington&#39;s corridors of power to the streets of Berlin and Barcelona.
                </BC.Paragraph>

                <BC.Paragraph>
                  Keller fights his personal battle against the devastated backdrop of Mexico&#39;s drug war, a conflict of unprecedented scale and viciousness, as cartels vie for power and he comes to the final reckoning with Barrera - and himself - that he always knew must happen.The Cartel is a true-to-life story of honor and sacrifice as one man tries to face down the devil without losing his soul. It is the story of the war on drugs and the men - and women - who wage it.
                </BC.Paragraph>
              </BC.Expander>
            </BC.GridRow>

            <BC.Divider spacing="medium"/>

            <CC.ProductCarouselMobile />

            <BC.Box backgroundColor="inverse" spacing="large" paddingSize="double-large">
              <BC.GridRow textColor="inverse" textAlign="center">Editor's Reviews Carousel Goes Here</BC.GridRow>
            </BC.Box>

            <BC.Heading headingLevel={2} spacing="mini">More from</BC.Heading>

            <CC.Tabs spacing="medium">
              <CC.TabPanel title="Author">
                { productData.map((product, index)=>{
                    if (index < 3) {
                      return (
                        <BC.GridRow spacing="base">
                          <BC.GridColumn gridUnits={4}>
                            <CC.Asin 
                              url={"/prototypes/brickcity/pdp/" + product.asin}
                              product={product} />
                          </BC.GridColumn>

                          <BC.GridColumn gridUnits={8} position="last">
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
              </CC.TabPanel>

              <CC.TabPanel title="Narrator">
                { productData.map((product, index)=>{
                    if (index > 3 && index < 8) {
                      return (
                        <BC.GridRow spacing="base">
                          <BC.GridColumn gridUnits={4}>
                            <CC.Asin 
                              url={"/prototypes/brickcity/pdp/" + product.asin}
                              product={product} />
                          </BC.GridColumn>

                          <BC.GridColumn gridUnits={8} position="last">
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
              </CC.TabPanel>
            </CC.Tabs>

            <BC.Divider spacing="medium" />

            <BC.Heading headingLevel={2} spacing="small">Customer Reviews</BC.Heading>

            <CC.Tabs>
              <CC.TabPanel title="Audible.com">
                {this.renderReviews()}
              </CC.TabPanel>

              <CC.TabPanel title="Amazon.com">
                {this.renderReviews()}
              </CC.TabPanel>
            </CC.Tabs>
            
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
          </div>
        </BC.GridRow>

        <ProdFooterMobile />
      </div>
    )
  }
}

Pdp.contextTypes= {
  history: React.PropTypes.object,
};

export default Pdp;
