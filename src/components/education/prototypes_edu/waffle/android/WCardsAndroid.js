import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WCardsAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Cards</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="large">
<BC.Text textSize="base" textColor="base">A card is a container sheet that serves as an entry point to more detailed information. Cards have padding to keep each one separate from the next. For scenarios calling for more contiguous lists, see <BC.Link textColor="edu_link" url={"/education/waffle/tiles"}>Tiles</BC.Link>.
</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="none">
  <BC.List listType="nostyle">

          <BC.ListItem spacing="mini">
                <BC.Link textColor="edu_link" app={false} url="#design">Design</BC.Link>
            </BC.ListItem>
            <BC.ListItem spacing="mini">
                  <BC.Link textColor="edu_link" app={false} url="#interaction">Interaction / Motion</BC.Link>
              </BC.ListItem>
                      <BC.ListItem spacing="none">
                        <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#specs">Specs</BC.Link>
                        </BC.ListItem>
  </BC.List>

</BC.GridRow>



<div id="design" />
    <br /><br /><br />
          <BC.GridRow>



  <BC.Box background="#fff" hasBorder={false} paddingSize="none">





            <BC.GridRow spacing="medium">
    <BC.GridColumn gridUnits={4}>
    <BC.GridRow spacing="mini" spacingTop="micro">
    <BC.Text textColor="base" textBold={true}>Design</BC.Text>
    </BC.GridRow>
    <BC.GridRow>
    <BC.List listType="unordered" spacing="medium">
    <BC.ListItem spacing="micro">Cards have rounded corners.</BC.ListItem>
    <BC.ListItem spacing="micro">Use cards for heterogeneous content.</BC.ListItem>
      <BC.ListItem spacing="micro">The padding between each card helps
   separate their contents.</BC.ListItem>

  </BC.List>
    </BC.GridRow>
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={4}>

                      <BC.GridRow spacing="mini">
                      <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/dsn_01._V300737772_.jpg">

                      </BC.Image>
                      </BC.GridRow>
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={4} position="last">

                      <BC.GridRow spacing="mini">
                      <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/ds_03._V285873849_.jpg">

                      </BC.Image>
                      </BC.GridRow>
                      </BC.GridColumn>



<BC.GridRow spacing="base">


<BC.GridColumn gridUnits={4} gridPush={4} spacing="large">

<BC.Text textColor="edu_tertiary" textSize="base">Categories: Each card contains several titles from a single category.</BC.Text>

</BC.GridColumn>
  <BC.GridColumn gridUnits={4} position="last">

<BC.Text textColor="edu_tertiary" textSize="base">Downloaded titles: Each card contains several actions specific to that title.</BC.Text>
</BC.GridColumn>

  </BC.GridRow>


  <div id="interaction" />
      <br /><br /><br />

          <BC.GridRow spacing="small">
      <BC.GridColumn gridUnits={4}>
      <BC.GridRow spacing="mini" spacingTop="micro">
      <BC.Text textColor="base" textBold={true}>Interaction / Motion</BC.Text>
      </BC.GridRow>
      <BC.GridRow>
      <BC.List listType="unordered" spacing="medium">
      <BC.ListItem spacing="micro">Cards may be dismissible</BC.ListItem>
      <BC.ListItem spacing="micro">Cards may be draggable</BC.ListItem>
      <BC.ListItem spacing="micro">Tapping a card invokes its main action;
   cards may contain additional actions invoked by buttons, links, images, etc.</BC.ListItem>
    </BC.List>
      </BC.GridRow>

                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={8} position="last" spacing="base">
            <BC.Image source="  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/in_01._V299048711_.jpg"></BC.Image>
          <BC.List listType="nostyle">
          <BC.ListItem>
    <BC.Text textColor="edu_tertiary" textSize="base">1. Main action: Open details</BC.Text>
          </BC.ListItem>
          <BC.ListItem>
    <BC.Text textColor="edu_tertiary" textSize="base">2. Secondary action: Download</BC.Text>
          </BC.ListItem>

          </BC.List>
                    </BC.GridColumn>


<BC.GridRow>
  <BC.GridColumn gridUnits={4} gridPush={4} >
<BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/in_02._V300737772_.jpg"></BC.Image>
<BC.Text textColor="edu_tertiary" textSize="base">Swiping the card to either direction allows the user to remove the file from their device.</BC.Text>
  </BC.GridColumn>
</BC.GridRow>


<div id="specs" />
    <br /><br /><br />

                        <BC.GridRow spacing="small">

                        <BC.GridColumn gridUnits={4}>

                        <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
                      </BC.GridColumn>

                    <BC.GridColumn gridUnits={8} position="last">
            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/spc_01._V298846575_.jpg"></BC.Image>
                    </BC.GridColumn>
                        </BC.GridRow>
          </BC.GridRow>
                    <BC.GridRow spacing="base">
                      <BC.GridColumn gridUnits={4}>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>
                      <BC.GridRow spacing="mini">
                      <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Card specs</BC.Text>
                    </BC.GridRow>
                      <BC.GridRow spacing="mini">
                    <BC.List listType="nostyle">
                      <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Background: #ffffff</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Radius: 2dp
                    </BC.ListItem>

                    </BC.List>
                    </BC.GridRow>
                      </BC.GridColumn>
                        <BC.GridColumn gridUnits={4} position="last">
                        <BC.GridRow spacing="mini">

                      </BC.GridRow>
                        <BC.GridRow spacing="mini">
                      <BC.List listType="nostyle">

                      </BC.List>
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
export default WCardsAndroid;
