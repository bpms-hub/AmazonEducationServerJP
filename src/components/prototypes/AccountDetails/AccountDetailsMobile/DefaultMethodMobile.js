import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../ubiquity/cc';
import ProdHeaderMobile from '../../ubiquity/Header/ProdHeaderMobile';
import ProdFooterMobile from '../../ubiquity/Footer/ProdFooterMobile';


class DefaultMethodMobile extends React.Component {
  render() {
    return (
      <div>
        <ProdHeaderMobile/>
      <CC.MobilePageTitle textAlign="center" first={true}><BC.Text textColor="base">Default Payment</BC.Text></CC.MobilePageTitle>
        <div className="bc-container">

          <BC.Section spacingTop="small">



            {/*Account Infomrmation*/}
            <BC.GridRow spacingTop="base">
              <BC.Text  spacing="base" textBold={false} textColor="base"> DEFAULT PAYMENT</BC.Text>
            <BC.Divider spacingTop="mini" spacing="mini"/>

              <BC.GridColumn gridUnits={12} spacing="medium">

              <BC.GridRow>
                <BC.GridColumn gridUnits={6} spacing="none">
                <BC.Heading headingLevel={3} spacing="none">
                Card Type:
                </BC.Heading>
                </BC.GridColumn>
                  <BC.GridColumn gridUnits={6} textAlign="right" spacing="none" position="last">
                  <BC.Link textColor="inactive" url={"/prototypes/brickcity-mobile/edit-card"}>Change</BC.Link>
              </BC.GridColumn>
                <BC.Paragraph spacing="micro" textColor="secondary">American Express ***-1041</BC.Paragraph>
              </BC.GridRow>
              <BC.GridRow>
                <BC.Heading headingLevel={3} spacing="none">
                Name on Card:
                </BC.Heading>
                <BC.Paragraph spacing="micro" textColor="secondary">Lisa Del Monte</BC.Paragraph>
              </BC.GridRow>
              <BC.GridRow>
                <BC.Heading headingLevel={3} spacing="none">
                Exp. Date:
                </BC.Heading>
                <BC.Paragraph spacing="micro" textColor="secondary">03-2020</BC.Paragraph>
              </BC.GridRow>
  <BC.Divider spacingTop="mini" spacing="mini"/>

  <BC.GridRow>
    <BC.GridColumn gridUnits={6} spacing="none">
    <BC.Heading headingLevel={3} spacing="none">
    Card Type:
    </BC.Heading>
    </BC.GridColumn>
      <BC.GridColumn gridUnits={6} textAlign="right" spacing="none" position="last">
      <BC.Link>Set to Default</BC.Link>
  </BC.GridColumn>
    <BC.Paragraph spacing="micro" textColor="secondary">American Express ***-1041</BC.Paragraph>
  </BC.GridRow>
              <BC.GridRow>
                <BC.Heading headingLevel={3} spacing="none">
                Name on Card:
                </BC.Heading>
                <BC.Paragraph spacing="micro" textColor="secondary">Lisa Del Monte</BC.Paragraph>
              </BC.GridRow>
              <BC.GridRow>
                <BC.Heading headingLevel={3} spacing="none">
                Exp. Date:
                </BC.Heading>
                <BC.Paragraph spacing="micro" textColor="secondary">02-2020</BC.Paragraph>
              </BC.GridRow>



              </BC.GridColumn>

</BC.GridRow>
          </BC.Section>
        </div>
        <ProdFooterMobile/>
      </div>
    )
  }
}
export default DefaultMethodMobile;
