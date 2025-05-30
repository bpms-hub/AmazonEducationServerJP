import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../../prototypes/ubiquity/cc';
import AEHeader from "../../layout_edu/AEHeader.js";
import AESidebar from "../../layout_edu/AESidebar.js";
import AEFooter from "../../layout_edu/AEFooter.js";

import WButtonsIOS from "./ios/WButtonsIOS.js";
import WSnackbarsAndroid from "./android/WSnackbarsAndroid.js";



class WaffleSnackbars extends React.Component{
  render() {
    return (
      <div background="#222222">
                <AEHeader />
    <div className="">


            <BC.GridRow spacingTop="large">
  <BC.GridColumn gridUnits={3}>
<AESidebar />
  </BC.GridColumn>


{/* Content Section */}
<BC.GridColumn gridUnits={9} cssClass="bc-edu-container">
<BC.Box background="#fff" hasBorder={false} paddingSize="none">

    <CC.Tabs spacingTop="base">
        <CC.TabPanel title="Android">
          <WSnackbarsAndroid />
        </CC.TabPanel>

        <CC.TabPanel title="">
          <WButtonsIOS />
        </CC.TabPanel>
    </CC.Tabs>

</BC.Box>
  </BC.GridColumn>

</BC.GridRow>


      </div>
        <AEFooter />
      </div>
    )
  }
}
export default WaffleSnackbars;
