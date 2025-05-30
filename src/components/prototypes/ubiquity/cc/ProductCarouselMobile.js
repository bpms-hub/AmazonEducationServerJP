import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import productData from '../../../../data/prototypes/products.json';

class ProductCarouselMobile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        showViewAllArrow: false,
        showViewAllText: true,
      }
  }
  renderProducts() {
    var productMap = productData.map(function(product, index) {
      return (
	      <BC.ListItem key={index}>
	        <CC.Asin
	        	hasCard={true}
	        	asinSize="114"
            url={"/prototypes/brickcity-mobile/pdp/" + product.asin}
	        	product={product}
          />
	      </BC.ListItem>
      )
    })
    return productMap;
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(){
    let itemWidth = 114;
    let carouselWidth =  ((itemWidth + 20) * productData.length) - 20 ;
    let screenWidth = this.refs.content.clientWidth;
    let ScrollXPos = window.scrollX;
    console.log("carouselWidth " + carouselWidth + " screenWidth " + screenWidth + " ScrollXPos " + ScrollXPos)

    if ( (ScrollXPos >= carouselWidth - itemWidth) ) {
      alert("fade in view all")
      this.setState({
        showViewAllArrow: true,
        showViewAllText: false
      });
  }
}

  render() {
    return (
        <div>
            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={10}>
                <BC.Heading headingLevel={2}>Browse Category Title</BC.Heading>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={2} textAlign="right" position="last">
                <BC.Link>View All</BC.Link>
              </BC.GridColumn>
            </BC.GridRow>
            	<BC.GridRow cssClass="bc-mobile-carousel">
                <div ref="content">
              		<BC.List listType="horizontal">
            			   {this.renderProducts()}
                       <BC.ListItem cssClass="bc-carousel-see-all" >
                          <BC.Box textAlign="center" paddingSize="mini">
                            <BC.GridRow spacing="mini" cssClass="bc-carousel-see-all-btn">
                              <BC.Icon iconType="chevron-right" textColor="link" iconSize="medium" />
                            </BC.GridRow>
                            <BC.GridRow textAlign="center">
                              <BC.Link>View All</BC.Link>
                            </BC.GridRow>
                          </BC.Box>
                       </BC.ListItem>
                	</BC.List>
                </div>
            	</BC.GridRow>
        </div>
    );
  }
}

ProductCarouselMobile.PropTypes = {
  id: PropTypes.string,
  carouselSize: PropTypes.string,
}

ProductCarouselMobile.defaultProps = {
  carouselSize: 114
}

export default ProductCarouselMobile;
