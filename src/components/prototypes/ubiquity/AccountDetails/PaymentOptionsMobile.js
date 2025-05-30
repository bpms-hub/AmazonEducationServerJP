import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';


class PaymentOptionsMobile extends React.Component {
  render() {
    return (
      <div>
        <ProdHeaderMobile/>
        <div className="bc-container">

          <BC.Section spacingTop="medium">

            <CC.MobilePageTitle first={true}><BC.Heading headingLevel={2}>Manage Payment Options</BC.Heading></CC.MobilePageTitle>


<BC.GridRow spacing="large">
  <BC.GridColumn gridUnits={12}>

                      <BC.List listType="nostyle" spacing="large">
                        <BC.ListItem spacingTop="base">
                          <CC.MobileLink  app={true} url={"/prototypes/brickcity-mobile/payment-information"} hasTopBorder={this.props.hideCategories ? true : null}> <BC.Text  textBold={true}>Default Payment:</BC.Text> Visa ***-9011<BC.Paragraph >Name on Card: John Dough </BC.Paragraph></CC.MobileLink>
                        </BC.ListItem>
</BC.List>

<BC.Heading headingLevel={3} spacing="small">PAYMENT METHODS</BC.Heading>
<BC.Divider spacing="small"/>
  <BC.List listType="nostyle" spacing="large">
    <BC.ListItem>
      <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/payment-information"} hasTopBorder={this.props.hideCategories ? true : null}><BC.Heading headingLevel={3} textBold={true}>Visa ***-9011 (default payment method)</BC.Heading>Name on Card: John Dough<BC.Paragraph>Exp. Date: 09/2020</BC.Paragraph></CC.MobileLink>
    </BC.ListItem>
    <BC.ListItem spacingTop="base">
      <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/payment-information"} hasTopBorder={this.props.hideCategories ? true : null}><BC.Paragraph textBold={true}>+ Add a New Credit Card</BC.Paragraph></CC.MobileLink>
    </BC.ListItem>
</BC.List>

  </BC.GridColumn>

</BC.GridRow>



          </BC.Section>
        </div>
        <ProdFooterMobile/>
      </div>
    )
  }
}
export default PaymentOptionsMobile;
