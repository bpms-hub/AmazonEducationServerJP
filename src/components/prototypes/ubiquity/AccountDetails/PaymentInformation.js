import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class PaymentInformation extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          <BC.Breadcrumbs breadcrumbTrail={[
             {
               name: "Home",
               url: "/prototypes/brickcity"
             }, {
               name: "Account Details",
               url: "/prototypes/brickcity/account-details-b"
             }, {
               name: "Payment Information"
             }
           ]} spacing="small"/>

      <BC.Box hasBorder={true}>
    {/*  <BC.Button buttonType="primary">Save Changes</BC.Button>*/}


  <BC.Heading spacing="base" headingLevel={2}>Edit / Remove Card</BC.Heading>

<BC.Divider spacing="base" />


          <BC.GridRow>

              <BC.GridColumn gridUnits={6}>

<BC.Text textColor="secondary">Card Type</BC.Text>
                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={10}>
                  <BC.Dropdown textColor="tertiary">
                  <BC.DropdownOption>American Express****-****-****-1041</BC.DropdownOption>
                <BC.DropdownOption>Visa ****-****-****-320</BC.DropdownOption>
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



    <BC.GridRow spacing="base">
      <BC.GridColumn gridUnits={10} >
        <BC.Text textColor="secondary">Credit Card Number (No spaces or dashes)</BC.Text>
      <BC.TextInput  placeholder="1234567891012345"></BC.TextInput>
      </BC.GridColumn>

    </BC.GridRow>



      <BC.GridRow spacing="base">
        <BC.GridColumn gridUnits={10} >
  <BC.Text textColor="secondary">Cardholder Name (As it appears on card)</BC.Text>
        <BC.TextInput  placeholder="John Dough"></BC.TextInput>


        </BC.GridColumn>

      </BC.GridRow>

            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={5}>
                  <BC.Text textColor="secondary">Month</BC.Text>
              <BC.Dropdown textColor="tertiary">

              <BC.DropdownOption>02</BC.DropdownOption>
              </BC.Dropdown>

                </BC.GridColumn>
                  <BC.GridColumn gridUnits={5}>
                                  <BC.Text textColor="secondary">Year</BC.Text>
                <BC.Dropdown textColor="tertiary">

                <BC.DropdownOption>2017</BC.DropdownOption>
                </BC.Dropdown>
                    </BC.GridColumn>
            </BC.GridRow>


            <BC.GridRow spacing="base">

              <BC.Checkbox spacing="mini" checked={true} /><BC.LetterSpace />
                <BC.Text textColor="secondary">Use this card for my membership. </BC.Text>
  </BC.GridRow>
              </BC.GridColumn>


{/* RIGHT Section*/}




              <BC.GridColumn gridUnits={6} position="last" spacingTop="none">



  <BC.GridRow spacing="base" >

    <BC.GridColumn gridUnits={10} last={false}  textAlign="left">
      <BC.Text textColor="secondary">Address Line 1</BC.Text>
    <BC.TextInput  placeholder="123 Sesame Street"></BC.TextInput>

    </BC.GridColumn>
  </BC.GridRow>




    <BC.GridRow spacing="base">
      <BC.GridColumn gridUnits={10} >
  <BC.Text textColor="secondary">Address Line 2</BC.Text>
      <BC.TextInput  placeholder="2C"></BC.TextInput>


      </BC.GridColumn>

    </BC.GridRow>



      <BC.GridRow spacing="base">
        <BC.GridColumn gridUnits={10} >
  <BC.Text textColor="secondary">City</BC.Text>
        <BC.TextInput placeholder="New York"></BC.TextInput>


        </BC.GridColumn>

      </BC.GridRow>



            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={10} >
              <BC.Text textColor="secondary">State/Province</BC.Text>
                <BC.Dropdown textColor="tertiary">
                <BC.DropdownOption>NY</BC.DropdownOption>
                </BC.Dropdown>
              </BC.GridColumn>


            </BC.GridRow>

            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={10} >
  <BC.Text textColor="secondary">Zip/Postal Code</BC.Text>
              <BC.TextInput placeholder="101010"></BC.TextInput>


              </BC.GridColumn>



            </BC.GridRow>

            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={10} >
              <BC.Text textColor="secondary">Country</BC.Text>

                <BC.Dropdown textColor="tertiary">
                <BC.DropdownOption>United States of America</BC.DropdownOption>
                </BC.Dropdown>
              </BC.GridColumn>


            </BC.GridRow>


            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={10} >
  <BC.Text textColor="secondary">Phone Number</BC.Text>
              <BC.TextInput placeholder="123-456-7890"></BC.TextInput>


              </BC.GridColumn>



            </BC.GridRow>

            <BC.GridRow spacing="base">
              <BC.GridColumn inline={true} gridUnits={5}>
                <BC.Button >Delete Card</BC.Button>



                                    </BC.GridColumn>
<BC.GridColumn gridUnits={5} inline={true}>
  <BC.Button buttonType="primary" >Update Card</BC.Button>
          </BC.GridColumn>
                                  </BC.GridRow>



              </BC.GridColumn>

          </BC.GridRow>
          </BC.Box>


        </div>
</div>
      )
    }
  }
  export default PaymentInformation;
