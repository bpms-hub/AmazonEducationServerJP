import React from 'react';
import BC from 'AudibleUITags';
import CC from './cc';
import ProdHeader from './Header/ProdHeader';
import ProdFooter from './Footer/ProdFooter';

  class International2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: false}
    }

    handleClick(e) {
      e.preventDefault();
        this.setState({selected: !this.state.selected});
    }

  renderResults() {
    var rows = [];

    for (var x = 0; x < 10; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function() {
      return (
        <div>

          <CC.ProductListingColumn3
            hasBuyBox={true}
            hasAsin={true}
            bookTitle="First Meetings: In the Enderverse"
            bookAuthor="Orson Scott Card"
            bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
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
        <ProdHeader/>

        <div className="bc-container">
          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={220} spacingTop="large">
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={220} side="left">
                <CC.BrowseSearch subcategories={true} filters={true} categoryUrl="/prototypes/brickcity/international" />

            </BC.FixedGridColumn>

              <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="20px">

                  {this.state.selected
                    ? <div>
                    <BC.GridRow spacing="medium">
                      <BC.GridColumn gridUnits={6}>
                        <BC.GridRow>
                          <BC.Text textSize="large">Doctor Who</BC.Text>
                        </BC.GridRow>
                        <BC.GridRow>
                          <BC.Text textSize="small" textColor="tertiary">Showing 01-20 of 3,266 results</BC.Text>
                        </BC.GridRow>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={5} position="last">
                        <BC.Dropdown >
                          <BC.DropdownOption>Relevance</BC.DropdownOption>
                          <BC.DropdownOption>Best Selling</BC.DropdownOption>
                          <BC.DropdownOption>Title</BC.DropdownOption>
                          <BC.DropdownOption>Length</BC.DropdownOption>
                          <BC.DropdownOption>Customer Rating</BC.DropdownOption>
                        </BC.Dropdown>
                      </BC.GridColumn>
                    </BC.GridRow>
                      </div>
                    : null
                  }
    	          		{this.renderResults()}
    				</BC.FixedGridColumn>

        </BC.FixedGridRow>
        </div>

      </div>
    )
  }
}

export default International2;
