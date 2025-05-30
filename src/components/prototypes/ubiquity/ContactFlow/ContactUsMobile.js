import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';
import classNames from 'classnames';

class ContactUsMobile extends React.Component {

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
        <ProdHeaderMobile />

        <div className="bc-container">
            <BC.GridRow spacingTop="base" spacing="base">
              <BC.GridColumn gridUnits={12} spacing="base">
                <BC.Heading headingLevel={2}>Customer Services are available 24/7</BC.Heading>
                <BC.Paragraph>Answer a few questions about the issue you are having and we&#39;ll get someone to help.</BC.Paragraph>
                <BC.Divider spacing="base"/>

                  <BC.Section>
                    <BC.Heading spacing="base" headingLevel={3}> What can we help you with?</BC.Heading>
                    <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={40} >
                      <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={40} side="left">
                        <CC.StepMobile active={true}>1</CC.StepMobile>
                      </BC.FixedGridColumn>
                      <BC.FixedGridColumn fixedColumn="left" side="right">
                        <BC.Dropdown spacing="small" onChange={this.handleSwitch.bind(this, "step2")}>
                          <BC.DropdownOption>Please make a selection</BC.DropdownOption>
                          <BC.DropdownOption>My Account</BC.DropdownOption>
                          <BC.DropdownOption>Tech Support</BC.DropdownOption>
                          <BC.DropdownOption>Something Else</BC.DropdownOption>
                        </BC.Dropdown>
                      </BC.FixedGridColumn>
                    </BC.FixedGridRow>
                  </BC.Section>

                  <BC.Section cssClass={classNames(fadeStep2)}>
                    <BC.Heading headingLevel={3} spacing="base">Tell us more:</BC.Heading>
                    <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={40} >
                      <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={40} side="left">
                        <CC.StepMobile active={true}>2</CC.StepMobile>
                      </BC.FixedGridColumn>
                      <BC.FixedGridColumn fixedColumn="left" side="right">
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
                        </BC.FixedGridColumn>
                      </BC.FixedGridRow>
                    </BC.Section>

                    <BC.Section cssClass={classNames(fadeStep3)}>
                    <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={40} >
                      <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={40} side="left"></BC.FixedGridColumn>
                      <BC.FixedGridColumn fixedColumn="left" side="right">
                        <BC.Dropdown spacing="small" onChange={this.handleSwitch.bind(this, "step4")}>
                          <BC.DropdownOption>Please make a selection</BC.DropdownOption>
                          <BC.DropdownOption>Trouble signing in</BC.DropdownOption>
                          <BC.DropdownOption>Forgot password</BC.DropdownOption>
                          <BC.DropdownOption>Change your password</BC.DropdownOption>
                        </BC.Dropdown>
                      </BC.FixedGridColumn>
                    </BC.FixedGridRow>
                  </BC.Section>

                  <BC.Section cssClass={classNames(fadeStep4)}>
                    <BC.Box backgroundColor="secondary" spacing="base">
                      <BC.Heading headingLevel={3}>Did you know?</BC.Heading>
                      <BC.Paragraph>You can change or reset your password online.</BC.Paragraph>
                      <BC.Paragraph>If you log-in to Audible using an email address or mobile phone number, (e.g. john123@email.com), click here.</BC.Paragraph>
                      <BC.Paragraph>If you log-in to Audible using a username (e.g. john456) instead of an email   address, click here.</BC.Paragraph>
                       <BC.Paragraph>Note: If you are not on the most updated app version on your device you may run into issues logging back in after signing out. Visit www.audible.com/getapp using your device&#39;s web browser to update your app.</BC.Paragraph>
                    </BC.Box>
                    <BC.Divider spacing="base"/>

                    <BC.List listType="nostyle">
                      <BC.ListItem spacing="small">
                        <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
                      </BC.ListItem>
                      <BC.ListItem spacing="small">
                        <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/>
                          <BC.LetterSpace size="base"/>
                          E-mail</BC.Button>
                      </BC.ListItem>
                    </BC.List>
                  </BC.Section>

              </BC.GridColumn>

            </BC.GridRow>
        </div>

        <ProdFooterMobile/>
      </div>
    )
  }
}
export default ContactUsMobile;
