import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class AudibleSoftwarePC3 extends React.Component {

  render() {
    return (
      <div>
        <ProdHeader/>

        <div className="bc-container">
        <BC.Breadcrumbs breadcrumbTrail={[{name: "home", url: "/prototypes/brickcity"},{name: "Download Audio"}]} spacing="small" spacingTop="medium" />
        <BC.GridRow spacing="medium">
          <BC.Icon iconType="windows" verticalAlign="baseline" />
          <BC.LetterSpace />
          <BC.Text textSize="large">Audible Software for Windows PC</BC.Text>
        </BC.GridRow>
        <CC.ProgressBarRow textSize="base">
          <CC.ProgressBar spacing="small" widthPercentage={33.3}>Choose a Device</CC.ProgressBar>
          <CC.ProgressBar spacing="small" widthPercentage={33.3}>Install Software</CC.ProgressBar>
          <CC.ProgressBar activeState={true} spacing="small" widthPercentage={33.3}>Download Audio</CC.ProgressBar>
        </CC.ProgressBarRow>

        <BC.Box backgroundColor="secondary" spacing="base">

          <BC.GridRow spacing="micro" spacingTop="mini" textSize="small" textColor="secondary">
            <BC.GridColumn gridUnits={3}  gridPush={1} spacingTop="large">
              <BC.Image cssClass="bc-ipod-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/laptop._V288436753_.svg" />
            </BC.GridColumn>
            <BC.GridColumn gridUnits={8} position="last">
              <BC.Heading headingLevel={3}>Audible Manager (AM) will begin downloading momentarily.</BC.Heading>
              <BC.Paragraph>If AM does not begin downloading in 10 seconds, <BC.Link>click here</BC.Link></BC.Paragraph>
              <BC.Paragraph spacing="none">Once AM is installed</BC.Paragraph>
              <BC.List spacing="small">
                <BC.ListItem>Go to <BC.Link>Library</BC.Link> and click on the "Download It" button next to your audio</BC.ListItem>
                <BC.ListItem>Once downloaded, you can find your audio in AudibleManager</BC.ListItem>
                <BC.ListItem>Select your audio file and click play</BC.ListItem>
              </BC.List>

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
export default AudibleSoftwarePC3;
