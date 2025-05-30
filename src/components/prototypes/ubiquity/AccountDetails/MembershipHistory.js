import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class MembershipHistory extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
  <BC.Breadcrumbs breadcrumbTrail={[{name: "Account Details", url: "/prototypes/brickcity/account-details"},{name: "Membership History"}]} spacing="small" />
          <BC.GridRow spacing="base" spacingTop="mini">

          <BC.Heading headingLevel={2} spacing="base">Membership History</BC.Heading>
        </BC.GridRow>


  <BC.Box hasBorder={true} spacing="base">
        <BC.GridRow spacingTop="base" >
              <BC.GridColumn  gridUnits={1}>

                <BC.Paragraph  textColor="secondary">
                  Username:
                </BC.Paragraph>

              </BC.GridColumn>
              <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={3} url="/prototypes/brickcity/gift-center">jondough@amazon.com</BC.Heading>

              </BC.GridColumn>


                </BC.GridRow>
              </BC.Box>




            <BC.Paragraph spacing="base" textColor="secondary">
            You have 1 membership transactions. Click on the order number to see details of a specific purchase.
            </BC.Paragraph>

            <BC.Link url="/prototypes/brickcity/audio-purchase-history">See audio purchase history</BC.Link>


          <BC.GridRow spacingTop="base">
                <BC.Table>
                  <BC.TableRow>
                    <BC.TableColumnHeading>Order Date</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Order #</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Order Total</BC.TableColumnHeading>
                  </BC.TableRow>

                  <BC.TableRow>
                  <BC.TableColumn>09-03-15</BC.TableColumn>
                  <BC.TableColumn><BC.Link>8JZTMYFPRFFCDG0F8JM1</BC.Link></BC.TableColumn>
                  <BC.TableColumn>$0.00</BC.TableColumn>
                  </BC.TableRow>
                </BC.Table>
          </BC.GridRow>


        </div>
</div>
      )
    }
  }
  export default MembershipHistory;
