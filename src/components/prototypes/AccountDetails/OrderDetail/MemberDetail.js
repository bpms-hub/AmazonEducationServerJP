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

class MemberDetail extends React.Component {

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
                    Membership Detail
                      </BC.Heading>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={5} textAlign="right" >
                    <BC.Text textColor="base" textBold={true}>Refund Date:</BC.Text><BC.LetterSpace size="mini"/>
                      <BC.Text textAlign="left" textColor="base" textSize="base">10-14-2015</BC.Text>
                  </BC.GridColumn>
                       <BC.GridColumn gridUnits={3} position="last">
                         <BC.Text textColor="base" textBold={true}>Order #:</BC.Text><BC.LetterSpace size="mini"/>
                           <BC.Text textAlign="left" textColor="base" textSize="base">D01-7339708-6780702</BC.Text>
                      </BC.GridColumn>
                      </BC.GridRow>
                      <BC.Divider spacing="base"/>
                  <BC.GridRow spacing="small">
                        <BC.GridColumn gridUnits={2}>

                          <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/crest._V289338205_.svg" />
                          </BC.GridColumn>





                          <BC.GridColumn gridUnits={5} >

                              <BC.Text textBold={false} textSize="medium" textColor="base">Gold Annual Membership</BC.Text>

                        </BC.GridColumn>


                      <BC.GridColumn gridUnits={1} spacingTop="mini" position="last">

                      </BC.GridColumn>



                  </BC.GridRow>

                  <BC.Divider spacing="medium"/>
                      <BC.Section spacing="base">


                        <BC.GridRow spacing="base">

                    <BC.GridColumn gridUnits={6} position="last">
                  <BC.Table>
                  <BC.TableRow>
                      <BC.TableColumn>
                    <BC.Text textAlign="left" textColor="base" textBold={true}>Total Paid</BC.Text>
                      </BC.TableColumn>
                      <BC.TableColumn>
                    <BC.Text textAlign="left" textColor="base" textBold={true}>$13.96</BC.Text>
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

export default MemberDetail;
