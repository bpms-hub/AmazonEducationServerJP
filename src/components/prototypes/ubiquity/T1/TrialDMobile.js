import React from 'react';
import BC from 'AudibleUITags';
import AquisitionHeaderMobile from '../Header/AquisitionHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class TrialD_Mobile extends React.Component {
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
          </BC.Box>

          <BC.Section>
            <BC.List textSize="small"  spacing="small">
            <BC.ListItem spacing="micro">
              <BC.Text>Includes a free audiobook of your choice</BC.Text>
            </BC.ListItem>
            <BC.ListItem spacing="micro">
              <BC.Text>Choose from 180,000+ titles</BC.Text>
            </BC.ListItem>
            <BC.ListItem spacing="micro">
              <BC.Text>After 30 days, Audible is $14.95/month</BC.Text>
            </BC.ListItem>
            <BC.ListItem>
              <BC.Text>Cancel anytime</BC.Text>
            </BC.ListItem>
            </BC.List>
            <BC.Button buttonType="primary">Try Audible Free</BC.Button>
          </BC.Section>

        </div>

        </BC.Section>

        <ProdFooterMobile/>
      </div>
    )
  }
}
export default TrialD_Mobile;
