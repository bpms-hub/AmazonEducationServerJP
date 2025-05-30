import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../ubiquity/cc';

class AccountDetailsMobile extends React.Component {
  render() {
    return (
      <BC.Section textAlign="left">
        {/*Account Infomrmation*/}
        <BC.GridRow>
          <BC.Box backgroundColor="secondary" spacing="base">
            <BC.GridRow>
              <BC.GridColumn gridUnits={7} spacing="none">
                <BC.Heading headingLevel={3} spacing="none">Card Type:</BC.Heading>
                <BC.Paragraph spacing="micro" textColor="secondary">American Express ***-1041</BC.Paragraph>
              </BC.GridColumn>

            </BC.GridRow>
            <BC.GridRow>
              <BC.Heading headingLevel={3} spacing="none">Name on Card:</BC.Heading>
              <BC.Paragraph spacing="micro" textColor="secondary">Lisa Del Monte</BC.Paragraph>
            </BC.GridRow>
            <BC.GridRow spacing="small">
              <BC.Heading headingLevel={3} spacing="none">Exp. Date</BC.Heading>
              <BC.Paragraph spacing="micro" textColor="secondary">02-2020</BC.Paragraph>
            </BC.GridRow>
            <BC.GridRow>
              <BC.Text textColor="tertiary" spacing="none">Default Card</BC.Text>
              <BC.LetterSpace spacing="base"/>
              |
              <BC.LetterSpace spacing="base"/>

              <BC.Link app={true} url={"/prototypes/brickcity-mobile/edit-card"}>Edit</BC.Link>

            </BC.GridRow>
          </BC.Box>

          <BC.Box backgroundColor="secondary" spacing="base">
            <BC.GridRow>
              <BC.GridColumn gridUnits={7} spacing="none">
                <BC.Heading headingLevel={3} spacing="none">Card Type:</BC.Heading>
                <BC.Paragraph spacing="micro" textColor="secondary">MasterCard ***-1041</BC.Paragraph>
              </BC.GridColumn>

            </BC.GridRow>
            <BC.GridRow>
              <BC.Heading headingLevel={3} spacing="none">Name on Card:</BC.Heading>
              <BC.Paragraph spacing="micro" textColor="secondary">Lisa Del Monte</BC.Paragraph>
            </BC.GridRow>
            <BC.GridRow spacing="small">
              <BC.Heading headingLevel={3} spacing="none">Exp. Date</BC.Heading>
              <BC.Paragraph spacing="micro" textColor="secondary">03-2020</BC.Paragraph>
            </BC.GridRow>
            <BC.GridRow>
              <BC.Link spacing="none">Set to Default</BC.Link>
              <BC.LetterSpace spacing="base"/>
              |
              <BC.LetterSpace spacing="base"/>
              <BC.Link spacing="micro" url={"/prototypes/brickcity-mobile/edit-card"}>Edit</BC.Link>
            </BC.GridRow>
          </BC.Box>

        </BC.GridRow>

        <BC.GridRow spacing="large">

          <BC.Box backgroundColor="secondary" paddingSize="none">
            <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/add-card"}>Add a new card</CC.MobileLink>
          </BC.Box>

        </BC.GridRow>

      </BC.Section>
    )
  }
}
export default AccountDetailsMobile;