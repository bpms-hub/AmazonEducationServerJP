import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';
import productData from '../../../../data/prototypes/products.json';

class GatewayMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mobile">
        <ProdHeaderMobile member={true}/>

        <div className="bc-container">
          <BC.Box spacing="large" backgroundColor="tertiary" heightCss="200px"></BC.Box>

          <CC.ProductCarouselMobile />
          <CC.ProductCarouselMobile />
          <CC.ProductCarouselMobile />
          <CC.ProductCarouselMobile />
          <CC.ProductCarouselMobile />
        </div>

        <ProdFooterMobile />
      </div>
    )
  }
}

export default GatewayMobile;
