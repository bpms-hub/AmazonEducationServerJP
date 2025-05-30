import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';
import classNames from 'classnames';

class ContactUsMobile2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeElement: "step1"
    }
  }

  handleClick(element) {
    this.setState({
      activeElement: element
    });
  }


  render() {
    let fadeStep1 = ['bc-contact2-step1'];
    let fadeStep2a = ['bc-contact2-step2a'];
    let fadeStep2b = ['bc-contact2-step2b'];
    let fadeStep2c = ['bc-contact2-step2c'];
    let fadeStep3a = ['bc-contact2-step3a'];
    let fadeStep3b = ['bc-contact2-step3b'];
    let fadeStep3c = ['bc-contact2-step3c'];
    let fadeStep3d = ['bc-contact2-step3d'];
    let fadeStep3e = ['bc-contact2-step3e'];
    let fadeStep4a = ['bc-contact2-step4a'];
    let fadeStep4b = ['bc-contact2-step4b'];
    let fadeStep4c = ['bc-contact2-step4c'];
    let fadeStep4d = ['bc-contact2-step4d'];
    let fadeStep4e = ['bc-contact2-step4e'];
    let fadeStep4f = ['bc-contact2-step4f'];
    let fadeStep4g = ['bc-contact2-step4g'];
    let fadeStep4h = ['bc-contact2-step4h'];
    if(this.state.activeElement === "step1") fadeStep1.push('bc-contact2-step1-active');
    if(this.state.activeElement === "step2a") fadeStep2a.push('bc-contact2-step2a-active');
    if(this.state.activeElement === "step2b") fadeStep2b.push('bc-contact2-step2b-active');
    if(this.state.activeElement === "step2c") fadeStep2c.push('bc-contact2-step2c-active');
    if(this.state.activeElement === "step3a") fadeStep3a.push('bc-contact2-step3a-active');
    if(this.state.activeElement === "step3b") fadeStep3b.push('bc-contact2-step3b-active');
    if(this.state.activeElement === "step3c") fadeStep3c.push('bc-contact2-step3c-active');
    if(this.state.activeElement === "step3d") fadeStep3d.push('bc-contact2-step3d-active');
    if(this.state.activeElement === "step3e") fadeStep3e.push('bc-contact2-step3e-active');
    if(this.state.activeElement === "step4a") fadeStep4a.push('bc-contact2-step4a-active');
    if(this.state.activeElement === "step4b") fadeStep4b.push('bc-contact2-step4b-active');
    if(this.state.activeElement === "step4c") fadeStep4c.push('bc-contact2-step4c-active');
    if(this.state.activeElement === "step4d") fadeStep4d.push('bc-contact2-step4d-active');
    if(this.state.activeElement === "step4e") fadeStep4e.push('bc-contact2-step4e-active');
    if(this.state.activeElement === "step4f") fadeStep4f.push('bc-contact2-step4f-active');
    if(this.state.activeElement === "step4g") fadeStep4g.push('bc-contact2-step4g-active');
    if(this.state.activeElement === "step4h") fadeStep4h.push('bc-contact2-step4h-active');

    return (

      <div>
      <ProdHeaderMobile />
      <div className="bc-container">

      <BC.GridRow spacingTop="base" spacing="base">
        <BC.GridColumn gridUnits={12} spacing="base">
        <BC.Heading headingLevel={2}>Customer Services are available 24/7</BC.Heading>
        <BC.Paragraph>Answer a few questions about the issue you are having and we&#39;ll get someone to help.</BC.Paragraph>
        <BC.Divider />

      <BC.Section cssClass={classNames(fadeStep1)}>
        <BC.Heading spacing="base" spacingTop="base" headingLevel={3}> What can we help you with?</BC.Heading>
        <BC.Divider />
        <div onClick={this.handleClick.bind(this, "step2a")}><CC.MobileLink>My Account</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step2b")}><CC.MobileLink>Tech Support</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step2c")}><CC.MobileLink>Something Else</CC.MobileLink></div>
      </BC.Section>

      {/*   step 2a  */}

      <BC.Section cssClass={classNames(fadeStep2a)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step1")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>My Account</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          </BC.Link>
          <BC.Divider />
        </BC.Section>

        <BC.Heading spacing="base" headingLevel={3}>Tell us more:</BC.Heading>
        <div onClick={this.handleClick.bind(this, "step3a")}><CC.MobileLink hasTopBorder={true}>Login Assistance</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4c")}><CC.MobileLink>Return or refund</CC.MobileLink></div>
        <div><CC.MobileLink>Change or cancel my membership</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step3b")}><CC.MobileLink>Update account information</CC.MobileLink></div>
        <div><CC.MobileLink>Pause Membership</CC.MobileLink></div>
        <div><CC.MobileLink>Payment issues</CC.MobileLink></div>
        <div><CC.MobileLink>Order/refund status</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step3c")}><CC.MobileLink>Audible Credits</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4e")}><CC.MobileLink>Other Account Questions</CC.MobileLink></div>
      </BC.Section>

      {/*   step 2b  */}

      <BC.Section cssClass={classNames(fadeStep2b)}>
      <BC.Section spacing="small" >
        <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step1")}>
          <div className="bc-container bc-clearfix">
            <BC.GridRow spacing="small" spacingTop="small">
              <BC.GridColumn gridUnits={1}>
                <BC.Icon iconType="chevron-left" textColor="base" />
              </BC.GridColumn>
              <BC.GridColumn gridUnits={11} position="last">
                <BC.Text>Tech Support</BC.Text>
              </BC.GridColumn>
            </BC.GridRow>
          </div>
        </BC.Link>
        <BC.Divider />
      </BC.Section>

        <BC.Heading spacing="base" headingLevel={3}>Tell us more:</BC.Heading>
        <div><CC.MobileLink hasTopBorder={true}>Upgrade to Audible for iOS version 2.6</CC.MobileLink></div>
        <div><CC.MobileLink>Audible Manager Update Error</CC.MobileLink></div>
        <div><CC.MobileLink>Audible Download Manager Error Message</CC.MobileLink></div>
        <div><CC.MobileLink>Getting started</CC.MobileLink></div>
        <div><CC.MobileLink>Locate my titles</CC.MobileLink></div>
        <div><CC.MobileLink>Titles not in My Library</CC.MobileLink></div>
        <div><CC.MobileLink>Downloading</CC.MobileLink></div>
        <div><CC.MobileLink>Trouble playing my Audiobook</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step3d")}><CC.MobileLink>Deactivate a device</CC.MobileLink></div>
        <div><CC.MobileLink>Purchasing an Audiobook</CC.MobileLink></div>
        <div><CC.MobileLink>Whispersync & Immersion Reading</CC.MobileLink></div>
        <div><CC.MobileLink>Kindle Reading App</CC.MobileLink></div>
        <div><CC.MobileLink>Trouble logging into my account</CC.MobileLink></div>
        <div><CC.MobileLink>Cannot refresh library</CC.MobileLink></div>
        <div><CC.MobileLink>Other technical questions</CC.MobileLink></div>

      </BC.Section>

      {/*   step 2c  */}

      <BC.Section cssClass={classNames(fadeStep2c)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step1")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Something Else</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          </BC.Link>
          <BC.Divider />
        </BC.Section>

        <BC.Heading spacing="base" headingLevel={3}>Tell us more:</BC.Heading>
        <div><CC.MobileLink hasTopBorder={true}>Start an Audible Membership</CC.MobileLink></div>
        <div><CC.MobileLink>Membership Benefits</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step3e")}><CC.MobileLink>Gifts</CC.MobileLink></div>
        <div><CC.MobileLink>Return or refund</CC.MobileLink></div>
        <div><CC.MobileLink>Promotions and Sales</CC.MobileLink></div>
        <div><CC.MobileLink>Kindle Unlimited</CC.MobileLink></div>
        <div><CC.MobileLink>Website issues</CC.MobileLink></div>
        <div><CC.MobileLink>Purchase without membership</CC.MobileLink></div>
        <div><CC.MobileLink>Great Listen Guarantee</CC.MobileLink></div>
        <div><CC.MobileLink>Whispersync for Voice & Immersion Reading</CC.MobileLink></div>
        <div><CC.MobileLink>Request new content</CC.MobileLink></div>
        <div><CC.MobileLink>Whispersync for Voice & Immersion Reading</CC.MobileLink></div>
        <div><CC.MobileLink>Great Ideas</CC.MobileLink></div>
        <div><CC.MobileLink>Testimonials</CC.MobileLink></div>
        <div><CC.MobileLink>Other</CC.MobileLink></div>
      </BC.Section>

      {/*   step 3a - Login Assistance */}

      <BC.Section cssClass={classNames(fadeStep3a)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step2a")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Login Assistance</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          </BC.Link>
        <BC.Divider />
        </BC.Section>
        <BC.Heading spacing="base" headingLevel={3}>Tell us more:</BC.Heading>
        <div><CC.MobileLink hasTopBorder={true}>Trouble Signing In</CC.MobileLink></div>
        <div><CC.MobileLink>Forgot password</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4a")}><CC.MobileLink>Change your password</CC.MobileLink></div>
      </BC.Section>

      {/*   step 3b - Update Account information */}

      <BC.Section cssClass={classNames(fadeStep3b)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step2a")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Update Account Information</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          </BC.Link>
        <BC.Divider />
        </BC.Section>
        <BC.Heading spacing="base" headingLevel={3}>Tell us more:</BC.Heading>
        <div><CC.MobileLink hasTopBorder={true}>Update name, email address, or phone number</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4b")}><CC.MobileLink>Add, edit, or remove payment information</CC.MobileLink></div>
        <div><CC.MobileLink>Set default credit card</CC.MobileLink></div>
      </BC.Section>

      {/*   step 3c - Audible Credits */}

      <BC.Section cssClass={classNames(fadeStep3c)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step2a")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Audible Credits</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          </BC.Link>
        <BC.Divider />
        </BC.Section>
        <BC.Heading spacing="base" headingLevel={3}>Tell us more:</BC.Heading>
        <div><CC.MobileLink hasTopBorder={true}>How do credits work?</CC.MobileLink></div>
        <div><CC.MobileLink>How many credits do I have?</CC.MobileLink></div>
        <div><CC.MobileLink>I cannot keep up with my credits</CC.MobileLink></div>
        <div><CC.MobileLink>I did not receive my credits</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4d")}><CC.MobileLink>Can I purchase additional credits?</CC.MobileLink></div>
        <div><CC.MobileLink>Other credit questions</CC.MobileLink></div>

      </BC.Section>

      {/*   step 3d -Deactivate a device */}

      <BC.Section cssClass={classNames(fadeStep3d)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step2b")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Audible Credits</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          </BC.Link>
        <BC.Divider />
        </BC.Section>
        <BC.Heading spacing="base" headingLevel={3}>Tell us more:</BC.Heading>
        <div onClick={this.handleClick.bind(this, "step4f")}><CC.MobileLink hasTopBorder={true}>Android devices</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4f")}><CC.MobileLink>Apple iOS devices (iPhone,iPad,iPod Touch)</CC.MobileLink></div>
        <div><CC.MobileLink>Kindle Fire or E-Reader</CC.MobileLink></div>
        <div><CC.MobileLink>Windows Computer</CC.MobileLink></div>
        <div><CC.MobileLink>Mac Computer</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4f")}><CC.MobileLink>Windows Phone or tablet</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4f")}><CC.MobileLink>Amazon Fire Phone</CC.MobileLink></div>
        <div><CC.MobileLink>Apple iPod, MP3 player, or other devices</CC.MobileLink></div>
      </BC.Section>

      {/*   step 3e - Gifts */}

      <BC.Section cssClass={classNames(fadeStep3e)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step2c")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Gifts</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          </BC.Link>
          <BC.Divider />
        </BC.Section>
        <BC.Heading spacing="base" headingLevel={3}>Tell us more:</BC.Heading>
        <div><CC.MobileLink hasTopBorder={true}>How do I purchase a book to gift to a friend?</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4g")}><CC.MobileLink>How do I purchase a gift membership?</CC.MobileLink></div>
        <div><CC.MobileLink>How do I redeem a gift membership or a gifted book?</CC.MobileLink></div>
        <div><CC.MobileLink>Can I redeem my Amazon gift card toward an Audible purchase?</CC.MobileLink></div>
        <div onClick={this.handleClick.bind(this, "step4h")}><CC.MobileLink>Other gift questions</CC.MobileLink></div>
      </BC.Section>

      {/*   step 4a - Change Password */}

      <BC.Section cssClass={classNames(fadeStep4a)}>
        <BC.Section spacing="small" >
        <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step3a")}>
          <div className="bc-container bc-clearfix">
            <BC.GridRow spacing="small" spacingTop="small">
              <BC.GridColumn gridUnits={1}>
                <BC.Icon iconType="chevron-left" textColor="base" />
              </BC.GridColumn>
              <BC.GridColumn gridUnits={11} position="last">
                <BC.Text>Back</BC.Text>
              </BC.GridColumn>
            </BC.GridRow>
          </div>
        </BC.Link>
        <BC.Divider />
        </BC.Section>
        <BC.Box backgroundColor="secondary" spacing="base">
          <BC.Heading headingLevel={3}>Did you know?</BC.Heading>
          <BC.Paragraph>You can change or reset your password online. To change your current password:</BC.Paragraph>
          <BC.List spacing="small" listType="nostyle">
            <BC.ListItem>1. Visit our Change Password page</BC.ListItem>
            <BC.ListItem>2. Type in your current password</BC.ListItem>
            <BC.ListItem>3. Enter your new password twice</BC.ListItem>
            <BC.ListItem>4. Click Save</BC.ListItem>
          </BC.List>
          <BC.Paragraph>Note: For more information, visit our <BC.Link>FAQ</BC.Link>.</BC.Paragraph>
        </BC.Box>

        <BC.Divider spacing="base"/>

        <BC.List listType="nostyle">
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
          </BC.ListItem>
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/><BC.LetterSpace size="base"/>E-mail</BC.Button>
          </BC.ListItem>
        </BC.List>
      </BC.Section>

      {/*   step 4b - Add edit remove payment */}

      <BC.Section cssClass={classNames(fadeStep4b)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step3b")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Back</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          </BC.Link>
          <BC.Divider />
        </BC.Section>
        <BC.Box backgroundColor="secondary" spacing="base">
          <BC.Heading headingLevel={3}>Did you know?</BC.Heading>
          <BC.Paragraph>You can make changes to your payment information by: </BC.Paragraph>
          <BC.List listType="nostyle" spacing="small">
            <BC.ListItem>1. Visiting the <BC.Link>Manage Payment Information</BC.Link> section of your Account Details page.</BC.ListItem>
            <BC.ListItem>2. Clicking Edit or Remove Card next to the credit card you would like to edit.</BC.ListItem>
            <BC.ListItem>3. Clicking Add new card to add a new form of payment.</BC.ListItem>
          </BC.List>
          <BC.Paragraph>Note: For more information, visit our <BC.Link>FAQ</BC.Link>.</BC.Paragraph>
        </BC.Box>
        <BC.Divider spacing="base"/>

        <BC.List listType="nostyle">
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
          </BC.ListItem>
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/><BC.LetterSpace size="base"/>E-mail</BC.Button>
          </BC.ListItem>
        </BC.List>
      </BC.Section>

      {/*   step 4c - Return or Refund */}

      <BC.Section cssClass={classNames(fadeStep4c)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step2a")}>
            <div className="bc-container bc-clearfix">
            <BC.GridRow spacing="small" spacingTop="small">
              <BC.GridColumn gridUnits={1}>
                <BC.Icon iconType="chevron-left" textColor="base" />
              </BC.GridColumn>
              <BC.GridColumn gridUnits={11} position="last">
                <BC.Text>Back</BC.Text>
              </BC.GridColumn>
            </BC.GridRow>
            </div>
          </BC.Link>
          <BC.Divider />
        </BC.Section>
        <BC.Box backgroundColor="secondary" spacing="base">
          <BC.Heading headingLevel={3}>Did you know?</BC.Heading>
          <BC.Paragraph>Audible plan members can return books online with our Great Listen Guarantee.</BC.Paragraph>
          <BC.Paragraph>Click <BC.Link url="https://www.audible.com/purchase-history?&bp_ua=y">here</BC.Link> to make a return.</BC.Paragraph>

          <BC.Paragraph>Note: For more information on the Great Listen Guarantee, visit our <BC.Link>FAQ</BC.Link>. For membership fee refunds, please proceed by contacting Customer Service.</BC.Paragraph>
        </BC.Box>
        <BC.Divider spacing="base"/>

          <BC.List listType="nostyle">
            <BC.ListItem spacing="small">
              <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
            </BC.ListItem>
            <BC.ListItem spacing="small">
              <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/><BC.LetterSpace size="base"/>E-mail</BC.Button>
            </BC.ListItem>
          </BC.List>
      </BC.Section>

      {/*   step 4d - Audible Credits */}

      <BC.Section cssClass={classNames(fadeStep4d)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step3c")}>
            <div className="bc-container bc-clearfix">
            <BC.GridRow spacing="small" spacingTop="small">
              <BC.GridColumn gridUnits={1}>
                <BC.Icon iconType="chevron-left" textColor="base" />
              </BC.GridColumn>
              <BC.GridColumn gridUnits={11} position="last">
                <BC.Text>Back</BC.Text>
              </BC.GridColumn>
            </BC.GridRow>
            </div>
          </BC.Link>
          <BC.Divider />
        </BC.Section>
        <BC.Box backgroundColor="secondary" spacing="base">
          <BC.Heading headingLevel={3}>Did you know?</BC.Heading>
          <BC.Paragraph>Audible members can purchase extra credits at a discounted rate, as long as certain membership criteria are met:</BC.Paragraph>
          <BC.List spacing="small" listType="nostyle">
            <BC.ListItem>1. You must be a current Audible member</BC.ListItem>
            <BC.ListItem>2. You must have been a member for at least 3 months</BC.ListItem>
            <BC.ListItem>3. You must have 1 credit or less in your account</BC.ListItem>
            <BC.ListItem>4. If you are an annual member, your membership renewal date must be at least 30 days away </BC.ListItem>
          </BC.List>
          <BC.Paragraph>If eligible, you will see a "Purchase Extra Credits" link at the top of the screen under your name or login.</BC.Paragraph>
          <BC.Paragraph>Note: For more information about Audible credits, visit our <BC.Link>FAQ</BC.Link>.</BC.Paragraph>
        </BC.Box>

        <BC.Divider spacing="base"/>

        <BC.List listType="nostyle">
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
          </BC.ListItem>
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/><BC.LetterSpace size="base"/>E-mail</BC.Button>
          </BC.ListItem>
        </BC.List>
      </BC.Section>

      {/*   step 4e - Other Account Questions */}

      <BC.Section cssClass={classNames(fadeStep4e)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step2a")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Back</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
        </BC.Link>
        <BC.Divider />
        </BC.Section>
      <BC.Box backgroundColor="secondary" spacing="base">
        <BC.Heading headingLevel={3}>Did you know?</BC.Heading>
        <BC.Paragraph>Visit our <BC.Link>FAQ</BC.Link> page for other account-related questions.</BC.Paragraph>
      </BC.Box>

      <BC.Divider spacing="base"/>

      <BC.List listType="nostyle">
        <BC.ListItem spacing="small">
          <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
        </BC.ListItem>
        <BC.ListItem spacing="small">
          <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/><BC.LetterSpace size="base"/>E-mail</BC.Button>
        </BC.ListItem>
        </BC.List>
      </BC.Section>

      {/*   step 4f - deactivat a device */}

      <BC.Section cssClass={classNames(fadeStep4f)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step3d")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Back</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
        </BC.Link>
        <BC.Divider />
        </BC.Section>
        <BC.Box backgroundColor="secondary" spacing="base">
          <BC.Heading headingLevel={3}>Did you know?</BC.Heading>
          <BC.Paragraph>You can deactivate your device by:</BC.Paragraph>
          <BC.List listType="nostyle" spacing="small">
            <BC.ListItem>1. Visiting the Manage Your Content and Devices at Amazon.com</BC.ListItem>
            <BC.ListItem>2. Clicking Your Devices</BC.ListItem>
            <BC.ListItem>3. Clicking Deregister on the device you wish to deactivate</BC.ListItem>
          </BC.List>
          <BC.Paragraph>Note: For more information on managing your devices visit our <BC.Link>FAQ</BC.Link>.</BC.Paragraph>
        </BC.Box>

      <BC.Divider spacing="base"/>

        <BC.List listType="nostyle">
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
          </BC.ListItem>
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/><BC.LetterSpace size="base"/>E-mail</BC.Button>
          </BC.ListItem>
        </BC.List>
      </BC.Section>

      {/*   step 4g - Gifts */}

      <BC.Section cssClass={classNames(fadeStep4g)}>
        <BC.Section spacing="small" >
          <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step3e")}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={1}>
                  <BC.Icon iconType="chevron-left" textColor="base" />
                  </BC.GridColumn>
                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Text>Back</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
            </div>
        </BC.Link>
        <BC.Divider />
        </BC.Section>
      <BC.Box backgroundColor="secondary" spacing="base">
        <BC.Heading headingLevel={3}>Did you know?</BC.Heading>
        <BC.Paragraph>You can purchase a Gift Membership by visiting our <BC.Link url=" http://www.audible.com/mt/giftmembership/ref=a_mt_contactus-c41_dyk_giftcenter/?&bp_ua=y">Gift Center</BC.Link>.</BC.Paragraph>
      </BC.Box>
      <BC.Divider spacing="base"/>
      <BC.Heading headingLevel="3" spacing="small">How would you like to contact us?</BC.Heading>
        <BC.List listType="nostyle">
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
          </BC.ListItem>
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/><BC.LetterSpace size="base"/>E-mail</BC.Button>
          </BC.ListItem>
        </BC.List>
      </BC.Section>

      {/*   step 4h - Other Gift Question */}

      <BC.Section cssClass={classNames(fadeStep4h)}>
      <BC.Section spacing="small" >
        <BC.Link linkType="nav" onClick={this.handleClick.bind(this, "step3e")}>
          <div className="bc-container bc-clearfix">
            <BC.GridRow spacing="small" spacingTop="small">
              <BC.GridColumn gridUnits={1}>
                <BC.Icon iconType="chevron-left" textColor="base" />
              </BC.GridColumn>
              <BC.GridColumn gridUnits={11} position="last">
                <BC.Text>Back</BC.Text>
              </BC.GridColumn>
            </BC.GridRow>
          </div>
        </BC.Link>
        <BC.Divider />
      </BC.Section>

      <BC.Heading headingLevel="3" spacing="small">How would you like to contact us?</BC.Heading>
        <BC.List listType="nostyle">
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-phone"}><BC.Icon iconType="phone"/><BC.LetterSpace size="base"/>Phone</BC.Button>
          </BC.ListItem>
          <BC.ListItem spacing="small">
            <BC.Button buttonType="primary" app={true} url={"/prototypes/brickcity-mobile/contact-email"}><BC.Icon iconType="envelope"/><BC.LetterSpace size="base"/>E-mail</BC.Button>
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
export default ContactUsMobile2;
