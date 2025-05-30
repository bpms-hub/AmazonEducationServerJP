import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

    {
      /*
       TO DO:
      */}


class SubscriptionPreferences extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          <BC.Section spacingTop="medium" spacing="large">

  <BC.GridRow>
          <BC.GridColumn gridUnits={9} gridPush={2}>
            <BC.Heading headingLevel="1" spacing="small">Edit Subscription Preferences </BC.Heading>


              <BC.Box hasBorder={true} spacing="base">
                    <BC.GridRow spacingTop="base" >
                          <BC.GridColumn  gridUnits={1}>

                            <BC.Paragraph  textColor="secondary">
                              Username:
                            </BC.Paragraph>

                          </BC.GridColumn>
                          <BC.GridColumn gridUnits={3} gridPush={1}>
                            <BC.Link>jondough@amazon.com</BC.Link>

                          </BC.GridColumn>


                            </BC.GridRow>
                          </BC.Box>

            <BC.Paragraph spacing="base">You do not have any active subscriptions. To find out more about our great selection of subscriptions, please visit our <BC.Link>Newspaper & Magazines</BC.Link> or our <BC.Link>Radio & TV</BC.Link> categories.</BC.Paragraph>


            </BC.GridColumn>
          </BC.GridRow>






          </BC.Section>
        </div>
        <ProdFooter/>
      </div>
    )
  }
}
export default SubscriptionPreferences;
