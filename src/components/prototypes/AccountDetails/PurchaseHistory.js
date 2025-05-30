import React from 'react';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import orders from '../../../data/prototypes/orders.json';
import classNames from 'classnames';
import AccountDetailsLayout from './AccountDetailsLayout';

class PurchaseHistory extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.location.query.orderType) {
      this.props.history.push({
        pathname: '/prototypes/brickcity/account-details/purchase-history',
        search: '?orderType=orders'
      });
    }
  }

  filterOrderType(event) {
    this.props.history.push({
      pathname: '/prototypes/brickcity/account-details/purchase-history',
      search: '?orderType=' + event.target.value
    });
  }

  render() {
    return (
      <BC.Box background="primary" hasBorder={true} paddingSize="medium" spacing="large" spacingTop="micro">
        <BC.GridRow spacing="base">
          <BC.GridColumn gridUnits={4}>
            <BC.Heading headingLevel={2}>Orders</BC.Heading>
          </BC.GridColumn>
          <BC.GridColumn gridUnits={8} position="last" textAlign="right">
            <BC.Text textColor="base" textBold={true}>Order Type</BC.Text>
            <BC.LetterSpace size="mini" />
            <BC.Dropdown ref="orderType" inline={true} onChange={this.filterOrderType.bind(this)}>
              <BC.DropdownOption value="orders">Orders</BC.DropdownOption>
              <BC.DropdownOption value="memberships">Memberships</BC.DropdownOption>
              <BC.DropdownOption value="gifts">Gifts</BC.DropdownOption>
            </BC.Dropdown>

            <BC.LetterSpace />

            <BC.Text textColor="base" textBold={true}>Sort by</BC.Text>
            <BC.LetterSpace size="mini" />
            <BC.Dropdown inline={true}>
              <BC.DropdownOption>Last 90 Days</BC.DropdownOption>
              <BC.DropdownOption>Last 180 Days</BC.DropdownOption>
              <BC.DropdownOption>Year 2016</BC.DropdownOption>
              <BC.DropdownOption>Year 2015</BC.DropdownOption>
              <BC.DropdownOption>Year 2014</BC.DropdownOption>
              <BC.DropdownOption>Year 2013</BC.DropdownOption>
            </BC.Dropdown>
          </BC.GridColumn>
        </BC.GridRow>

        <BC.Divider spacing="base"/>

        <BC.Section spacing="base">
          <BC.Table>
            <BC.TableRow>
              <BC.TableColumnHeading>Item</BC.TableColumnHeading>
              <BC.TableColumnHeading>Order #</BC.TableColumnHeading>
              <BC.TableColumnHeading>Date</BC.TableColumnHeading>
              <BC.TableColumnHeading>Total</BC.TableColumnHeading>
              <BC.TableColumnHeading>Options</BC.TableColumnHeading>
            </BC.TableRow>

            {orders[this.props.location.query.orderType ? this.props.location.query.orderType : 'orders'].map((order, index)=>{
                return (
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.GridRow>
                        <BC.GridColumn gridUnits={3}>
                          <BC.Image source={order.product_image} />
                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={9} position="last">
                          <BC.Heading headingLevel={3}>{order.product_title}</BC.Heading>
                          {order.product_author &&  
                            <BC.Text>by {order.product_author}</BC.Text>
                          }
                        </BC.GridColumn>
                      </BC.GridRow>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Link
                        app={true}
                        url={"/prototypes/brickcity/account-details/purchase-history/" + order.order_number} 
                        textAlign="left"  
                        textSize="base">
                        {order.order_number}
                      </BC.Link>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Text>{order.order_date}</BC.Text>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Text>{order.credits ? order.credits + " Credits" : "$" + (order.price + (order.price * 0.07)).toFixed(2) }</BC.Text>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.List listType="nostyle">
                        <BC.ListItem>
                        {order.returned
                          ? <BC.Text textColor="tertiary">Returned</BC.Text>
                          : <BC.Link>Return</BC.Link>
                        }
                        </BC.ListItem>
                        {order.gift &&
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
                    </BC.TableColumn>
                  </BC.TableRow>
                )              
              })
            }
          </BC.Table>
        </BC.Section>

      </BC.Box>
    )
  }
}

export default PurchaseHistory;
