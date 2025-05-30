import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../cc';

class Membership_B extends React.Component {

  render() {

    return (
      <div>

        <div className="bc-container">
          <BC.GridRow spacing="mini">
            <BC.GridColumn gridUnits={12} position="last">



              <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="base" spacing="small">
                <BC.Heading headingLevel={2} spacing="small" textColor="base">My Membership</BC.Heading>
                <BC.Divider spacing="small"/>
                <BC.GridRow>
                  <BC.GridColumn gridUnits={6}>
                    <BC.GridRow textAlign="center">
                      <BC.Box background="#197397" paddingSize="none">
                        <BC.Heading headingLevel={3} textColor="inverse">CURRENT PLAN</BC.Heading>
                      </BC.Box>
                    </BC.GridRow>
                    <BC.Box background="#1999cb" hasBorder={false} paddingSize="small" spacing="none">
                      <BC.GridRow spacingTop="micro" textAlign="center">
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
                    <BC.Box hasBorder={true} paddingSize="base" spacing="none">

                      <BC.GridRow spacing="base" textAlign="center">
                        <BC.GridRow spacing="mini">
                        <BC.Text spacing="mini" textSize="medium" textBold={true}>Credits Available:</BC.Text><BC.LetterSpace /><BC.Text textSize="medium">3</BC.Text></BC.GridRow>
                        <BC.GridRow>
                      <BC.Text spacing="mini" textBold={true}>Next Credit Date:</BC.Text><BC.LetterSpace /><BC.Text>10-31-2015</BC.Text></BC.GridRow>
                      <BC.GridRow>
                          <BC.Text textBold={true}>Member since:</BC.Text><BC.LetterSpace /><BC.Text> 8-22-2011</BC.Text></BC.GridRow>
                      </BC.GridRow>
                      <BC.GridRow spacing="base" textAlign="center">
                        <BC.Divider spacing="base" spacingTop="base"/>
                        <BC.Heading headingLevel={2}  spacing="micro" textBold={true}>You get 1 credit per month</BC.Heading>
                        <BC.Text  textBold={false} textSize="base">$14.95 per additional credit</BC.Text>
                      </BC.GridRow>
                    </BC.Box>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={6} spacingTop="base" position="last">

                    <BC.Paragraph textBold={true} spacing="micro" textSize="base">
                      This Plan Includes:
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

                    <BC.GridRow textAlign="left" spacingTop="medium">
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
          
            </BC.GridColumn>
          </BC.GridRow>

        </div>
      </div>
    )
  }
}

export default Membership_B;
