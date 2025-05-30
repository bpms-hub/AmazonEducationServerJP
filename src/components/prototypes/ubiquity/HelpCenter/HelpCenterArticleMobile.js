import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import CC from '../cc';
import AquisitionHeaderMobile from '../Header/AquisitionHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';

class HelpCenterArticleMobile extends React.Component {
  render() {
    return (
      <div className="mobile">
        <AquisitionHeaderMobile />

        <BC.Section backgroundColor="secondary" padding="large" paddingTop="large">
          <div className="bc-container">
            <BC.TextInput />
          </div>
        </BC.Section>

        <CC.MobilePageTitle spacing="base">Do I lose my credits when I cancel?</CC.MobilePageTitle>

        <div className="bc-container">
          <BC.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </BC.Paragraph>

          <BC.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.
          </BC.Paragraph>

          <BC.Divider spacing="base" />

          <BC.Heading headingLevel={2} spacing="mini">Was this helpful?</BC.Heading>

          <BC.GridRow spacing="base">
            <BC.GridColumn gridUnits={6}>
              <BC.Button>Yes</BC.Button>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={6} position="last">
              <BC.Button>No</BC.Button>
            </BC.GridColumn>
          </BC.GridRow>

          <BC.Divider />

          <BC.Box>
            <BC.GridRow>
              <BC.GridColumn gridUnits={6}>
                <BC.Text>Previous</BC.Text>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={6} textAlign="right" position="last">
                <BC.Link>Next</BC.Link>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Box>
        </div>

        <ProdFooterMobile hideCategories={true} />
      </div>
    )
  }
}
export default HelpCenterArticleMobile;