import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../ubiquity/cc';
import ProdHeaderMobile from '../../ubiquity/Header/ProdHeaderMobile';
import ProdFooterMobile from '../../ubiquity/Footer/ProdFooterMobile';
import orders from '../../../../data/prototypes/orders.json';

class OrderDetailMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentOrder: orders.orders[0]
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
    console.log(this.state.currentOrder);
  }

  render() {
    let currentOrder = this.state.currentOrder;

    return (
      <div>
        <ProdHeaderMobile/>

        <CC.MobilePageTitle textAlign="center" first={true} url={"/prototypes/brickcity-mobile/account-details/purchase-history"}>
          <BC.Text textColor="base">Order Details</BC.Text>
        </CC.MobilePageTitle>

        <div className="bc-container">
          <BC.List spacingTop="base" listType="nostyle" spacing="base" textColor="base">       
            <BC.ListItem spacing="micro">
              Order #: {currentOrder.order_number}
            </BC.ListItem>
            <BC.ListItem spacing="micro">
              Order Date: {currentOrder.order_date}
            </BC.ListItem>
          </BC.List>

          <BC.Box backgroundColor="secondary" paddingSize="mini" spacing="small">
              <BC.GridRow>
                <BC.GridColumn gridUnits={3}>        
                    <BC.Image source={currentOrder.product_image} />
                </BC.GridColumn>

                <BC.GridColumn gridUnits={9} position="last">
                  <BC.Heading headingLevel={3}>{currentOrder.product_title}</BC.Heading>
                  {currentOrder.product_author &&
                    <BC.Text>by {currentOrder.product_author}</BC.Text>
                  }
                </BC.GridColumn>
              </BC.GridRow>

              <BC.GridRow>
                <BC.GridColumn gridUnits={3}>        

                </BC.GridColumn>

                <BC.GridColumn textAlign="right" gridUnits={9} position="last">
                    <BC.Link>Return</BC.Link>
                </BC.GridColumn>
              </BC.GridRow>
          </BC.Box>

          <BC.Heading spacing="micro" headingLevel={3}>Credit Card Info</BC.Heading>
          <BC.Divider spacing="micro" />
            <BC.List listType="nostyle" spacing="base">       
              <BC.ListItem spacing="micro">
                {currentOrder.payment_type.card_company}: ****-{currentOrder.payment_type.card_number}
              </BC.ListItem>
              <BC.ListItem spacing="micro">
                Name on Card: {currentOrder.payment_type.name}
              </BC.ListItem>
            </BC.List>
          <BC.Heading spacing="micro" headingLevel={3}>Billing Address</BC.Heading>
          <BC.Divider spacing="micro" />
            <BC.List listType="nostyle" spacing="base">       
              <BC.ListItem spacing="micro">
                {currentOrder.payment_type.street}
              </BC.ListItem>
              <BC.ListItem spacing="micro">
                {currentOrder.payment_type.city}
              </BC.ListItem>
              <BC.ListItem>
                {currentOrder.payment_type.zip}
              </BC.ListItem>
            </BC.List>
          <BC.Heading spacing="micro" headingLevel={3}>Order Summary</BC.Heading>
          <BC.Divider spacing="micro" />

          <BC.List listType="nostyle" spacing="base">       
            <BC.ListItem spacing="micro">
              Subtotal: ${currentOrder.price.toFixed(2)}
            </BC.ListItem>
            <BC.ListItem spacing="micro">
              Tax: ${(currentOrder.price * 0.07).toFixed(2)}
            </BC.ListItem>
            <BC.ListItem>
              Total: ${(currentOrder.price + (currentOrder.price * 0.07)).toFixed(2)}
            </BC.ListItem>
          </BC.List>
        </div>

        <ProdFooterMobile/>
      </div>
    )
  }
}
export default OrderDetailMobile;