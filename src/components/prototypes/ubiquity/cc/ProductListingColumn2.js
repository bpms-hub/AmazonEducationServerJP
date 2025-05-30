import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import CC from '../cc';
import BC from 'AudibleUITags';
import productData from '../../../../data/prototypes/products.json';

class ProductListingColumn2 extends React.Component {

  renderProduct() {

    return (
      <div>

      <BC.GridRow>
        <BC.GridColumn gridUnits={2} spacing="base">
          {this.props.hasAsin
            ? <CC.Asin product={productData[0]} />
            : <BC.Image cssClass="bc-product-asin" source={this.props.trialImage ? "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg" : productData[0].product_images[500]} />
          }
          </BC.GridColumn>

            <BC.GridColumn gridUnits={10} position="last">

                <BC.List listDirection="nostyle">

                    {this.props.bookTitle
                      ? <BC.ListItem textColor="base" textSize="medium"><BC.Text>{this.props.bookTitle}</BC.Text></BC.ListItem>
                      : null
                    }
                    {this.props.bookAuthor
                      ? <BC.ListItem textColor="secondary" spacing="micro">Author: <BC.Text>{this.props.bookAuthor}</BC.Text></BC.ListItem>
                      : null
                    }
                    {this.props.bookNarrator
                      ? <BC.ListItem textColor="secondary" spacing="micro">
                            <BC.Text>Narrator: </BC.Text>
                          <BC.Text>{this.props.bookNarrator}</BC.Text>
                        </BC.ListItem>
                      : null
                    }

                    {this.props.trialImage
                      ? <BC.ListItem textColor="secondary">
                      <BC.GridRow spacing="micro">
                        <BC.Text textColor="base" textSize="medium">30-day Free Membership</BC.Text>
                      </BC.GridRow>
                      <BC.GridRow>
                        <BC.GridColumn gridPull={6} gridUnits={6} position="last">
                          <BC.List listType="bullet">
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
                </BC.List>


      </BC.GridColumn>
  </BC.GridRow>
  <BC.Divider spacing="base" />

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

ProductListingColumn2.propTypes = {
  bookAuthor: PropTypes.string,
  bookNarrator: PropTypes.string,
  bookTitle: PropTypes.string,
  hasAsin: PropTypes.bool,
  trialImage: PropTypes.bool
}

export default ProductListingColumn2;
