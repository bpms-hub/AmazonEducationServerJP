import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class CategoryMobile extends React.Component {
  render() {
    return (
      <div className="mobile">
        <ProdHeaderMobile />
        
        <CC.MobilePageTitle url={"/prototypes/brickcity-mobile/category-archive"}>Category Name</CC.MobilePageTitle>

        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/sub-category-archive"}>View all Sub Categories</CC.MobileLink>

        <CC.ProductCarouselMobile />

        <CC.ProductCarouselMobile />

        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/search"} hasTopBorder={true} hideBottomBorder={true}>Browse all in Category Name</CC.MobileLink>

        <ProdFooterMobile />
      </div>
    )
  }
}

export default CategoryMobile;
