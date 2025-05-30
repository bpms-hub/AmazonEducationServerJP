import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../ubiquity/cc';
import ProdHeaderMobile from '../../ubiquity/Header/ProdHeaderMobile';
import ProdFooterMobile from '../../ubiquity/Footer/ProdFooterMobile';


class EditCardMobile extends React.Component {
  render() {
    return (
      <div>
        <ProdHeaderMobile/>

        <CC.MobilePageTitle textAlign="center" first={true} url={"/prototypes/brickcity-mobile/account-details/billing"}>
          <BC.Text textColor="base">Edit Card</BC.Text>
        </CC.MobilePageTitle>

        <div className="bc-container">
          <BC.Section spacingTop="base" textAlign="left">
            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={12} >
                <BC.Heading headingLevel={3} hasBold={true} spacing="micro">Card Number</BC.Heading>
                <BC.TextInput  placeholder="1234567891012345"></BC.TextInput>
              </BC.GridColumn>

            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.Heading headingLevel={3} hasBold={true} spacing="micro">Expires</BC.Heading>
              <BC.GridColumn gridUnits={6}>

                <BC.Dropdown textColor="secondary">

                  <BC.DropdownOption>02</BC.DropdownOption>
                </BC.Dropdown>

              </BC.GridColumn>
              <BC.GridColumn gridUnits={6} position="last">

                <BC.Dropdown textColor="tertiary">

                  <BC.DropdownOption>2017</BC.DropdownOption>
                </BC.Dropdown>
              </BC.GridColumn>
            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={12} >
                <BC.Heading headingLevel={3} hasBold={true} spacing="micro">Name on Card</BC.Heading>
                <BC.TextInput  placeholder="John Dough"></BC.TextInput>

              </BC.GridColumn>

            </BC.GridRow>
            {/* RIGHT Section*/}
            <BC.GridRow spacing="mini" >

              <BC.GridColumn gridUnits={12} last={false}  textAlign="left">
                <BC.Heading headingLevel={3} hasBold={true} spacing="micro">Address 1</BC.Heading>
                <BC.TextInput  placeholder="123 Sesame Street"></BC.TextInput>

              </BC.GridColumn>
            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={12} >
                <BC.Heading headingLevel={3} hasBold={true} spacing="micro">Address 2</BC.Heading>
                <BC.TextInput  placeholder="2C"></BC.TextInput>

              </BC.GridColumn>

            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={12} >
                <BC.Heading headingLevel={3} hasBold={true} spacing="micro">City</BC.Heading>
                <BC.TextInput placeholder="New York"></BC.TextInput>

              </BC.GridColumn>

            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={12} >
                <BC.Heading headingLevel={3} hasBold={true} spacing="micro">State / Province</BC.Heading>
                <BC.Dropdown textColor="tertiary">
                  <BC.DropdownOption>NY</BC.DropdownOption>
                </BC.Dropdown>
              </BC.GridColumn>

            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={12} >
                <BC.Heading headingLevel={3} hasBold={true} spacing="micro">Country</BC.Heading>

                <BC.Dropdown textColor="tertiary">
                  <BC.DropdownOption>United States of America</BC.DropdownOption>
                </BC.Dropdown>
              </BC.GridColumn>

            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={6} >
                <BC.Heading headingLevel={3} hasBold={true} spacing="micro">Zip / Postal Code</BC.Heading>
                <BC.TextInput placeholder="101010"></BC.TextInput>

              </BC.GridColumn>

              <BC.GridColumn gridunits={5} gridPush={1} spacingTop="extra-large">
                <BC.Text textColor="tertiary" textBold={false}>Autofill copy</BC.Text>
              </BC.GridColumn>

            </BC.GridRow>

            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={12} >
                <BC.Heading headingLevel={3} hasBold={true} spacing="micro">Phone</BC.Heading>
                <BC.TextInput placeholder="123-456-7890"></BC.TextInput>
              </BC.GridColumn>
            </BC.GridRow>

            <BC.GridRow spacing="micro">
              <BC.Checkbox spacing="mini" checked={false} />
              <BC.LetterSpace />
              <BC.Text textColor="secondary">Use this card for my membership</BC.Text>
            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={12} inline={false}>
                <BC.Button buttonType="primary">Submit</BC.Button>
              </BC.GridColumn>
            </BC.GridRow>
            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={12} inline={false}>
                <BC.Button buttonType="base">Remove Card</BC.Button>
              </BC.GridColumn>
            </BC.GridRow>

          </BC.Section>
        </div>

        <ProdFooterMobile/>
      </div>
    )
  }
}
export default EditCardMobile;