import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';


class GiftsReceived extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          <BC.Heading headingLevel={2}>Gifts Received</BC.Heading>
        <BC.Paragraph></BC.Paragraph>

<BC.Box background="primary" spacing="base" paddingSize="base" hasBorder={false}>

  <BC.Heading headingLevel={2}  textColor="secondary" spacing="small">Gifts Received</BC.Heading>

  <BC.GridRow>
    <BC.Divider spacing="base"/>

      <BC.Table textAlign="center">
        <BC.TableRow>
          <BC.TableColumnHeading>Date</BC.TableColumnHeading>
          <BC.TableColumnHeading>Gift #</BC.TableColumnHeading>
          <BC.TableColumnHeading>Membership Length</BC.TableColumnHeading>
            <BC.TableColumnHeading>Price</BC.TableColumnHeading>
        </BC.TableRow>
    <BC.TableRow>
          <BC.TableColumn><BC.Text>05-19-15</BC.Text></BC.TableColumn>
            <BC.TableColumn><BC.Link>7ZCMMCZ1FCL8DTZDQ0Z0</BC.Link></BC.TableColumn>
              <BC.TableColumn><BC.Text>3 Months</BC.Text></BC.TableColumn>
                <BC.TableColumn><BC.Text>$45.00</BC.Text></BC.TableColumn>
          </BC.TableRow>
          <BC.TableRow>
                <BC.TableColumn><BC.Text>05-24-15</BC.Text></BC.TableColumn>
                  <BC.TableColumn><BC.Link>NNWKAZZYYZJJ9MVC0910</BC.Link></BC.TableColumn>
                    <BC.TableColumn><BC.Text>6 Months</BC.Text></BC.TableColumn>
                      <BC.TableColumn><BC.Text>$90.00</BC.Text></BC.TableColumn>
                </BC.TableRow>
                <BC.TableRow>
                      <BC.TableColumn><BC.Text>12-20-14</BC.Text></BC.TableColumn>
                        <BC.TableColumn><BC.Link>8HDDF99ZDJKLJRZPTQW1</BC.Link></BC.TableColumn>
                          <BC.TableColumn><BC.Text>12 Months</BC.Text></BC.TableColumn>
                            <BC.TableColumn><BC.Text>$150.00</BC.Text></BC.TableColumn>
                      </BC.TableRow>
    </BC.Table>
  </BC.GridRow>
</BC.Box>







        </div>
</div>
      )
    }
  }
  export default GiftsReceived;
