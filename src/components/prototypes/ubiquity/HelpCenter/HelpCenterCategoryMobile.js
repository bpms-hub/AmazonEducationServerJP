import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import AquisitionHeaderMobile from '../Header/AquisitionHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class HelpCenterCategoryMobile extends React.Component {
  render() {
    return (
      <div className="mobile">
        <AquisitionHeaderMobile />

        <BC.Section backgroundColor="secondary" padding="large" paddingTop="large" spacing="base">
          <div className="bc-container">
            <BC.TextInput />
          </div>
        </BC.Section>

        <CC.MobilePageTitle>Do I lose my credits when I cancel?</CC.MobilePageTitle>

        <BC.List listType="nostyle">
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category/article"}>Billing</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category/article"}>Cancel</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category/article"}>Pause</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category/article"}>Refunds</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category/article"}>Login/Password</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category/article"}>Email Preferences</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category/article"}>Invoices</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category/article"}>Change Plan</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category/article"} hideBottomBorder={true}>Merge with Amazon</CC.MobileLink>
          </BC.ListItem>
        </BC.List>     

        <ProdFooterMobile hideCategories={true} />
      </div>
    )
  }
}
export default HelpCenterCategoryMobile;