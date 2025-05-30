import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../cc';

class Profile_B extends React.Component {

  render() {

    return (
      <div>

        <div className="bc-container">

          <BC.GridRow spacingTop="micro">

            <BC.GridColumn gridUnits={12} position="last">


            <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="medium" spacing="medium">
              <BC.Heading headingLevel={2} spacing="base" textColor="base">My Membership</BC.Heading>
            <BC.Divider spacing="base"/>
              <BC.GridRow >
                <BC.GridColumn gridUnits={6}>
                  <BC.GridRow textAlign="center">
                    <BC.Box background="#197397" paddingSize="none">
                      <BC.Heading headingLevel={3} textColor="inverse">CURRENT PLAN</BC.Heading>
                    </BC.Box>
                  </BC.GridRow>
                  <BC.Box background="#1999cb" hasBorder={false} paddingSize="small" spacing="none">
                    <BC.GridRow textAlign="center">
                      <BC.GridColumn gridUnits={12}>

                        <BC.Heading headingLevel={2}  textColor="inverse" spacing="micro">
                          AudibleListener® Gold
                        </BC.Heading>
                        <BC.Text textBold={true} textColor="inverse" textSize="medium">$14.95 / month
                        </BC.Text><br/>
                        <BC.Text textBold={false} textColor="inverse" textSize="base">$14.95 each credit
                        </BC.Text>
                      </BC.GridColumn>
                    </BC.GridRow>

                  </BC.Box>
                  <BC.Box hasBorder={true} paddingSize="base" spacing="mini">

                    <BC.GridRow spacing="base" textAlign="center">
                      <BC.GridRow spacing="mini">
                      <BC.Text spacing="mini" textSize="medium" textBold={true}>Credits Available:</BC.Text><BC.LetterSpace /><BC.Text textSize="medium">3</BC.Text></BC.GridRow>
                      <BC.GridRow>
                    <BC.Text spacing="mini" textBold={true}>Next Credit Date:</BC.Text><BC.LetterSpace /><BC.Text>10-31-2015</BC.Text></BC.GridRow>
                    <BC.GridRow>
                        <BC.Text textBold={true}>Member since:</BC.Text><BC.LetterSpace /><BC.Text> 8-22-2011</BC.Text></BC.GridRow>
                    </BC.GridRow>
                    <BC.GridRow spacing="small" textAlign="center">
                      <BC.Divider spacing="base" spacingTop="base"/>
                      <BC.Heading headingLevel={2}  spacing="micro" textBold={true}>You get 1 credit per month</BC.Heading>
                      <BC.Text  textBold={false} textSize="base">$14.95 per additional credit</BC.Text>
                    </BC.GridRow>
                  </BC.Box>
                </BC.GridColumn>

                <BC.GridColumn gridUnits={6} position="last">

                  <BC.Paragraph textBold={true} spacing="micro" textSize="base">
                    Your Plan Includes:
                  </BC.Paragraph>
                  <BC.List listType="unordered" spacing="medium">
                   <BC.ListItem>
                      <BC.Paragraph textColor="secondary" spacing="micro">Special Promotion: $7.49 a month for the first 3 months, $14.95 a month thereafter.</BC.Paragraph>
                    </BC.ListItem>

                    <BC.ListItem >
                      <BC.Paragraph textColor="secondary" spacing="micro">Save 30% on all audiobooks purchased without credits. Roll over up to 6 credits.</BC.Paragraph>
                    </BC.ListItem>
                    <BC.ListItem >
                      <BC.Paragraph textColor="secondary" spacing="micro">Get a free audio subscription to The New York Times or The Wall Street Journal.</BC.Paragraph>
                    </BC.ListItem>
                    <BC.ListItem >

                      <BC.Paragraph textColor="secondary" spacing="micro">
                        The ability to rollover up to 6 credits at a time for as long as your membership is active.
                      </BC.Paragraph>
                    </BC.ListItem>
                  </BC.List>

                  <BC.GridRow textAlign="left">
                    <BC.GridColumn gridUnits={6} >
                      <BC.Button buttonType="secondary" inline={false} app={true} url={"/prototypes/brickcity/cancel/success-cancel"}>Cancel Membership</BC.Button>
                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={6} position="last">
                        <BC.Button buttonType="primary" inline={false} app={true} url={"/prototypes/brickcity/upgrade-membership_b"}>Switch Membership</BC.Button>
                        </BC.GridColumn>

                  </BC.GridRow>
                </BC.GridColumn>
              </BC.GridRow>
            </BC.Box>



              <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="medium" spacing="large">

                <BC.GridRow spacing="none">
                  <BC.Heading headingLevel={2} spacing="base" textColor="base">
                    My Profile
                  </BC.Heading>
                  <BC.Divider spacing="small"/>
                <BC.Paragraph spacing="medium" textColor="secondary">
                    Update your name, email address, and password
                  </BC.Paragraph>

                  <BC.GridColumn gridUnits={3}>
                    <BC.List listType="nostyle">
                      <BC.ListItem>
                        <BC.Heading headingLevel={3} spacing="small" textColor="base">
                          Display Name
                        </BC.Heading>
                      </BC.ListItem>
                      <BC.ListItem>
                        <BC.Text textColor="secondary">John Dough</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={3}>
                    <BC.List listType="nostyle">
                      <BC.ListItem>
                        <BC.Heading headingLevel={3} spacing="small" textColor="base">
                          Email Address
                        </BC.Heading>
                      </BC.ListItem>
                      <BC.ListItem>
                        <BC.Text textColor="secondary">johndough@audible.com</BC.Text>
                      </BC.ListItem>
                    </BC.List>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={3}>
                    <BC.List listType="nostyle">
                      <BC.ListItem>
                        <BC.Heading headingLevel={3} spacing="small" textColor="base">
                          Password
                        </BC.Heading>
                      </BC.ListItem>
                      <BC.ListItem>
                        <BC.Text textColor="secondary">••••••••</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={2} spacingTop="medium">

                    <BC.Link url={"/prototypes/brickcity/update-profile"}>Edit</BC.Link>

                  </BC.GridColumn>

                </BC.GridRow>

              </BC.Box>

              {/* Change Password */}
              {/*  <BC.Box backgroundColor="primary" spacing="medium" paddingSize="base" hasBorder={true}>
            <BC.GridRow spacing="none">

              <BC.Heading headingLevel={2}  textColor="secondary">
              Change Password
              </BC.Heading>
              <BC.Paragraph spacing="base" textColor="tertiary">
               On update, a confirmation will be sent to your email address.
              </BC.Paragraph>
            <BC.GridColumn gridUnits={4}>
            <BC.List listType="nostyle">
              <BC.ListItem>
            <BC.Heading headingLevel={3}  textColor="secondary">
            Current (click to reveal)
            </BC.Heading>
          </BC.ListItem>
              <BC.ListItem>
              <BC.TextInput inline={false} placeholder="••••••••" />
          </BC.ListItem>
          </BC.List>
            </BC.GridColumn>
            <BC.GridColumn gridUnits={4}>
            <BC.List listType="nostyle">
              <BC.ListItem>
            <BC.Heading headingLevel={3}  textColor="secondary">
            New Password
            </BC.Heading>
          </BC.ListItem>
              <BC.ListItem>
              <BC.TextInput inline={false} placeholder="" />
          </BC.ListItem>
          </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={4} position="last">
            <BC.List listType="nostyle">
              <BC.ListItem>
            <BC.Heading headingLevel={3}  textColor="secondary">
            Confirm Password
            </BC.Heading>
          </BC.ListItem>
              <BC.ListItem>
              <BC.TextInput inline={false} placeholder="" />
          </BC.ListItem>
          </BC.List>

          <BC.GridColumn gridUnits={6} spacingTop="base"  position="last"><BC.Button buttonType="primary">Update</BC.Button></BC.GridColumn>
            </BC.GridColumn>


          </BC.GridRow>


          </BC.Box>*/}


            </BC.GridColumn>


          </BC.GridRow>

        </div>

      </div>
    )
  }
}

export default Profile_B;
