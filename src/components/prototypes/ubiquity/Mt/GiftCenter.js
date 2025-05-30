import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter'

class GiftCenter extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>

        <BC.Section spacing="extra-large" spacingTop="medium">
          <div className="bc-container">

            <BC.Heading spacing="base">The Gift Center</BC.Heading>

            <BC.FixedGridRow fixedColumn="right" fixedColumnWidth={300}>
              <BC.FixedGridColumn columnPadding="20px" fixedColumn="right" side="left">
                <BC.Heading headingLevel={2} spacing="mini">Give a Gift Membership</BC.Heading>

                <BC.GridRow spacing="base" textAlign="center">
                  <BC.GridColumn gridUnits={4}>

                    <CC.Card spacing="base"
                      headerColor="#078383"
                      backgroundColor="#00afb0"
                      headerName=""
                      primaryPrice="$45"
                      secondaryPrice="$15.00 / month"
                      logoType="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/gift-box-inverse._V289510606_.svg"
                      cardName="3 MONTH MEMBERSHIP"
                      hasBorder={false}
                      >
                      <BC.GridRow  spacing="base">
                        <BC.Text textSize="base" textColor="base" hasBold={true} ></BC.Text>
                      </BC.GridRow>
                      <BC.GridRow  spacing="base">

                      </BC.GridRow>
                        <BC.Divider spacing="small"/>
                      <BC.GridRow spacing="base">
                        <BC.Text textSize="small" textColor="base">Recipient Gets 3 credits</BC.Text>
                      </BC.GridRow>

                      <BC.Button buttonType="primary" spacing="micro">Give as a Gift</BC.Button>


</CC.Card>


                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={4}>


                    <CC.Card spacing="base"
                      headerColor="#197397"
                      backgroundColor="#1999cb"
                      headerName=""
                      primaryPrice="$90"
                      secondaryPrice="$15.00 / month"
                      logoType="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/gift-box-inverse._V289510606_.svg"
                      cardName="6 MONTH MEMBERSHIP"
                      hasBorder={false}
                      >
                      <BC.GridRow  spacing="base">

                      </BC.GridRow>
                      <BC.GridRow  spacing="base">

                      </BC.GridRow>
                        <BC.Divider spacing="small"/>
                      <BC.GridRow spacing="base">
                        <BC.Text textSize="small" textColor="base">Recipient Gets 6 credits</BC.Text>
                      </BC.GridRow>

                      <BC.Button buttonType="primary" spacing="micro">Give as a Gift</BC.Button>


</CC.Card>


                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={4} position="last">


                    <CC.Card spacing="base"
                      headerColor="#574089"
                      backgroundColor="#714fb7"
                      headerName=""
                      primaryPrice="$150"
                      secondaryPrice="$12.50 / month"
                      logoType="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/gift-box-inverse._V289510606_.svg"
                      cardName="12 MONTH MEMBERSHIP"
                      hasBorder={false}
                      >
                      <BC.GridRow  spacing="base">

                      </BC.GridRow>
                        <BC.Divider spacing="small"/>
                      <BC.GridRow spacing="base">
                        <BC.Text textSize="small" textColor="base">Recipient Gets 12 credits</BC.Text>
                      </BC.GridRow>

                      <BC.Button buttonType="primary" spacing="micro">Give as a Gift</BC.Button>


</CC.Card>



                  </BC.GridColumn>

                </BC.GridRow>

                <BC.Link textSize="small">Terms & Conditions for Audible Gift Audiobooks</BC.Link>
              </BC.FixedGridColumn>

              <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={300} side="right">
                <BC.Heading headingLevel={2} spacing="mini">Redeem a Gift Membership</BC.Heading>

                <BC.GridRow>
                  <BC.GridColumn gridUnits={9}>
                    <BC.TextInput placeholder="Enter your code here"/>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={3} position="last">
                    <BC.Button>Go</BC.Button>
                  </BC.GridColumn>
                </BC.GridRow>

                <BC.GridRow spacing="medium">
                  <BC.Link app={true} textSize="mini" url={"/prototypes/brickcity/redeem-promo"}>Redeem a promotional code here.</BC.Link>
                </BC.GridRow>

                  <BC.GridRow spacing="micro">

                <BC.Text textColor="base" textSize="medium">Membership Includes:</BC.Text>
                  </BC.GridRow>

                <BC.List listType="nostyle">
                  <BC.ListItem spacing="mini">
                    <BC.GridRow>
                  <BC.Text textColor="base">Concierge Setup</BC.Text>
                    </BC.GridRow>
                      <BC.GridRow>
                    <BC.Text textColor="secondary" textSize="mini">Our staff is ready 24/7 to help gift members start listening in minutes</BC.Text>
                    </BC.GridRow>
                  </BC.ListItem>
                  <BC.ListItem spacing="mini">
                        <BC.GridRow>
                    1 Credit Per Month
                      </BC.GridRow>
                          <BC.GridRow>
                    <BC.Text textColor="secondary" textSize="mini">Good to use on over 180,000 titles</BC.Text>
                      </BC.GridRow>
                  </BC.ListItem>
                  <BC.ListItem spacing="mini">
                        <BC.GridRow>
                    Exclusive Discounts
                    </BC.GridRow>
                        <BC.GridRow>
                    <BC.Text textColor="secondary" textSize="mini">30% off every title every day</BC.Text>
                      </BC.GridRow>
                  </BC.ListItem>
                </BC.List>
              </BC.FixedGridColumn>
            </BC.FixedGridRow>
          </div>
        </BC.Section>

        <ProdFooter/>
      </div>
    )
  }
}
export default GiftCenter;
