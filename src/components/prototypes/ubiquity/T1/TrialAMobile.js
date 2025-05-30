import React from 'react';
import BC from 'AudibleUITags';
import AquisitionHeaderMobile from '../Header/AquisitionHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class TrialA_Mobile extends React.Component {
  render() {
    return (
      <div>
      <AquisitionHeaderMobile />
        <BC.Section backgroundColor="secondary">
        <div className="bc-container">

          <BC.Box paddingSize="small" backgroundColor="base" spacing="medium">
            <BC.Heading textAlign="center">Download a <BC.Text textEmphasis={true} textBold={true}>free</BC.Text> audiobook.</BC.Heading>
            <BC.GridRow spacing="mini" textAlign="center">
              <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/trial/30day-trial-banner._V288436985_.jpg" />
            </BC.GridRow>
            <BC.Button buttonType="primary"  spacing="base">Get Started</BC.Button>
          </BC.Box>

          <BC.Section textAlign="center">
            <BC.List listDirection="nostyle" textSize="small">
            <BC.ListItem spacing="micro">
              <BC.Heading headingLevel={3} textCapitalize={true}>Audible membership includes</BC.Heading>
            </BC.ListItem>
            <BC.ListItem spacing="base">
                <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free._V311706744_.svg"/>
                <BC.Heading headingLevel={3}>Your first book free!</BC.Heading>
                <BC.Text>Choose any of the more than 150,000+ titles at Audible.</BC.Text>
              </BC.ListItem>
              <BC.ListItem spacing="medium">
                <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-save-now._V311706744_.svg"/>
                <BC.Heading headingLevel={3}>Keep Saving</BC.Heading>
                <BC.Text>After your free trial get one book a month, your choice, for just $14.95</BC.Text>
              </BC.ListItem>
              <BC.ListItem spacing="medium">
                <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-no-strings._V311706744_.svg"/>
                <BC.Heading headingLevel={3}>No Strings</BC.Heading>
                <BC.Text>Easily change or cancel your plan at any time</BC.Text>
              </BC.ListItem>
              <BC.ListItem spacing="medium">
                <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V311706744_.svg"/>
                <BC.Heading headingLevel={3}>Love it...or exchange it.</BC.Heading>
                <BC.Text>Not happy with a choice you made? Exchange it for another title anytime, no hassles.</BC.Text>
              </BC.ListItem>
              <BC.ListItem spacing="medium">
                <BC.GridRow spacing="small">
                  <BC.GridColumn gridUnits={1} gridPush={4}>
                  <BC.Icon iconType="apple" textColor="secondary"/>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={1} gridPush={4}>
                  <BC.Icon iconType="android" textColor="secondary"/>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={1} gridPush={4}>
                  <BC.Icon iconType="amazon" textColor="secondary"/>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={1} gridPull={4} position="last">
                  <BC.Icon iconType="windows" textColor="secondary"/>
                  </BC.GridColumn>
                </BC.GridRow>
                <BC.Heading headingLevel={3}>Our Apps</BC.Heading>
                <BC.Text>Audible apps for your tablet or smartphone make it easy to listen wherever you are.</BC.Text>
              </BC.ListItem>
              <BC.ListItem spacing="small">
                <BC.Button buttonType="primary" spacing="medium">Get Started</BC.Button>
                <BC.Heading headingLevel={3} textAlign="left">Audible Free Trial Details</BC.Heading>
                <BC.Paragraph textAlign="left">After the trial, your paid membership will begin at $14.95 per month. With your membership, you will receive one credit every month, good for any audiobook on Audible.</BC.Paragraph>
                <BC.Paragraph textAlign="left">Cancel anytime, effective the next monthly billing cycle. Cancel before your trial ends and you will not be charged. Check out the full <BC.Link>terms and policies</BC.Link> that apply to Audible membership.</BC.Paragraph>
              </BC.ListItem>
            </BC.List>
          </BC.Section>

        </div>

        </BC.Section>

        <ProdFooterMobile/>
      </div>
    )
  }
}
export default TrialA_Mobile;
