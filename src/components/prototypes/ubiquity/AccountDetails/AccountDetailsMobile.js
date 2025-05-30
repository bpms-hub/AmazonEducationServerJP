import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

{
/*
       TO DO:

      •paddingSize spacing on box √
      •Use spacing arrangement, not spacingTop √

      */}
class AccountDetailsMobile extends React.Component {
  render() {
    return (
      <div>
        <ProdHeaderMobile/>
        <div className="bc-container">

          <BC.Section spacingTop="medium">
            <CC.MobilePageTitle textAlign="center" first={true}><BC.Heading headingLevel={2}>Account Details</BC.Heading></CC.MobilePageTitle>


            {/*Account Infomrmation*/}
            <BC.GridRow spacing="medium">
            <BC.Box backgroundColor="secondary" paddingSize="base">
                <BC.Heading headingLevel={2} spacingTop="base">Account Information</BC.Heading>
              <BC.GridColumn gridUnits={12} spacing="medium">
              <BC.GridColumn gridUnits={4} spacingTop="medium" spacing="none">
                <BC.Heading headingLevel={3} spacing="micro">
                  Member Since:
                </BC.Heading>
                </BC.GridColumn>
              <BC.GridColumn gridUnits={4} spacingTop="medium" spacing="none">
                <BC.Paragraph spacing="micro" textColor="base">08-02-2011</BC.Paragraph>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} spacing="none">
                <BC.Heading spacing="micro" headingLevel={3}>
                  Membership Plan:
                </BC.Heading>
                </BC.GridColumn>
              <BC.GridColumn gridUnits={4} spacing="none">
                <BC.Paragraph spacing="micro" textColor="base">AudibleListener® Gold</BC.Paragraph>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={4} spacing="none">
                <BC.Heading spacing="micro" headingLevel={3} >
                  Next Credit Date:
                </BC.Heading>
                </BC.GridColumn>
              <BC.GridColumn gridUnits={4} spacing="none">
                <BC.Paragraph spacing="micro" textColor="base">10-05-2015</BC.Paragraph>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} spacing="none">
                <BC.Heading spacing="micro" headingLevel={3} >
                  Audiobook Credits:
                </BC.Heading>
                </BC.GridColumn>
              <BC.GridColumn gridUnits={4} spacing="none">
                <BC.Paragraph spacing="micro" textColor="base">1</BC.Paragraph>
              </BC.GridColumn>
              </BC.GridColumn>


              <BC.GridRow spacing="large">
                <BC.Heading headingLevel={2} spacingTop="base">My Details</BC.Heading>
                  <BC.GridColumn gridUnits={12} spacing="medium">
                  <BC.GridColumn gridUnits={4} spacingTop="medium" spacing="none">
                    <BC.Heading headingLevel={3} spacing="micro">
                      Name:
                    </BC.Heading>
                    </BC.GridColumn>
                  <BC.GridColumn gridUnits={4} spacingTop="medium" spacing="none">
                    <BC.Paragraph spacing="micro" textColor="base">John Dough</BC.Paragraph>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={4} spacing="none">
                    <BC.Heading spacing="micro" headingLevel={3}>
                      Phone Number:
                    </BC.Heading>
                    </BC.GridColumn>
                  <BC.GridColumn gridUnits={4} spacing="none">
                    <BC.Paragraph spacing="micro" textColor="base">1(234)567-8901</BC.Paragraph>
                  </BC.GridColumn>


                  <BC.GridColumn gridUnits={4} spacing="none">
                    <BC.Heading spacing="micro" headingLevel={3} >
                      Email Address:
                    </BC.Heading>
                    </BC.GridColumn>
                  <BC.GridColumn gridUnits={4} spacing="none">
                    <BC.Paragraph spacing="micro" textColor="base">johndough@audible.com</BC.Paragraph>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={4} spacing="none">
                    <BC.Heading spacing="micro" headingLevel={3} >
                      Username
                    </BC.Heading>
                    </BC.GridColumn>
                  <BC.GridColumn gridUnits={4} spacing="none">
                    <BC.Paragraph spacing="micro" textColor="base">johndough</BC.Paragraph>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={4} spacing="none">
                    <BC.Heading spacing="micro" headingLevel={3} >
                      Password
                    </BC.Heading>
                    </BC.GridColumn>
                  <BC.GridColumn gridUnits={6} spacing="none">
                    <BC.Paragraph spacing="micro" textColor="base">********* <BC.Link>Change Password</BC.Link>)</BC.Paragraph>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={4} spacing="none">
                    <BC.Heading spacing="micro" headingLevel={3} >
                      Adult Content Filter:
                    </BC.Heading>
                    </BC.GridColumn>
                  <BC.GridColumn gridUnits={4} spacing="none">

                    <BC.ToggleSwitch checked={false}/>
                  </BC.GridColumn>
                  </BC.GridColumn>
              </BC.GridRow>
            </BC.Box>


<BC.GridRow spacing="large">
  <BC.GridColumn gridUnits={12}>

                      <BC.List listType="nostyle" spacing="large">
                        <BC.ListItem>
                          <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/payment-information"} hasTopBorder={this.props.hideCategories ? true : null}>Manage Payment Options</CC.MobileLink>
                        </BC.ListItem>
</BC.List>
  </BC.GridColumn>

</BC.GridRow>


</BC.GridRow>
          </BC.Section>
        </div>
        <ProdFooterMobile/>
      </div>
    )
  }
}
export default AccountDetailsMobile;
