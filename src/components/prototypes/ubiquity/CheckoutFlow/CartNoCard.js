import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class CartNoCard extends React.Component {

  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
        <BC.GridRow>
          <BC.GridColumn gridUnits={9}>
          {/* Progress Bar */}
          <CC.ProgressBarRow textSize="medium" textBold={true}>
            <CC.ProgressBar activeState={true} spacing="base" widthPercentage={33.3}>Cart</CC.ProgressBar>
            <CC.ProgressBar spacing="base" widthPercentage={33.3}>Place Order</CC.ProgressBar>
            <CC.ProgressBar spacing="base" widthPercentage={33.3}>Ready to Download</CC.ProgressBar>
          </CC.ProgressBarRow>

            <BC.GridRow>
                <BC.Heading headingLevel="1" spacing="small">Add Credit Card</BC.Heading>
            </BC.GridRow>

            <BC.Divider spacing="small"/>

            <BC.GridRow spacing="large">
              <BC.GridColumn gridUnits={5}>
              <BC.Heading headingLevel={3} spacing="micro">Credit Card Type</BC.Heading>
              <BC.Dropdown spacing="base">
                <BC.DropdownOption>Select a card type</BC.DropdownOption>
                <BC.DropdownOption>Option 2</BC.DropdownOption>
                <BC.DropdownOption>Option 3</BC.DropdownOption>
                <BC.DropdownOption>Option 4</BC.DropdownOption>
              </BC.Dropdown>
              <BC.Heading headingLevel={3} spacing="micro">Credit Card Number</BC.Heading>
              <BC.TextInput spacing="base"></BC.TextInput>
              <BC.Heading headingLevel={3} spacing="micro">Card holder Name</BC.Heading>
              <BC.TextInput spacing="base"></BC.TextInput>
              <BC.Heading headingLevel={3} spacing="micro">Expiration Date</BC.Heading>
              <BC.Dropdown inline={true} spacing="medium">
                <BC.DropdownOption>Month</BC.DropdownOption>
                <BC.DropdownOption>Option 2</BC.DropdownOption>
                <BC.DropdownOption>Option 3</BC.DropdownOption>
                <BC.DropdownOption>Option 4</BC.DropdownOption>
              </BC.Dropdown>
              <BC.LetterSpace />
              <BC.Dropdown inline={true}>
                <BC.DropdownOption>Year</BC.DropdownOption>
                <BC.DropdownOption>Option 2</BC.DropdownOption>
                <BC.DropdownOption>Option 3</BC.DropdownOption>
                <BC.DropdownOption>Option 4</BC.DropdownOption>
              </BC.Dropdown>
              <BC.Section>
                <BC.Checkbox />
                <BC.LetterSpace />
                <BC.Text>Use this card for my membership</BC.Text>
              </BC.Section>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={5} position="last">
                <BC.Heading headingLevel={3} spacing="micro">Address Line 1</BC.Heading>
                <BC.TextInput spacing="base"></BC.TextInput>
                <BC.Heading headingLevel={3} spacing="micro">Address Line 2</BC.Heading>
                <BC.TextInput spacing="base"></BC.TextInput>
                <BC.Heading headingLevel={3} spacing="micro">City</BC.Heading>
                <BC.TextInput spacing="base"></BC.TextInput>
                <BC.Heading headingLevel={3} spacing="micro">State/Province</BC.Heading>
                <BC.Dropdown spacing="base">
                  <BC.DropdownOption></BC.DropdownOption>
                  <BC.DropdownOption>Option 2</BC.DropdownOption>
                  <BC.DropdownOption>Option 3</BC.DropdownOption>
                  <BC.DropdownOption>Option 4</BC.DropdownOption>
                </BC.Dropdown>
                <BC.Heading headingLevel={3} spacing="micro">Zip/Postal Code</BC.Heading>
                <BC.TextInput spacing="base"></BC.TextInput>
                <BC.Heading headingLevel={3} spacing="micro">Country</BC.Heading>
                <BC.Dropdown spacing="base">
                  <BC.DropdownOption>United States</BC.DropdownOption>
                  <BC.DropdownOption>Option 2</BC.DropdownOption>
                  <BC.DropdownOption>Option 3</BC.DropdownOption>
                  <BC.DropdownOption>Option 4</BC.DropdownOption>
                </BC.Dropdown>
                <BC.Heading headingLevel={3} spacing="micro">Phone Number</BC.Heading>
                <BC.TextInput spacing="base"></BC.TextInput>
              </BC.GridColumn>
            </BC.GridRow>

              <BC.GridRow spacing="extra-large">
                <BC.GridColumn gridUnits={3} gridPush={6}>
                  <BC.Button buttonType="secondary">Cancel</BC.Button>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={3} position="last">
                    <BC.Button app={true} url="/prototypes/brickcity/cart-step2" buttonType="primary">Add Credit Card</BC.Button>
                </BC.GridColumn>
              </BC.GridRow>

          </BC.GridColumn>

          <BC.GridColumn gridUnits={3} position="last">
              <CC.ProductDetail
                productTitle="In your Cart"
                verticalProduct={true}
                bookTitle = "Both Flesh and Not"
                bookAuthor = "David Foster Wallace"
              />
          </BC.GridColumn>

        </BC.GridRow>


          <ProdFooter/>
        </div>
      </div>
    )
  }

}

export default CartNoCard;
