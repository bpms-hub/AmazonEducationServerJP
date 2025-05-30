import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import CC from '../cc';
import BC from 'AudibleUITags';
import productData from '../../../../data/prototypes/products.json';

class ProductListingColumn4 extends React.Component {

  renderProduct() {

    return (
      <div>
      <BC.Divider spacing="base" spacingTop="base" />

            <BC.GridRow>
            {this.props.seriesList
              ? <BC.GridColumn>
                  <BC.Heading headingLevel={2}>{this.props.seriesNum}</BC.Heading>
                </BC.GridColumn>
              : null
            }
              <BC.GridColumn gridUnits={this.props.seriesList ? 2 : 3} >

                {this.props.hasAsin
                  ? <CC.Asin product={productData[0]} />
                  : <BC.Image cssClass="bc-product-asin" source={this.props.trialImage ? "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg" : productData[0].product_images[500]} />
                }
                </BC.GridColumn>

                <BC.GridColumn gridUnits={4}>
                    <BC.List listDirection="nostyle">
                        {this.props.bookTitle
                          ? <BC.ListItem textColor="base" textSize="medium"><BC.Text>{this.props.bookTitle}</BC.Text></BC.ListItem>
                          : null
                        }
                        {this.props.bookTitleLink
                          ? <BC.ListItem textSize="medium"><BC.Link>{this.props.bookTitleLink}</BC.Link></BC.ListItem>
                          : null
                        }
                        {this.props.bookAuthor
                          ? <BC.ListItem textColor="secondary" spacing="micro">Author: <BC.Text>{this.props.bookAuthor}</BC.Text></BC.ListItem>
                          : null
                        }
                        {this.props.bookAuthorLink
                          ? <BC.ListItem spacing="micro">By: <BC.Link>{this.props.bookAuthorLink}</BC.Link></BC.ListItem>
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
                          ? <BC.ListItem textColor="secondary" >
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

                        {this.props.remove
                          ? <BC.ListItem textColor="secondary" spacing="micro" spacingTop="base">
                              <BC.Icon iconType="trash"/>
                              <BC.LetterSpace size="small"/>
                              <BC.Text>Remove Item</BC.Text>
                            </BC.ListItem>
                          : null
                        }
                        {this.props.wishList
                          ? <BC.ListItem textColor="secondary">
                              <BC.Icon iconType="add-circle"/>
                              <BC.LetterSpace size="small"/>
                              <BC.Text>Move to Wish List</BC.Text>
                            </BC.ListItem>
                          : null
                        }

                        {this.props.trialImage
                          ? <BC.ListItem textColor="secondary">
                            <BC.GridRow spacing="micro">
                              <BC.Text textColor="base" textSize="medium">30-day Free Membership</BC.Text>
                            </BC.GridRow>
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
                            </BC.ListItem>
                          : null
                        }
                    </BC.List>
                  </BC.GridColumn>

                  {this.props.seriesList
                    ? <BC.GridColumn gridPush={1} gridUnits={2}>
                        <BC.List listDirection="nostyle">
                          <BC.ListItem>
                            <BC.ReviewStars iconColor="state" showAverageRating={true}/>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Text textQuote={true}>Couldn&#39;t turn it off!</BC.Text>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Link>Amazon Customer</BC.Link>
                          </BC.ListItem>
                        </BC.List>
                      </BC.GridColumn>
                    : null
                  }

                  <BC.GridColumn gridUnits={2} gridPush={1}>
                          {this.props.hasRadioBtn
                            ? [
                                <BC.GridRow>
                                    <BC.RadioButton spacing="mini"/>
                                    {this.props.bookCredit
                                      ? <BC.Text>1 Credit</BC.Text>
                                      : null
                                    }
                                </BC.GridRow>,
                                <BC.GridRow>
                                   <BC.RadioButton spacing="mini"/>${this.props.bookPrice}
                               </BC.GridRow>
                              ]
                            : <BC.Text spacing="mini" textStrike={this.props.trialPrice ? true : false}>
                              {this.props.trialPrice
                                ? <BC.Text>$14.99</BC.Text>
                                : null
                              }
                              {this.props.bookCredit
                                ? <BC.Text>1 Credit</BC.Text>
                                : null
                              }
                              </BC.Text>
                          }
                        </BC.GridColumn>

                        {/* Column 4 */}

                        <BC.GridColumn gridUnits={2}  position="last">
                          {this.props.userCost
                            ? <BC.Text textBold={true}>${this.props.userCost}</BC.Text>
                            : null
                          }
                          {this.props.hasBuyBox
                            ? <BC.Box backgroundColor="inverse" heightCss="60px" >
                                <BC.Text textColor="inverse">BuyBox</BC.Text>
                              </BC.Box>
                            : null
                          }
                        </BC.GridColumn>
                      </BC.GridRow>


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

ProductListingColumn4.propTypes = {
  bookAuthor: PropTypes.string,
  bookCredit: PropTypes.bool,
  bookHasWhispersync: PropTypes.bool,
  bookLength: PropTypes.string,
  bookNarrator: PropTypes.string,
  bookPrice: PropTypes.string,
  bookRating: PropTypes.bool,
  bookSeries: PropTypes.string,
  bookTitle: PropTypes.string,
  bookTitleLink: PropTypes.string,
  hasAsin: PropTypes.bool,
  hasBuyBox: PropTypes.bool,
  hasRadioBtn: PropTypes.bool,
  remove: PropTypes.bool,
  seriesList: PropTypes.bool,
  seriesNum: PropTypes.number,
  trialImage: PropTypes.bool,
  trialPrice: PropTypes.string,
  userCost: PropTypes.string,
  wishList: PropTypes.bool,
}

export default ProductListingColumn4;
