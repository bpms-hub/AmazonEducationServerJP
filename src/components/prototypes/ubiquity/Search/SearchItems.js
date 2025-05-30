import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';
import classNames from 'classnames';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSearchResults() {
    var rows = [];

    for (var x = 0; x < 10; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function(index) {
      return (
        <div key={index}>

          <CC.ProductListingColumn3
            hasBuyBox={true}
            hasAsin={true}
            bookTitle="First Meetings: In the Enderverse"
            bookAuthor="Orson Scott Card"
            bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
            bookSeries="Ender&#39;s Game"
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
        <BC.GridRow spacing="small">
              <BC.GridColumn gridUnits={8}>
                <BC.GridRow spacing="micro">
                  <BC.Text textSize="medium">Results for </BC.Text>
                  <BC.Text textSize="medium" textBold={true}>"Russian Books"</BC.Text>
                  <BC.Text textSize="base" textColor="secondary"> (525 results)</BC.Text>
                </BC.GridRow>
                <BC.GridRow>
                  <BC.Text textColor="secondary">Relate Searches:
                  <BC.LetterSpace size="micro" />
                  <BC.Link>rusian literature, </BC.Link>
                  <BC.Link>rusian drama, </BC.Link>
                  <BC.Link>rusian language</BC.Link>
                  </BC.Text>
                </BC.GridRow>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={4} position="last" textAlign="right" spacingTop="mini" >
                <BC.Dropdown inline={true}>
                  <BC.DropdownOption>Relevance</BC.DropdownOption>
                  <BC.DropdownOption>Best Selling</BC.DropdownOption>
                  <BC.DropdownOption>Title</BC.DropdownOption>
                  <BC.DropdownOption>Length</BC.DropdownOption>
                  <BC.DropdownOption>Customer Rating</BC.DropdownOption>
                </BC.Dropdown>
                <BC.LetterSpace/>
              </BC.GridColumn>
          </BC.GridRow>

          <BC.Divider spacing="small"  />

        {this.renderSearchResults()}

        <BC.Box backgroundColor="inverse" heightCss="60px" >
            <BC.Text textColor="inverse">Progressive Load</BC.Text>
        </BC.Box>

      </div>
    )
  }
}

export default Search;
