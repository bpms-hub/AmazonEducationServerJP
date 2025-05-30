import React from 'react';
import BC from 'AudibleUITags';
import ProdHeader from './Header/ProdHeader';
import ProdFooter from './Footer/ProdFooter';

class DeviceVideo extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          {/*Hero Unit*/}

          <BC.GridRow spacing="base">



            <BC.GridRow spacing="base" textAlign="left">
              <BC.Heading>Audible on your Android Device</BC.Heading>

            </BC.GridRow>

            <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={0} spacing="base">

              <BC.FixedGridColumn columnPadding="0" fixedColumn="left" side="left">

                <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/devices/video._V288437043_.jpg"/>

              </BC.FixedGridColumn>

              <BC.GridColumn gridUnits={3} position="last">
                <BC.Text textColor="base">Scene</BC.Text>
                <BC.Divider spacing="small"/>
                <BC.GridColumn gridUnits={9}>
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro">
                      <BC.Link>Getting Started</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      <BC.Link>Player Feature</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      <BC.Link>Other Player Features</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      <BC.Link>Purchase & Shop</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      <BC.Link>Stats, Badges & News</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      <BC.Link>Settings & Support</BC.Link>
                    </BC.ListItem>
                  </BC.List>
                </BC.GridColumn>

                <BC.GridColumn gridUnits={3} position="last">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro">
                      0s
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      56s
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      1m45s
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      2m16s
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      2m29s
                    </BC.ListItem>
                    <BC.ListItem spacing="micro">
                      3m14s
                    </BC.ListItem>
                  </BC.List>

                </BC.GridColumn>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={3} position="last" spacingTop="base">
<BC.GridRow spacing="small">
                <BC.Text textSize="medium">Still Have Questions?</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="micro">
                <BC.Text>Call us directly at:</BC.Text>
                </BC.GridRow>
                          <BC.GridRow spacing="micro">
                  <BC.Text>1-888-283-5051 (USA and Canada)</BC.Text>
                          </BC.GridRow>
                        <BC.GridRow spacing="micro">
                  <BC.Text>1-973-820-0400 (International)</BC.Text>
                          </BC.GridRow>
                          <BC.GridRow spacing="micro">
                  <BC.Link>FAQs and Help Center</BC.Link>
                            </BC.GridRow>
              </BC.GridColumn>

            </BC.FixedGridRow>

            {/*Great Listen Guarantee*/}


          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={0}>
            <BC.FixedGridColumn columnPadding="0" fixedColumn="left" side="left">
              <BC.Button buttonType="primary">Download App</BC.Button>

            </BC.FixedGridColumn>
            <BC.FixedGridColumn columnPadding="30" fixedColumn="right" side="left">

              <BC.Heading headingLevel={3} spacingTop="micro">
                <BC.LetterSpace size="extra-large"/>or</BC.Heading>

            </BC.FixedGridColumn>

            <BC.GridColumn gridUnits={4}>
              <BC.Search placeholder="Enter your mobile number or email"></BC.Search>
            </BC.GridColumn>

            <BC.FixedGridColumn columnPadding="0" fixedColumn="left" side="left">
              <BC.Button buttonType="primary">
                Send link</BC.Button>

            </BC.FixedGridColumn>

          </BC.FixedGridRow>
        </BC.GridRow>


        </div>

        <ProdFooter/>

      </div>
    )
  }
}
export default DeviceVideo;
