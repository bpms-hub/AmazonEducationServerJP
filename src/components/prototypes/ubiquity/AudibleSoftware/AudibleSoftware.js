import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class AudibleSoftware extends React.Component {

  render() {
    return (
      <div>
        <ProdHeader/>

        <div className="bc-container">
        <BC.GridRow spacing="medium" spacingTop="medium">
          <BC.Heading>Audible Software</BC.Heading>
        </BC.GridRow>

        <BC.GridRow spacing="large" textSize="small" textColor="secondary">
        <BC.GridColumn gridUnits={6}>
          <BC.Heading headingLevel={3}>PC or Mac</BC.Heading>
        </BC.GridColumn>
        <BC.GridColumn gridUnits={6} position="last">
          <BC.Heading headingLevel={3}>Audible Mobile Apps</BC.Heading>
        </BC.GridColumn>
        </BC.GridRow>

        <BC.GridRow spacing="large" textSize="small" textColor="secondary" >
            <BC.GridColumn gridUnits={2}>
            <BC.Section heightCss="185px">
              <BC.Image cssClass="bc-windowsPC-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/windowsPC._V288436753_.svg" />
              <BC.Heading headingLevel={3} textAlign="center" spacing="small" textColor="base">Windows PC</BC.Heading>
              <BC.GridRow textAlign="center" spacing="small">
                <BC.Text textAlign="center" textColor="secondary">Windows 7, Vista, XP,2000 and Windows based  handheld devices</BC.Text>
              </BC.GridRow>
            </BC.Section>
              <BC.Button buttonType="primary">Download</BC.Button>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={2}>
            <BC.Section heightCss="185px">
              <BC.Image cssClass="bc-apple-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/macOSX._V288436753_.svg" />
              <BC.Heading headingLevel={3} textAlign="center" spacing="small" textColor="base">Mac OSX</BC.Heading>
              <BC.GridRow textAlign="center" spacing="large">
                <BC.Text textAlign="center" textColor="secondary">Mac OSX and above</BC.Text>
              </BC.GridRow>
              </BC.Section>
              <BC.Button buttonType="primary">Download</BC.Button>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={2} gridPush={2}>
            <BC.Section heightCss="185px">
              <BC.Image cssClass="bc-ios-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/apple-ios._V288436753_.svg" />
              <BC.Heading headingLevel={3} textAlign="center" spacing="small" textColor="base">Apple IOS</BC.Heading>
            </BC.Section>
              <BC.Button buttonType="primary">Learn More</BC.Button>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={2} gridPush={2}>
            <BC.Section heightCss="185px">
              <BC.Image cssClass="bc-android-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/android._V288436753_.svg" />
              <BC.Heading headingLevel={3} textAlign="center" spacing="small" textColor="base">Android</BC.Heading>
            </BC.Section>
              <BC.Button buttonType="primary">Learn More</BC.Button>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={2}  position="last">
            <BC.Section heightCss="185px">
              <BC.Image cssClass="bc-windows-icon" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/windows._V288436753_.svg" />
              <BC.Heading headingLevel={3} textAlign="center" spacing="small" textColor="base">Windows</BC.Heading>
            </BC.Section>
              <BC.Button buttonType="primary">Learn More</BC.Button>
            </BC.GridColumn>
          </BC.GridRow>

        </div>
        <ProdFooter/>
      </div>

    )
  }
}
export default AudibleSoftware;
