import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';
import productData from '../../../../data/prototypes/products.json';

class BestSellersMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBestSellers() {
    var rows = [];

    for (var x = 0; x < 3; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function() {
      return (
        <div>

          <CC.ProductListingMobile
            hasAsin={true}
            bookTitle="First Meetings: In the Enderverse"
            bookAuthor="Orson Scott Card"
            bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
            bookLength="5 hrs & 18 mins, Unabridged"
            bookPrice="14.95"
            bookRating={true}
            />

        </div>
      )
    })
    return rowMap;
  }

  render() {
    return (
      <div>
        <ProdHeaderMobile member={false} />
        <BC.Box backgroundColor="secondary" paddingSize="mini">
          <BC.Heading headingLevel="2">Audible Best Sellers</BC.Heading>
        </BC.Box>
        <div className="bc-container">
            <BC.GridRow spacing="small" spacingTop="small">
              <BC.GridColumn>
                <BC.Text>5,567 Results</BC.Text>
              </BC.GridColumn>
              <BC.GridColumn textAlign="right" position="last">
                <BC.Link >Refine</BC.Link>
              </BC.GridColumn>
            </BC.GridRow>
        </div>

        {this.renderBestSellers()}

        <div className="bc-container">
            <BC.Section textAlign="center" spacing="medium">
              <BC.Box backgroundColor="secondary" paddingSize="mini" spacing="mini">Load Next 20</BC.Box>
              <BC.Text textSize="small" textColor="secondary">Showing 1-20</BC.Text>
            </BC.Section>
        </div>

        <ProdFooterMobile/>

      </div>
    )
  }
}

export default BestSellersMobile;
