import React from 'react';
import BC from 'AudibleUITags';
// import ProdHeader from '../Header/ProdHeader';
// import ProdFooter from '../Footer/ProdFooter'
import AEHeader from "../../layout_edu/AEHeader.js";
import AESidebar from "../../layout_edu/AESidebar.js";
import AEFooter from "../../layout_edu/AEFooter.js";

class ComingSoonCupcake extends React.Component{
  render() {
    return (
    <div background="#222222">
              <AEHeader />
            <div className="">
        <BC.Section spacing="none" spacingTop="double-large" >
          <BC.GridRow spacingTop="double-large" textAlign="center">




              {/* Content Section */}

              <BC.GridColumn gridUnits={12} cssClass="">

            	<BC.Box background="#fff" hasBorder={false} paddingSize="none" spacingTop="extra-large">



                    <BC.Image source=" https://app.box.com/representation/file_version_50896120898/image_2048/1.png"></BC.Image>


  </BC.Box>
  </BC.GridColumn>
  </BC.GridRow>
        </BC.Section>
</div>
      </div>
    )
  }
}
export default ComingSoonCupcake;
