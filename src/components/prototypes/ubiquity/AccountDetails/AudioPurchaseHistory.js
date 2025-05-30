import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';

class AudioPurchaseHistory extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          <BC.Heading headingLevel={2}>Audio Purchase History</BC.Heading>
        <BC.Paragraph>Your books are grouped by order. AudibleListener® plan members are eligible to take advantage of our Great Listen Guarantee and make returns.</BC.Paragraph>


<BC.Box background="primary" spacing="base" paddingSize="base" hasBorder={false}>

          <BC.GridRow>
            <BC.GridColumn gridUnits={12}>

              <BC.Accordion activeRow={1}>
                <BC.AccordionRow title="Oct 4, 2015">
                  <BC.Table>
                    <BC.TableRow>
                        <BC.TableColumnHeading></BC.TableColumnHeading>
                      <BC.TableColumnHeading>Order: <BC.Link>D01-2822099-3814634</BC.Link></BC.TableColumnHeading>

                        <BC.TableColumnHeading>Total: <BC.Text>$0.00</BC.Text></BC.TableColumnHeading>
                    </BC.TableRow>
                    <BC.TableRow>
                        <BC.TableColumn>
                          <CC.Product  asinImageUrl={productData[0].product_images[500]} />
                        </BC.TableColumn>
                            <BC.TableColumn>
                              <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                              <BC.ListItem>
                                <BC.Text textColor="base" textSize="base">The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia</BC.Text>
                              </BC.ListItem>
                              <BC.ListItem>
                                <BC.Text>by C.S. Lewis</BC.Text>
                              </BC.ListItem>
                              <BC.ListItem>
                                <BC.Text>Narrated by Kenneth Branagh</BC.Text>
                              </BC.ListItem>
                            </BC.List>
                            </BC.TableColumn>
                              <BC.TableColumn><BC.Button buttonType="secondary">Return</BC.Button></BC.TableColumn>
                          </BC.TableRow>
                          <BC.TableRow>
                              <BC.TableColumn>
                                <CC.Product onAsin={true} asinImageUrl={productData[0].product_images[500]} />
                              </BC.TableColumn>
                                  <BC.TableColumn>
                                    <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                                    <BC.ListItem>
                                      <BC.Text textColor="base" textSize="base">The Martian</BC.Text>
                                    </BC.ListItem>
                                    <BC.ListItem>
                                      <BC.Text>by Andy Weir</BC.Text>
                                    </BC.ListItem>
                                    <BC.ListItem>
                                      <BC.Text>Narrated by R. C. Bray</BC.Text>
                                    </BC.ListItem>
                                  </BC.List>
                                  </BC.TableColumn>
                                    <BC.TableColumn><BC.Button buttonType="secondary">Return</BC.Button></BC.TableColumn>
                                </BC.TableRow>
                  </BC.Table>
                </BC.AccordionRow>

                <BC.AccordionRow title="August 10, 2015">
                  <BC.Table>
                    <BC.TableRow>
                      <BC.TableColumnHeading>August 10, 2015</BC.TableColumnHeading>
                      <BC.TableColumnHeading>Order #: <BC.Link>D22-2586091-10842859</BC.Link></BC.TableColumnHeading>
                        <BC.TableColumnHeading>Total: <BC.Text>$40.00</BC.Text></BC.TableColumnHeading>
                    </BC.TableRow>
                    <BC.TableRow>
                        <BC.TableColumn>
                        <CC.Product onAsin={true} asinImageUrl={productData[0].product_images[500]} />
                        </BC.TableColumn>
                            <BC.TableColumn>
                              <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                              <BC.ListItem>
                                <BC.Text textColor="base" textSize="base">Off To Be The Wizard</BC.Text>
                              </BC.ListItem>
                              <BC.ListItem>
                                <BC.Text>by Scott Meyer</BC.Text>
                              </BC.ListItem>
                              <BC.ListItem>
                                <BC.Text>Narrated by Kenneth Branagh</BC.Text>
                              </BC.ListItem>
                            </BC.List>
                            </BC.TableColumn>
                              <BC.TableColumn><BC.Button buttonType="secondary">Return</BC.Button></BC.TableColumn>
                          </BC.TableRow>

                  </BC.Table>
                </BC.AccordionRow>
                <BC.AccordionRow title="July 9, 2015">
                  <BC.Table>
                    <BC.TableRow>
                      <BC.TableColumnHeading>August 10, 2015</BC.TableColumnHeading>
                      <BC.TableColumnHeading>Order #: <BC.Link>D22-2586091-10842859</BC.Link></BC.TableColumnHeading>
                        <BC.TableColumnHeading>Total: <BC.Text>$40.00</BC.Text></BC.TableColumnHeading>
                    </BC.TableRow>
                    <BC.TableRow>
                        <BC.TableColumn>
                          <CC.Product onAsin={true} asinImageUrl={productData[0].product_images[500]} />
                        </BC.TableColumn>
                            <BC.TableColumn>
                              <BC.List listDirection="nostyle" textColor="secondary" textSize="small">
                              <BC.ListItem>
                                <BC.Text textColor="base" textSize="base">The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia</BC.Text>
                              </BC.ListItem>
                              <BC.ListItem>
                                <BC.Text>by C.S. Lewis</BC.Text>
                              </BC.ListItem>
                              <BC.ListItem>
                                <BC.Text>Narrated by Kenneth Branagh</BC.Text>
                              </BC.ListItem>
                            </BC.List>
                            </BC.TableColumn>
                              <BC.TableColumn><BC.Button buttonType="secondary">Return</BC.Button></BC.TableColumn>
                          </BC.TableRow>
                  </BC.Table>
                </BC.AccordionRow>
              </BC.Accordion>
            </BC.GridColumn>
          </BC.GridRow>
          </BC.Box>



        </div>
</div>
      )
    }
  }
  export default AudioPurchaseHistory;
