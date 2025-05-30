import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class CancelLayout extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader />
        
        <BC.Section spacing="extra-large">
          <div className="bc-container">
            <BC.Breadcrumbs
              breadcrumbTrail={[{name: "home", url: "/prototypes/brickcity"},{name: "Manage Your Account", url:"/prototypes/brickcity/account-details"},{name: "Cancel Membership"}]}
              spacing="medium" />

            {this.props.children}
          </div>
        </BC.Section>

        <ProdFooter />
      </div>
    )
  }
}

export default CancelLayout;
