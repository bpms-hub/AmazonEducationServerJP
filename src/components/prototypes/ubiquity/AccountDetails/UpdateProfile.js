import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class UpdateProfile extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          <BC.Breadcrumbs breadcrumbTrail={[
            {
              name: "Home",
              url: "/prototypes/brickcity"
            }, {
              name: "Account Details",
              url: "/prototypes/brickcity/account-details-b"
            }, {
              name: "Update Profile"
            }
          ]} spacing="small"/>

        <BC.Section spacingTop="base">

            <BC.GridRow>
              <BC.GridColumn gridUnits={12} position="last">

                      <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="base" spacing="base">

                        <BC.Heading headingLevel={2} spacing="small" textColor="base">
                          Update Your Name or Location</BC.Heading>
                        <BC.Divider spacing="small"/>

                <BC.Paragraph textColor="tertiary">If you wish to change the name or location associated with your Audible customer account, you may do so below.<br/>
                  Be sure to click the Save Changes button when you are done.</BC.Paragraph>




                <BC.Box hasBorder={false} paddingSize="none" spacing="micro">
                  <BC.GridRow spacing="base">
                  <BC.Text textBold={true}>Please note: </BC.Text>
                    <BC.Text textColor="secondary">

                    changes to your account settings on Audible will also change your settings on Amazon.com.</BC.Text>
                    </BC.GridRow>
                  <BC.GridRow spacing="base">

                    <BC.GridColumn gridUnits={4}>
                      <BC.Heading headingLevel={3}>Display Name</BC.Heading>
                      <BC.TextInput placeholder="John Dough"></BC.TextInput>

                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">

                    <BC.GridColumn gridUnits={4}>
                      <BC.Heading headingLevel={3}>Email Address</BC.Heading>
                      <BC.TextInput placeholder="johndough@audible.com"></BC.TextInput>

                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="medium">
                    <BC.GridColumn gridUnits={4}>
                      <BC.Heading headingLevel={3}>Password</BC.Heading>
                      <BC.TextInput placeholder="•••••••••"></BC.TextInput>

                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow>
                    <BC.GridColumn gridUnits={3}>
                      <BC.Button buttonType="primary" inline={true}>Save Changes</BC.Button>
                    </BC.GridColumn>
                  </BC.GridRow>

                </BC.Box>
</BC.Box>
              </BC.GridColumn>
            </BC.GridRow>

          </BC.Section>
        </div>
        <ProdFooter/>
      </div>
    )
  }
}
export default UpdateProfile;
