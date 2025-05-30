import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../cc';


class MemberBenefits_B extends React.Component {

  render() {

    return (
      <div>

    <div className="bc-container">

<BC.GridRow>


{/*
<BC.GridColumn gridUnits={2}>
  <BC.Box backgroundColor="primary" spacing="base" paddingSize="small" hasBorder={false}>
  <BC.List listType="nostyle">
    <BC.ListItem spacing="mini"><BC.Link textColor="primary">Redeem Promotional Code </BC.Link></BC.ListItem>
        <BC.ListItem spacing="mini" ><BC.Link textColor="secondary">Redeem Gift Membership</BC.Link></BC.ListItem>
    <BC.ListItem spacing="mini"><BC.Link textColor="secondary">Give a Gift</BC.Link></BC.ListItem>
  </BC.List>
</BC.Box>
</BC.GridColumn>

*/}


      <BC.GridColumn gridUnits={12} position="last">

        <BC.Box backgroundColor="primary" spacing="base" paddingSize="base" hasBorder={true}>

          <BC.Heading headingLevel={2}  textColor="secondary" spacing="small">Redeem Promotional Code</BC.Heading>

          <BC.GridRow>
            <BC.GridColumn  gridUnits={3}>
          <BC.TextInput placeholder="Enter your code here" />
            </BC.GridColumn>

            <BC.GridColumn gridUnits={3}>
          <BC.Button buttonType="primary" inline={true}>Redeem</BC.Button>
            </BC.GridColumn>

          </BC.GridRow>
        </BC.Box>


      <BC.Box backgroundColor="primary" spacing="base" paddingSize="base" hasBorder={true}>

        <BC.Heading spacing="base"  textColor="secondary" headingLevel={2}>Give a Gift</BC.Heading>

          <BC.GridRow spacing="base" textAlign="center">
            <BC.GridColumn gridUnits={4}>
              <BC.Image block={true} imageWidth="100%" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/prototypes/membership-3-months.svg"/>

              <BC.Box hasBorder={true} spacing="base">
                <BC.GridRow>
                  <BC.Text>3 Months:</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="micro">
                  <BC.Text textSize="large">$45</BC.Text>
                </BC.GridRow>

                <BC.GridRow spacing="base">
                                <BC.Text textColor="secondary" textSize="small">$15 per month</BC.Text>

                              </BC.GridRow>
                                <BC.Button buttonType="primary" spacing="micro">Give as a Gift</BC.Button>
              </BC.Box>






            </BC.GridColumn>

            <BC.GridColumn gridUnits={4}>
              <BC.Image block={true} imageWidth="100%" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/prototypes/membership-6-months.svg"/>

              <BC.Box hasBorder={true} spacing="base">
                <BC.GridRow>
                  <BC.Text>6 Months:</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="micro">
                  <BC.Text textSize="large">$90</BC.Text>
                </BC.GridRow>


                <BC.GridRow spacing="base">
                  <BC.Text textColor="secondary" textSize="small">$15 per month</BC.Text>
                </BC.GridRow>
                  <BC.Button buttonType="primary" spacing="micro">Give as a Gift</BC.Button>
              </BC.Box>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={4} position="last">
              <BC.Image block={true} imageWidth="100%" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/prototypes/membership-12-months.svg"/>

              <BC.Box hasBorder={true} spacing="base">
                <BC.GridRow>
                  <BC.Text>12 Months:</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="micro">
                  <BC.Text textSize="large">$150</BC.Text>
                </BC.GridRow>

                <BC.GridRow spacing="base">
                  <BC.Text textColor="secondary" textSize="small">$15 per month</BC.Text>
                </BC.GridRow>
                  <BC.Button buttonType="primary" spacing="micro">Give as a Gift</BC.Button>
              </BC.Box>


            </BC.GridColumn>
          </BC.GridRow>
<BC.Divider spacing="small"/>
  <BC.Heading headingLevel={3} spacing="mini">Membership Includes:</BC.Heading>

          <BC.List textColor="secondary" listType="nostyle">
            <BC.ListItem>
              Concierge Setup
              <BC.Paragraph textSize="mini">Our staff is ready 24/7 to help gift members start listening in minutes</BC.Paragraph>
            </BC.ListItem>
            <BC.ListItem>
              1 Credit Per Month
              <BC.Paragraph textSize="mini">Good to use on over 180,000 titles</BC.Paragraph>
            </BC.ListItem>
            <BC.ListItem>
              Exclusive Discounts
              <BC.Paragraph textSize="mini">30% off every title every day</BC.Paragraph>
            </BC.ListItem>
          </BC.List>

</BC.Box>










        </BC.GridColumn>




</BC.GridRow>





</div>

</div>
    )
  }
}


export default MemberBenefits_B;
