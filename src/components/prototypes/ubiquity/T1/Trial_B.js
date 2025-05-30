import React from 'react';
import BC from 'AudibleUITags';
import AquisitionHeader from '../Header/AquisitionHeader';
import ProdFooter from '../Footer/ProdFooter';

class Trial_B extends React.Component {
  render() {
    return (
      <div>
        <AquisitionHeader />
        <div className="bc-container">

          {/*Hero Unit*/}

<BC.GridRow spacingTop="medium">
          <BC.GridColumn gridUnits={6}>
              <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/trial/trial_b._V288436985_.jpg"/>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={6} position="last" spacingTop="extra-large">

          <BC.GridRow textAlign="left" spacing="small">
            <BC.Text textColor="base"  spacingTop="large" textSize="large">Download any audiobook,<BC.Text textBold={true} textEmphasis={true}> FREE</BC.Text><br />when you try audible for 30 days.</BC.Text>
          </BC.GridRow>
              <BC.GridRow spacing="medium">
          <BC.Paragraph textSize="medium" textColor="secondary">Choose from 180,000+ best sellers, new releases, sci-fi, romances, mysteries, classics, and more.</BC.Paragraph>
            </BC.GridRow>

          <BC.GridColumn gridUnits={6}>
          <BC.Button buttonType="primary" inline={false} spacing="mini">Get My Free Audiobok</BC.Button>
          </BC.GridColumn>

            <BC.GridRow>
            <BC.LetterSpace size="base"/><BC.Text textSize="base" >Sign in with your<BC.LetterSpace size="mini"/>
          <BC.Image imageHeight="13px" verticalAlign="bottom" source=" https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/amazon_icon._V288488827_.svg"/>
              <BC.LetterSpace size="mini"/>account</BC.Text>
            </BC.GridRow>

          </BC.GridColumn>

</BC.GridRow>

          {/*Great Listen Guarantee*/}
          <BC.Section spacing="medium" role="main">
            <BC.GridRow spacing="small" textAlign="center">
            <BC.GridColumn gridUnits={12} position="last">
          {/*  <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V311706744_.svg" verticalAlign="middle"/>*/}
</BC.GridColumn>
      </BC.GridRow>
                <BC.GridRow spacing="medium" textAlign="center">
<BC.GridColumn gridUnits={12} position="last">
            <BC.Text textSize="base" textColor="secondary">
                After 30 days, Audible is just $14.95/mo. | Don't like your book? We'll exchange<br />it for you. | Cancel anytime—your books are yours to keep.
              </BC.Text>
</BC.GridColumn>
      </BC.GridRow>
            <BC.Divider spacing="small"/>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={8}>
                <BC.GridRow spacing="mini">
                  <BC.GridColumn gridUnits={2}>
                    <BC.Icon iconType="apple" verticalAlign="bottom"/>
                    <BC.LetterSpace/>
                    <BC.Icon iconType="android" verticalAlign="bottom"/>
                    <BC.LetterSpace/>
                    <BC.Icon iconType="windows" verticalAlign="bottom"/>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={10} position="last">
                    <BC.Text textBold={true} textSize="mini" textColor="secondary">WORKS ON YOUR IPHONE®, IPAD®, ANDROID™, KINDLE FIRE, WINDOWS PHONE</BC.Text><br/>
                    <BC.Text textSize="mini">and over 500 mp3 players including Apple® iPod™</BC.Text>
                  </BC.GridColumn>
                </BC.GridRow>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.Text textBold={true} textSize="mini" textColor="secondary">CHOOSE FROM MORE THAN 180,000 TITLES</BC.Text><br/>
                <BC.Text textSize="mini">You'll be listening in seconds</BC.Text>
              </BC.GridColumn>
            </BC.GridRow>


          </BC.Section>
        </div>

        <ProdFooter/>
      </div>
    )
  }
}
export default Trial_B;
