import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../ubiquity/cc';
import ProdHeader from '../../ubiquity/Header/ProdHeader';
import ProdFooter from '../../ubiquity/Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';
import classNames from 'classnames';

import Overview from '../Overview';
import PaymentMethod from '../PaymentMethod';
import TransactionHistory from '../TransactionHistory';
import NotificationsSettings from '../NotificationsSettings';

class GiftDetail extends React.Component {

  render() {


    return (
      <div>

        <ProdHeader/>
        <div className="bc-container">

          <BC.Section spacingTop="base">

            <BC.Heading headingLevel={1}>ACCOUNT</BC.Heading>

          <BC.GridColumn gridUnits={12} position="last" spacingTop="micro">
              <CC.Tabs tabActive={3}>
                {/* Tab1 - Profile */}
                <CC.TabPanel title="Overview">
                <Overview />
                </CC.TabPanel>

                {/* Tab3 - Billings */}
                <CC.TabPanel title="Payment">
                <PaymentMethod />
                </CC.TabPanel>


                {/* Tab4 - Subscriptions */}
                <CC.TabPanel title="Orders">



                <BC.GridRow spacing="small">
                <BC.Link linkType="nav" url={"/prototypes/brickcity/account-details-b"}>Back to Orders</BC.Link>
                </BC.GridRow>

                  <BC.Box background="primary" hasBorder={true} paddingSize="medium" spacing="large" spacingTop="micro">

                    <BC.GridRow>
                 <BC.GridColumn gridUnits={4}>
                    <BC.Heading headingLevel={2} spacing="base" textColor="base">
                  Order Details
                    </BC.Heading>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={5} textAlign="right" >
                  <BC.Text textColor="base" textBold={true}>Order Date:</BC.Text><BC.LetterSpace size="mini"/>
                <BC.Text textAlign="left" textColor="base" textSize="base">October 14, 2015</BC.Text>
                </BC.GridColumn>
                     <BC.GridColumn gridUnits={3} position="last">
                       <BC.Text textColor="base" textBold={true}>Order #:</BC.Text><BC.LetterSpace size="mini" />
                         <BC.Text textAlign="left" textColor="base" textSize="base">D01-7339708-6780702</BC.Text>
                    </BC.GridColumn>
                    </BC.GridRow>
                    <BC.Divider spacing="base"/>
                <BC.GridRow spacing="small">
                      <BC.GridColumn gridUnits={2}>

                        <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/giftcenter/06MonthMembership._V289337813_.svg" />

                        </BC.GridColumn>





                      <BC.GridColumn gridUnits={4} >


                          <BC.Text textBold={false} textSize="medium" textColor="base">AudibleListener® 6-Month<br />Gold Gift Membership</BC.Text>



                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={5}>

                      <BC.List listType="nostyle" spacingTop="mini">
                        <BC.ListItem spacing="micro"><BC.Text textBold={true}> To:</BC.Text> rutledm@amazon.com</BC.ListItem>
                      <BC.ListItem spacing="micro"><BC.Text textBold={true}> Delivered:</BC.Text> October 15, 2015</BC.ListItem>
                    <BC.ListItem spacing="micro"><BC.Text textBold={true}> Status:</BC.Text> Unredeemed</BC.ListItem>
                        </BC.List>

                  </BC.GridColumn>

                    <BC.GridColumn gridUnits={1} spacingTop="mini" position="last">
                      <BC.List listType="nostyle">
                        <BC.ListItem spacing="micro"><BC.Link>View</BC.Link></BC.ListItem>
                        <BC.ListItem spacing="micro">  <BC.Link>Resend</BC.Link></BC.ListItem>
                            <BC.ListItem spacing="micro">  <BC.Link>Print</BC.Link></BC.ListItem>



                        </BC.List>
                    </BC.GridColumn>



                </BC.GridRow>

                <BC.Divider spacing="medium"/>
                    <BC.Section spacing="base">


                      <BC.GridRow spacing="base">
                        <BC.GridColumn gridUnits={6}>
          <BC.Heading headingLevel={3} textAlign="left" textColor="base" textSize="base">Credit Card:</BC.Heading>
            <BC.Text textAlign="left" textColor="secondary">American Express ****-****-****-1041
    </BC.Text>





      <BC.Heading  spacingTop="small" headingLevel={3} textAlign="left" textColor="base" textSize="base" >Billing Address</BC.Heading>
        <BC.Text textAlign="left" textColor="secondary">144 West 23rd st apt 5d<br />
    New York, NY<br />
    10011
    </BC.Text>

      </BC.GridColumn>
                  <BC.GridColumn gridUnits={6} position="last">
              <BC.Table>
              <BC.TableRow>
                  <BC.TableColumn>
                  <BC.Text textAlign="left" textColor="secondary">Credit(s) Used</BC.Text>
                  </BC.TableColumn>
                  <BC.TableColumn>
                <BC.Text textAlign="left" textColor="secondary" >0</BC.Text>
                  </BC.TableColumn>
              </BC.TableRow>
              <BC.TableRow>
                    <BC.TableColumn>
                  <BC.Text textAlign="left" textColor="secondary">Item(s) Subtotal</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                  <BC.Text textAlign="left" textColor="secondary" >$29.45</BC.Text>
                    </BC.TableColumn>
              </BC.TableRow>
              <BC.TableRow>
                    <BC.TableColumn>
                  <BC.Text textAlign="left" textColor="tertiary">Tax</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                  <BC.Text textAlign="left" textColor="tertiary" >$3.99</BC.Text>
                    </BC.TableColumn>
              </BC.TableRow>
              <BC.TableRow>
                    <BC.TableColumn>
                  <BC.Text textAlign="left" textColor="base" textBold={true}>Total Paid</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                  <BC.Text textAlign="left" textColor="base" textBold={true}>$29.45</BC.Text>
                    </BC.TableColumn>
              </BC.TableRow>
              </BC.Table>
                    </BC.GridColumn>


              </BC.GridRow>
              </BC.Section>

                </BC.Box>



                </CC.TabPanel>


                {/* Tab5 - Subscriptions */}
                <CC.TabPanel title="Preferences">
                <NotificationsSettings />
                </CC.TabPanel>

              </CC.Tabs>
            </BC.GridColumn>
          </BC.Section>
        </div>
        <ProdFooter/>






        </div>

    )
  }
}

export default GiftDetail;
