import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../cc';

class Subscriptions_B extends React.Component {

  render() {

    return (
      <div>

        <div className="bc-container">

          <BC.GridRow spacingTop="micro">

            <BC.GridColumn gridUnits={12} position="last">

              {/* Change Password */}
              <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="medium" spacing="medium">
                <BC.GridRow>

                <BC.Heading headingLevel={2} spacing="base" textColor="base">
                Notifications
                </BC.Heading>
                <BC.Divider spacing="small"/>
              <BC.Paragraph textColor="secondary">
                  Update your name, email address, and password
                </BC.Paragraph>

                  <BC.GridRow spacing="base">
                    <BC.Box backgroundColor="secondary" paddingSize="small">
                      <BC.Paragraph spacing="none" textColor="secondary">Note: Even if you choose not to receive some marketing emails from us, you will still receive our transactional emails, such as messages related to your orders, updates about products or services you have purchased from us, or information about your account.
                        <BC.LetterSpace size="small"/>
                        <BC.Link>Learn More</BC.Link>
                      </BC.Paragraph>
                    </BC.Box>
                  </BC.GridRow>

                  <BC.GridRow spacing="small">
                    <BC.GridColumn gridUnits={10}>
                      <BC.Heading headingLevel={3} hasBold={true} spacing="mini">
                        <BC.RadioButton checked="true"/> Send me emails from the following categories
                      </BC.Heading>
                    </BC.GridColumn>
                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>


                            <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                        <BC.LetterSpace size="mini"/> Credit Alert</BC.Heading>
                      <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
                        Get a note saying your monthly credit(s) are available (and what better news than that, right?)
                      </BC.Paragraph>
                    </BC.GridColumn>
                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>



                    <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                <BC.LetterSpace size="mini"/> Editors' Picks & Customer Favorites</BC.Heading>
              <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
                Stay in touch with editor updates on new and upcoming releases and member reviews in your favorite category.
              </BC.Paragraph>


                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>

                    <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                <BC.LetterSpace size="mini"/> Sales & Offers</BC.Heading>
              <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
              Be the first to know about sales and special offers.
              </BC.Paragraph>



                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>


                    <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                <BC.LetterSpace size="mini"/> User Research Study Announcements</BC.Heading>
              <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
                We will send occasional emails letting you know about Audible user research studies you can participate in and earn money.
              </BC.Paragraph>


                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>

                    <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                <BC.LetterSpace size="mini"/> Audible News & Announcements</BC.Heading>
              <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
              We'll send occasional emails letting you know about site improvements or changes.
              </BC.Paragraph>


                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>

                    <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                <BC.LetterSpace size="mini"/> Rate & Review</BC.Heading>
              <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
                What you thought of your most recent purchase? Most members find reviews really helpful in deciding what to listen to next.
              </BC.Paragraph>



                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>

                    <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                <BC.LetterSpace size="mini"/> Hear & Now: New Releases Newsletter</BC.Heading>
              <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
                We'll keep you updated with the best new books each week.
              </BC.Paragraph>


                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>

                    <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                  <BC.LetterSpace size="mini"/> OneBook</BC.Heading>
                  <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
                  Receive audiobook recommendations from your friends.
                  </BC.Paragraph>



                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>

                    <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                  <BC.LetterSpace size="mini"/> Author, Narrator, & Series Alerts</BC.Heading>
                  <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
                  Personalized emails with recommendations based on your past purchases.
                  </BC.Paragraph>



                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={12}>

                    <BC.Heading headingLevel={3} hasBold={true}>   <BC.LetterSpace size="medium"/> <BC.Checkbox checked="true"/>
                  <BC.LetterSpace size="mini"/> Daily Deal</BC.Heading>
                  <BC.Paragraph spacing="none"  textColor="secondary"><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="extra-large"/><BC.LetterSpace size="small"/>
                  One great book on sale every day at a super-low price.
                  </BC.Paragraph>



                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={10}>
                      <BC.Heading headingLevel={3} hasBold={true} spacing="base">
                        <BC.RadioButton checked="true"/> Do not send me marketing email
                      </BC.Heading>
                    </BC.GridColumn>
                  </BC.GridRow>


                  <BC.GridRow spacing="large">
                    <BC.Paragraph spacing="base" textColor="secondary">
                      Other Contact Options
                    </BC.Paragraph>

                    <BC.GridColumn gridUnits={9}>
                    <BC.GridRow spacing="small">
                      <BC.GridColumn gridUnits={10}>
                        <BC.Heading headingLevel={3} hasBold={true} spacing="micro">
                          <BC.Checkbox checked="true"/><BC.LetterSpace size="mini"/> Send me marketing offers through mail.
                        </BC.Heading>
                      </BC.GridColumn>
                    </BC.GridRow>

                        <BC.GridRow>

                    <BC.Heading headingLevel={3} hasBold={true} spacing="none">
                      <BC.Checkbox checked="true"/><BC.LetterSpace size="mini"/> Send me marketing offers through phone.
                    </BC.Heading>


                    </BC.GridRow>
                    </BC.GridColumn>

                  </BC.GridRow>


                  <BC.GridColumn gridUnits={2}>
                    <BC.Button buttonType="primary" spacing="none">Update</BC.Button>
                  </BC.GridColumn>


                </BC.GridRow>

              </BC.Box>


              <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="medium" spacing="medium">

                {/*Profile & Privacy */}
                <BC.GridRow spacing="small">
                  <BC.Heading headingLevel={2} spacing="small" textColor="base">
                    Privacy Preferences
                  </BC.Heading>
                  <BC.Divider spacing="small"/>
                </BC.GridRow>

                <BC.GridRow spacing="mini" spacingTop="small">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel={3} textColor="base">
                      Display my location to other Audible members
                    </BC.Heading>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={true}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

              <BC.GridRow  spacingTop="mini">
                  <BC.GridColumn gridUnits={7}>
                    <BC.Heading headingLevel={3}  textColor="base">
                      Share my ratings with other Audible members
                    </BC.Heading>
                    <BC.Paragraph textColor="secondary">
                      This will allow other users to see each book that you have rated in your library
                    </BC.Paragraph>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

              <BC.GridRow spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel={3}  textColor="base">
                      Display my listening stats to other Audible members
                    </BC.Heading>
                    <BC.Paragraph textColor="secondary">
                      Join date, membership plan, number of books
                    </BC.Paragraph>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={true}/>
                  </BC.GridColumn>
                </BC.GridRow>
                <BC.Divider />


              <BC.GridRow spacing="micro" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel={3} textColor="base">
                      Let me show up in suggestion to other Audible members
                    </BC.Heading>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="micro" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel={3} textColor="base">
                      Hide adult content in searches
                    </BC.Heading>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

                <BC.GridRow spacing="micro" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel={3} textColor="base">
                      Share my likes on Audible.com
                    </BC.Heading>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

              <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel={3} textColor="base">
                      Get notified of reviews posted by people you follow
                    </BC.Heading>

                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={false}/>
                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Divider/>

              <BC.GridRow  spacingTop="mini">
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel={3} textColor="base">
                      Software verification
                    </BC.Heading>

                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                    <BC.ToggleSwitch checked={true}/>

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

export default Subscriptions_B;
