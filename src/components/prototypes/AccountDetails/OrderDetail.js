import React from 'react';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import AccountDetailsLayout from './AccountDetailsLayout';
import orders from '../../../data/prototypes/orders.json';

class OrderDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentOrder: []
    }
  }

  componentDidMount(){
    for (var x=0; x < orders.orders.length; x++ ) {
      if(orders.orders[x].order_number.indexOf(this.props.params.orderNumber) > -1) {
        this.setState({
          currentOrder: orders.orders[x]
        })
      }
    };
    for (var x=0; x < orders.memberships.length; x++ ) {
      if(orders.memberships[x].order_number.indexOf(this.props.params.orderNumber) > -1) {
        this.setState({
          currentOrder: orders.memberships[x]
        })
      }
    };
    for (var x=0; x < orders.gifts.length; x++ ) {
      if(orders.gifts[x].order_number.indexOf(this.props.params.orderNumber) > -1) {
        this.setState({
          currentOrder: orders.gifts[x]
        })
      }
    }
  }

  render() {
    let currentOrder = this.state.currentOrder;

    return (
      <BC.GridRow spacingTop="micro">
        <BC.GridRow spacing="small">
          <BC.Link linkType="nav" url={"/prototypes/brickcity/account-details/purchase-history"}>Back to Orders</BC.Link>
        </BC.GridRow>

        <BC.Box background="primary" hasBorder={true} paddingSize="medium" spacing="large" spacingTop="micro">
          <BC.GridRow>
            <BC.GridColumn gridUnits={4}>
              <BC.Heading headingLevel={2} spacing="base" textColor="base">Order Details</BC.Heading>
            </BC.GridColumn>
            <BC.GridColumn gridUnits={8} textAlign="right" position="last">
              <BC.Text textColor="base" textBold={true}>Order Date:</BC.Text>
              <BC.LetterSpace size="mini"/>
              <BC.Text textAlign="left" textColor="base" textSize="base">{currentOrder.order_date}</BC.Text>
              <BC.LetterSpace />
              <BC.Text textColor="base" textBold={true}>Order #:</BC.Text>
              <BC.LetterSpace size="mini"/>
              <BC.Text textAlign="left" textColor="base" textSize="base">{currentOrder.order_number}</BC.Text>
            </BC.GridColumn>
          </BC.GridRow>
          <BC.Divider spacing="base"/>
          <BC.GridRow spacing="small">
            <BC.GridColumn gridUnits={2}>
              <BC.Image source={currentOrder.product_image} />
            </BC.GridColumn>
            <BC.GridColumn gridUnits={4} >

              <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                <BC.ListItem>
                  <BC.Text textBold={false} textSize="medium" textColor="base">{currentOrder.product_title}</BC.Text>
                </BC.ListItem>
                {currentOrder.product_author &&
                  <BC.ListItem>
                    <BC.Text textColor="secondary">by {currentOrder.product_author}</BC.Text>
                  </BC.ListItem>
                }
              </BC.List>
            </BC.GridColumn>
            <BC.GridColumn gridUnits={1} position="last">
              <BC.List listType="nostyle">
                <BC.ListItem>
                {currentOrder.returned
                  ? <BC.Text textColor="secondary">Returned</BC.Text>
                  : <BC.Link>Return</BC.Link>
                }
                </BC.ListItem>
                {currentOrder.gift &&
                  <span>
                    <BC.ListItem>  
                      <BC.Link>View</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem>  
                      <BC.Link>Resend</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem>  
                      <BC.Link>Print</BC.Link>
                    </BC.ListItem>
                  </span>
                }
              </BC.List>
            </BC.GridColumn>
          </BC.GridRow>

          <BC.Divider spacing="medium"/>
          <BC.Section spacing="base">

            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={6}>
                <BC.Heading headingLevel={3} textAlign="left" textColor="base" textSize="base">Credit Card</BC.Heading>
                <BC.Text textAlign="left" textColor="secondary">{currentOrder.payment_type && currentOrder.payment_type.card_company} ****-****-****-{currentOrder.payment_type && currentOrder.payment_type.card_number}</BC.Text>

                <BC.Heading  spacingTop="small" headingLevel={3} textAlign="left" textColor="base" textSize="base" >Billing Address</BC.Heading>
                <BC.Text textAlign="left" textColor="secondary">
                  {currentOrder.payment_type && currentOrder.payment_type.street}
                  <br />
                  {currentOrder.payment_type && currentOrder.payment_type.city}
                  <br />
                  {currentOrder.payment_type && currentOrder.payment_type.zip}
                </BC.Text>

              </BC.GridColumn>
              <BC.GridColumn gridUnits={6} position="last">
                <BC.Table>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text textAlign="left" textColor="secondary">Subtotal</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text textAlign="left" textColor="secondary" >${currentOrder.price ? currentOrder.price.toFixed(2) : null}</BC.Text>
                    </BC.TableColumn>
                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text textAlign="left" textColor="tertiary">Tax</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text textAlign="left" textColor="tertiary" >${(currentOrder.price * 0.07).toFixed(2)}</BC.Text>
                    </BC.TableColumn>
                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text textAlign="left" textColor="base" textBold={true}>Total</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text textAlign="left" textColor="base" textBold={true}>${(currentOrder.price + (currentOrder.price * 0.07)).toFixed(2)}</BC.Text>
                    </BC.TableColumn>
                  </BC.TableRow>
                </BC.Table>
              </BC.GridColumn>

            </BC.GridRow>
          </BC.Section>

        </BC.Box>
      </BC.GridRow>
    )
  }
}

export default OrderDetail;
