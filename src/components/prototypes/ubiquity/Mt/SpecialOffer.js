import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter'

class SpecialOffer extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
<div className="bc-container">
    <BC.GridRow spacingTop="large" spacing="large" textAlign="left">
      <BC.GridColumn gridUnits={3}>
        <BC.Section spacing="small">
          <BC.Text textSize="medium">Account Information</BC.Text>
        </BC.Section>
        <BC.List listType="nostyle" textSize="small">
          <BC.ListItem spacingTop="micro" textBold={true}>Name on Card:</BC.ListItem>
          <BC.ListItem>Lisa Del Monte</BC.ListItem>
          <BC.ListItem textBold={true}>Credit Card Type:</BC.ListItem>
          <BC.ListItem>Visa</BC.ListItem>
          <BC.ListItem textBold={true}>Card Number:</BC.ListItem>
          <BC.ListItem spacing="mini">xxxx-5683</BC.ListItem>
          <BC.ListItem spacing="mini">
            <BC.Link>Edit payment method</BC.Link>
          </BC.ListItem>
        </BC.List>
      </BC.GridColumn>

<BC.GridColumn>




    <BC.GridRow spacing="base" textAlign="center">
            <BC.GridColumn gridUnits={6} gridPush={3}>

                            <BC.Heading spacing="medium" headingLevel={1}>Special Offer</BC.Heading>

            <CC.Card spacing="base"
              headerColor="#197397"
              backgroundColor="#1999cb"
              headerName="3 EXTRA CREDITS"
              primaryPrice="$149.50 / year"
              secondaryPrice="$14.95 / credit"
              logoType="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg"
              cardName="AudibleListener® Gold Annual"
              >

              <BC.Text spacing="base" textBold={true}>You Get:</BC.Text>
              <BC.GridRow spacing="micro" spacingTop="micro">
                <BC.Text spacing="large">2 credits per month</BC.Text>
              </BC.GridRow>

              <BC.GridRow spacing="micro" spacingTop="base" textAlign="center">
                <BC.Divider spacing="base" spacingTop="mini"/>
                <BC.Text textBold={true}>This Plan Also Includes:</BC.Text>
                <BC.Paragraph spacing="medium">
                  The ability to rollover up to 12 credits at a time for as long as your membership is active
                </BC.Paragraph>
              </BC.GridRow>
              <BC.Button buttonType="primary" spacing="base" inactiveText="Primary" activeText="Selected">Buy Now</BC.Button>


            </CC.Card>



  <BC.GridRow spacing="medium" textAlign="center">
      <BC.Paragraph spacing="none" textColor="secondary">Always running out of credits?
      </BC.Paragraph>
      <BC.Link spacing="none">
        Find a plan that fits you better
      </BC.Link>
  </BC.GridRow>

</BC.GridColumn>
</BC.GridRow>


</BC.GridColumn>

            </BC.GridRow>
            </div>
                <ProdFooter/>
      </div>
    )
  }
}

export default SpecialOffer;
