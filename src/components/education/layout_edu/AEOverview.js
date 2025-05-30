import React from 'react';
import BC from 'AudibleUITags';

import AEHeader from "../layout_edu/AEHeader.js";
import AESidebar from "../layout_edu/AESidebar.js";
import AEFooter from "../layout_edu/AEFooter.js";

class AEOverview extends React.Component {
  render() {
    return (
      <div>
        <AEHeader />
        <BC.Section  spacingTop="medium" cssClass="overview-section-arrow">
          <BC.Box background="#ed5907" heightCss="478" >


            <BC.GridColumn gridUnits={6} gridPush={2} spacingTop="mini">
              <BC.Image verticalAlign="bottom" source="https://images-na.ssl-images-amazon.com/images/G/01/education/branding/edu_cover_devices._V288526379_.png" />

            </BC.GridColumn>

            <BC.GridColumn spacingTop="base" gridUnits={6}  position="last">
              <BC.GridRow spacingTop="none">
                <BC.Paragraph spacing="none" textSize="extra-large" textColor="inverse" textBold={false}>Education Design Library</BC.Paragraph>
              </BC.GridRow>
              <BC.GridRow>
                <BC.Paragraph textColor="inverse" textSize="large">
                Build version 1.0
                </BC.Paragraph>
              </BC.GridRow>
            </BC.GridColumn>
          </BC.Box>
        </BC.Section>


        <BC.GridRow spacingTop="extra-large">

          <BC.GridColumn gridUnits={4} gridPush={2}>
            <BC.Box background="primary" hasBorder={true} paddingSize="base" spacing="base">

              <BC.GridRow>
                <BC.GridColumn gridUnits={8} spacing="micro">
                  <BC.Text textSize="medium" textColor="secondary">Amazon English Updates
                  </BC.Text>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
                  <BC.Link textColor="primary" linkType="nav" url={"/education/waffle/updates"}>View All Updates</BC.Link>
                </BC.GridColumn>

              </BC.GridRow>
              <hr />

              <BC.GridRow spacingTop="base" spacing="mini">
                <BC.GridColumn gridUnits={8} spacing="micro">
                  <BC.Text textSize="base" textColor="base">Design Review
                  </BC.Text>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
                  <BC.Link textColor="secondary" textSize="small" linkType="nav">v0.9.3 Jan 22 2016</BC.Link>
                </BC.GridColumn>

              </BC.GridRow>
              <BC.GridRow spacing="base">
                <BC.Text textColor="secondary" textSize="small">Comprehensive review of all components and pages. Image updates and copy changes across the Pattern Library. Final versions designed, not yet implemented.</BC.Text>
              </BC.GridRow>

              <hr />

              <BC.GridRow spacingTop="base" spacing="mini">
                <BC.GridColumn gridUnits={8} spacing="micro">
                  <BC.Text textSize="base" textColor="base">General Updates
                  </BC.Text>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
                  <BC.Link textColor="secondary" textSize="small" linkType="nav">v0.9.2.2 Jan 13 2016</BC.Link>
                </BC.GridColumn>

              </BC.GridRow>
              <BC.GridRow spacing="base">
                <BC.Text textColor="secondary" textSize="small">Styling updates including: Font sizes; Header styles; Footer color and alignment <br />LH navigation scrolling enabled <br />Image updates for Buttons, Checkboxes <br />UI bug fixes</BC.Text>
              </BC.GridRow>

              <hr />

              <BC.GridRow spacingTop="base" spacing="mini">
                <BC.GridColumn gridUnits={8} spacing="micro">
                  <BC.Text textSize="base" textColor="base">Styling Updates
                  </BC.Text>
                </BC.GridColumn>
                <BC.GridColumn gridUnits={4} textAlign="right"  position="last">
                  <BC.Link textColor="secondary" textSize="small" linkType="nav">v0.9.2.1 Jan 11 2016</BC.Link>
                </BC.GridColumn>

              </BC.GridRow>
              <BC.GridRow spacing="base">
                <BC.Text textColor="secondary" textSize="small">Site-wide styles updated including: Dual/Single Language, Do & Don’t<br/>UI bug fixes</BC.Text>
              </BC.GridRow>

              <hr />

            </BC.Box>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={4} gridPull={2} position="last">
            <BC.Box background="primary" hasBorder={true} paddingSize="base" spacing="large">
              <BC.GridRow>
                <BC.GridColumn gridUnits={8} spacing="micro">
                  <BC.Text textSize="medium" textColor="secondary">Project Cupcake Updates
                  </BC.Text>
                </BC.GridColumn>

              </BC.GridRow>
              <hr />

              <BC.GridRow spacingTop="base" spacing="base">
                <BC.GridColumn gridUnits={8} spacing="micro">
                  <BC.Text textSize="base" textColor="base">Coming soon...
                  </BC.Text>
                </BC.GridColumn>
  </BC.GridRow>


</BC.Box>


</BC.GridColumn>


  </BC.GridRow>


        <AEFooter />
      </div>
    )
  }
}

export default AEOverview;
