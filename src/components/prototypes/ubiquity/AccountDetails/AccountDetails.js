import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';


class AccountDetails extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
      

          <BC.Section spacingTop="medium">
            <BC.Heading spacing="large">Account Details</BC.Heading>

            {/*Account Infomrmation*/}
            <BC.GridRow spacing="medium">
            <BC.Heading headingLevel={2} spacing="base" textBold={false}>
              My Membership
            </BC.Heading>

<BC.Box backgroundColor="secondary" spacing="large" paddingSize="medium">

<BC.GridRow spacing="none">


<BC.GridColumn gridUnits={6} spacing="base">

<BC.GridColumn gridUnits={4}  spacing="none">
  <BC.Heading headingLevel={3} spacing="micro">
    Member Since:
  </BC.Heading>
  </BC.GridColumn>
<BC.GridColumn gridUnits={4}  spacing="none">
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





<BC.GridColumn gridUnits={6} position="last"  spacing="micro">
<BC.Heading headingLevel={3} spacing="base">Membership Plan Description: <br />AudibleListener® Discount Gold Membership - Monthly:</BC.Heading>

<BC.List listType="unordered">
  <BC.ListItem spacing="none">
  <BC.Paragraph spacing="micro">Special Promotion: $7.49 a month for the first 3 months, $14.95 a month thereafter.</BC.Paragraph>
  </BC.ListItem>
  <BC.ListItem spacing="none">
  <BC.Paragraph spacing="micro">Receive 1 <BC.Link>credit</BC.Link> each month.</BC.Paragraph>
  </BC.ListItem>
  <BC.ListItem spacing="none">
  <BC.Paragraph spacing="micro">Save 30% on all audiobooks purchased without credits. Roll over up to 6 credits.</BC.Paragraph>
  </BC.ListItem>
  <BC.ListItem spacing="none">
  <BC.Paragraph spacing="micro">Get a free audio subscription to The New York Times or The Wall Street Journal.</BC.Paragraph>
  </BC.ListItem>
</BC.List>
</BC.GridColumn>

</BC.GridRow>
</BC.Box>

              <BC.GridColumn gridUnits={6} >


              {/* <BC.GridRow spacing="large">
                  <BC.Box backgroundColor="secondary" paddingSize="small">
                    <BC.Paragraph spacing="none" textColor="secondary">Want to save 30% on all audiobook purchases, plus get audiobooks for as little as $9.56 each?
                      <BC.LetterSpace size="small" /><BC.Link>Learn More</BC.Link>
                    </BC.Paragraph>
                  </BC.Box>
                </BC.GridRow> */}

                {/*Account Settings*/}
                <BC.GridRow  >
                  <BC.Heading headingLevel={2} spacing="base">
                    Account Settings
                  </BC.Heading>
                  <BC.Divider/>
                </BC.GridRow>

                <BC.GridRow>
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel="4" spacing="none" textColor="base">
                      Change your account settings
                    </BC.Heading>
                    <BC.Paragraph spacing="base" textColor="secondary">
                      Update your name, email address, password or mobile number
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" spacingTop="base" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/account-settings">Change</BC.Link>

                  </BC.GridColumn>
                </BC.GridRow>

                <BC.GridRow>
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel="4" spacing="none" textColor="base">
                      Switch your membership
                    </BC.Heading>
                    <BC.Paragraph spacing="none" textColor="secondary">
                      Meet your ideal listening needs by picking from one of our scalable membership plans
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" spacingTop="base" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/switch-membership">Switch</BC.Link>

                  </BC.GridColumn>
                </BC.GridRow>

                <BC.GridRow spacing="large">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel="4" spacing="none" textColor="base">
                      Cancel your membership
                    </BC.Heading>
                    <BC.Paragraph spacing="none" textColor="secondary">
                      You&#39;ll never lose the books you purchased, but if you wish, you can temporarily halt monthly payments or stop payments all together.
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" spacingTop="base" textAlign="right">
                    <BC.Link app={true} url={"/prototypes/brickcity/cancel"}>Cancel</BC.Link>

                  </BC.GridColumn>
                </BC.GridRow>

                {/*Billing*/}
                <BC.GridRow>
                  <BC.Heading headingLevel={2} spacing="base" textColor="base">
                    Billing
                  </BC.Heading>
                  <BC.Divider/>
                </BC.GridRow>

                <BC.GridRow spacing="large">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel="4" spacing="none" textColor="base">
                      Payment Information
                    </BC.Heading>
                    <BC.Paragraph spacing="none" textColor="secondary">
                      Update your payment method, billing address or phone number
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" spacingTop="base" textAlign="right">
                    <BC.Link url={"/prototypes/brickcity/payment-information"}>Edit</BC.Link>

                  </BC.GridColumn>
                </BC.GridRow>

                {/*Gifts*/}
                <BC.GridRow>
                  <BC.Heading headingLevel={2} spacing="mini" textColor="base">
                    Gifts
                  </BC.Heading>
                  <BC.Divider/>
                </BC.GridRow>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Received a gift?
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/gift-center">Redeem</BC.Link>

                  </BC.GridColumn>
                </BC.GridRow>

                <BC.GridRow spacing="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      All gifts I have given
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/gifts-given">Edit</BC.Link>

                  </BC.GridColumn>
                </BC.GridRow>

                <BC.GridRow spacing="large">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      All gifts I have received
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/gifts-received">Edit</BC.Link>

                  </BC.GridColumn>
                </BC.GridRow>

                {/*Transactions & Returns*/}
                <BC.GridRow>
                  <BC.Heading headingLevel={2} spacing="mini" spacingTop="mini" textColor="base">
                    Transactions and Returns
                  </BC.Heading>
                  <BC.Divider/>
                </BC.GridRow>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Returns and past orders
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/audio-purchase-history">View</BC.Link>

                  </BC.GridColumn>
                </BC.GridRow>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Membership charges
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/membership-history">View</BC.Link>

                  </BC.GridColumn>
                </BC.GridRow>

                <BC.GridRow spacingTop="extra-large"></BC.GridRow>

              </BC.GridColumn>

              {/* Right Column Account Information/Profile&Privacy */}
              <BC.GridColumn gridUnits={6} position="last">

                {/*Account Information*/}
                <BC.GridRow spacing="base">
                  <BC.Heading headingLevel={2} spacing="base" textColor="base">
                    Preferences
                  </BC.Heading>
                  <BC.Divider/>
                </BC.GridRow>

                <BC.GridRow spacing="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Email preferences
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/contact-preferences">Edit</BC.Link>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Subscriptions
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/subscription-preferences">Edit</BC.Link>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Daily Deal email subscription
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/daily-deal">Edit</BC.Link>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Software Verification
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={true}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="large" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Share my likes and reviews on Audible.com
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>

                  </BC.GridColumn>

                </BC.GridRow>

                {/*Profile & Privacy */}
                <BC.GridRow spacing="mini" >
                  <BC.Heading headingLevel={2} spacing="base" textColor="base">
                    Profile & Privacy
                  </BC.Heading>
                  <BC.Divider/>
                </BC.GridRow>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      My Profile
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.Link url="/prototypes/brickcity/update-profile">Edit</BC.Link>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Display my location to other Audible members
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={true}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Share my ratings with other Audible members
                    </BC.Paragraph>
                    <BC.Paragraph spacing="none" textColor="secondary">
                      This will allow other users to see each book that you have rated in your library
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Display my listening stats to other Audible members
                    </BC.Paragraph>
                    <BC.Paragraph spacing="none" textColor="secondary">
                      Join date, membership plan, number of books
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={true}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>



                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Let me show up in suggestion to other Audible members
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Hide adult content in searches
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>


                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Share my likes on Audible.com
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Paragraph spacing="none" textColor="base">
                      Get notified of reviews posted by people you follow
                    </BC.Paragraph>

                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>
                  </BC.GridColumn>
                </BC.GridRow>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Section>
        </div>
        <ProdFooter/>
      </div>
    )
  }
}
export default AccountDetails;
