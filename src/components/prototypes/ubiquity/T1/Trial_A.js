import React from 'react';
import BC from 'AudibleUITags';
import AquisitionHeader from '../Header/AquisitionHeader';
import ProdFooter from '../Footer/ProdFooter';

class Trial_A extends React.Component {
  render() {
    return (
      <div>
        <AquisitionHeader />

        <div className="bc-container">

          {/*Hero Unit*/}

          <BC.Box spacing="base" hasBorder={true} heightCss="400px" paddingSize="large"

          cssClass="bc-trial-a-box">

            <BC.GridColumn gridUnits={5} position="last">
              <BC.Heading textNormal={true} textSize="extra-large">Your first story<br/>
                is free.</BC.Heading>
              <BC.Paragraph textSize="medium">Choose from more than 180,000 titles to begin your 30-day trial.</BC.Paragraph>

              <BC.Button buttonType="primary" size="base">GET MY FREE AUDIOBOOK</BC.Button>
              <BC.GridRow spacingTop="base">
                <BC.Text textSize="base">Sign in with your
                  <BC.Icon iconType="amazon" paddingSide="right" paddingSize="20px"/>
                  account</BC.Text>

              </BC.GridRow>
            </BC.GridColumn>
          </BC.Box>

          {/*Great Listen Guarantee*/}
          <BC.Section spacing="extra-large" role="main">
            <BC.GridRow spacing="base" textAlign="center">
              <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V311706744_.svg" verticalAlign="middle"/>

              <BC.LetterSpace size="extra-large" />

              <BC.Text textSize="medium">
                Don't like your audiobook? No problem. Exchange it for free.
              </BC.Text>
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
                    <BC.Text textBold={true} textSize="mini">WORKS ON YOUR IPHONE®, IPAD®, ANDROID™, KINDLE FIRE, WINDOWS PHONE</BC.Text><br/>
                    <BC.Text textSize="mini">and over 500 mp3 players including Apple® iPod™</BC.Text>
                  </BC.GridColumn>
                </BC.GridRow>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.Text textBold={true} textSize="mini">CHOOSE FROM MORE THAN 180,000 TITLES</BC.Text><br/>
                <BC.Text textSize="mini">You'll be listening in seconds</BC.Text>
              </BC.GridColumn>
            </BC.GridRow>

            {/*
            <BC.Divider spacing="small"/>

            <BC.GridRow>
              <BC.Paragraph textBold={true} textSize="small">
                Audible Free Trial Details
              </BC.Paragraph>

              <BC.Paragraph spacing="base" textSize="small">
                Get an audiobook of your choice, free, with a 30-day trial. After the trial, your paid membership will
                begin at $14.95 per month. With your membership, you will receive one credit every month, good for any
                audiobook on Audible.
              </BC.Paragraph>

              <BC.Paragraph textSize="small">
                Cancel anytime, effective the next monthly billing cycle. Cancel before your trial ends and you will not be charged. Check out the full terms and policies that apply to Audible membership.
              </BC.Paragraph>
            </BC.GridRow>
            */}
          </BC.Section>
        </div>

        <ProdFooter/>
      </div>
    )
  }
}
export default Trial_A;
