import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import productData from '../../../../data/prototypes/products.json';

class ProductListingColumn3 extends React.Component {
  renderProduct() {
    return (
      <div>

          <BC.GridRow spacing="base">
            <BC.GridColumn gridUnits={this.props.recommendations ? 2 : 3} >
              {this.props.hasAsin
                ? <CC.Asin product={productData[0]} />
                : <BC.Image cssClass="bc-product-asin" source={this.props.trialImage ? "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg" : productData[0].product_images[500]} />
              }
            </BC.GridColumn>

            <BC.GridColumn gridUnits={this.props.hasBuyBox ? 6 : [this.props.hasRadioBtn ? 7 : 8]}>
                <BC.List listDirection="nostyle">
                    {this.props.bookHasAudiobook
                      ? <BC.ListItem textColor="secondary">Audiobook</BC.ListItem>
                      : null
                    }

                    {this.props.bookTitle
                      ? <BC.ListItem textColor="secondary" textSize="medium"><BC.Link>{this.props.bookTitle}</BC.Link></BC.ListItem>
                      : null
                    }
                    {this.props.bookAuthor
                      ? <BC.ListItem textColor="secondary" spacing="micro">Author: <BC.Link>{this.props.bookAuthor}</BC.Link></BC.ListItem>
                      : null
                    }
                    {this.props.bookNarrator
                      ? <BC.ListItem textColor="secondary" spacing="micro">
                          {/* <BC.Icon iconType="microphone"/>*/}
                          <BC.Text>Narrator: </BC.Text>
                          <BC.Link>{this.props.bookNarrator}</BC.Link>
                        </BC.ListItem>
                      : null
                    }
                    {this.props.bookSeries
                      ? <BC.ListItem textColor="secondary" spacing="micro">Series: <BC.Link>{this.props.bookSeries}</BC.Link></BC.ListItem>
                      : null
                    }
                    {this.props.bookRating
                      ? <BC.ListItem textColor="secondary" spacing="micro">
                          <BC.Link>
                            <BC.ReviewStars numRatings="245 ratings" iconColor="state" showAverageRating={true} />
                          </BC.Link>
                        </BC.ListItem>
                      : null
                    }
                    {this.props.bookLength
                      ? <BC.ListItem textColor="secondary" spacing="micro">
                          {/* <BC.Icon iconType="clock" />*/}
                          <BC.Text>Duration: </BC.Text>
                          {this.props.bookLength}
                        </BC.ListItem>
                      : null
                    }
                    {this.props.bookHasWhispersync
                      ? <BC.ListItem textColor="secondary">
                          {/* <BC.Icon iconType="whispersync"/>*/}
                          <BC.Link>Whispersync for Voice-ready</BC.Link>
                        </BC.ListItem>
                      : null
                    }

                    {this.props.bookRelease
                      ? <BC.ListItem textColor="secondary" spacing="micro">Release: {this.props.bookRelease}</BC.ListItem>
                      : null
                    }

                    {this.props.trialImage
                      ?
                          <BC.ListItem textColor="secondary">
                              <BC.Text spacing="micro" textColor="base" textSize="base">30-day Free Membership</BC.Text>
                              <BC.GridRow spacing="small">
                                <BC.GridColumn gridPull={5} gridUnits={7} position="last">
                                  <BC.List spacing="micro" listType="bullet">
                                    <BC.ListItem spacing="micro">
                                      <BC.Text>1 book per month</BC.Text>
                                    </BC.ListItem>
                                    <BC.ListItem spacing="micro">
                                      <BC.Text>Free for the first 30 days and $14.95/month thereafter</BC.Text>
                                    </BC.ListItem>
                                    <BC.ListItem>
                                      <BC.Text>Membership Continues until you cancel (by visiting your account or contacting customer service)</BC.Text>
                                    </BC.ListItem>
                                  </BC.List>
                                </BC.GridColumn>
                              </BC.GridRow>
                          </BC.ListItem>
                              : null
                            }
                            {this.props.recommendations
                              ? <BC.ListItem textColor="secondary" spacingTop="base">
                                  <BC.Text>Recommended based on 2 of your past purchases. <BC.Link>Fix This</BC.Link></BC.Text>
                                </BC.ListItem>
                              : null
                            }
                      </BC.List>

              </BC.GridColumn>

              <BC.GridColumn gridUnits={this.props.hasBuyBox ? 3 : [(this.props.hasRadioBtn || this.props.recommendationsBtn) ? 2 : 1]} position="last">
                    {this.props.hasBuyBox
                      ? <BC.Box backgroundColor="inverse" heightCss="60px">
                          <BC.Text textColor="inverse">BuyBox</BC.Text>
                        </BC.Box>
                      : null
                    }
                    {this.props.hasRadioBtn
                      ? [
                           <BC.GridRow>
                            <BC.RadioButton spacing="mini"/>
                              <BC.Text>I own it</BC.Text>
                          </BC.GridRow>,
                          <BC.GridRow>
                             <BC.RadioButton spacing="mini"/>
                                <BC.Text>Not Interested</BC.Text>
                          </BC.GridRow>
                        ]
                      : [this.props.recommendationsBtn ? <BC.Button buttonType="primary" size="small">Restore</BC.Button> : null]
                    }

                    {this.props.userCost
                      ? <BC.Text textBold={true}>$0.00</BC.Text>
                      : null
                    }
                </BC.GridColumn>
            </BC.GridRow>

            <BC.Divider spacing="base"  />

      </div>
    );
  }

  render() {
    return (
      <span>
      {this.renderProduct()}
      </span>
    );
  }

}

ProductListingColumn3.propTypes = {
  bookAuthor: PropTypes.string,
  bookHasAudiobook: PropTypes.bool,
  bookHasWhispersync: PropTypes.bool,
  bookLength: PropTypes.string,
  bookNarrator: PropTypes.string,
  bookPrice: PropTypes.string,
  bookRating: PropTypes.bool,
  bookRelease: PropTypes.string,
  bookSeries: PropTypes.string,
  bookTitle: PropTypes.string,
  hasAsin: PropTypes.bool,
  hasBuyBox: PropTypes.bool,
  hasRadioBtn: PropTypes.bool,
  recommendations: PropTypes.bool,
  recommendationsBtn: PropTypes.bool,
  trialImage: PropTypes.bool,
  userCost: PropTypes.string,
}

export default ProductListingColumn3;
