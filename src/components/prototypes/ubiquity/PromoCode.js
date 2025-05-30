import React from 'react';
import BC from 'AudibleUITags';
import ProdHeader from './ProdHeader';
import ProdFooter from './ProdFooter';

class PromoCode extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
        <BC.Section spacing="extra-large">
          <BC.Heading spacing="small" spacingTop="medium">Redeem Your Promotional Code</BC.Heading>

          {/* Promo Code */}

            <BC.GridRow>
              <BC.GridColumn gridUnits={5}>
                <BC.TextInput placeholder="Enter promo code" spacing="micro"/>
              </BC.GridColumn>

              <BC.GridColumn gridPull={5} gridUnits={2} position="last">
                <BC.Link>
                  <BC.Button buttonType="primary">Redeem</BC.Button>
                </BC.Link>
              </BC.GridColumn>
            </BC.GridRow>

            <BC.GridRow spacing="small" textColor="secondary">
              <BC.GridColumn gridUnits={6} gridPull={6} position="last">
                <BC.GridRow spacing="base">
                  <BC.Text>Redeeming a gift from a friend? Go now to the</BC.Text><BC.Link> Gift Center</BC.Link>
                </BC.GridRow>
              <BC.Heading headingLevel="2" spacing="micro">Way to go!</BC.Heading>
              <BC.Paragraph>You have received a special offer from Audible or one of our partners. Please enter your code above to take advantage of this promotion.</BC.Paragraph>

              <BC.Link>Terms and Conditions fro Audible Promotional Codes</BC.Link>
              </BC.GridColumn>
            </BC.GridRow>

            </BC.Section>
        </div>

        <ProdFooter/>
      </div>
    )
  }

}
export default PromoCode;
