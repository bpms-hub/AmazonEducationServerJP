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

        <CC.MobilePageTitle url={"/prototypes/brickcity-mobile"}>All Categories</CC.MobilePageTitle>

        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Arts & Entertainment</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Bios & Memoirs</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Business</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Classics</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Comedy</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Drama & Poetry</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Erotica & Sexuality</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Fiction</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Health & Fitness</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>History</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Kids</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Language Instruction</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Live Events</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Mysteries & Thrillers</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Newspapers & Magazines</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Nonfiction</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Radio & TV</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Religion & Spirituality</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Romance</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Science & Technology</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Science Fiction & Fantasy</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Self Development</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Sports</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"}>Teens</CC.MobileLink>
        <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/category"} hideBottomBorder={true}>Travel & Adventure</CC.MobileLink>

        <ProdFooterMobile hideCategories={true} />
      </div>
    )
  }
}
export default CategoryArchiveMobile;
