import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import productData from '../../../../data/prototypes/products.json';

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemWidth: null,
      contentWidth: null,
      contentOffset: 0,
      containerWidth: null,
      arrowClicked: null,
      pagination: 0,
    };
  }

  slide(direction) {
    let containerWidth = this.state.containerWidth + 20;
    let loopBack = this.state.contentWidth - containerWidth;
    let reachedEndBoolean = direction === "left" && this.state.contentOffset === 0
                         || direction === "right" && this.state.contentOffset === loopBack;
    let paginationTotal = this.state.contentWidth / containerWidth;
    let pagination = (this.state.contentOffset + containerWidth) /containerWidth;


    if (direction === "left"){
        if (reachedEndBoolean) {
          this.state.contentOffset+=loopBack
        }else {
          this.state.contentOffset-=containerWidth
        }

      this.setState({
          arrowClicked: "left"
      });
    }
    if (direction === "right"){

      if (reachedEndBoolean) {
        this.state.contentOffset-=loopBack
      }
      else {
        this.state.contentOffset+=containerWidth;
      }
        this.setState({
          arrowClicked: "right",
        });
    }
  }

  renderProducts() {
    let productArr = productData
      .map((product, index, productArr) => {
        if (this.props.editorsPick) {
          let carouselMargin = (this.props.carouselAmount-1)*20;
          let itemWidth = ((this.state.containerWidth - carouselMargin) / (this.props.carouselAmount));
          return (
            <div
            key={index}
            className={classNames("bc-product-carousel-item")}
            ref="slide"
            >
              <CC.EditorsPick />
            </div>
          )
        }
        else {
          let carouselMargin = (this.props.carouselAmount-1)*20;
          let itemWidth = ((this.state.containerWidth - carouselMargin) / this.props.carouselAmount);
          return (
            <div
            key={index}
            className={classNames("bc-product-carousel-item")}
            ref="slide"
            style={{width: itemWidth + 'px'}}
            >
                <CC.Asin
                  asinSize={itemWidth + 'px'}
                  url={"/prototypes/brickcity/pdp/" + product.asin}
                  product={product}
                  hasCard={this.props.hasCard}
                  />
            </div>
          )
        }

      });

    return productArr;

  }

  renderPagination() {
    let containerWidth = this.state.containerWidth + 20;
    var paginations = [];
    let paginationTotal = this.state.contentWidth / (containerWidth);
    let pagination = (this.state.contentOffset) /containerWidth;

    for (var x = 0; x < paginationTotal; x++) {
      paginations.push(x);
    }

    var paginationMap = paginations.map(function(index) {
          return (
            <BC.ListItem key={index} cssClass={(["bc-pagination", pagination === index ? "bc-pagination-active" : null])} ></BC.ListItem>
          )
      });

    return paginationMap;

  }

  componentDidMount() {
    let containerWidth = this.refs.container.clientWidth;
    let totalMargin = (this.props.carouselAmount-1)*20
    let itemWidth = (containerWidth-totalMargin) / (this.props.carouselAmount)
    let contentWidth = ((itemWidth + 20) * productData.length);
    let pagination = contentWidth / (containerWidth + 20);

    this.setState({
      itemWidth: itemWidth,
      containerWidth: containerWidth,
      contentWidth: contentWidth,
      pagination: pagination
    });
  }

  render() {
    let staticClasses = ['bc-product-carousel'];
    return (
      <BC.GridRow spacing="base">
        <BC.GridRow spacing="mini">
          <BC.GridColumn gridUnits={10}>
            <BC.Heading headingLevel={2}>{this.props.editorsPick ? "Editor's Pick" : 'Product'} Carousel Title</BC.Heading>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={2} textAlign="right" position="last">
            <BC.Link>View All</BC.Link>
          </BC.GridColumn>
        </BC.GridRow>

        <BC.GridRow cssClass="bc-product-carousel-container" spacing="mini">
            <div ref="container" className={classNames(["bc-product-carousel-content", this.props.slide ? "bc-product-carousel-slide" : [this.props.fade ? "bc-product-carousel-fade" : null]])}
              style={{
                width: this.state.contentWidth,
                right: this.state.arrowClicked ? this.state.contentOffset : null }}>
                  {this.renderProducts()}
            </div>
        {this.props.arrows
          ? <div className="bc-product-carousel-nav">
              <div
                className="bc-product-carousel-nav-arrow bc-product-carousel-nav-arrow-left"
                onClick={this.slide.bind(this, "left")}>
                <BC.Image imageHeight="30px" imageWidth="12px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/carousels/carousel-left-arrow._V311835961_.svg" />
              </div>

              <div
                className="bc-product-carousel-nav-arrow bc-product-carousel-nav-arrow-right"
                onClick={this.slide.bind(this, "right")}>
                <BC.Image imageHeight="30px" imageWidth="12px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/carousels/carousel-right-arrow._V311835961_.svg" />
              </div>
            </div>
          : null
        }
        </BC.GridRow>
        {this.props.pagination
          ? <div>
              <BC.GridRow spacing="mini" textAlign="center">
                  <BC.List listType="horizontal">
                    {this.renderPagination()}
                  </BC.List>
              </BC.GridRow>
          </div>
        : null
      }
      </BC.GridRow>
    );
  }
}

ProductCarousel.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  editorsPick: PropTypes.bool,
  pagination: PropTypes.bool,
  slide: PropTypes.bool,
  arrows: PropTypes.bool,
  hasCard: PropTypes.bool,
  carouselAmount: PropTypes.string
}

ProductCarousel.defaultProps = {
  carouselAmount: "4",
}

export default ProductCarousel;
