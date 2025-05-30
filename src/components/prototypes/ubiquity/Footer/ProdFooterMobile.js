import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import CC from '../cc';

class ProdFooterMobile extends React.Component {
  render() {
    return (
      <footer>
        <BC.Section backgroundColor="secondary" padding="medium">
             {!this.props.hideCategories
                ? <CC.MobileLink url={"/prototypes/brickcity-mobile/category-archive"} hasTopBorder={true} hideBottomBorder={true}>View All Categories</CC.MobileLink>
                : null
              }
            <BC.Divider spacing="small" />
              <div className="bc-container">
                <BC.GridRow spacing="small">
                  <BC.Search value="Search"/>
                </BC.GridRow>
              </div>
            <BC.Divider />

            <BC.List listType="nostyle" spacing="large">
              <BC.ListItem>
                <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile"}>Contact Us</CC.MobileLink>
              </BC.ListItem>
              <BC.ListItem>
                <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile/help-center"}>Help</CC.MobileLink>
              </BC.ListItem>
              <BC.ListItem>
                <CC.MobileLink app={true} url={"/prototypes/brickcity-mobile"}>Promo Code</CC.MobileLink>
              </BC.ListItem>
            </BC.List>

            <div className="bc-container">
              <BC.GridRow spacing="micro">
                <BC.Link>Conditions of Use</BC.Link>
                <BC.Pipe/>
                <BC.Link>Privacy Policy</BC.Link>
                <BC.Pipe/>
                <BC.Link app={true} url={"/prototypes/brickcity"}>Full Site</BC.Link>
              </BC.GridRow>

              <BC.Text textColor="tertiary">&copy; Copyright 1997-2015 Audible Inc.</BC.Text>
            </div>
        </BC.Section>
      </footer>
    )
  }
}

ProdFooterMobile.PropTypes = {
  hideCategories: PropTypes.bool
}

export default ProdFooterMobile;
