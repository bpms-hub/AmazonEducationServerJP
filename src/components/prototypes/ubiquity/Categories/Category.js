import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class Category extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
        <ProdHeader/>

        <div className="bc-container">
        {/* Left Side - Nav */}
        <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={220} spacingTop="large">
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={220} side="left">
              <CC.BrowseSearch categories={true} filters={true} categoryUrl="/prototypes/brickcity/all-categories" />
            </BC.FixedGridColumn>

          {/* Right Side - Search Result */}
          <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="20px">
            <BC.GridRow>
            <BC.GridColumn>
              <BC.Heading spacing="small">Sci-Fi & Fantasy</BC.Heading>
            </BC.GridColumn>
            <BC.GridColumn position="last" spacingTop="micro">
                <BC.Link textSize="medium">See all 5,892 results</BC.Link>
            </BC.GridColumn>
            </BC.GridRow>
            <BC.Divider spacing="base" />

		        	<CC.ProductCarousel editorsPick={true} hasBrowseSearch={true} />
		        	<CC.ProductCarousel />
		        	<CC.ProductCarousel />

		        	<BC.Box backgroundColor="inverse" heightCss="120px" spacing="medium"></BC.Box>

		        	<CC.ProductCarousel />
				</BC.FixedGridColumn>
			</BC.FixedGridRow>
        </div>

        <ProdFooter/>
      </div>
    )
  }
}

export default Category;
