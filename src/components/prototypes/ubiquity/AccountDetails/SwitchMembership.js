import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class SwitchMembership extends React.Component {

  render() {

    return (
      <div>
              <ProdHeader/>
    <div className="bc-container">

        <BC.Breadcrumbs breadcrumbTrail={[{name: "Home", url: "/prototypes/brickcity"},{name: "Account Details", url: "/prototypes/brickcity/account-details-b"},{name: "Switch Membership", url: "/prototypes/brickcity/switch-membership"}]} spacing="small" />

        <BC.Heading spacing="base">Switch Membership</BC.Heading>
        <BC.Paragraph spacing="medium" textBold={true}>
          All Gold and Platinum Plans Include:
        </BC.Paragraph>
        <BC.List listType="unordered">
          <BC.ListItem>
              30% off on all audiobooks and programs not purchased with audio credits
          </BC.ListItem>
          <BC.ListItem>
              Enjoy free select audio programs and samples
          </BC.ListItem>
          <BC.ListItem>
              A complimentary subscription to the digital audio version of The New York Times or The Wall Street Journald
          </BC.ListItem>
        </BC.List>

        <BC.GridRow textAlign="center" spacing="medium">



            <BC.GridColumn gridUnits={12} spacingTop="medium">
              <BC.Box backgroundColor="highlight" paddingSize="none">
                <BC.Heading headingLevel={3} textColor="inverse" spacing="mini">CURRENT MEMBERSHIP PLAN</BC.Heading>
              </BC.Box>

              <BC.Box hasBorder={true} paddingSize="medium">

                <BC.GridRow>
                  <BC.GridColumn gridUnits={6}>
                  <BC.Paragraph>
                  You are currently a member of:
                  </BC.Paragraph>
                  <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311720857_.svg" />
                  <BC.Paragraph textBold={true} spacing="medium">
                  AudibleListener® 3-Month Gold Gift Membership
                  </BC.Paragraph>

                  <BC.Paragraph spacing="base">
                    <BC.Text textBold={true}>$0.00</BC.Text> a month
                  </BC.Paragraph>

                    <BC.Text textBold={true} spacing="base">You Get:</BC.Text>
  <BC.GridRow spacing="micro" spacingTop="base">
      <BC.Image  imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg" />
        </BC.GridRow>
            <BC.Text spacing="large">1 credits per month</BC.Text>
                    </BC.GridColumn>


                    <BC.GridColumn gridUnits={6} position="last">
                    <BC.Paragraph>
                    This plan expires on <BC.Text textBold={true}>12/03/2015</BC.Text>
                    </BC.Paragraph>
                    <BC.Paragraph  spacing="medium">
                    We recommend you switch to one of the plans below before this date to continue receiving AudibleListener® benefits.
                    </BC.Paragraph>

                    <BC.Paragraph  spacing="medium">
                  After switching, any unused gift credits and any credits you haven't received yet as part of your gift membership, will transfer to your new membership plan.
                    </BC.Paragraph>
                      </BC.GridColumn>
                </BC.GridRow>


              </BC.Box>
            </BC.GridColumn>
        </BC.GridRow>
  <BC.Divider spacing="none" />
        <BC.GridRow textAlign="center" spacing="medium">

            <BC.GridColumn gridUnits={12} spacingTop="medium">
              <BC.Box backgroundColor="inverse" paddingSize="none">

                <BC.Heading headingLevel={3} textColor="inverse" spacing="mini">CURRENT MEMBERSHIP PLAN</BC.Heading>
              </BC.Box>

              <BC.Box hasBorder={true} paddingSize="medium">

                <BC.GridRow>
                  <BC.GridColumn gridUnits={4}>
                    <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311720857_.svg" />
                  <BC.Paragraph textBold={true} spacing="medium">
                Switch to AudibleListener® Gold
                  </BC.Paragraph>

                  <BC.Paragraph spacing="base">
                    <BC.Text textBold={true}>$14.95 a month</BC.Text>
                    <BC.Heading headingLevel={3} textColor="error">ONLY $14.95 per CREDIT</BC.Heading>
                  </BC.Paragraph>

                    <BC.Text textBold={true} spacing="base">You Get:</BC.Text>
  <BC.GridRow spacing="micro" spacingTop="base">
      <BC.Image  imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg" />
        </BC.GridRow>
            <BC.Text spacing="large">1 credits per month</BC.Text>
  <BC.GridRow spacing="micro" spacingTop="base">
            <BC.Button buttonType="primary" spacing="base">Select</BC.Button>


                <BC.Text textBold={true}>This Plan Also Includes:</BC.Text>
  <BC.Paragraph spacing="base">
                The ability to rollover up to
    6 credits at a time for as
    long as your membership
    is active
              </BC.Paragraph>
    </BC.GridRow>

                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={4} >
                    <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311720857_.svg" />
                    <BC.Paragraph textBold={true} spacing="medium">
                  Switch to AudibleListener® Premium
                    </BC.Paragraph>


                    <BC.Paragraph spacing="base">
                      <BC.Text textBold={true}>$14.95 a month</BC.Text>
                      <BC.Heading headingLevel={3} textColor="error" >ONLY $14.95 per CREDIT</BC.Heading>
                    </BC.Paragraph>


                      <BC.Text textBold={true} spacing="base">You Get:</BC.Text>
    <BC.GridRow spacing="micro" spacingTop="base">
        <BC.Image  imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg" />
          </BC.GridRow>
              <BC.Text spacing="large">2 credits per month</BC.Text>
    <BC.GridRow spacing="micro" spacingTop="base">
              <BC.Button buttonType="primary" spacing="base">Select</BC.Button>

                <BC.Text textBold={true}>This Plan Also Includes:</BC.Text>
  <BC.Paragraph spacing="base">
                The ability to rollover up to
    12 credits at a time for as
    long as your membership
    is active
              </BC.Paragraph>
                </BC.GridRow>

                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={4} position="last">
                        <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311720857_.svg" />
                      <BC.Paragraph textBold={true} spacing="medium">
                    Switch to AudibleListener® Gold Annual
                      </BC.Paragraph>

                      <BC.Paragraph spacing="base">
                        <BC.Text textBold={true}>$149.50 a year</BC.Text>
                        <BC.Heading headingLevel={3} textColor="error">ONLY $12.48 per CREDIT</BC.Heading>
                      </BC.Paragraph>

                        <BC.Text textBold={true} spacing="base">You Get:</BC.Text>
        <BC.GridRow spacing="micro" spacingTop="base">
          <BC.Image  imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg" />
            </BC.GridRow>
                <BC.Text spacing="large">12 credits per month</BC.Text>
        <BC.GridRow spacing="micro" spacingTop="base">
                <BC.Button buttonType="primary" spacing="base">Select</BC.Button>

                  <BC.Text textBold={true}>This Plan Also Includes:</BC.Text>
        <BC.Paragraph spacing="base">
                  The ability to rollover up to
        6 credits at a time for as
        long as your membership
        is active
                </BC.Paragraph>
                  </BC.GridRow>

                        </BC.GridColumn>
                </BC.GridRow>


              </BC.Box>
            </BC.GridColumn>
        </BC.GridRow>

        <BC.Divider spacing="medium" />

        <BC.GridRow textAlign="right" spacing="medium">
          <BC.Button buttonType="primary" inline={true} app={true} url={"/prototypes/brickcity/cancel/success-cancel"}>Cancel Membership</BC.Button>
        </BC.GridRow>
</div>
<ProdFooter />
</div>
    )
  }
}


export default SwitchMembership;
