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
              <CC.BrowseSearch allcategories={true} hasExpander={true}  />
            </BC.FixedGridColumn>

          {/* Right Side - Search Result */}
          <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="20px">
	          		<BC.Heading spacing="small">All Categories</BC.Heading>
              <BC.Divider spacing="base" />
		        	<CC.ProductCarousel editorsPick={true} hasBrowseSearch={true} />
		        	<CC.ProductCarousel />

		        	<BC.Box backgroundColor="inverse" paddingSize="medium" heightCss="120px" spacing="large">
		        		<BC.GridRow textSize="large" textAlign="center" textColor="inverse">Marketing Banner Goes Here</BC.GridRow>
		        	</BC.Box>

		        	<CC.ProductCarousel />
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
