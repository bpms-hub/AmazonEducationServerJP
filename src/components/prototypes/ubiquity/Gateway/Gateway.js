import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class Gateway extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>

        <CC.ZingCarousel spacing="large" />

        <div className="bc-container">
          <CC.ProductCarousel2 slide={true} pagination={true} arrows={true} />
        	<CC.ProductCarousel arrows={true} fade={true} />
        	<CC.ProductCarousel carouselAmount={2} pagination={true} arrows={true} />
        	<CC.ProductCarousel slide={true} />
          <CC.ProductCarousel editorsPick={true} carouselAmount={1} />
        </div>

        <ProdFooter/>
      </div>
    )
  }
}

export default Gateway;
