import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class PickAPlanMobile extends React.Component {
  render() {
    return (
      <div>
        <ProdHeaderMobile />




         <BC.Box spacing="medium" heightCss="140px" backgroundColor="inverse" hasBorder={false}>
           <div className="bc-container">
           <BC.GridRow spacingTop="base">
             <BC.GridColumn gridUnits={12} >
             <BC.Text  textSize="large" textColor="inverse" spacing="medium">Join Us</BC.Text><br />
             <BC.Text textSize="base" textColor="inverse" spacing="medium">All of the good things with none of the worries</BC.Text>
             </BC.GridColumn>
             </BC.GridRow>
           </div>
          </BC.Box>

          <BC.GridRow spacing="medium" textAlign="center">
            <BC.Heading headingLevel={1}>Select your monthly plan</BC.Heading>
          </BC.GridRow>

<BC.GridRow spacing="medium" textAlign="center">
          <BC.GridColumn gridUnits={6}>


                                <CC.Card

                                   spacing="base"
                                  headerColor="#197397"
                                  backgroundColor="#1999cb"
                                  headerName="3 MONTHS"
                                  primaryPrice="$14.95 / month"
                                  secondaryPrice="$14.95 / credit"
                                  logoType="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg"
                                  cardName="AudibleListener® Gold"
                                  >

                                  <BC.Text spacing="base" textBold={true}>You Get:</BC.Text>
                                  <BC.GridRow spacing="micro" spacingTop="micro">
                                    <BC.Text spacing="large">2 credits per month</BC.Text>
                                  </BC.GridRow>

                                  <BC.GridRow spacing="micro" spacingTop="base" textAlign="left">
                                    <BC.Divider spacing="base" spacingTop="mini"/>
                                    <BC.Text textBold={true}>This Plan Also Includes:</BC.Text>
                                    <BC.Paragraph spacing="medium">
                                      The ability to rollover up to 12 credits at a time for as long as your membership is active
                                    </BC.Paragraph>
                                  </BC.GridRow>
                                  <BC.Button buttonType="primary" spacing="base" inactiveText="Primary" activeText="Selected">Upgrade</BC.Button>


                                </CC.Card>


          </BC.GridColumn>

          <BC.GridColumn gridUnits={6} position="last">

            <CC.Card spacing="base"
              headerColor="#574089"
              backgroundColor="#714fb7"
              headerName="3 MONTHS"
              primaryPrice="$22.00 / month"
              secondaryPrice="$22.00 / credit"
              logoType="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg"
              cardName="AudibleListener® Gold"
              >

              <BC.Text spacing="base" textBold={true}>You Get:</BC.Text>
              <BC.GridRow spacing="micro" spacingTop="micro">
                <BC.Text spacing="large">2 credits per month</BC.Text>
              </BC.GridRow>

              <BC.GridRow spacing="micro" spacingTop="base" textAlign="left">
                <BC.Divider spacing="base" spacingTop="mini"/>
                <BC.Text textBold={true}>This Plan Also Includes:</BC.Text>
                <BC.Paragraph spacing="medium">
                  The ability to rollover up to 12 credits at a time for as long as your membership is active
                </BC.Paragraph>
              </BC.GridRow>
              <BC.Button buttonType="primary" spacing="base" inactiveText="Primary" activeText="Selected">Upgrade</BC.Button>


            </CC.Card>

          </BC.GridColumn>



</BC.GridRow>

<BC.GridRow spacing="medium" textAlign="center">

<BC.Paragraph spacing="mini" textBold={true} textSize="base">
  All Gold and Platinum Plans Include:
</BC.Paragraph>
<BC.List listType="nostyle">
  <BC.ListItem>
    <BC.Paragraph spacing="micro" textColor="secondary">30% off on all audiobooks and programs not purchased with audio credits
    </BC.Paragraph>
  </BC.ListItem>
  <BC.ListItem>
    <BC.Paragraph spacing="micro" textColor="secondary">
      Enjoy free Upgrade audio programs and samples
    </BC.Paragraph>
  </BC.ListItem>
  <BC.ListItem>
    <BC.Paragraph spacing="micro" textColor="secondary">
      A complimentary subscription to the digital audio version of The New York Times or The Wall Street Journal
    </BC.Paragraph>
  </BC.ListItem>
</BC.List>

</BC.GridRow>

        <ProdFooterMobile />
      </div>
    )
  }
}

export default PickAPlanMobile;
