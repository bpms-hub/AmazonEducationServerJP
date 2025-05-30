import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../../prototypes/ubiquity/cc';
import AEHeader from "../../layout_edu/AEHeader.js";
import AESidebar from "../../layout_edu/AESidebar.js";
import AEFooter from "../../layout_edu/AEFooter.js";

import WButtonsIOS from "./ios/WButtonsIOS.js";
import WButtonsAndroid from "./android/WButtonsAndroid.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class WaffleButtons extends React.Component{

  render() {
    return (      <div background="#222222">
                <AEHeader />
              <div className="">

            <BC.GridRow spacingTop="large">
  <BC.GridColumn gridUnits={3}>
<AESidebar />
  </BC.GridColumn>


{/* Content Section */}

<BC.GridColumn gridUnits={9} cssClass="bc-edu-container">

          <ReactCSSTransitionGroup component="div" transitionName="fadeIn" transitionAppear={false} transitionLeave={false}>
<BC.Box background="#fff" hasBorder={false} paddingSize="none" cssClass="fadeOut">

    <CC.Tabs spacingTop="base" cssClass="bc-edu-tab-heading">
        <CC.TabPanel title="Android">
          <WButtonsAndroid />
        </CC.TabPanel>

        <CC.TabPanel title="">
          <WButtonsIOS />
        </CC.TabPanel>
    </CC.Tabs>

</BC.Box>
</ReactCSSTransitionGroup>
  </BC.GridColumn>

</BC.GridRow>


      </div>
        <AEFooter />
      </div>
    )
  }
}
export default WaffleButtons;
