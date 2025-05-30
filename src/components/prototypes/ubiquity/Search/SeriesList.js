import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';


class SeriesList extends React.Component {
  renderBestSellers() {
    var rows = [];

    for (var x = 1; x <= 7; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function(index) {
      return (
        <div key={index}>
        <CC.ProductListingColumn4
          seriesList={true}
          seriesNum={index}
          hasAsin={true}
          bookTitleLink="First Meetings: In the Enderverse"
          bookAuthor="Orson Scott Card"
          bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
          bookSeries="Ender&#39;s Game"
          bookRating={true}
          hasBuyBox={true}
          />

        </div>
      )
    })
    return rowMap;
  }


  render() {
    return (
      <div>
        <ProdHeader/>

        <BC.Section heightCss="250px" spacing="medium" width="100%" cssClass="bc-seriesList-Banner" spacingTop="medium">
          <div className="bc-container">
          <BC.Section paddingTop="base" textColor="inverse" heightCss="150px">
            <BC.GridRow textColor="inverse" spacing="micro">
              <BC.Text textSize="medium" textBold={true}>7 Books</BC.Text><BC.Text textSize="medium"> in Series</BC.Text>
            </BC.GridRow>
            <BC.GridRow textColor="inverse">
              <BC.Text textSize="extra-large">Chronicles of Narnia</BC.Text>
            </BC.GridRow>
          </BC.Section>
          </div>
        </BC.Section>

        <div className="bc-container">
          <BC.GridRow spacing="small">
            {this.renderBestSellers()}
          </BC.GridRow>
          <BC.Divider spacing="large" />

          <ProdFooter/>
        </div>
      </div>

    )
  }
}
export default SeriesList;
