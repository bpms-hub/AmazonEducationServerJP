import React from 'react';
import BC from 'AudibleUITags';

class ProdFooter extends React.Component {
  render() {
    return (
      <BC.Section backgroundColor="secondary" padding="medium" paddingTop="medium">
        <footer>
          <div className="bc-container">
            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={3} spacing="base" textCapitalize={true} textColor="secondary">Audible</BC.Heading>
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base">About Audible</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base">Affiliates</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base">Careers</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base" app={true} url={"/prototypes/brickcity/business-inquiries"}>Business Inquiries</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base" app={true} url={"/prototypes/brickcity/contact"}>Contact Us</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base" app={true} url={"/prototypes/brickcity-mobile"}>Mobile Site</BC.Link>
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={3} spacing="base" textCapitalize={true} textColor="secondary">Find an Audiobook</BC.Heading>
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Mysteries & Thrillers</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Sci-fi & Fantasy</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>History</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Classics</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Bios & Memoirs</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Business</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Self Development</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Romance</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Fiction</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Kids</BC.Link>
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={3}>
                <BC.Heading headingLevel={3} spacing="base" textCapitalize={true} textColor="secondary">Discover More</BC.Heading>
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base">Best Sellers</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base">New at Audible</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base">eBook at Kindle</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base">Whispersync for Voice</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base">Foreign Language</BC.Link>
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={3} position="last">
                <BC.Heading headingLevel={3} spacing="base" textCapitalize={true} textColor="secondary">Extras</BC.Heading>
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/how-to-listen"}>How to Listen</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base" app={true} url={"/prototypes/brickcity/gift-center"}>Gift Center</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base" app={true} url={"/prototypes/brickcity/redeem-promo"}>Redeem a Promo Code</BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">

                    <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/account-details"}>Account Details</BC.Link>
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>
            </BC.GridRow>

            <BC.Divider spacing="mini"/>

            <BC.GridRow textSize="small">
              <BC.GridColumn gridUnits={8}>
                <BC.Text>&copy; Copyright 1997-2015 Audible Inc.</BC.Text>
                <BC.LetterSpace />
                <BC.Divider type="vertical" />
                <BC.LetterSpace />
                <BC.Link url="">Conditions of Use</BC.Link>
                <BC.LetterSpace />
                <BC.Divider type="vertical" />
                <BC.LetterSpace />
                <BC.Link url="">Privacy Policy</BC.Link>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last" textAlign="right">
                <BC.Text>Available on</BC.Text>
                <BC.LetterSpace/>
                <BC.Link textColor="base">
                  <BC.Icon heightPx={15} iconType="apple" verticalAlign="baseline"/>
                </BC.Link>
                <BC.LetterSpace/>
                <BC.Link textColor="base">
                  <BC.Icon heightPx={15} iconType="android" verticalAlign="baseline"/>
                </BC.Link>
                <BC.LetterSpace/>
                <BC.Link textColor="base">
                  <BC.Icon heightPx={15} iconType="amazon" verticalAlign="baseline"/>
                </BC.Link>
                <BC.LetterSpace/>
                <BC.Link textColor="base">
                  <BC.Icon heightPx={15} iconType="windows" verticalAlign="baseline"/>
                </BC.Link>
                <BC.Pipe/>
                <BC.Link textColor="base">
                  <BC.Icon heightPx={15} iconType="facebook" verticalAlign="baseline"/>
                </BC.Link>
                <BC.LetterSpace/>
                <BC.Link textColor="base">
                  <BC.Icon heightPx={15} iconType="twitter" verticalAlign="baseline"/>
                </BC.Link>
              </BC.GridColumn>
            </BC.GridRow>
          </div>
        </footer>
      </BC.Section>
    )
  }
}
export default ProdFooter;
