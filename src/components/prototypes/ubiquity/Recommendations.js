import React from 'react';
import BC from 'AudibleUITags';
import CC from './cc';
import ProdHeader from './Header/ProdHeader';
import ProdFooter from './Footer/ProdFooter';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTabs() {

    return (
      <div>

        {/* Tab Navigation */}

        <BC.Section spacing="base">

          <BC.Text textColor="base" textSize="small">View based on:<BC.LetterSpace size="large"/></BC.Text>
          <BC.Link textColor="base" textSize="small">Audible Purchases</BC.Link>
          <BC.Pipe />  
          <BC.Link textSize="small">Amazon Book and Kindle Purchases</BC.Link>
        </BC.Section>

      </div>

    )

  }

  renderItems() {
    var rows = [];

    for (var x = 0; x < 5; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function(row, index) {
      return (
        <div>
        <CC.ProductListingColumn3
          bookTitle="First Meetings: In the Enderverse"
          bookAuthor="Orson Scott Card"
          bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
          bookRating={true}
          recommendations={true}
          hasRadioBtn={true}
          />
        </div>

      )
    })

    return rowMap;
  }

  renderRestoreItems() {
    var rows = [];

    for (var x = 0; x < 5; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function(row, index) {
      return (
        <div>
        <CC.ProductListingColumn3
          bookTitle="First Meetings: In the Enderverse"
          bookAuthor="Orson Scott Card"
          bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
          bookRating={true}
          recommendations={true}
          recommendationsBtn={true}
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
        <div className="bc-container">
          <BC.Heading headingLevel="1" spacing="small" spacingTop="medium">Improve Your Recommendations</BC.Heading>

          <BC.Section spacing="medium">
            <CC.Tabs>

              {/* Tab1 - Inspired by Purchases */}
              <CC.TabPanel title="inspired by your purchases">

                {this.renderTabs()}
                <BC.Divider spacing="small" />
                {this.renderItems()}

              </CC.TabPanel>

              {/* Tab2 - Inspired by Wishlist */}
              <CC.TabPanel title="inspired by your wish list">

                {this.renderItems()}

              </CC.TabPanel>

              {/* Tab3 - Remove Items */}
              <CC.TabPanel title="removed items">

                {this.renderRestoreItems()}

              </CC.TabPanel>


            </CC.Tabs>
          </BC.Section>
        </div>
        <ProdFooter/>
      </div>
    )
  }
}

export default Recommendations;
