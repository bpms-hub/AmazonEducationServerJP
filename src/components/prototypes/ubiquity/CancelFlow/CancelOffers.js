import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import CancelLayout from './CancelLayout';
import {RouteHandler} from 'react-router';

class CancelOffers extends React.Component {

  constructor(props,context) {
      super(props,context);
      this.state = {
        offerSet: this.context.router.getCurrentParams().offerNumber
      }
  }

  componentWillMount(){
    console.log(this.state.offerSet);
  }

  renderThankYouText() {
    switch (this.state.offerSet) {
      case "2":
        return "Please take a quick look at the offers below to see if any of them would help.";
        break;
      case "3":
        return "And we understand how frustrating technical issues can be. Please call us now at 888-888-8888.";
        break;
      case "4":
        return "Before leaving, would you like to exchange any of your audiobooks?";
        break;
      default:
        return "Please take a quick look at the offers below to see if any of them would help.";
    }
  }

  render() {

    return (
      <CancelLayout>
        <BC.Heading spacing="micro">
          { this.state.offerSet == 1 ? "We're listening." : null }
          { this.state.offerSet == 2 ? "Thanks, your feedback helps." : null }
          { this.state.offerSet == 3 ? "We're listening." : null }
          { this.state.offerSet == 4 ? "Got it." : null }
        </BC.Heading>
        <BC.Paragraph spacing="medium">
          { this.renderThankYouText()}
        </BC.Paragraph>

        <BC.GridRow textAlign="center" spacing="medium">
          { this.state.offerSet == 1 ?
            <BC.GridColumn gridUnits={4} spacingTop="medium">
              <BC.Box backgroundColor="highlight" paddingSize="base">
                <BC.GridRow spacing="micro">
                  <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-switch-inverse._V311706744_.svg" />
                </BC.GridRow>

                <BC.Heading headingLevel={2} textColor="inverse" spacing="mini">Spend Less, Savor More</BC.Heading>
              </BC.Box>

              <BC.Box hasBorder={true} paddingSize="medium">
                <BC.GridRow heightCss="125px">
                  <BC.Paragraph spacing="medium">
                    Get a credit every other month (6 credits/6 bills per year) and save 50%.
                  </BC.Paragraph>

                  <BC.Paragraph spacing="large">
                    <BC.Text textBold={true}>$14.95</BC.Text> billed every other month
                  </BC.Paragraph>
                </BC.GridRow>

                <BC.Button buttonType="primary" inline={true} size="small">Switch Membership</BC.Button>
              </BC.Box>
            </BC.GridColumn>
          : null }

          { this.state.offerSet == 1 || this.state.offerSet == 2 ?
            <BC.GridColumn gridUnits={this.state.offerSet == 2 ? 6 : 4}>
              <div style={{border: "1px solid #038a91", backgroundColor: "#038a91"}}>
                <BC.GridRow >
                  <BC.Text textsize="mini" textColor="inverse" textCapitalize={true}>Most Popular</BC.Text>
                </BC.GridRow>

                <BC.Box backgroundColor="highlight" paddingSize="base">
                  <BC.GridRow spacing="micro">
                    <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-pause-membership-inverse._V311705986_.svg" />
                  </BC.GridRow>

                  <BC.Heading headingLevel={2} textColor="inverse" spacing="mini">Pause Membership</BC.Heading>
                </BC.Box>

                <BC.Box backgroundColor="base" hasBorder={true} paddingSize="medium">
                  <BC.GridRow heightCss={this.state.offerSet == 2 ? "100px" : "125px"}>
                    <BC.Paragraph spacing="medium">
                      Keep your current credits and don&#39;t make a payment for the next:
                    </BC.Paragraph>

                    <BC.Form>
                      <BC.GridRow>
                        <BC.GridColumn gridUnits={4}>
                          <BC.RadioButton name="pause-option" label="30 Days" />
                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={4}>
                          <BC.RadioButton checked={true} name="pause-option" label="60 Days" />
                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={4} position="last">
                          <BC.RadioButton name="pause-option" label="90 Days" />
                        </BC.GridColumn>
                      </BC.GridRow>
                    </BC.Form>
                  </BC.GridRow>

                  <BC.Button buttonType="primary" inline={true} size="small" app={true} url={"/prototypes/brickcity/cancel/success-pause"}>Pause Membership</BC.Button>
                </BC.Box>
              </div>
            </BC.GridColumn>
          : null }

          { this.state.offerSet == 1 || this.state.offerSet == 2 ?
            <BC.GridColumn gridUnits={this.state.offerSet == 2 ? 6 : 4} spacingTop="medium" position="last">
              <BC.Box backgroundColor="highlight" paddingSize="base">
                <BC.GridRow spacing="micro">
                  <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit-inverse._V311720857_.svg" />
                </BC.GridRow>

                <BC.Heading headingLevel={2} textColor="inverse" spacing="mini">Get a Free Listen</BC.Heading>
              </BC.Box>

              <BC.Box hasBorder={true} paddingSize="medium">
                <BC.GridRow heightCss={this.state.offerSet == 2 ? "100px" : "125px"} >
                  <BC.Paragraph spacing="medium">
                    Keep your current membership and get an additional free credit.
                  </BC.Paragraph>
                </BC.GridRow>

                <BC.Button buttonType="primary" inline={true} size="small">Free Credit</BC.Button>
              </BC.Box>
            </BC.GridColumn>
          : null }

          { this.state.offerSet == 3 ?
            <BC.GridColumn gridUnits={6} spacingTop="base">
              <BC.Box backgroundColor="highlight" paddingSize="base">
                <BC.GridRow spacing="micro">
                  <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-customer-care-inverse._V311706744_.svg" />
                </BC.GridRow>

                <BC.Heading headingLevel={2} textColor="inverse" spacing="mini">24/7 Customer Care</BC.Heading>
              </BC.Box>

              <BC.Box hasBorder={true} paddingSize="medium">
                <BC.GridRow heightCss="100px">
                  <BC.Paragraph spacing="medium">
                    Call or email us anytime—we&#39;re here to help.
                  </BC.Paragraph>
                </BC.GridRow>

                <BC.Button inline={true} buttonType="primary" size="small">Contact Customer Care</BC.Button>
              </BC.Box>
            </BC.GridColumn>
          : null }

          { this.state.offerSet == 4 ?
            <BC.GridColumn gridUnits={6} spacingTop="base">
              <BC.Box backgroundColor="highlight" paddingSize="base">
                <BC.GridRow spacing="micro">
                  <BC.Image imageHeight="60px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg-inverse._V311706744_.svg" />
                </BC.GridRow>

                <BC.Heading headingLevel={2} textColor="inverse" spacing="mini">Exchange Any Audiobook</BC.Heading>
              </BC.Box>

              <BC.Box hasBorder={true} paddingSize="medium">
                <BC.GridRow heightCss="100px">
                  <BC.Paragraph spacing="medium">
                    Do you know about our Great Listen Guarantee, which<br /> lets you return any purchase you're unhappy with?
                  </BC.Paragraph>
                </BC.GridRow>

                <BC.Button inline={true} buttonType="primary" size="small">Exchange Audiobook</BC.Button>
              </BC.Box>
            </BC.GridColumn>
          : null }
        </BC.GridRow>

        <BC.Divider spacing="medium" />

        <BC.GridRow textAlign="right">
          <BC.Button buttonType="primary" inline={true} app={true} url={"/prototypes/brickcity/cancel/success-cancel"}>Cancel Membership</BC.Button>
        </BC.GridRow>
      </CancelLayout>
    )
  }
}

CancelOffers.contextTypes= {
    router: React.PropTypes.func.isRequired
};

export default CancelOffers;
