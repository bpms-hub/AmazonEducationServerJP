import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../../prototypes/ubiquity/cc';
import AEHeader from "../../layout_edu/AEHeader.js";
import AESidebar from "../../layout_edu/AESidebar.js";
import AEFooter from "../../layout_edu/AEFooter.js";

import WButtonsIOS from "./ios/WButtonsIOS.js";
import WCardsAndroid from "./android/WCardsAndroid.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class WaffleCards extends React.Component{

  render() {
    return (
      <div background="#222222">
                <AEHeader />
              <div className="" >

            <BC.GridRow spacingTop="large">
  <BC.GridColumn gridUnits={3}>
<AESidebar />
  </BC.GridColumn>


{/* Content Section */}
<ReactCSSTransitionGroup component="div" transitionName="fadeOut" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>

<BC.GridColumn gridUnits={9} cssClass="bc-edu-container" >

<BC.Box background="#fff" hasBorder={false} paddingSize="none">

    <CC.Tabs spacingTop="base" cssClass="bc-edu-tab-heading">
        <CC.TabPanel title="Android">
          <WCardsAndroid />
        </CC.TabPanel>

        <CC.TabPanel title="">
          <WButtonsIOS />
        </CC.TabPanel>
    </CC.Tabs>
</BC.Box>



  </BC.GridColumn>
</ReactCSSTransitionGroup>

</BC.GridRow>


      </div>
        <AEFooter />
      </div>
    )
  }
}
export default WaffleCards;
