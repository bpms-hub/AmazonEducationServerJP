import React from 'react';
import BC from 'AudibleUITags';
import CC from './cc';
import ProdHeader from './Header/ProdHeader';
import ProdFooter from './Footer/ProdFooter';

class RedeemPromo extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>

        <BC.Section spacing="extra-large">
            <div className="bc-container">
            	<BC.Box backgroundColor="inverse" heightCss="110px" spacing="medium"></BC.Box>

            	<BC.Heading spacing="small">Redeem Your Promotional Code</BC.Heading>

            	<BC.GridRow spacing="large">
            		<BC.GridColumn gridUnits={5}>
    					<BC.TextInput />
            		</BC.GridColumn>

            		<BC.GridColumn gridUnits={7} position="last">
    					<BC.Button buttonType="primary" inline={true}>Redeem</BC.Button>
            		</BC.GridColumn>
            	</BC.GridRow>
            	

            	<BC.Heading headingLevel={2} spacing="micro">Way to go!</BC.Heading>

            	<BC.Paragraph spacing="medium">
            		You have received a special offer from Audible or one of our partners. Please enter your code 
            		above to take advantage of this promotion.
            	</BC.Paragraph>	

            	<BC.Paragraph>
            		Redeeming a gift from a friend? Go now to the <BC.Link app={true} url={"/prototypes/brickcity/gift-center"}>Gift Center</BC.Link> 
            	</BC.Paragraph>	

            	<BC.Link>Terms and Conditions for Audible Promotional Codes</BC.Link>
            </div>
        </BC.Section>

        <ProdFooter/>
      </div>
    )
  }
}

export default RedeemPromo;