import React from 'react';
import BC from 'AudibleUITags';
import CC from './cc';
import ProdHeader from './Header/ProdHeader';
import ProdFooter from './Footer/ProdFooter';

class International {
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

            {/* Category */}
            <BC.Box backgroundColor="secondary">

            <BC.Heading headingLevel={3} spacing="mini" textCapitalize={true}>Categories</BC.Heading>

            <BC.Divider spacing="small" />

	            	<BC.List listType="nostyle">
	            		<BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Mysteries & Thrillers</BC.Link>
	            		</BC.ListItem>
	            		<BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Sci-Fi & Fantasy</BC.Link>
	            		</BC.ListItem>
	            		<BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>History</BC.Link>
	            		</BC.ListItem>
	            		<BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Science & Technology</BC.Link>
	            		</BC.ListItem>
	            		<BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Classics</BC.Link>
	            		</BC.ListItem>
	            		<BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Bios & Memoirs</BC.Link>
	            		</BC.ListItem>
	            		<BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Business</BC.Link>
	            		</BC.ListItem>
	            		<BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Self Development</BC.Link>
	            		</BC.ListItem>
                  <BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Romance</BC.Link>
	            		</BC.ListItem>
	            		<BC.ListItem spacing="mini">
	            			<BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Fiction</BC.Link>
	            		</BC.ListItem>
	            	</BC.List>

                <BC.Expander anchor={false} hideText="Less Categories" showText="More Categories">
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Teens</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Kids</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Nonfiction</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Comedy</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Foreign Language</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Erotica & Sexuality</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Health & Fitness</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Language</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Live Events</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Newspapers & Magazines</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Radio & TV</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Religion & Spirituality</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Sports</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link linkType="nav" app={true} url={"/prototypes/brickcity/international2"}>Travel & Adventure</BC.Link>
                  </BC.ListItem>
                </BC.List>
                </BC.Expander>
                </BC.Box>

				</BC.FixedGridColumn>

        <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="20px">
	          		{this.renderResults()}
				</BC.FixedGridColumn>
			</BC.FixedGridRow>
        </div>

        <ProdFooter/>
      </div>
    )
  }
}

export default International;
