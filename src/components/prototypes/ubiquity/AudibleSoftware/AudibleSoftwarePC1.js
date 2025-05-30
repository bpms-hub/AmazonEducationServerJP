import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class AudibleSoftwarePC1 extends React.Component {

  render() {
    return (
      <div>
        <ProdHeader/>

        <div className="bc-container">
        <BC.Breadcrumbs breadcrumbTrail={[{name: "home", url: "/prototypes/brickcity"},{name: "Audible Software"}]} spacing="small" spacingTop="medium" />
        <BC.GridRow spacing="medium">
          <BC.Icon iconType="windows" verticalAlign="baseline" />
          <BC.LetterSpace />
          <BC.Text textSize="large">Audible Software for Windows PC</BC.Text>
        </BC.GridRow>
        <CC.ProgressBarRow textSize="base">
          <CC.ProgressBar activeState={true} spacing="small" widthPercentage={33.3}>Choose a Device</CC.ProgressBar>
          <CC.ProgressBar spacing="small" widthPercentage={33.3}>Install Software</CC.ProgressBar>
          <CC.ProgressBar spacing="small" widthPercentage={33.3}>Download Audio</CC.ProgressBar>
        </CC.ProgressBarRow>

        <BC.Box backgroundColor="secondary" spacing="large">
        <BC.Heading textAlign="center">How do you want to listen?</BC.Heading>
        <BC.Paragraph textAlign="center">(No matter what you choose, you won&#39;t be limited to only one listening method)</BC.Paragraph>

          <BC.GridRow spacing="micro" spacingTop="medium" textAlign="center" textSize="small" textColor="secondary">
            <BC.GridColumn gridUnits={2} gridPush={2}>
            <BC.GridRow heightCss="110px" spacingTop="base">
              <BC.Image cssClass="bc-ipod-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/ipod._V288436753_.svg" />
            </BC.GridRow>
            <BC.GridRow spacing="small">
            <BC.GridColumn gridUnits={6} gridPull={3} position="last">
              <BC.Text textBold={true} textSize="mini" textColor="base">Apple iPod with iTunes</BC.Text>
            </BC.GridColumn>
            </BC.GridRow>
              <BC.Button size="small" buttonType="primary">Select</BC.Button>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={2} gridPush={3} textAlign="center">
            <BC.GridRow heightCss="130px">
              <BC.Image cssClass="bc-kindle-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/kindle._V288436753_.svg" />
            </BC.GridRow>
            <BC.GridRow spacing="small">
              <BC.Text textBold={true} textSize="mini" textColor="base">MP3 Player, Kindle, Mobile Phone, GPS</BC.Text>
            </BC.GridRow>
            <BC.Button size="small" buttonType="primary">Select</BC.Button>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={2} position="last" gridPull={2} textAlign="center">
            <BC.GridRow heightCss="115px" spacingTop="small">
              <BC.Image cssClass="bc-laptop-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/laptop._V288436753_.svg" />
            </BC.GridRow>
              <BC.GridRow spacing="small">
                <BC.GridColumn gridUnits={7} gridPull={3} position="last">
                  <BC.Text textBold={true} textSize="mini" textColor="base">Listen on My Computer</BC.Text>
                </BC.GridColumn>
              </BC.GridRow>
              <BC.Button size="small" buttonType="primary">Select</BC.Button>
            </BC.GridColumn>
          </BC.GridRow>
          </BC.Box>

        </div>
        <ProdFooter/>
      </div>

    )
  }
}
export default AudibleSoftwarePC1;
