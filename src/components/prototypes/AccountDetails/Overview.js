import React from 'react';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import AccountDetailsLayout from './AccountDetailsLayout';

class Overview extends React.Component {
  render() {

    return (
      <BC.GridRow spacingTop="micro">
        <BC.GridColumn gridUnits={12} position="last">
          <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="medium" spacing="medium">
            <BC.Heading headingLevel={2} spacing="base" textColor="base">Membership</BC.Heading>
            <BC.Divider spacing="base"/>      
            <BC.GridRow >
              <BC.GridColumn gridUnits={6}>

                <BC.Box background="#1999cb" hasBorder={false} paddingSize="small" spacing="none">
                  <BC.GridRow textAlign="center">
                    <BC.GridColumn gridUnits={12}>
                      <BC.GridRow spacing="micro">
                        <BC.Text textSize="large"  textColor="inverse" spacing="base" textBold={true}>GOLD MONTHLY</BC.Text>
                      </BC.GridRow>
                      <BC.GridRow spacing="micro">
                        <BC.Text textSize="base" textColor="inverse">Member since January 12, 2015</BC.Text>
                      </BC.GridRow>
                      {/*
                      <BC.Text textBold={true} textColor="inverse" textSize="medium">$14.95 / month</BC.Text>
                      <br/>      
                      <BC.Text textBold={false} textColor="inverse" textSize="base">$14.95 each credit</BC.Text>
                      */}
                    </BC.GridColumn>
                  </BC.GridRow>

                </BC.Box>
                <BC.Box hasBorder={false} background="#F9F9F9" paddingSize="base" spacing="mini">

                  <BC.GridRow spacing="base" textAlign="center">
                    <BC.GridRow spacing="micro">
                      <BC.Text textSize="medium" textBold={true}>Credits:</BC.Text>
                      <BC.LetterSpace size="micro"/>      
                      <BC.Text textSize="medium">0</BC.Text>
                    </BC.GridRow>
                    {/*
                    <BC.GridRow>
                      <BC.Text spacing="mini" textSize="base" textBold={true}>Coupon Balance:</BC.Text>
                      <BC.LetterSpace />      
                      <BC.Text>4</BC.Text>
                    </BC.GridRow>
                    */}
                    <BC.GridRow>
                      <BC.Text spacing="mini" textSize="base" textBold={true}>Next Credit:</BC.Text>
                      <BC.LetterSpace size="micro"/>      
                      <BC.Text>2-15-2016</BC.Text>
                    </BC.GridRow>
                  </BC.GridRow>
                  <BC.GridRow spacing="none" textAlign="center">
                    <BC.Divider spacing="base" spacingTop="base"/>      
                    <BC.Text  textBold={false} textSize="base">$14.95 per month</BC.Text>
                    <BC.LetterSpace />      
                    <BC.Text textColor="tertiary">|</BC.Text>
                    <BC.LetterSpace />      

                    <BC.Text  textBold={false} textSize="base">1 credit per month</BC.Text>

                  </BC.GridRow>
                </BC.Box>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={6} position="last">

                <BC.Paragraph textBold={true} spacing="micro" textSize="base">Your Plan Includes:</BC.Paragraph>
                <BC.List listType="unordered" spacing="medium">
                  <BC.ListItem>
                    <BC.Paragraph textColor="secondary" spacing="micro">
                      Special Promotion: $7.49 a month for the first 3 months, $14.95 a month thereafter.
                    </BC.Paragraph>
                  </BC.ListItem>

                  <BC.ListItem >
                    <BC.Paragraph textColor="secondary" spacing="micro">
                      Save 30% on all audiobooks purchased without credits. Roll over up to 6 credits.
                    </BC.Paragraph>
                  </BC.ListItem>
                  <BC.ListItem >
                    <BC.Paragraph textColor="secondary" spacing="micro">
                      Get a free audio subscription to The New York Times or The Wall Street Journal.
                    </BC.Paragraph>
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
                    <BC.Button buttonType="primary" inline={false} app={true} url={"/prototypes/brickcity/account-details/switch-membership"}>Switch Membership</BC.Button>
                  </BC.GridColumn>

                </BC.GridRow>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Box>

          <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="medium" spacing="large">

            <BC.GridRow spacing="none">
              <BC.Heading headingLevel={2} spacing="base" textColor="base">Profile</BC.Heading>
              <BC.Divider spacing="small"/>      
              <BC.Paragraph spacing="medium" textColor="secondary"></BC.Paragraph>

              <BC.GridColumn gridUnits={3}>
                <BC.List listType="nostyle">
                  <BC.ListItem>
                    <BC.Heading headingLevel={3} spacing="small" textColor="base">Display Name</BC.Heading>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Text textColor="secondary">John Dough</BC.Text>
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={3}>
                <BC.List listType="nostyle">
                  <BC.ListItem>
                    <BC.Heading headingLevel={3} spacing="small" textColor="base">Email Address</BC.Heading>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Text textColor="secondary">johndough@audible.com</BC.Text>
                  </BC.ListItem>
                </BC.List>

              </BC.GridColumn>
              <BC.GridColumn gridUnits={3}>
                <BC.List listType="nostyle">
                  <BC.ListItem>
                    <BC.Heading headingLevel={3} spacing="small" textColor="base">Password</BC.Heading>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Text textColor="secondary">••••••••</BC.Text>
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={2} spacingTop="medium">
                <BC.Link>Edit</BC.Link>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Box>
        </BC.GridColumn>
      </BC.GridRow>
    )
  }
}

export default Overview;
