import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../cc';

class Billings_B extends React.Component {

  render() {

    return (
      <div>

        <div className="bc-container">

          <BC.GridRow>

            <BC.GridColumn gridUnits={12} position="last">


            <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="medium" spacing="medium" spacingTop="micro">

                <BC.Heading headingLevel={2} spacing="base" textColor="base">Payment Methods</BC.Heading>

              <BC.Divider spacing="small"/>
                <BC.Paragraph spacing="medium" textColor="secondary">
                    Create, modify, and remove your credit card information.
                  </BC.Paragraph>
                <BC.GridRow spacing="base">

                  <BC.GridColumn gridUnits={3}>
                    <BC.Heading headingLevel={3}>Credit Card</BC.Heading>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2}>
                    <BC.Heading headingLevel={3}>Card Number</BC.Heading>
                  </BC.GridColumn>
                  <BC.GridColumn gridPush={1} gridUnits={3}>
                    <BC.Heading headingLevel={3}>Full Name</BC.Heading>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2}>
                    <BC.Heading headingLevel={3}>Expires on</BC.Heading>
                  </BC.GridColumn>

                </BC.GridRow>
                <BC.GridRow spacing="mini">

                  <BC.GridColumn gridUnits={3}>
                    <BC.RadioButton checked="true"/><BC.LetterSpace size="base"/>
                    <BC.Text  textColor="secondary">American Express</BC.Text>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2}>
                    <BC.Paragraph  textColor="secondary">****-****-****-1041</BC.Paragraph>
                  </BC.GridColumn>
                  <BC.GridColumn gridPush={1} gridUnits={2}>
                    <BC.Paragraph  textColor="secondary">John Dough</BC.Paragraph>
                  </BC.GridColumn>
                  <BC.GridColumn gridPush={1} gridUnits={2}>
                    <BC.Paragraph  textColor="secondary">02-18</BC.Paragraph>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last">
                    <BC.Link url={"/prototypes/brickcity/payment-information"}>Edit / Remove</BC.Link>
                  </BC.GridColumn>
                  <BC.GridColumn gridPush={1} gridUnits={3} position="last">



                  </BC.GridColumn>

                </BC.GridRow>
                <BC.GridRow spacing="base">

                  <BC.GridColumn gridUnits={3}>
                    <BC.RadioButton/><BC.LetterSpace size="base"/>
                  <BC.Text textColor="secondary" >Visa</BC.Text>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2}>
                    <BC.Paragraph  textColor="secondary">****-****-****-2121</BC.Paragraph>
                  </BC.GridColumn>
                  <BC.GridColumn gridPush={1} gridUnits={2}>
                    <BC.Paragraph  textColor="secondary">John Dough</BC.Paragraph>
                  </BC.GridColumn>
                  <BC.GridColumn gridPush={1} gridUnits={2}>
                    <BC.Paragraph  textColor="secondary">10-19</BC.Paragraph>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={2} position="last">
                    <BC.Link url={"/prototypes/brickcity/payment-information"}>Edit / Remove</BC.Link>
                  </BC.GridColumn>
                </BC.GridRow>
  <BC.Expander hideText="Close Form" showText="+ Add a New Card">

  <BC.Box hasBorder={false} paddingSize="none" spacing="base">



<BC.Heading spacing="base" headingLevel={2}>Add a Credit Card</BC.Heading>

<BC.Divider spacing="base" />


      <BC.GridRow>

          <BC.GridColumn gridUnits={6}>

<BC.Heading headingLevel={3} hasBold={true} spacing="mini">Credit Card Type</BC.Heading>
              <BC.GridRow spacing="mini">
                <BC.GridColumn gridUnits={10}>
              <BC.Dropdown textColor="secondary">
              <BC.DropdownOption>American Express</BC.DropdownOption>
            <BC.DropdownOption>Visa</BC.DropdownOption>
                </BC.Dropdown>

              {/*  <BC.GridRow spacing="base">
                  <BC.GridColumn gridUnits={4} inline={true}>
                    <BC.Button buttonType="primary" >Save Changes</BC.Button>
                            </BC.GridColumn>
                  <BC.GridColumn gridUnits={4}>
                    <BC.Button inline={true}>Cancel</BC.Button>
                                        </BC.GridColumn>
                                      </BC.GridRow>*/}
              </BC.GridColumn>
              </BC.GridRow>



<BC.GridRow spacing="mini">
  <BC.GridColumn gridUnits={10} >
  <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Credit Card Number</BC.Heading>
  <BC.TextInput  placeholder="1234567891012345"></BC.TextInput>
  </BC.GridColumn>

</BC.GridRow>



  <BC.GridRow spacing="mini">
    <BC.GridColumn gridUnits={10} >
<BC.Heading headingLevel={3} hasBold={true} spacing="mini">Cardholder Name</BC.Heading>
    <BC.TextInput  placeholder="John Dough"></BC.TextInput>


    </BC.GridColumn>

  </BC.GridRow>

        <BC.GridRow spacing="base">
            <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Credit Card Type</BC.Heading>
          <BC.GridColumn gridUnits={4}>

          <BC.Dropdown textColor="secondary">

          <BC.DropdownOption>02</BC.DropdownOption>
          </BC.Dropdown>

            </BC.GridColumn>
              <BC.GridColumn gridUnits={4}>

            <BC.Dropdown textColor="tertiary">

            <BC.DropdownOption>2017</BC.DropdownOption>
            </BC.Dropdown>
                </BC.GridColumn>
        </BC.GridRow>


        <BC.GridRow spacing="small">

          <BC.Checkbox spacing="mini" checked={false} /><BC.LetterSpace />
            <BC.Text textColor="secondary">Use this card for my membership. </BC.Text>
</BC.GridRow>
          </BC.GridColumn>


{/* RIGHT Section*/}




          <BC.GridColumn gridUnits={6} gridPush={1} position="last" spacingTop="none">



<BC.GridRow spacing="mini" >

<BC.GridColumn gridUnits={10} last={false}  textAlign="left">
    <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Address Line 1</BC.Heading>
<BC.TextInput  placeholder="123 Sesame Street"></BC.TextInput>

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
    <BC.Heading headingLevel={3} hasBold={true} spacing="mini">City</BC.Heading>
    <BC.TextInput placeholder="New York"></BC.TextInput>


    </BC.GridColumn>

  </BC.GridRow>



        <BC.GridRow spacing="mini">
          <BC.GridColumn gridUnits={6} >
            <BC.Heading headingLevel={3} hasBold={true} spacing="mini">State / Province</BC.Heading>
            <BC.Dropdown textColor="tertiary">
            <BC.DropdownOption>NY</BC.DropdownOption>
            </BC.Dropdown>
          </BC.GridColumn>


        </BC.GridRow>

        <BC.GridRow spacing="mini">
          <BC.GridColumn gridUnits={6} >
    <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Zip / Postal Code</BC.Heading>
          <BC.TextInput placeholder="101010"></BC.TextInput>


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


        <BC.GridRow spacing="large">
          <BC.GridColumn gridUnits={10} >
    <BC.Heading headingLevel={3} hasBold={true} spacing="mini">Phone Number</BC.Heading>
          <BC.TextInput placeholder="123-456-7890"></BC.TextInput>


          </BC.GridColumn>

        </BC.GridRow>

        <BC.GridRow>
          <BC.GridColumn inline={false} gridUnits={4}>
            <BC.Button>Cancel</BC.Button>



                                </BC.GridColumn>
<BC.GridColumn gridUnits={4} inline={false}>
<BC.Button buttonType="primary" >Add Credit Card</BC.Button>
      </BC.GridColumn>
                              </BC.GridRow>



          </BC.GridColumn>

      </BC.GridRow>
      </BC.Box>



</BC.Expander>
              </BC.Box>



            </BC.GridColumn>

          </BC.GridRow>

<BC.GridRow>

<BC.Box backgroundColor="primary" hasBorder={true} paddingSize="base" spacing="large">

  <BC.GridRow spacing="none">
    <BC.Heading headingLevel={2} spacing="base" textColor="base">
      Redeem Promotional Code
    </BC.Heading>
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



</BC.GridRow>




        </div>

      </div>
    )
  }
}

export default Billings_B;
