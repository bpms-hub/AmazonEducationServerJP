import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class AudibleSoftwarePC2 extends React.Component {

  render() {
    return (
      <div>
        <ProdHeader/>

        <div className="bc-container">
        <BC.Breadcrumbs breadcrumbTrail={[{name: "home", url: "/prototypes/brickcity"},{name: "Install Software"}]} spacing="small" spacingTop="medium" />
        <BC.GridRow spacing="medium">
          <BC.Icon iconType="windows" verticalAlign="baseline" />
          <BC.LetterSpace />
          <BC.Text textSize="large">Audible Software for Windows PC</BC.Text>
        </BC.GridRow>
        <CC.ProgressBarRow textSize="base">
          <CC.ProgressBar spacing="small" widthPercentage={33.3}>Choose a Device</CC.ProgressBar>
          <CC.ProgressBar activeState={true} spacing="small" widthPercentage={33.3}>Install Software</CC.ProgressBar>
          <CC.ProgressBar spacing="small" widthPercentage={33.3}>Download Audio</CC.ProgressBar>
        </CC.ProgressBarRow>

        <BC.Box backgroundColor="secondary" spacing="base">

          <BC.GridRow spacing="micro" spacingTop="mini" textSize="small" textColor="secondary">
            <BC.GridColumn gridUnits={3} gridPush={1} spacingTop="large">
              <BC.Image cssClass="bc-ipod-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/laptop._V288436753_.svg" />
            </BC.GridColumn>

            <BC.GridColumn gridUnits={8} position="last">
              <BC.GridRow  spacing="micro">
              <BC.Text textColor="base">Audible Manager</BC.Text>
              </BC.GridRow>
                <BC.GridRow  spacing="small">
              <BC.Text textColor="secondary">To enjoy content directly from your computer, you will need
              to install the AudibleManager Software.</BC.Text>
              </BC.GridRow>
                  <BC.GridRow  spacing="micro">
              <BC.Text textColor="base">With AudibleManager you can:</BC.Text>
                </BC.GridRow>
                    <BC.GridRow  spacing="small">
              <BC.List spacing="small">
                <BC.ListItem><BC.Text textColor="secondary">Listen right from your computer</BC.Text></BC.ListItem>
                <BC.ListItem><BC.Text textColor="secondary">Transfer audio to a MP3 Player, Kindle, Mobile Phone, or GPS</BC.Text></BC.ListItem>
              </BC.List>
                </BC.GridRow>
              <BC.GridRow>
              <BC.GridColumn gridUnits={4}>
                <BC.Button size="large" buttonType="primary" spacing="small">Install Audible Manager</BC.Button>
              </BC.GridColumn>
              </BC.GridRow>
            </BC.GridColumn>
          </BC.GridRow>
          </BC.Box>

          <BC.Section textAlign="center" spacing="large">
            <BC.Link>Other Software Options</BC.Link>
          </BC.Section>
        </div>
        <ProdFooter/>
      </div>

    )
  }
}
export default AudibleSoftwarePC2;
