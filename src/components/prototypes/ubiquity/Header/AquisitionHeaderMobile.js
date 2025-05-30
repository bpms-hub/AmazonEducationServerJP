import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import classNames from 'classnames';

class AquisitionHeaderMobile extends React.Component {
  render() {
    return (
      <span>
        <BC.Section cssClass="bc-nav-mobile" backgroundColor="inverse">
          <header>
            <div className="bc-container">
              <BC.GridRow heightCss="50px" textAlign="center">
                <BC.Link cssClass={classNames(["bc-nav-mobile-logo", "bc-nav-mobile-cta"])} app={true} url={"/prototypes/brickcity-mobile"}>
                  <BC.Image verticalAlign="middle" imageHeight="30px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar.svg" />
                </BC.Link>
              </BC.GridRow>
            </div>
          </header>
        </BC.Section>
        <div className="bc-nav-mobile-spacer"></div>
      </span>
    )
  }
}

export default AquisitionHeaderMobile;

