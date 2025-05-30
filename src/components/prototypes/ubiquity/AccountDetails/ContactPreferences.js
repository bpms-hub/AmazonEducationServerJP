import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';


class ContactPreferences extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
  <BC.Breadcrumbs breadcrumbTrail={[{name: "Account Details", url: "/prototypes/brickcity/account-details"},{name: "Contact Preferences"}]} spacing="small" />
          <BC.Section spacingTop="medium">
            <BC.Heading headingLevel={1} spacing="small">Your Contact Preferences</BC.Heading>
          <BC.GridColumn gridUnits={12}>
            <BC.Paragraph spacing="large">We want to stay in touch, but only in ways that you find helpful. Select from the options below and click Save when you are finished. Your changes will take effect at Audible.com only.</BC.Paragraph>
            </BC.GridColumn>
            {/*Account Infomrmation*/}
            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={12}>
                <BC.Heading headingLevel={3} spacing="base" textBold={false}>
                Email Preferences
                </BC.Heading>
                <BC.Divider/>
                <BC.GridColumn gridUnits={8}>
                  <BC.Heading headingLevel={4} spacing="mini">
                    Your email address:
                  </BC.Heading>
                  <BC.Heading headingLevel={4} spacing="mini">
                    Receive these emails at a different address:
                  </BC.Heading>

                </BC.GridColumn>
                <BC.GridColumn gridUnits={4} gridPull={3} position="last" spacingTop="base" spacing="large">
                  <BC.Paragraph textColor="tertiary">jondough@amazon.com</BC.Paragraph>

                  <BC.Paragraph textColor="tertiary"><BC.Link>Change</BC.Link></BC.Paragraph>

                </BC.GridColumn>
  </BC.GridColumn>



  </BC.GridRow>
                {/*Audible marketing emails*/}
                <BC.GridRow  spacing="medium">
                  <BC.Heading headingLevel={3} spacing="base" textBold={false}>
                    Audible Marketing Emails and Newsletters
                  </BC.Heading>
      <BC.Divider/>
                </BC.GridRow>

                <BC.GridRow spacing="base">
                  <BC.Box backgroundColor="secondary" paddingSize="small">
                    <BC.Paragraph spacing="none" textColor="secondary">Note: Even if you choose not to receive some marketing emails from us, you will still receive our transactional emails, such as messages related to your orders, updates about products or services you have purchased from us, or information about your account.
                      <BC.LetterSpace size="small" /><BC.Link>Learn More</BC.Link>
                    </BC.Paragraph>
                  </BC.Box>
                </BC.GridRow>


                <BC.GridRow>
                  <BC.GridColumn gridUnits={10}>
                    <BC.Heading headingLevel={4} spacing="none" textColor="secondary">
                    <BC.RadioButton />Send me emails from the following categories
                    </BC.Heading>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.GridRow>
                  <BC.GridColumn gridUnits={10} gridPush={1}>
                    <BC.Heading headingLevel={4} spacing="mini" textColor="secondary">
                    <BC.Checkbox />  Credit Alert
                    </BC.Heading>
                    <BC.Paragraph spacing="none" textColor="tertiary">
                    Get a note saying your monthly credit(s) are available (and what better news than that, right?)
                    </BC.Paragraph>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.GridRow>
                  <BC.GridColumn gridUnits={10} gridPush={1}>
                    <BC.Heading headingLevel={4} spacing="mini" textColor="secondary">
                    <BC.Checkbox />  Editors' Picks & Customer Favorites
                    </BC.Heading>
                    <BC.Paragraph spacing="none" textColor="tertiary">
                    Stay in touch with editor updates on new and upcoming releases and member reviews in your favorite category.
                    </BC.Paragraph>

                  </BC.GridColumn>

                </BC.GridRow>


                <BC.GridRow>
                  <BC.GridColumn gridUnits={10} gridPush={1}>
                    <BC.Heading headingLevel={4} spacing="mini" textColor="secondary">
                    <BC.Checkbox />  Sales & Offers
                    </BC.Heading>
                    <BC.Paragraph spacing="none" textColor="tertiary">
                    Be the first to know about sales and special offers.
                    </BC.Paragraph>

                  </BC.GridColumn>

                </BC.GridRow>


                <BC.GridRow>
                  <BC.GridColumn gridUnits={10} gridPush={1}>
                    <BC.Heading headingLevel={4} spacing="mini" textColor="secondary">
                    <BC.Checkbox />  User Research Study Announcements
                    </BC.Heading>
                    <BC.Paragraph spacing="none" textColor="tertiary">
            We will send occasional emails letting you know about Audible user research studies you can participate in and earn money.
                    </BC.Paragraph>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.GridRow>
                  <BC.GridColumn gridUnits={10} gridPush={1}>
                    <BC.Heading headingLevel={4} spacing="mini" textColor="secondary">
                    <BC.Checkbox /> Audible News & Announcements
                    </BC.Heading>
                    <BC.Paragraph spacing="none" textColor="tertiary">
          We'll send occasional emails letting you know about site improvements or changes.
                    </BC.Paragraph>

                  </BC.GridColumn>

                </BC.GridRow>

                <BC.GridRow>
                  <BC.GridColumn gridUnits={10} gridPush={1}>
                    <BC.Heading headingLevel={4} spacing="mini" textColor="secondary">
                    <BC.Checkbox /> Rate & Review
                    </BC.Heading>
                    <BC.Paragraph spacing="none" textColor="tertiary">
      We'll drop you a note asking what you thought of your most recent purchase. Most members find reviews really helpful in deciding what to listen to next, let them know what you thought!
                    </BC.Paragraph>

                  </BC.GridColumn>

                </BC.GridRow>



  <BC.GridRow>
            <BC.GridColumn gridUnits={10} gridPush={1}>
              <BC.Heading headingLevel={4} spacing="mini" textColor="secondary">
              <BC.Checkbox /> Hear & Now: New Releases Newsletter
              </BC.Heading>
              <BC.Paragraph spacing="none" textColor="tertiary">
We'll keep you updated with the best new books each week.
              </BC.Paragraph>

            </BC.GridColumn>

          </BC.GridRow>


          <BC.GridRow>
                    <BC.GridColumn gridUnits={10} gridPush={1}>
                      <BC.Heading headingLevel={4} spacing="mini" textColor="secondary">
                      <BC.Checkbox /> OneBook
                      </BC.Heading>
                      <BC.Paragraph spacing="none" textColor="tertiary">
  Receive audiobook recommendations from your friends.
                      </BC.Paragraph>

                    </BC.GridColumn>

                  </BC.GridRow>

                  <BC.GridRow>
                            <BC.GridColumn gridUnits={10} gridPush={1}>
                              <BC.Heading headingLevel={4} spacing="mini" textColor="secondary">
                              <BC.Checkbox /> Author, Narrator, & Series Alerts
                              </BC.Heading>
                              <BC.Paragraph spacing="none" textColor="tertiary">
          Personalized emails with recommendations based on your past purchases.
                              </BC.Paragraph>

                            </BC.GridColumn>

                          </BC.GridRow>

                          <BC.GridRow spacing="large">
                            <BC.GridColumn gridUnits={10}>
                              <BC.Heading headingLevel={4} spacing="none" textColor="secondary">
                              <BC.RadioButton />Do not send me marketing email
                              </BC.Heading>

                            </BC.GridColumn>

                          </BC.GridRow>

                          <BC.GridRow  spacing="medium">
                            <BC.Heading headingLevel={3} spacing="base" textBold={false}>
                            Other Contact Options
                            </BC.Heading>
                    <BC.Divider/>

                            <BC.GridColumn gridUnits={9} >
                              <BC.Heading headingLevel={4} spacing="mini">
                                <BC.Checkbox />  Send me marketing offers through mail.
                              </BC.Heading>
                              <BC.Heading headingLevel={4} spacing="mini">
                              <BC.Checkbox />  Send me marketing offers through phone.
                              </BC.Heading>

                            </BC.GridColumn>



                              </BC.GridRow>

          </BC.Section>
        </div>
        <ProdFooter/>
      </div>
    )
  }
}
export default ContactPreferences;
