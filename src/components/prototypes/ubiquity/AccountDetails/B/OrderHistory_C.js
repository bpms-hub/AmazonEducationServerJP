import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../cc';
import productData from '../../../../../data/prototypes/products.json';
import classNames from 'classnames';

class OrderHistory_B extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeElement: "step1"
    }
  }

  handleSwitch(element) {
      this.setState({
        activeElement: element
      });
  }

  render() {

    let fadeStep1 = ['bc-oh-pre-order'];

    if(this.state.activeElement === "step1") fadeStep1.push('bc-oh-pre-order-active');


    return (
      <div>

        <div className="bc-container">


  <BC.Box background="primary" hasBorder={true} paddingSize="medium" spacing="large" spacingTop="micro">

    <BC.GridRow>

 <BC.GridColumn gridUnits={4}>
    <BC.Heading headingLevel={2} spacing="base" textColor="base">
    Account Activity
    </BC.Heading>

</BC.GridColumn>
     <BC.GridColumn gridUnits={3} position="last">

  <BC.Dropdown spacing="base" onChange={this.handleSwitch.bind(this, "step1")}>
                       <BC.DropdownOption>Pre-Order History</BC.DropdownOption>
                       <BC.DropdownOption>Audio Purchase History</BC.DropdownOption>
                       <BC.DropdownOption>Refund History</BC.DropdownOption>
                       <BC.DropdownOption>Gifts Given</BC.DropdownOption>
                       <BC.DropdownOption>Gifts Reeived</BC.DropdownOption>
                       <BC.DropdownOption>Membership History</BC.DropdownOption>
                     </BC.Dropdown>
    </BC.GridColumn>

    </BC.GridRow>
    <BC.Divider spacing="base"/>

    <BC.Paragraph spacing="medium" textColor="secondary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo varius tortor sit amet mollis. Suspendisse ipsum diam, fermentum non ullamcorper eget, eleifend.
      </BC.Paragraph>
      <BC.Section cssClass={classNames(fadeStep1)} spacing="base">
        <BC.Table>
          <BC.TableRow>
          <BC.TableColumnHeading>
          Item
          </BC.TableColumnHeading>
          <BC.TableColumnHeading>Order #</BC.TableColumnHeading>
        <BC.TableColumnHeading>Date</BC.TableColumnHeading>
      <BC.TableColumnHeading>Total</BC.TableColumnHeading>
          <BC.TableColumnHeading></BC.TableColumnHeading>
          </BC.TableRow>

                <BC.TableRow>
                  <BC.TableColumn>
                    <BC.GridColumn gridUnits={2}>
                      <BC.Product asinSize="mini" hasAsin={false} onAsin={true} productAsin={productData[3].asin}/>
                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={4}>

                    <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                      <BC.ListItem>
                        <BC.Heading headingLevel={3} textColor="base">The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia</BC.Heading>
                      </BC.ListItem>
                      <BC.ListItem>
                        <BC.Text>by C.S. Lewis</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                  </BC.GridColumn>

                  </BC.TableColumn>

                  <BC.TableColumn>
                    <BC.GridColumn gridUnits={12}>
      <BC.Text textAlign="left" textColor="base" textSize="base">D01-7339708-6780702</BC.Text>
      </BC.GridColumn>
        </BC.TableColumn>
        <BC.TableColumn>
                <BC.Text>10-14-2015</BC.Text>
                  </BC.TableColumn>
                  <BC.TableColumn>
              <BC.Text>10-10-2016</BC.Text>

                  </BC.TableColumn>
        <BC.TableColumn>
                <BC.Link>Return</BC.Link>
                  </BC.TableColumn>
                </BC.TableRow>
              </BC.Table>
        </BC.Section>

        <BC.GridRow >
          <BC.GridColumn gridUnits={11}>
        <BC.Button buttonColor="secondary" buttonType="">Load More</BC.Button>
        </BC.GridColumn>
            <BC.GridColumn gridUnits={1} position="last">
        <BC.Button buttonColor="secondary"><BC.Icon iconType="chevron-up" iconSize="medium" /></BC.Button>
        </BC.GridColumn>
        </BC.GridRow>

</BC.Box>





        </div>
      </div>
    )
  }
}

export default OrderHistory_B;
