import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

{
/*
       TO DO:

      •Set height with GridRow, equal spacing √
      •Create play video CTA.
      •paddingTop for headline to description copy. √
      •Add Legal √


      */}
class GLG extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRow() {

    var iconImages = new Array();
    iconImages[0] = "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/glg/members._V288437235_.png";
    iconImages[1] = "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/glg/any_book._V288437235_.png";
    iconImages[2] = "http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V289411048_.svg";
    iconImages[3] = "http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-30-percent-off._V289411048_.svg";
    iconImages[4] = "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/glg/members._V288437235_.png";
    iconImages[5] = "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/glg/newspaper._V288437235_.png";

    var headlineCopy = new Array();
    headlineCopy[0] = "Audible Membership";
    headlineCopy[1] = "Any book just one credit";
    headlineCopy[2] = "Exchange any book";
    headlineCopy[3] = "Never pay full price";
    headlineCopy[4] = "Members-only deals";
    headlineCopy[5] = "Free audio subscription";

    var descriptionCopy = new Array();
    descriptionCopy[0] = "Audible Membership";
    descriptionCopy[1] = "Any book just one credit";
    descriptionCopy[2] = "Exchange any book";
    descriptionCopy[3] = "Never pay full price";
    descriptionCopy[4] = "Members-only deals";
    descriptionCopy[5] = "Get a daily subscription to The Wall Street Journal or The New York Times, also get a free digital issue of AudioFile Magazine.";

    var linkCopy = new Array();
    linkCopy[0] = "Watch the video";
    linkCopy[1] = "Watch the video";
    linkCopy[2] = "Watch the video";
    linkCopy[3] = "Never pay full price";
    linkCopy[4] = "Members-only deals";
    linkCopy[5] = "Free audio subscription";

    var rows = [];

    for (var x = 0; x < 6; x++) {
      rows.push(x)
    }

    var BenefitsRow = rows.map(function (row, index) {
      return ({
/*
        <BC.GridColumn gridUnits={3} spacing="medium" textAlign="center">
            <BC.GridColumn gridUnits={12} position="last" spacing="medium">
              <BC.Image verticalAlign="baseline" source={iconImages[index]}> </BC.Image>
            <BC.Paragraph  textSize='medium'>{headlineCopy[index]}</BC.Paragraph>
              <BC.Paragraph >{descriptionCopy[index]}</BC.Paragraph>
              <BC.Link textSize="small" >{linkCopy[index]}</BC.Link>
            </BC.GridColumn>
        </BC.GridColumn>

        */})
    })
    return BenefitsRow;

  }

  render() {

    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          <displayAllImages/>

          <BC.GridRow spacing="large" textAlign="center">
            {this.renderRow()}
          </BC.GridRow>

          <BC.GridRow spacing="large" textAlign="center">
            <BC.Heading>Audible Member Benefits</BC.Heading>
            <BC.Paragraph>The best way to experience Audible is with a membership. Check out these great member benefits:</BC.Paragraph>
          </BC.GridRow>

          <BC.Divider spacing="large"/>

          {/*Membership*/}
          <BC.GridRow spacing="large" textAlign="center">

            <BC.GridRow textAlign="center">
              <BC.GridColumn gridUnits={3}>
                <BC.GridColumn gridUnits={12} gridPush={2} spacing="medium">
                  <BC.GridRow heightCss="72px">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311706744_.svg" verticalAlign="baseline"/>
                  </BC.GridRow>
                  <BC.Paragraph spacing="mini" textSize='medium'>Audible Membership</BC.Paragraph>
                  <BC.Paragraph textColor="secondary">
                    Take a quick look at the value and benefits of an Audible Membership.
                  </BC.Paragraph>
                  <BC.Link textSize="small">Watch the video</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

              {/*Any Book*/}
              <BC.GridColumn gridUnits={3} gridPush={1}>
                <BC.GridColumn gridUnits={12} gridPush={2} spacing="medium">
                  <BC.GridRow heightCss="72px">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg" verticalAlign="baseline"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph spacing="mini" textSize='medium'>Any book just one credit</BC.Paragraph>
                  <BC.Paragraph textColor="secondary">Your plan gives you one or more credits to spend toward books every month.
                  </BC.Paragraph>
                  <BC.Link textSize="small">Watch the video</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

              {/*Exchange*/}
              <BC.GridColumn gridUnits={3} gridPull={1} position="last">
                <BC.GridColumn gridUnits={12} gridPush={2} position="last" spacing="medium">
                  <BC.GridRow heightCss="72px">
                    <BC.Icon iconType="glg"></BC.Icon>

                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V311706744_.svg" verticalAlign="baseline"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph spacing="mini" textSize='medium'>Exchange any book</BC.Paragraph>
                  <BC.Paragraph textColor="secondary">If a book doesn’t meet your expectations just return it, no questions asked
                  </BC.Paragraph>

                  <BC.Link textSize="small">Watch the video</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

            </BC.GridRow>
          </BC.GridRow>

          {/*Never Pay Full Price*/}
          <BC.GridRow spacing="large" textAlign="center">

            <BC.GridRow spacingTop="medium" textAlign="center">
              <BC.GridColumn gridUnits={3}>
                <BC.GridColumn gridUnits={12} gridPush={2} spacing="medium">
                  <BC.GridRow heightCss="72px">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-30-percent-off._V311720626_.svg" verticalAlign="top"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph spacing="mini" textSize="medium">Never pay full price</BC.Paragraph>
                  <BC.Paragraph textColor="secondary">Save 30% off regular price when you buy books without credits.</BC.Paragraph>
                </BC.GridColumn>
              </BC.GridColumn>

              {/*Members-Only*/}
              <BC.GridColumn gridUnits={3} gridPush={1}>
                <BC.GridColumn gridUnits={12} gridPush={2} spacing="medium">
                  <BC.GridRow heightCss="72px">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-members-only-deals._V311706744_.svg" verticalAlign="top"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph spacing="mini" textSize="medium">Members-only deals</BC.Paragraph>
                  <BC.Paragraph textColor="secondary">Enjoy discounts and sales offered exclusively to members.
                  </BC.Paragraph>
                </BC.GridColumn>
              </BC.GridColumn>

              {/*Free Audio Subscription*/}
              <BC.GridColumn gridUnits={3} gridPull={1} position="last">
                <BC.GridColumn gridUnits={12} gridPush={2} position="last">
                  <BC.GridRow heightCss="72px">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free-audio-newspaper._V311706744_.svg" verticalAlign="top"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph  spacing="mini" textSize="medium">Free audio subscription</BC.Paragraph>
                  <BC.Paragraph textColor="secondary">Get a daily subscription to
                    <BC.Link>The Wall Street Journal</BC.Link>
                    or
                    <BC.Link>The New York Times</BC.Link>, also get a free digital issue of
                    <BC.Link>AudioFile Magazine</BC.Link>.</BC.Paragraph>
                </BC.GridColumn>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.GridRow>

          <BC.Divider spacing="large"/>

          <BC.GridRow spacing="extra-large">
            <BC.Paragraph textColor="tertiary" textSize="small">*Audible’s ‘Great Listen Guarantee’ is an exclusive benefit available to AudibleListener plan members in good standing. A member in good standing who is not fully satisfied with his or her Audible audiobook may exchange that specific title for a different title within 365 days of the original date of purchase. Titles purchased with credits may be refunded with credits. Titles purchased with money will be refunded with money.Titles purchased using a combination of money and a coupon or promotional code will be refunded with money and a new coupon or promotional code. Audible reserves the right in its sole discretion to limit the number of exchanges and refunds allowed by each member, including, but not limited to, in cases where Audible suspects abuse of the spirit of the program. Audible may change these terms and conditions or may cancel the program with respect to any or all participants at any time. Void where prohibited.
            </BC.Paragraph>

          </BC.GridRow>

        </div>

        <ProdFooter/>
      </div>
    )
  }
}
export default GLG;
