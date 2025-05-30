import React from 'react';
import BC from 'AudibleUITags';
import AquisitionHeaderMobile from '../Header/AquisitionHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class TrialC_Mobile extends React.Component {
  render() {
    return (
      <div>
      <AquisitionHeaderMobile />
        <BC.Section backgroundColor="secondary">
        <div className="bc-container">


          <BC.Box paddingSize="small" backgroundColor="base" spacing="medium">
            <BC.Heading textAlign="center">Download a <BC.Text textEmphasis={true} textBold={true}>free</BC.Text> audiobook.</BC.Heading>
            <BC.GridRow spacing="mini" textAlign="center">
          <BC.Image source=           "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/trial/trial-c-banner._V288436985_.jpg" />
            </BC.GridRow>
            <BC.Button buttonType="primary"  spacing="base">Get Your Free Audiobook</BC.Button>
          </BC.Box>

{/*            <BC.Box paddingSize="small" backgroundPosition="center" heightCss="460px" widthPercentage="100%" backgroundColor="base" spacing="medium">


              <BC.Section heightCss="235px"></BC.Section>
              <BC.Section textAlign="center" textColor="inverse">
                <BC.Heading textColor="inverse" spacing="mini">Your first story is <BC.Text textEmphasis={true} textBold={true}>free</BC.Text>.</BC.Heading>
                <BC.Paragraph textColor="inverse">Choose from more than 180,000 audio titles to begin your 30-day trial.</BC.Paragraph>
                <BC.GridRow>
                  <BC.GridColumn gridUnits={10} gridPull="1" position="last">
                    <BC.Button buttonType="primary"  spacing="base">Get your free audiobook</BC.Button>
                  </BC.GridColumn>
                </BC.GridRow>
                <BC.GridRow textColor="inverse">
                  <BC.Text>Audible is an </BC.Text>
                  <BC.Icon iconType="amazon" />
                  <BC.Text> company</BC.Text>
                </BC.GridRow>
              </BC.Section>
            </BC.Box>
*/}

          <BC.Section spacing="base">
            <BC.Box backgroundColor="inverse">
              <BC.Text textColor="inverse">ProductCarousel Component - Best Sellers</BC.Text>
            </BC.Box>

            <BC.Divider  spacing="base" />

            <BC.Box backgroundColor="inverse">
              <BC.Text textColor="inverse">ProductCarousel Component - Get Started</BC.Text>
            </BC.Box>
          </BC.Section>

          <BC.Section textAlign="center">
            <BC.List listDirection="nostyle" textSize="small">
            <BC.ListItem spacing="micro">
              <BC.Heading headingLevel={3} textCapitalize={true}>Audible membership includes</BC.Heading>
            </BC.ListItem>
            <BC.ListItem spacing="base">
                <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free._V311706744_.svg"/>
                <BC.Heading headingLevel={3}>Your first book free!</BC.Heading>
                <BC.Text>Choose from over 180,000 audio titles at Audible.</BC.Text>
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
export default TrialC_Mobile;
