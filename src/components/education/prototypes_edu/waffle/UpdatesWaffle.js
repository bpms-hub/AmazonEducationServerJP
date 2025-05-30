import React from 'react';
import BC from 'AudibleUITags';
// import ProdHeader from '../Header/ProdHeader';
// import ProdFooter from '../Footer/ProdFooter'
import AEHeader from "../../layout_edu/AEHeader.js";
import AESidebar from "../../layout_edu/AESidebar.js";
import AEFooter from "../../layout_edu/AEFooter.js";

class UpdatesWaffle extends React.Component{
  render() {
    return (
    <div background="#222222">
              <AEHeader />
            <div className="">
        <BC.Section spacing="none" spacingTop="large">
          <BC.GridRow spacingTop="large" >
  <BC.GridColumn gridUnits={3}>
<AESidebar />
  </BC.GridColumn>


              {/* Content Section */}

              <BC.GridColumn gridUnits={9} cssClass="bc-edu-container">

            	<BC.Box background="#fff" hasBorder={false} paddingSize="none" spacingTop="extra-large">

  <BC.GridRow spacing="medium">
        <BC.Text textColor='base' textSize="large" spacing="base">Amazon English: <i>Updates</i></BC.Text>
  </BC.GridRow>
          <BC.GridRow spacing="small">
            <BC.GridColumn gridUnits={2}>
              <BC.GridRow>
      <BC.Text textColor="base">Design Revisions</BC.Text>
      </BC.GridRow>
      <BC.GridRow>
<BC.Text textColor="tertiary" textSize="mini">v0.9.3 Jan 22 2016</BC.Text>
</BC.GridRow>
      </BC.GridColumn>
      <BC.GridColumn gridUnits={8}>
    <BC.LetterSpace />
  <BC.Text textColor="base">Comprehensive review of all components and pages. Image updates and copy changes across the Pattern Library. Final versions designed, not yet implemented.</BC.Text>
      <BC.Divider cssClass="bc-divider"/>
  </BC.GridColumn>
      </BC.GridRow>

      <BC.GridRow spacing="small"><hr /></BC.GridRow>

      <BC.GridRow spacing="small">
        <BC.GridColumn gridUnits={2}>
          <BC.GridRow>
  <BC.Text textColor="base">General updates</BC.Text>
  </BC.GridRow>
  <BC.GridRow>
<BC.Text textColor="tertiary" textSize="mini">v0.9.2.2 Jan 13 2016</BC.Text>
</BC.GridRow>
  </BC.GridColumn>
  <BC.GridColumn gridUnits={8}>
<BC.LetterSpace />
<BC.Text textColor="base">Styling updates including: Font sizes; Header styles; <br />Footer color and alignment <br />LH navigation scrolling enabled
<br />Image updates for Buttons, Checkboxes <br />UI bug fixes</BC.Text>
  <BC.Divider cssClass="bc-divider"/>
</BC.GridColumn>
  </BC.GridRow>


  <BC.GridRow spacing="small"><hr /></BC.GridRow>

  <BC.GridRow spacing="small">
    <BC.GridColumn gridUnits={2}>
      <BC.GridRow>
<BC.Text textColor="base">Styling updates</BC.Text>
</BC.GridRow>
<BC.GridRow>
<BC.Text textColor="tertiary" textSize="mini">v0.9.2.1 Jan 11 2016</BC.Text>
</BC.GridRow>
</BC.GridColumn>
<BC.GridColumn gridUnits={8}>
<BC.LetterSpace />
<BC.Text textColor="base">Site-wide styles updated including: Dual/Single Language, Do & Don’t <br />UI bug fixes</BC.Text>
<BC.Divider cssClass="bc-divider-edu"/>
</BC.GridColumn>
</BC.GridRow>

<BC.GridRow spacing="small"><hr /></BC.GridRow>

<BC.GridRow spacing="small">
  <BC.GridColumn gridUnits={2}>
    <BC.GridRow>
<BC.Text textColor="base">Copy/Design changes</BC.Text>
</BC.GridRow>
<BC.GridRow>
<BC.Text textColor="tertiary" textSize="mini">v0.9.2 Jan 8 2016</BC.Text>
</BC.GridRow>
</BC.GridColumn>
<BC.GridColumn gridUnits={8}>
<BC.LetterSpace />
<BC.Text textColor="base">
Copy changes and updated images for numerous components</BC.Text>
<BC.Divider cssClass="bc-divider"/>
</BC.GridColumn>
</BC.GridRow>

<BC.GridRow spacing="small"><hr /></BC.GridRow>

<BC.GridRow spacing="small">
  <BC.GridColumn gridUnits={2}>
    <BC.GridRow>
<BC.Text textColor="base">Component updates</BC.Text>
</BC.GridRow>
<BC.GridRow>
<BC.Text textColor="tertiary" textSize="mini">v0.9.1 Jan 5 2016</BC.Text>
</BC.GridRow>
</BC.GridColumn>
<BC.GridColumn gridUnits={8}>
<BC.LetterSpace />
<BC.Text textColor="base">
Content pushed for remaining components (replacing placeholder copy)</BC.Text>
<BC.Divider cssClass="bc-divider"/>
</BC.GridColumn>
</BC.GridRow>

<BC.GridRow spacing="small"><hr /></BC.GridRow>

<BC.GridRow spacing="small">
  <BC.GridColumn gridUnits={2}>
    <BC.GridRow>
<BC.Text textColor="base">Initial release</BC.Text>
</BC.GridRow>
<BC.GridRow>
<BC.Text textColor="tertiary" textSize="mini">v0.9 Dec 30 2015</BC.Text>
</BC.GridRow>
</BC.GridColumn>
<BC.GridColumn gridUnits={8}>
<BC.LetterSpace />
<BC.Text textColor="base">
Site launched <br /> Content for Buttons and Menus pending; all others complete</BC.Text>
<BC.Divider cssClass="bc-divider"/>
</BC.GridColumn>
</BC.GridRow>




  <BC.GridRow spacing="base">
        <BC.Divider />
              </BC.GridRow>

  </BC.Box>
  </BC.GridColumn>
  </BC.GridRow>
        </BC.Section>
</div>
        <AEFooter />
      </div>
    )
  }
}
export default UpdatesWaffle;
