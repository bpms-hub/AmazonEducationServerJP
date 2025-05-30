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
          <BC.GridRow>
            <BC.GridColumn gridUnits={12} position="last">



              <BC.Box background="primary" hasBorder={true} paddingSize="base" spacing="base">

                <BC.GridRow>
                 <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={2} spacing="small" textColor="base">Pre-Order History
                </BC.Heading>
                </BC.GridColumn>
                 <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
              <BC.Link>See all</BC.Link>
                  </BC.GridColumn>
                </BC.GridRow>
                <BC.Divider spacing="base"/>


          <BC.Table>
            <BC.TableRow>
            <BC.TableColumnHeading>Order #: <BC.Link>3R874FCKJ08394JXX1BLK</BC.Link>
            </BC.TableColumnHeading>
            <BC.TableColumnHeading>Payment Method</BC.TableColumnHeading>
            <BC.TableColumnHeading>Ordered On</BC.TableColumnHeading>
            <BC.TableColumnHeading>Scheduled Release</BC.TableColumnHeading>
            <BC.TableColumnHeading></BC.TableColumnHeading>
            </BC.TableRow>

                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.GridColumn gridUnits={2}>
                        <CC.Product asinSize="mini" hasAsin={false} onAsin={true} productAsin={productData[3].asin}/>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={10} position="last">

                      <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                        <BC.ListItem>
                          <BC.Text textColor="base" textSize="medium">The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia</BC.Text>
                        </BC.ListItem>
                        <BC.ListItem>
                          <BC.Text>by C.S. Lewis</BC.Text>
                        </BC.ListItem>
                      </BC.List>
                    </BC.GridColumn>

                    </BC.TableColumn>

                    <BC.TableColumn>
        <BC.Text textAlign="left" textColor="base" textSize="base">1 Credit</BC.Text>
          </BC.TableColumn>
          <BC.TableColumn>
                  <BC.Text>10-14-2015</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                <BC.Text>10-10-2016</BC.Text>
                    </BC.TableColumn>
          <BC.TableColumn>
                  <BC.Link>Cancel</BC.Link>
                    </BC.TableColumn>
                  </BC.TableRow>
                </BC.Table>
              </BC.Box>


              <BC.Box background="primary" hasBorder={true} paddingSize="base" spacing="base">

                <BC.GridRow>
                 <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={2} spacing="small" textColor="base">Audio Purchase History
                </BC.Heading>
                </BC.GridColumn>
                 <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
              <BC.Link>See all</BC.Link>
                  </BC.GridColumn>
                </BC.GridRow>
                <BC.Divider spacing="small"/>
                <BC.GridRow spacing="base">
                  <BC.Paragraph spacing="base" textColor="tertiary">Your books are grouped by order. AudibleListener® plan members are eligible to take advantage of our Great Listen Guarantee and make returns.</BC.Paragraph>
                </BC.GridRow>

                <BC.GridRow spacing="medium">
                  <BC.GridColumn gridUnits={12} position="last">
                    <BC.Table>
                      <BC.TableRow>
                          <BC.TableColumnHeading>Order #: <BC.Link>7ZCMMCZ1FCL8DTZDQ0Z0</BC.Link></BC.TableColumnHeading>
                        <BC.TableColumnHeading>Payment Method</BC.TableColumnHeading>
                        <BC.TableColumnHeading>Ordered On</BC.TableColumnHeading>
                        <BC.TableColumnHeading>Released</BC.TableColumnHeading>
                        <BC.TableColumnHeading></BC.TableColumnHeading>
                      </BC.TableRow>
                      <BC.TableRow>

                        <BC.TableColumn>
                          <BC.GridRow>
                          <BC.GridColumn gridUnits={2}>
                            <CC.Product asinSize="mini" hasAsin={false} onAsin={true} productAsin={productData[4].asin}/>
                          </BC.GridColumn>
            <BC.GridColumn gridUnits={10} position="last">

                          <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                            <BC.ListItem>
                              <BC.Text textColor="base" textSize="medium">The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia</BC.Text>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Text>by C.S. Lewis</BC.Text>
                            </BC.ListItem>

                          </BC.List>
              </BC.GridColumn>
                </BC.GridRow>
                        </BC.TableColumn>

                        <BC.TableColumn>

                                <BC.Text>1 Credit</BC.Text>

                                  </BC.TableColumn>


                          <BC.TableColumn>

                            <BC.Text textAlign="center" textColor="base" textSize="base">10-14-2015</BC.Text>

                            </BC.TableColumn>

                            <BC.TableColumn>

                          <BC.Text>11-10-2016</BC.Text>

                            </BC.TableColumn>


                        <BC.TableColumn>
                          <BC.Link buttonType="secondary">Return</BC.Link>
                        </BC.TableColumn>
                      </BC.TableRow>


                      <BC.TableRow>
                          <BC.TableColumn>
                              <BC.GridRow>
                                    <BC.GridColumn gridUnits={2}>
                                <CC.Product asinSize="mini" hasAsin={false} onAsin={true} productAsin={productData[2].asin}/>
                                </BC.GridColumn>
                                <BC.GridColumn gridUnits={10} position="last">
                                  <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
            <BC.ListItem>
              <BC.Text textColor="base" textSize="medium">The Martian</BC.Text>
            </BC.ListItem>
              <BC.ListItem>
                  <BC.Text>by Andy Weir</BC.Text>
              </BC.ListItem>

          </BC.List>
            </BC.GridColumn>
              </BC.GridRow>
                </BC.TableColumn>

                        <BC.TableColumn>

                          <BC.Text textAlign="center" textColor="base" textSize="base">1 Credit</BC.Text>

                          </BC.TableColumn>
                          <BC.TableColumn>
                                  <BC.Text>10-14-2015</BC.Text>
                                    </BC.TableColumn>
                                    <BC.TableColumn>

                                  <BC.Text>10-10-2016</BC.Text>

                                    </BC.TableColumn>
                        <BC.TableColumn>

                          <BC.Link buttonType="secondary">Return</BC.Link>
                        </BC.TableColumn>
                      </BC.TableRow>
                    </BC.Table>
                  </BC.GridColumn>
                </BC.GridRow>
              </BC.Box>

              <BC.Box background="primary" hasBorder={true} paddingSize="base" spacing="base">

                <BC.GridRow>
                 <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={2} spacing="small" textColor="base">Refund History
                </BC.Heading>
                </BC.GridColumn>
                 <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
              <BC.Link>See all</BC.Link>
                  </BC.GridColumn>
                </BC.GridRow>


                <BC.Divider spacing="base"/>
                <BC.Table>
                  <BC.TableRow>
                    <BC.TableColumnHeading>Refund Date</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Refund #</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Refund Total</BC.TableColumnHeading>

                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text>02-04-15</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Link>H2RB7ZCMMCZ1FTZDQ0Z0</BC.Link>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>3 Months</BC.Text>
                    </BC.TableColumn>

                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text>05-24-15</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Link>NNWKAZZYYZJJ9MVC0910</BC.Link>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>6 Months</BC.Text>
                    </BC.TableColumn>

                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text>12-20-14</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Link>8HDDF99ZDJKLJRZPTQW1</BC.Link>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>12 Months</BC.Text>
                    </BC.TableColumn>

                  </BC.TableRow>
                </BC.Table>

              </BC.Box>


              <BC.Box background="primary" hasBorder={true} paddingSize="base" spacing="base">

                <BC.GridRow>
                 <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={2} spacing="small" textColor="base">Gifts Given
                </BC.Heading>
                </BC.GridColumn>
                 <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
              <BC.Link>See all</BC.Link>
                  </BC.GridColumn>
                </BC.GridRow>

                <BC.Divider spacing="base"/>
                <BC.Table>
                  <BC.TableRow>
                    <BC.TableColumnHeading>Order Date</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Order #</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Sent to</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Item</BC.TableColumnHeading>
                        <BC.TableColumnHeading>Delivered on</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Status</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Options</BC.TableColumnHeading>
                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text>03-24-2015</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Link>H2RB7ZCMMCZ1FTZDQ0Z0</BC.Link>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>herbiehancock@amazon.com</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>Herbie Hancock: Possibilities</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>02-04-2015</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>Unclaimed</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.List listType="nostyle">
                        <BC.ListItem>
                          <BC.Link>View</BC.Link>
                        </BC.ListItem>
                          <BC.ListItem>
                              <BC.Link>Resend</BC.Link>
                            </BC.ListItem>
                              <BC.ListItem>
                                  <BC.Link>Print</BC.Link>
                        </BC.ListItem>
                          </BC.List>
                    </BC.TableColumn>
                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text>02-05-2015</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Link>H2RB7ZCMMCZ1FTZDQ0Z0</BC.Link>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>thomasedison@amazon.com</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>Wizard: The Life and Times of Nikola Tesla: Biography of a Genius</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>06-24-2015</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>Unclaimed</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.List listType="nostyle">
                        <BC.ListItem>
                          <BC.Link>View</BC.Link>
                        </BC.ListItem>
                          <BC.ListItem>
                              <BC.Link>Resend</BC.Link>
                              </BC.ListItem>
                              <BC.ListItem>
                                  <BC.Link>Print</BC.Link>
                        </BC.ListItem>
                          </BC.List>
                    </BC.TableColumn>
                  </BC.TableRow>
                </BC.Table>

              </BC.Box>

              <BC.Box background="primary" hasBorder={true} paddingSize="base" spacing="base">

                <BC.GridRow>
                 <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={2} spacing="small" textColor="base">Gifts Received
                </BC.Heading>
                </BC.GridColumn>
                 <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
              <BC.Link>See all</BC.Link>
                  </BC.GridColumn>
                </BC.GridRow>

                <BC.GridRow>
                  <BC.Divider spacing="base"/>

                  <BC.Table textAlign="center">
                    <BC.TableRow>
                      <BC.TableColumnHeading>Redeem Date</BC.TableColumnHeading>
                      <BC.TableColumnHeading>Received From</BC.TableColumnHeading>
                      <BC.TableColumnHeading>Item</BC.TableColumnHeading>
                    </BC.TableRow>
                    <BC.TableRow>
                      <BC.TableColumn>
                        <BC.Text>05-19-2015</BC.Text>
                      </BC.TableColumn>
                      <BC.TableColumn>
                          <BC.Link>firstlast@amazon.com</BC.Link>
                      </BC.TableColumn>
                      <BC.TableColumn>
                        <BC.Text>AudibleListener® 3-Month Platinum Gift Membership</BC.Text>
                      </BC.TableColumn>

                    </BC.TableRow>
                    <BC.TableRow>
                      <BC.TableColumn>
                        <BC.Text>05-24-2015</BC.Text>
                      </BC.TableColumn>
                      <BC.TableColumn>
                          <BC.Link>firstlast@amazon.com</BC.Link>
                      </BC.TableColumn>
                      <BC.TableColumn>
                        <BC.Text>AudibleListener® Annual Platinum Gift Membership</BC.Text>
                      </BC.TableColumn>

                    </BC.TableRow>
                    <BC.TableRow>
                      <BC.TableColumn>
                        <BC.Text>12-20-2014</BC.Text>
                      </BC.TableColumn>
                      <BC.TableColumn>
                        <BC.Link>firstlast@amazon.com</BC.Link>
                      </BC.TableColumn>
                      <BC.TableColumn>
                        <BC.Text>AudibleListener® 3-Month Gold Gift Membership</BC.Text>
                      </BC.TableColumn>

                    </BC.TableRow>
                  </BC.Table>
                </BC.GridRow>
              </BC.Box>

            </BC.GridColumn>

            <BC.GridRow>
              <BC.Box background="primary" hasBorder={true} paddingSize="base" spacing="base">
                <BC.GridRow>
                 <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={2} spacing="small" textColor="base">Membership History
                </BC.Heading>
                </BC.GridColumn>
                 <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
              <BC.Link>See all</BC.Link>
                  </BC.GridColumn>
                </BC.GridRow>
                <BC.Divider spacing="small"/>
                <BC.Table>
                  <BC.TableRow>
                    <BC.TableColumnHeading>Order Date</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Order #</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Product Name</BC.TableColumnHeading>
                    <BC.TableColumnHeading>Order Total</BC.TableColumnHeading>
                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text>09-14-2015</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Link>H2RB7ZCMMCZ1FTZDQ0Z0</BC.Link>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>AudibleListener® Annual Platinum Gift Membership</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>$14.95</BC.Text>
                    </BC.TableColumn>
                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text>08-14-2015</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Link>NNWKAZZYYZJJ9MVC0910</BC.Link>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>AudibleListener® Annual Platinum Gift Membership</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>$14.95</BC.Text>
                    </BC.TableColumn>
                  </BC.TableRow>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Text>09-14-2015</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Link>RK8HDDF99ZDRVQZPTQW1</BC.Link>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>AudibleListener® Annual Platinum Gift Membership</BC.Text>
                    </BC.TableColumn>
                    <BC.TableColumn>
                      <BC.Text>$0.00</BC.Text>
                    </BC.TableColumn>
                  </BC.TableRow>
                </BC.Table>
              </BC.Box>
            </BC.GridRow>

        </BC.GridRow>
        </div>
      </div>
    )
  }
}

export default OrderHistory_B;
