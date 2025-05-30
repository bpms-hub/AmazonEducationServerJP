import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class PaymentInformationMobile extends React.Component {
  render() {
    return (
      <div>
          <ProdHeaderMobile/>
        <div className="bc-container">

          <BC.GridRow spacingTop="base">

          <BC.Heading textAlign="center" headingLevel={2}>Enter Card Information</BC.Heading>


    {/*  <BC.Button buttonType="primary">Save Changes</BC.Button>*/}



    <BC.GridRow spacingTop="base">
    <BC.Dropdown textColor="tertiary" spacing="base">
    <BC.DropdownOption>Select a card type</BC.DropdownOption>
    <BC.DropdownOption>Visa</BC.DropdownOption>
    <BC.DropdownOption>MasterCard</BC.DropdownOption>
    <BC.DropdownOption>American Express</BC.DropdownOption>
    <BC.DropdownOption>Discover</BC.DropdownOption>
    </BC.Dropdown>


      <BC.TextInput spacing="base" placeholder="Credit Card Number (No spaces or dashes)"></BC.TextInput>




    </BC.GridRow>

</BC.GridRow>

      <BC.GridRow spacing="base">
        <BC.TextInput  placeholder="Cardholder Name (As it appears on card)"></BC.TextInput>
      </BC.GridRow>



            <BC.GridRow spacing="base">
              <BC.Dropdown textColor="tertiary">
              <BC.DropdownOption>Month</BC.DropdownOption>
              </BC.Dropdown>
            </BC.GridRow>

                <BC.GridRow spacing="base">
                            <BC.Dropdown textColor="tertiary">
                            <BC.DropdownOption>Year</BC.DropdownOption>
                            </BC.Dropdown>
  </BC.GridRow>

  <BC.GridRow spacing="base">
                <BC.TextInput  placeholder="Card Holder Name"></BC.TextInput>
</BC.GridRow>


  <BC.GridRow spacing="base" >
    <BC.TextInput  placeholder="Address Line 1"></BC.TextInput>
  </BC.GridRow>




    <BC.GridRow spacing="base">
      <BC.TextInput  placeholder="Address Line 2"></BC.TextInput>
    </BC.GridRow>



      <BC.GridRow spacing="base">
        <BC.TextInput placeholder="City"></BC.TextInput>
      </BC.GridRow>



            <BC.GridRow spacing="base">
                <BC.Dropdown textColor="tertiary">
                <BC.DropdownOption>State/Province</BC.DropdownOption>
                </BC.Dropdown>
            </BC.GridRow>

            <BC.GridRow spacing="base">
              <BC.TextInput placeholder="Zip/Postal code"></BC.TextInput>
            </BC.GridRow>

            <BC.GridRow spacing="base">
                <BC.Dropdown textColor="tertiary">
                <BC.DropdownOption>Country</BC.DropdownOption>
                </BC.Dropdown>
            </BC.GridRow>


            <BC.GridRow spacing="base">
              <BC.TextInput placeholder="Phone number"></BC.TextInput>
            </BC.GridRow>


            <BC.GridRow spacing="base">
              <BC.Checkbox spacing="mini" disabled={true} label="Use this card for my membership." />
    </BC.GridRow>

            <BC.GridRow spacing="base">

<BC.GridColumn gridUnits={12} inline={true}>
  <BC.Button buttonType="primary" >Submit</BC.Button>
          </BC.GridColumn>
                                  </BC.GridRow>
        </div>
            <ProdFooterMobile/>
</div>
      )
    }
  }
  export default PaymentInformationMobile;
