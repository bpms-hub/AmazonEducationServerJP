import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import productData from '../../../../data/prototypes/products.json';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentWidth: null
    };
  }

  renderProducts() {
    let productArr = productData
    var rows = [];
    for (var x = 0; x < 4; x++) {
      rows.push(x)
    }
      productArr = rows.map((product, index, productArr) => {
        if (this.props.verticalProduct) {
          return (
            <div>
              <BC.GridRow>
                {this.props.hasAsin
                  ? <BC.GridColumn gridUnits={4}>
                      <CC.Asin product={productData[0]} />
                    </BC.GridColumn>
                  : <BC.GridColumn gridUnits={4} spacing="micro" >
                      <BC.Image cssClass="bc-product-asin" source={productData[0].product_images[500]} />
                    </BC.GridColumn>
                }
                <BC.GridColumn gridUnits={8} position="last">
                <BC.List listDirection="nostyle">
                {this.props.bookTitle
                  ? <BC.ListItem>{this.props.bookTitle}</BC.ListItem>
                  : null
                }
                {this.props.bookAuthor
                  ? <BC.ListItem spacing="micro">by {this.props.bookAuthor}</BC.ListItem>
                  : null
                }
                {this.props.bookRating
                  ? <BC.ListItem spacing="micro"><BC.ReviewStars /></BC.ListItem>
                  : null
                }
                {this.props.addCartButton
                  ? <BC.GridRow>
                    <BC.GridColumn gridUnits={9}>
                      <BC.ListItem spacing="small">
                        <BC.Button size="small">Add to Cart</BC.Button>
                      </BC.ListItem>
                    </BC.GridColumn>
                  </BC.GridRow>
                  : null
                }
                  </BC.List>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          )
        }
        else if (this.props.horizontalProduct){
          return (
            <div className={classNames(["bc-product-detail-horizontal", index + 1 === productArr.length ? " last" : null ])}>
              <BC.Product
                asinSize={this.props.horizontalSize}
                onAsin={true}
                productAsin={product.asin} />

                <BC.List listDirection="nostyle">
                  <BC.ListItem spacing="micro">
                    <BC.Link>Departure</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Text>1 Credit or $17.99</BC.Text>
                  </BC.ListItem>
                  <BC.ListItem spacing="mini">
                    <BC.ReviewStars />
                  </BC.ListItem>
                  <BC.ListItem spacing="mini">
                    <BC.GridRow>
                      <BC.GridColumn gridUnits={8} position="last" gridPull={4}>
                        <BC.Button>Add to Cart</BC.Button>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </BC.ListItem>
                </BC.List>
            </div>
          )
        }
      });

    return productArr;
  }

  render() {
    let staticClasses = ['bc-product-detail'];

    let contentWidth = {
      width: this.state.contentWidth
    }

          return (
            <BC.Section
              id={this.props.id}
              cssClass={classNames(staticClasses)}>
                <BC.GridRow ref="container" cssClass="bc-product-detail-container">
                  <div className="bc-product-detail-content" style={contentWidth}>
                    <BC.GridRow spacing="base">
                      <BC.Text textSize="medium">{this.props.productTitle}</BC.Text>
                    </BC.GridRow>
                    {this.renderProducts()}
                  </div>
                </BC.GridRow>
            </BC.Section>
          );
  }
}

ProductDetail.PropTypes = {
  id: PropTypes.string,
  addCartButton: PropTypes.bool,
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string,
  bookRating: PropTypes.bool,
  cssClass: PropTypes.string,
  hasAsin: PropTypes.bool,
  horizontalSize: PropTypes.string,
  productList: PropTypes.array,
  verticalProduct: PropTypes.bool,
  horizontalProduct: PropTypes.bool,
  productTitle: PropTypes.string

}

export default ProductDetail;
