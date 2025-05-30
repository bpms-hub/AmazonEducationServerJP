import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

    {
      /*
       TO DO:
      */}


class DailyDeal extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
  <BC.Breadcrumbs breadcrumbTrail={[{name: "Account Details", url: "/prototypes/brickcity/account-details"},{name: "Daily Deal"}]} spacing="small" />
          <BC.Section spacingTop="medium" spacing="large">
            <BC.GridRow>
          <BC.GridColumn gridUnits={9}>
            <BC.Heading headingLevel={1} spacing="base">Daily Deal </BC.Heading>
          <BC.Heading headingLevel={2} spacing="small">One great book on sale every day at a super-low price.</BC.Heading>

            <BC.Paragraph spacing="base">Your first notification email will arrive in 48 hours. These Daily Deal emails are separate from any Audible emails you may receive. Signing up for Daily Deal notifications means you receive them in addition to any other Audible emails. From this page, you can opt in and out of the Daily Deals emails only; you can manage all your other email preferences on the Account Details page.</BC.Paragraph>
            <BC.Box backgroundColor="secondary" spacing="base" paddingSize="small" >We're sorry, but at this time, this email is only for US and Canada customers.</BC.Box>
            </BC.GridColumn>
          </BC.GridRow>

            <BC.GridRow spacing="micro">
              <BC.GridColumn gridUnits={3}>
                    <BC.Button buttonType="primary" inline={true} >Subscribe</BC.Button>
              </BC.GridColumn>
          </BC.GridRow>
          <BC.GridRow>
            <BC.Link>Back to today's deal</BC.Link>
            </BC.GridRow>
          </BC.Section>
        </div>
        <ProdFooter/>
      </div>
    )
  }
}
export default DailyDeal;
