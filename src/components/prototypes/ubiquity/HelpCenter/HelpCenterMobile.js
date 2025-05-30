import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import CC from '../cc';
import AquisitionHeaderMobile from '../Header/AquisitionHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class HelpCenterMobile extends React.Component {
  render() {
    return (
      <div className="mobile">
        <AquisitionHeaderMobile />
      <CC.MobilePageTitle textAlign="center" first={true}><BC.Text textColor="base">Help Center</BC.Text></CC.MobilePageTitle>

        <BC.Section backgroundColor="secondary" padding="large" paddingTop="large" spacing="base">
          <div className="bc-container">
            <BC.TextInput />
          </div>
        </BC.Section>

        <div className="bc-container">
          <BC.Heading textSize="large" spacing="base" headingLevel={2}>Popular Requests</BC.Heading>
        </div>

        <BC.List listType="nostyle" spacing="base">
          <BC.ListItem>
            <CC.MobileLink hasTopBorder={true}>Return Your Book</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink>Reset Your Password</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink>Cancel My Membership</CC.MobileLink>
          </BC.ListItem>
        </BC.List>

        <div className="bc-container">
          <BC.Heading textSize="large" spacing="base" headingLevel={2}>Help Categories</BC.Heading>
        </div>

        <BC.List listType="nostyle">
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category"} hasTopBorder={true}>How Audible Works</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category"}>Account</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category"}>Android Devices</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category"}>iOS Devices</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category"}>Website</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category"}>ADM</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category"}>iTunes</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category"}>Other Devices</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink url={"/prototypes/brickcity-mobile/help-center/category"}>Kindle Devices</CC.MobileLink>
          </BC.ListItem>
          <BC.ListItem>
            <CC.MobileLink hideBottomBorder={true} url={"/prototypes/brickcity-mobile/help-center/category"}>Windows Phone</CC.MobileLink>
          </BC.ListItem>
        </BC.List>

        <ProdFooterMobile hideCategories={true} />
      </div>
    )
  }
}
export default HelpCenterMobile;
