import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import classNames from 'classnames';

class ContactUs2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeElement: "step1"
    }
  }

  handleSwitch(element) {
      this.setState({
        activeElement: element
      });
  }

  render() {

    let fadeStep2 = ['bc-contact-step2'];
    let fadeStep3 = ['bc-contact-step3'];
    let fadeStep4 = ['bc-contact-step4'];
    if(this.state.activeElement === "step2") fadeStep2.push('bc-contact-step2-active');
    if(this.state.activeElement === "step3") fadeStep2.push('bc-contact-step2-active'), fadeStep3.push('bc-contact-step3-active');
    if(this.state.activeElement === "step4") fadeStep2.push('bc-contact-step2-active'), fadeStep3.push('bc-contact-step3-active'), fadeStep4.push('bc-contact-step4-active');

    return (

      <div>
        <ProdHeader />

        <div className="bc-container">
            <BC.GridRow spacingTop="medium" spacing="base">
              <BC.GridColumn gridUnits={8} spacing="base">
                <BC.Heading headingLevel={1} spacing="mini">Customer Services are available 24/7</BC.Heading>
                <BC.Paragraph>Answer a few questions about the issue you are having and we&#39;ll get someone to help.</BC.Paragraph>
                <BC.Divider spacing="base"/>

                  <BC.Section>
                    <BC.GridRow>
                      <BC.GridColumn gridUnits={1}>
                        <CC.Step active={true}>1</CC.Step>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={9} gridPull={2} position="last" spacing= "medium">
                      <BC.Heading spacing="base" headingLevel={2}> What can we help you with?</BC.Heading>
                        <BC.List listType="nostyle" listDirection="horizontal" spacing="base">
                        <BC.GridColumn gridUnits={4}>
                          <BC.ListItem>
                            <div onClick={this.handleSwitch.bind(this, "step2")}>
                              <BC.ToggleButton activeText="My Account" inactiveText="My Account"/>
                            </div>
                          </BC.ListItem>
                          </BC.GridColumn>
                          <BC.GridColumn gridUnits={4}>
                          <BC.ListItem>
                            <div onClick={this.handleSwitch.bind(this, "step2")}>
                              <BC.ToggleButton activeText="Tech Support" inactiveText="Tech Support"/>
                            </div>
                          </BC.ListItem>
                          </BC.GridColumn>
                          <BC.GridColumn gridUnits={4} position="last">
                          <BC.ListItem>
                            <div onClick={this.handleSwitch.bind(this, "step2")}>
                              <BC.ToggleButton activeText="Something Else" inactiveText="Something Else"/>
                            </div>
                          </BC.ListItem>
                          </BC.GridColumn>
                        </BC.List>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </BC.Section>

                  <BC.Section cssClass={classNames(fadeStep2)}>
                    <BC.GridRow>
                      <BC.GridColumn gridUnits={1}>
                        <CC.Step active={this.state.activeElement === "step2" ? true : false}>2</CC.Step>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={9} gridPull={2} position="last">
                      <BC.Heading headingLevel={2} spacing="base">Tell us more:</BC.Heading>
                        <BC.Dropdown spacing="small" onChange={this.handleSwitch.bind(this, "step3")} disabled={this.state.activeElement === "step1" ? true : false}>
                          <BC.DropdownOption>Please make a selection</BC.DropdownOption>
                          <BC.DropdownOption>Login Assistance</BC.DropdownOption>
                          <BC.DropdownOption>Return or refund</BC.DropdownOption>
                          <BC.DropdownOption>Change or cancel my membership</BC.DropdownOption>
                          <BC.DropdownOption>Update account information</BC.DropdownOption>
                          <BC.DropdownOption>Pause Membership</BC.DropdownOption>
                          <BC.DropdownOption>Payment issues</BC.DropdownOption>
                          <BC.DropdownOption>Order/refund status</BC.DropdownOption>
                        </BC.Dropdown>
                        </BC.GridColumn>
                      </BC.GridRow>
                    </BC.Section>

                    <BC.Section cssClass={classNames(fadeStep3)}>
                    <BC.GridRow>
                      <BC.GridColumn gridUnits={9} gridPull={2} gridPush={1}>
                        <BC.Dropdown spacing="medium" onChange={this.handleSwitch.bind(this, "step4")}>
                          <BC.DropdownOption>Please make a selection</BC.DropdownOption>
                          <BC.DropdownOption>Trouble signing in</BC.DropdownOption>
                          <BC.DropdownOption>Forgot password</BC.DropdownOption>
                          <BC.DropdownOption>Change your password</BC.DropdownOption>
                        </BC.Dropdown>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </BC.Section>

                  <BC.Section cssClass={classNames(fadeStep4)}>
                  <BC.GridRow>
                    <BC.GridColumn gridUnits={9} gridPull={2} gridPush={1}>
                        <BC.Box backgroundColor="secondary" spacing="medium">
                          <BC.Heading headingLevel={3}>Did you know?</BC.Heading>
                          <BC.Paragraph>You can change or reset your password online.</BC.Paragraph>
                          <BC.Paragraph>If you log-in to Audible using an email address or mobile phone number, (e.g. john123@email.com), click here.</BC.Paragraph>
                          <BC.Paragraph>If you log-in to Audible using a username (e.g. john456) instead of an email   address, click here.</BC.Paragraph>
                           <BC.Paragraph>Note: If you are not on the most updated app version on your device you may run into issues logging back in after signing out. Visit www.audible.com/getapp using your device&#39;s web browser to update your app.</BC.Paragraph>
                        </BC.Box>

                    <BC.Divider spacing="base"/>

                    <BC.GridRow textAlign="center">
                      <BC.List listType="nostyle" listDirection="horizontal">
                      <BC.GridColumn gridUnits={4}>
                        <BC.ListItem spacing="mini">
                          <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="chat"/><BC.LetterSpace size="base"/>Chat</BC.Button>
                        </BC.ListItem>
                        <BC.ListItem>
                          <BC.Text textAlign="center" textColor="tertiary">Recommended</BC.Text>
                        </BC.ListItem>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>
                        <BC.ListItem>
                          <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
                        </BC.ListItem>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4} position="last">
                        <BC.ListItem>
                          <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/>
                            <BC.LetterSpace size="base"/>
                            E-mail</BC.Button>
                        </BC.ListItem>
                      </BC.GridColumn>
                      </BC.List>
                    </BC.GridRow>
                  </BC.GridColumn>
                </BC.GridRow>
              </BC.Section>

            </BC.GridColumn>

              <BC.GridColumn gridUnits={3} position="last">
                  <BC.Heading headingLevel={2} spacing="mini">
                    Self-Service Quick Links
                  </BC.Heading>
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="mini">
                      <BC.Link>Reset Your Password</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="mini">
                      <BC.Link>Manage Payment Information</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="mini">
                      <BC.Link>Change Name, Email Address, or Password</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="mini">
                      <BC.Link>Update Email Preferences</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="mini">
                      <BC.Link>Cancel My Membership</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="mini">
                      <BC.Link>Visit the Gift Center</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="mini">
                      <BC.Link>Visit the Help Center</BC.Link>
                    </BC.ListItem>
                  </BC.List>
              </BC.GridColumn>
            </BC.GridRow>
        </div>

        <ProdFooter />
      </div>
    )
  }
}
export default ContactUs2;
