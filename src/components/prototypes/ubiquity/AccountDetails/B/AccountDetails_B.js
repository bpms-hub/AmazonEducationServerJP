import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../cc';
import ProdHeader from '../../Header/ProdHeader';
import ProdFooter from '../../Footer/ProdFooter';

import Profile_B from '../../AccountDetails/B/Profile_B';
import Membership_B from '../../AccountDetails/B/Membership_B';
// import PaymentMethod from '../AccountDetails/PaymentMethod';
// import MemberBenefits_B from '../../AccountDetails/B/MemberBenefits_B';
import OrderHistory_B from '../../AccountDetails/B/OrderHistory_B';
// import OrderHistory_C from '../../AccountDetails/B/OrderHistory_C';
import Subscriptions_B from '../../AccountDetails/B/Subscriptions_B';

class AccountDetails_B extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
          {/*      <BC.Breadcrumbs breadcrumbTrail={[{name: "Home", url: "/prototypes/brickcity"},{name: "Account Details"}]} spacing="small" />*/}


          <BC.Section spacingTop="base">

          <BC.Heading>Account Details</BC.Heading>

          <BC.GridRow>
            <BC.GridColumn gridUnits={12} position="last" spacingTop="micro">
                <BC.Tabs>
                  {/* Tab1 - Profile */}
                  <BC.TabPanel title="Overview">
                    <Profile_B/>
                  </BC.TabPanel>

                  {/* Tab3 - Billings */}
                  <BC.TabPanel title="Payment Method">

                    <Billings_B/>
                  </BC.TabPanel>

                  {/* Tab5 - Subscriptions */}

                  <BC.TabPanel title="Transaction History">
                    <OrderHistory_C/>
                  </BC.TabPanel>

                  {/* Tab5 - Subscriptions */}
                  <BC.TabPanel title="Notifications & Settings">
                    <Subscriptions_B/>
                  </BC.TabPanel>


                </BC.Tabs>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Section>
        </div>
        <ProdFooter/>
      </div>
    )
  }
}
export default AccountDetails_B;
