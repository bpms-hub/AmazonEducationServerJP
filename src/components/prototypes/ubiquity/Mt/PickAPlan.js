import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter'

class PickAPlan extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>

         <BC.Box spacing="medium" heightCss="200px" backgroundColor="inverse" hasBorder={false}>
           <div className="bc-container">
           <BC.GridRow spacingTop="base">
             <BC.GridColumn gridUnits={4} gridPush={1}>
             <BC.Text  textSize="extra-large" textColor="inverse" spacing="medium">Join Us</BC.Text><br />
             <BC.Text textSize="large" textColor="inverse" spacing="medium">All of the good things<br />with none of the worries</BC.Text>
             </BC.GridColumn>
             </BC.GridRow>
           </div>
          </BC.Box>

          <BC.GridRow spacing="large" textAlign="center">
            <BC.Heading headingLevel={1}>Select your monthly plan</BC.Heading>
          </BC.GridRow>

<BC.GridRow spacing="medium" textAlign="center">
          <BC.GridColumn gridUnits={3} gridPush={3}>
                                <CC.Card spacing="base"
                                  headerColor="#197397"
                                  backgroundColor="#1999cb"
                                  headerName=""
                                  primaryPrice="$14.95 per month"
                                  secondaryPrice="$14.95 per credit"
                                  logoType="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg"
                                  cardName="GOLD MONTHLY"
                                  hasBorder={false}
                                  >

                                  <BC.GridRow spacingTop="small">
                                      <BC.Divider />

                                  </BC.GridRow>

                                  <BC.GridRow spacing="micro" spacingTop="small" textSize="small" textAlign="center">
                                    <BC.Text spacing="large">1 credits per month</BC.Text>
                                  </BC.GridRow>

                                  <BC.GridRow spacingTop="small" spacing="base">
                                  <BC.Text textSize="small" textColor="tertiary">
                                  Choose one great book a month. An ideal introduction to Audible.
                                  </BC.Text>
                                  </BC.GridRow>
                                  <BC.Button buttonType="primary" spacing="base" inactiveText="Primary" activeText="Selected">Let's Go</BC.Button>


                                </CC.Card>


          </BC.GridColumn>

          <BC.GridColumn gridUnits={3} gridPush={3}>

            <CC.Card spacing="base"
              headerColor="#574089"
              backgroundColor="#714fb7"
              headerName=""
              primaryPrice="$22.95 per year"
              secondaryPrice="$11.48 per credit"
              logoType="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg"
              cardName="PLATINUM MONTHLY"
                hasBorder={false}
              >

              <BC.GridRow spacingTop="small">
                  <BC.Divider />

              </BC.GridRow>

              <BC.GridRow spacing="micro" spacingTop="small" textSize="small" textAlign="center">
                <BC.Text spacing="large">1 credits per month</BC.Text>
              </BC.GridRow>

              <BC.GridRow spacingTop="small" spacing="base">
              <BC.Text textSize="small" textColor="tertiary">
              Double your listening while
  paying 20% less per title
              </BC.Text>
              </BC.GridRow>
              <BC.Button buttonType="primary" spacing="base" inactiveText="Primary" activeText="Selected">Let's Go</BC.Button>


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

        <ProdFooter/>
      </div>
    )
  }
}

export default PickAPlan;
