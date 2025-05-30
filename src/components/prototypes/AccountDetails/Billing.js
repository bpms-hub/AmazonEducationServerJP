import React from 'react';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import AccountDetailsLayout from './AccountDetailsLayout';

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCard: '1'
    }
  }

  updateCard(event) {
    this.setState({
      defaultCard: event.target.value
    });
  }

  render() {
    return (
      <span>
      <form>
      <BC.GridRow spacingTop="micro">
        <BC.GridColumn gridUnits={12} position="last">
          <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="medium" spacing="medium">
            <BC.Heading headingLevel={2} spacing="base" textColor="base">Payment</BC.Heading>
            <BC.Divider spacing="small"/>          
            <BC.Paragraph spacing="medium" textColor="secondary">Create, modify, and remove your credit card information.</BC.Paragraph>
            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={1}>
                <BC.Heading headingLevel={3}>Default</BC.Heading>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={5}>
                <BC.Heading headingLevel={3}>Credit Card Type</BC.Heading>
              </BC.GridColumn>
              {/*
              <BC.GridColumn gridUnits={2}>
                <BC.Heading headingLevel={3}>Card Number</BC.Heading>
              </BC.GridColumn>
              */}
              <BC.GridColumn gridUnits={2}>
                <BC.Heading headingLevel={3}>Expires on</BC.Heading>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={2}>
                <BC.Heading headingLevel={3}>Full Name</BC.Heading>
              </BC.GridColumn>
            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={1}>
                <BC.RadioButton onChange={this.updateCard.bind(this)} checked={this.state.defaultCard === '1'} value="1" type="radio" name="default-payment" />          
                <BC.LetterSpace size="base"/>          
              </BC.GridColumn>

              <BC.GridColumn gridUnits={5}>

                <BC.Text  textColor="secondary">American Express ending in 2843</BC.Text>
              </BC.GridColumn>
              {/*
              <BC.GridColumn gridUnits={2}>
                <BC.Paragraph  textColor="secondary">****-****-****-1041</BC.Paragraph>
              </BC.GridColumn>
              */}
              <BC.GridColumn  gridUnits={2}>
                <BC.Paragraph  textColor="secondary">02-18</BC.Paragraph>
              </BC.GridColumn>
              <BC.GridColumn  gridUnits={2}>
                <BC.Paragraph  textColor="secondary">John Dough</BC.Paragraph>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={2} position="last">
                <BC.ModalTrigger modalTitle="Edit Payment Method" modalContent={<div>
                  <BC.GridRow>
                    <BC.GridColumn gridUnits={6}>
                      <BC.GridRow spacing="medium">
                        <BC.Text textColor="base" textBold={true}>American Express </BC.Text>
                        <BC.Text textColor="base">ending in 2843</BC.Text>
                      </BC.GridRow>
                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text  textColor="base" textBold={true}>Cardholder Name</BC.Text>
                          </BC.GridRow>
                          <BC.GridRow>
                            <BC.TextInput  placeholder="John Dough"></BC.TextInput>
                          </BC.GridRow>
                        </BC.GridColumn>
                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridRow spacing="mini">
                          <BC.Text textColor="base" textBold={true}>Credit Card Type</BC.Text>
                        </BC.GridRow>
                        <BC.GridColumn gridUnits={5}>

                          <BC.Dropdown textColor="tertiary">

                            <BC.DropdownOption>02</BC.DropdownOption>
                          </BC.Dropdown>

                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={5}>

                          <BC.Dropdown textColor="tertiary">

                            <BC.DropdownOption>2017</BC.DropdownOption>
                          </BC.Dropdown>
                        </BC.GridColumn>
                      </BC.GridRow>

                    </BC.GridColumn>
                    {/* RIGHT Section*/}
                    <BC.GridColumn gridUnits={6} position="last" spacingTop="large">

                      <BC.GridRow spacing="base" >

                        <BC.GridColumn gridUnits={10} textAlign="left">
                          <BC.GridRow spacing="mini" >
                            <BC.Text textColor="base" textBold={true}>Address Line 1</BC.Text>
                          </BC.GridRow>
                          <BC.TextInput  placeholder="123 Sesame Street"></BC.TextInput>

                        </BC.GridColumn>
                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text textColor="base" textBold={true}>Address Line 2</BC.Text>
                          </BC.GridRow>
                          <BC.TextInput  placeholder="2C"></BC.TextInput>

                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text textColor="base" textBold={true}>Country</BC.Text>
                          </BC.GridRow>

                          <BC.Dropdown textColor="tertiary">
                            <BC.DropdownOption>United States of America</BC.DropdownOption>
                          </BC.Dropdown>
                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.Text textColor="base" textBold={true}>Zip/Postal Code</BC.Text>
                          <BC.TextInput placeholder="101010"></BC.TextInput>

                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text textColor="base" textBold={true}>City</BC.Text>
                          </BC.GridRow>

                          <BC.TextInput  placeholder="New York"></BC.TextInput>

                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text textColor="base" textBold={true}>State</BC.Text>
                          </BC.GridRow>

                          <BC.TextInput  placeholder="New York"></BC.TextInput>

                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="medium">
                        <BC.GridColumn gridUnits={10} >
                          <BC.Text textColor="base" textBold={true}>Phone Number</BC.Text>
                          <BC.TextInput placeholder="123-456-7890"></BC.TextInput>
                        </BC.GridColumn>
                      </BC.GridRow>

                      <BC.GridRow>
                        <BC.GridColumn gridUnits={4}>
                          <BC.Button url={'/prototypes/brickcity/account-details/billing'}>Cancel</BC.Button>

                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={6}>
                          <BC.Button url={'/prototypes/brickcity/account-details/billing'} buttonType="primary">Save Changes</BC.Button>
                        </BC.GridColumn>
                      </BC.GridRow>

                    </BC.GridColumn>

                  </BC.GridRow>
                </div>
                } width="640px">
                <BC.Link>Edit</BC.Link>
              </BC.ModalTrigger>

              <BC.LetterSpace size="mini" />
              <BC.Divider type="vertical" />
              <BC.LetterSpace size="mini" />

              <BC.ModalTrigger modalTitle="Delete Payment Method" modalContent={<div>
                <BC.GridRow textAlign="left">
                  <BC.GridColumn gridUnits={12}>
                    <BC.Paragraph>
                      Are you sure you want to delete: <BC.Text textBold={true}>American Express</BC.Text> ending in <BC.Text textBold={true}> 2843</BC.Text>
                    </BC.Paragraph>

                    <BC.GridRow textAlign="left">
                      <BC.GridColumn gridUnits={2} gridPush={6}>
                        <BC.Button buttonType="secondary" url={'/prototypes/brickcity/account-details/billing'}>Cancel</BC.Button>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4} position="last">
                        <BC.Button buttonType="primary" url={'/prototypes/brickcity/account-details/billing'}>Confirm Delete</BC.Button>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </BC.GridColumn>
                </BC.GridRow>

              </div>
              } width="740px">
              <BC.LetterSpace size="micro"/>          
              <BC.Link>Delete</BC.Link>
            </BC.ModalTrigger>
          </BC.GridColumn>
        </BC.GridRow>

        <BC.GridRow spacing="base">

          <BC.GridColumn gridUnits={1}>
            <BC.RadioButton onChange={this.updateCard.bind(this)} value="2" checked={this.state.defaultCard === '2'} type="radio" name="default-payment" />          
            <BC.LetterSpace size="base"/>          
          </BC.GridColumn>

          <BC.GridColumn gridUnits={5}>

            <BC.Text textColor="secondary" >Visa ending in 2121</BC.Text>
          </BC.GridColumn>
          {/*
          <BC.GridColumn gridUnits={2}>
            <BC.Paragraph  textColor="secondary">****-****-****-2121</BC.Paragraph>
          </BC.GridColumn>
          */}
          <BC.GridColumn gridUnits={2}>

            <BC.Paragraph  textColor="secondary">10-19</BC.Paragraph>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={2}>
            <BC.Paragraph  textColor="secondary">John Dough</BC.Paragraph>
          </BC.GridColumn>
              <BC.GridColumn gridUnits={2} position="last">
                <BC.ModalTrigger modalTitle="Edit Payment Method" modalContent={<div>
                  <BC.GridRow>
                    <BC.GridColumn gridUnits={6}>
                      <BC.GridRow spacing="medium">
                        <BC.Text textColor="base" textBold={true}>American Express </BC.Text>
                        <BC.Text textColor="base">ending in 2843</BC.Text>
                      </BC.GridRow>
                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text  textColor="base" textBold={true}>Cardholder Name</BC.Text>
                          </BC.GridRow>
                          <BC.GridRow>
                            <BC.TextInput  placeholder="John Dough"></BC.TextInput>
                          </BC.GridRow>
                        </BC.GridColumn>
                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridRow spacing="mini">
                          <BC.Text textColor="base" textBold={true}>Credit Card Type</BC.Text>
                        </BC.GridRow>
                        <BC.GridColumn gridUnits={5}>

                          <BC.Dropdown textColor="tertiary">

                            <BC.DropdownOption>02</BC.DropdownOption>
                          </BC.Dropdown>

                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={5}>

                          <BC.Dropdown textColor="tertiary">

                            <BC.DropdownOption>2017</BC.DropdownOption>
                          </BC.Dropdown>
                        </BC.GridColumn>
                      </BC.GridRow>

                    </BC.GridColumn>
                    {/* RIGHT Section*/}
                    <BC.GridColumn gridUnits={6} position="last" spacingTop="large">

                      <BC.GridRow spacing="base" >

                        <BC.GridColumn gridUnits={10} textAlign="left">
                          <BC.GridRow spacing="mini" >
                            <BC.Text textColor="base" textBold={true}>Address Line 1</BC.Text>
                          </BC.GridRow>
                          <BC.TextInput  placeholder="123 Sesame Street"></BC.TextInput>

                        </BC.GridColumn>
                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text textColor="base" textBold={true}>Address Line 2</BC.Text>
                          </BC.GridRow>
                          <BC.TextInput  placeholder="2C"></BC.TextInput>

                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text textColor="base" textBold={true}>Country</BC.Text>
                          </BC.GridRow>

                          <BC.Dropdown textColor="tertiary">
                            <BC.DropdownOption>United States of America</BC.DropdownOption>
                          </BC.Dropdown>
                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.Text textColor="base" textBold={true}>Zip/Postal Code</BC.Text>
                          <BC.TextInput placeholder="101010"></BC.TextInput>

                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text textColor="base" textBold={true}>City</BC.Text>
                          </BC.GridRow>

                          <BC.TextInput  placeholder="New York"></BC.TextInput>

                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={10} >
                          <BC.GridRow spacing="mini">
                            <BC.Text textColor="base" textBold={true}>State</BC.Text>
                          </BC.GridRow>

                          <BC.TextInput  placeholder="New York"></BC.TextInput>

                        </BC.GridColumn>

                      </BC.GridRow>

                      <BC.GridRow spacing="medium">
                        <BC.GridColumn gridUnits={10} >
                          <BC.Text textColor="base" textBold={true}>Phone Number</BC.Text>
                          <BC.TextInput placeholder="123-456-7890"></BC.TextInput>
                        </BC.GridColumn>
                      </BC.GridRow>

                      <BC.GridRow>
                        <BC.GridColumn gridUnits={4}>
                          <BC.Button url={'/prototypes/brickcity/account-details/billing'}>Cancel</BC.Button>

                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={6}>
                          <BC.Button url={'/prototypes/brickcity/account-details/billing'} buttonType="primary">Save Changes</BC.Button>
                        </BC.GridColumn>
                      </BC.GridRow>

                    </BC.GridColumn>

                  </BC.GridRow>
                </div>
                } width="640px">
                <BC.Link>Edit</BC.Link>
              </BC.ModalTrigger>

              <BC.LetterSpace size="mini" />
              <BC.Divider type="vertical" />
              <BC.LetterSpace size="mini" />

              <BC.ModalTrigger modalTitle="Delete Payment Method" modalContent={<div>
                <BC.GridRow textAlign="left">
                  <BC.GridColumn gridUnits={12}>
                    <BC.Paragraph>
                      Are you sure you want to delete: <BC.Text textBold={true}>American Express</BC.Text> ending in <BC.Text textBold={true}> 2843</BC.Text>
                    </BC.Paragraph>

                    <BC.GridRow textAlign="left">
                      <BC.GridColumn gridUnits={2} gridPush={6}>
                        <BC.Button buttonType="secondary" url={'/prototypes/brickcity/account-details/billing'}>Cancel</BC.Button>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4} position="last">
                        <BC.Button buttonType="primary" url={'/prototypes/brickcity/account-details/billing'}>Confirm Delete</BC.Button>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </BC.GridColumn>
                </BC.GridRow>

              </div>
              } width="740px">
              <BC.LetterSpace size="micro"/>          
              <BC.Link>Delete</BC.Link>
            </BC.ModalTrigger>
          </BC.GridColumn>

      </BC.GridRow>

      <BC.GridRow>
      <BC.Expander hideText="Add a New Card" showText="Add a New Card" anchor={true}>

        <BC.Box hasBorder={false} paddingSize="none" spacing="none">
          <BC.GridRow>

            <BC.GridColumn gridUnits={6}>

              <BC.GridRow spacing="mini" spacingTop="base">
                <BC.GridColumn gridUnits={10} >
                  <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Card Number</BC.Heading>
                  <BC.TextInput  placeholder="4111 1111 1111 1111"></BC.TextInput>
                </BC.GridColumn>

              </BC.GridRow>

              <BC.GridRow spacing="mini">
                <BC.GridColumn gridUnits={10} >
                  <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Name on Card</BC.Heading>
                  <BC.TextInput  placeholder="John Dough"></BC.TextInput>

                </BC.GridColumn>

              </BC.GridRow>

              <BC.GridRow spacing="base">
                <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Expires</BC.Heading>
                <BC.GridColumn gridUnits={4}>

                  <BC.Dropdown textColor="secondary">

                    <BC.DropdownOption>Month</BC.DropdownOption>
                  </BC.Dropdown>

                </BC.GridColumn>
                <BC.GridColumn gridUnits={4}>

                  <BC.Dropdown textColor="tertiary">

                    <BC.DropdownOption>Year</BC.DropdownOption>
                  </BC.Dropdown>
                </BC.GridColumn>
              </BC.GridRow>

              <BC.GridRow spacing="small">

                <BC.Checkbox spacing="mini" checked={false} />          
                <BC.LetterSpace />          
                <BC.Text textColor="secondary">Use this card for my membership</BC.Text>
              </BC.GridRow>
            </BC.GridColumn>
            {/* RIGHT Section*/}
            <BC.GridColumn gridUnits={6} position="last" spacingTop="none">

              <BC.GridRow spacing="mini" spacingTop="base" >

                <BC.GridColumn gridUnits={10} last={false}  textAlign="left">
                  <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Address Line 1</BC.Heading>
                  <BC.TextInput  placeholder="1 Washington Pl"></BC.TextInput>

                </BC.GridColumn>
              </BC.GridRow>

              <BC.GridRow spacing="mini">
                <BC.GridColumn gridUnits={10} >
                  <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Address Line 2</BC.Heading>
                  <BC.TextInput  placeholder="2C"></BC.TextInput>

                </BC.GridColumn>

              </BC.GridRow>

              <BC.GridRow spacing="mini">
                <BC.GridColumn gridUnits={10} >
                  <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Country</BC.Heading>

                  <BC.Dropdown textColor="tertiary">
                    <BC.DropdownOption>United States of America</BC.DropdownOption>
                  </BC.Dropdown>
                </BC.GridColumn>

              </BC.GridRow>

              <BC.GridRow spacing="mini">
                <BC.GridColumn gridUnits={6} >
                  <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Zip / Postal Code</BC.Heading>

                </BC.GridColumn>
                <BC.GridRow>
                  <BC.GridColumn gridUnits={6} >
                    <BC.TextInput placeholder="12345"></BC.TextInput>
                  </BC.GridColumn>

                  <BC.GridColumn gridunits={5} gridPush={1} spacingTop="mini">
                    <BC.Text textColor="tertiary" textBold={false}>Autofill copy</BC.Text>
                  </BC.GridColumn>

                </BC.GridRow>

              </BC.GridRow>

              <BC.GridRow spacing="large">
                <BC.GridColumn gridUnits={10} >
                  <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Phone</BC.Heading>
                  <BC.TextInput placeholder="123-456-7890"></BC.TextInput>

                </BC.GridColumn>

              </BC.GridRow>

              <BC.GridRow>
                <BC.GridColumn inline={false} gridUnits={4}>
                  <BC.Button>Cancel</BC.Button>

                </BC.GridColumn>
                <BC.GridColumn gridUnits={4} inline={false}>
                  <BC.Button buttonType="primary" >Add</BC.Button>
                </BC.GridColumn>
              </BC.GridRow>
            </BC.GridColumn>
          </BC.GridRow>
        </BC.Box>
      </BC.Expander>
      </BC.GridRow>
      </BC.Box>
      </BC.GridColumn>
      </BC.GridRow>
      <BC.GridRow>
      {/*
      <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="base" spacing="large">

      <BC.GridRow spacing="none">
      <BC.Heading headingLevel={2} spacing="base" textColor="base">Redeem Promotional Code</BC.Heading>
      <BC.Divider spacing="small"/>          
      <BC.Paragraph spacing="medium" textColor="secondary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non augue placerat, suscipit ligula nec, volutpat nunc. Aenean bibendum ornare
velit,  non ornare nulla fermentum pellentesque.
      </BC.Paragraph>

      <BC.GridColumn gridUnits={7}>

      <BC.TextInput placeholder="Enter the code you received..."></BC.TextInput>
      </BC.GridColumn>
      <BC.GridColumn gridUnits={2}>
      <BC.Button inline={false} buttonType="primary">Redeem</BC.Button>
      </BC.GridColumn>

      </BC.GridRow>

      </BC.Box>
      */}
      </BC.GridRow>
      </form>

      </span>
    )
  }
}

export default Billing;
