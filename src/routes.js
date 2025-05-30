import React from 'react';
import { Route, IndexRoute } from 'react-router'


import UpdatesWaffle from './components/education/prototypes_edu/waffle/UpdatesWaffle'
import PrinciplesWaffle from './components/education/prototypes_edu/waffle/PrinciplesWaffle'
import WaffleButtons from './components/education/prototypes_edu/waffle/WaffleButtons'
import WaffleRadioButtons from './components/education/prototypes_edu/waffle/WaffleRadioButtons'
import WaffleDots from './components/education/prototypes_edu/waffle/WaffleDots'
import WaffleBottomSheet from './components/education/prototypes_edu/waffle/WaffleBottomSheet'
import WaffleRangeSliders from './components/education/prototypes_edu/waffle/WaffleRangeSliders'
import WaffleToggle from './components/education/prototypes_edu/waffle/WaffleToggle'
import WaffleCheckbox from'./components/education/prototypes_edu/waffle/WaffleCheckbox'
import WaffleScrubbers from'./components/education/prototypes_edu/waffle/WaffleScrubbers'
import WaffleCards from'./components/education/prototypes_edu/waffle/WaffleCards'
import WaffleBackArrow from'./components/education/prototypes_edu/waffle/WaffleBackArrow'
import WaffleTiles from'./components/education/prototypes_edu/waffle/WaffleTiles'
import WaffleTabs from'./components/education/prototypes_edu/waffle/WaffleTabs'
import WaffleLists from'./components/education/prototypes_edu/waffle/WaffleLists'
import WaffleSnackbars from'./components/education/prototypes_edu/waffle/WaffleSnackbars'
import WaffleDialogues from'./components/education/prototypes_edu/waffle/WaffleDialogues'
import WaffleMenus from'./components/education/prototypes_edu/waffle/WaffleMenus'
import ComingSoonCupcake from './components/education/prototypes_edu/cupcake/ComingSoonCupcake'
import AEResources from'./components/education/prototypes_edu/resources/AEResources'
import AEOverview from './components/education/layout_edu/AEOverview'



var routes = (

  <Route path="education" >
    <Route component={AEOverview}  path="/" />
    <IndexRoute component={AEOverview} />
    <Route path="waffle">
      <Route component={UpdatesWaffle} path="updates" />
      <Route component={PrinciplesWaffle} path="principles" />
      <Route component={WaffleButtons}  path="buttons" />
      <Route component={WaffleRadioButtons}  path="radio-buttons" />
      <Route component={WaffleBottomSheet}  path="bottom-sheet" />
      <Route component={WaffleRangeSliders}  path="range-sliders" />
      <Route component={WaffleToggle}  path="toggle" />
      <Route component={WaffleCheckbox}  path="checkbox" />
      <Route component={WaffleScrubbers}  path="scrubbers" />
      <Route component={WaffleCards}  path="cards" />
      <Route component={WaffleBackArrow}  path="back-arrow" />
      <Route component={WaffleDots}  path="dots" />
      <Route component={WaffleTiles}  path="tiles" />
      <Route component={WaffleTabs}  path="tabs" />
      <Route component={WaffleLists}  path="lists" />
      <Route component={WaffleSnackbars}  path="snackbars" />
      <Route component={WaffleDialogues}  path="dialogues" />
      <Route component={WaffleMenus}  path="menus" />
    </Route>
    <Route path="cupcake">
      <IndexRoute component={AEOverview} />
      <Route component={ComingSoonCupcake} path="coming-soon" />
    </Route>
    <Route path="resources">
      <IndexRoute component={AEOverview} />
      <Route component={AEResources} path="resource-index" />
    </Route>
  </Route>

);

export default routes;
