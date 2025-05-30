import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class CategoryArchiveMobile extends React.Component {
  render() {
    return (
      <div className="mobile">
        <ProdHeaderMobile />

        <CC.MobilePageTitle url={"/prototypes/brickcity-mobile/category"}>Category Name</CC.MobilePageTitle>

        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category/sub-category"}>Sub Category Name</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category/sub-category"}>Sub Category Name</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category/sub-category"}>Sub Category Name</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category/sub-category"}>Sub Category Name</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category/sub-category"}>Sub Category Name</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category/sub-category"}>Sub Category Name</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category/sub-category"} hideBottomBorder={true}>Sub Category Name</CC.MobileLink>

        <ProdFooterMobile hideCategories={true} />
      </div>
    )
  }
}
export default CategoryArchiveMobile;
