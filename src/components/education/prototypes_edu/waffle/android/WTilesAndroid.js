import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WTilesAndroid extends React.Component {
  render() {
    return (
            <div className="">
              <BC.Section spacing="none" spacingTop="none">
                <BC.GridRow spacing="mini">
                  <BC.Text textSize="large" textColor="base">Tiles</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="large">
                  <BC.Text textSize="base" textColor="base">Tiles are containers for information and are used to create lists of homogenous content. For content that warrants more separation between elements, see <BC.Link linkType="nav" textColor="edu_link" url={"/education/waffle/cards"}>Cards</BC.Link>.
                  </BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="none">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="mini">
                      <BC.Link textColor="edu_link" app={false} url="#design">Design</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem>
                      <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#specs">Specs</BC.Link>
                    </BC.ListItem>
                  </BC.List>
                </BC.GridRow>
                <BC.GridRow>



                  <BC.Box background="#fff" hasBorder={false} paddingSize="none">




                    <div id="design" />
                    <br /><br /><br />
                    <BC.GridRow spacing="medium">
                      <BC.GridColumn gridUnits={4}>
                        <BC.GridRow spacing="mini" spacingTop="micro">
                          <BC.Text textColor="base" textBold={true}>Design</BC.Text>
                        </BC.GridRow>
                        <BC.GridRow>
                          <BC.List listType="unordered" spacing="medium">
                            <BC.ListItem spacing="micro">By definition, most lists are made of tiles.</BC.ListItem>
                            <BC.ListItem spacing="micro">Use tiles when a list contains like items that should be easily scannable.</BC.ListItem>
                            <BC.ListItem spacing="micro"> A tile is generally not dismissable or draggable (deleting from word list is not “dismissing”).</BC.ListItem>
                            <BC.ListItem spacing="micro"> Tiles should generally have two or less actions.</BC.ListItem>
                            <BC.ListItem spacing="micro">Tiles have square corners.</BC.ListItem>
                            <BC.ListItem spacing="micro"> There is no padding between tiles.</BC.ListItem>
                          </BC.List>
                        </BC.GridRow>

                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={4} >
                        <BC.GridRow spacing="mini">
                          <BC.Image source="
                          http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/tiles/android/dsn_02._V285880428_.jpg"/>
                        </BC.GridRow>
                        <BC.GridRow spacing="mini">
                          <BC.Text textColor="edu_tertiary" textSize="base">The tile containing the word “character” is one of many tiles in the word list.</BC.Text>
                        </BC.GridRow>

                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={4} position="last">
                        <BC.GridRow spacing="mini">
                          <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/tiles/android/dsn_03._V285880428_.jpg"></BC.Image>
                        </BC.GridRow>
                        <BC.GridRow spacing="mini">
                          <BC.Text textColor="edu_tertiary" textSize="base">On the Categories page, each category card contains three ASIN cover tiles. For example, the TEDTALKS book highlighted above is a tile.</BC.Text>
                        </BC.GridRow>

                      </BC.GridColumn>

                      <BC.GridRow spacing="small">
                        <div id="specs" />
                        <br /><br /><br />
                        <BC.GridColumn gridUnits={4}>
                          <BC.GridRow spacing="mini">
                            <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
                            </BC.GridRow>
                          <BC.GridRow>
                            <BC.Text>Tiles have 90 degree corners. Since tiles are generic containers for any content, no other specification is applicable.</BC.Text>
                             </BC.GridRow>
                        </BC.GridColumn>


                      </BC.GridRow>

                  </BC.GridRow>

          </BC.Box>
          </BC.GridRow>

        </BC.Section>
</div>
    )
  }
}
export default WTilesAndroid;
