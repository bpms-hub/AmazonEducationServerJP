import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WBottomSheetAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Bottom Sheet</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="large">
<BC.Text textSize="base" textColor="base">Functions as a container for temporary content that a user needs to interact with briefly in order to achieve their larger goal. AE utilizes some full screen bottom sheets as well as “normal” partial screen bottom sheets.</BC.Text>
</BC.GridRow>
          <BC.GridRow>
          <BC.GridRow spacing="none">
            <BC.List listType="nostyle">
              <BC.ListItem spacing="mini">
                <BC.Link textColor="edu_link" linkType="nav" app={false} url="#design">Design</BC.Link>
              </BC.ListItem>
                    <BC.ListItem spacing="mini">
                          <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#interaction">Interaction / Motion</BC.Link>
                      </BC.ListItem>
                        <BC.ListItem>
                              <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#specs">Specs</BC.Link>
                          </BC.ListItem>
            </BC.List>

          </BC.GridRow>

  <BC.Box background="#fff" hasBorder={false} paddingSize="none">


    <div id="design" />
    <br /><br /><br />
          <BC.GridRow>

            <BC.GridRow spacing="medium">
    <BC.GridColumn gridUnits={4}>
    <BC.GridRow spacing="mini" spacingTop="micro">
    <BC.Text textBold={true} textColor="base">Design</BC.Text>
    </BC.GridRow>
    <BC.GridRow>
    <BC.Text>Non-Full Screen Bottom Sheets:</BC.Text>
    <BC.List listType="unordered" spacing="medium">
    <BC.ListItem spacing="micro">Its height is determined by its contents.</BC.ListItem>
    <BC.ListItem spacing="micro">Bottom sheets take precedence over
current screen contents, which are covered by a semi-opaque overlay.</BC.ListItem>
  </BC.List>
    </BC.GridRow>

    <BC.GridRow>
    <BC.Text>Full screen Bottom Sheets:</BC.Text>
    <BC.List listType="unordered" spacing="medium">
    <BC.ListItem spacing="micro">Have an X to dismiss.</BC.ListItem>
    <BC.ListItem spacing="micro"> Acts much like a new page, but is always
dismissable and should have a title.</BC.ListItem>
<BC.ListItem spacing="micro">Is generally only used for a large amount of content or for very significant content due to their disruptive nature.</BC.ListItem>
  </BC.List>
    </BC.GridRow>

                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={4}>
                        <BC.GridRow spacing="small">
                      <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/dsn_04._V300256200_.jpg"></BC.Image>
                      </BC.GridRow>
  <BC.Text textColor="edu_tertiary" textSize="base">The guided learning bottom sheet asks users how difficult they find the current title.</BC.Text>


                      </BC.GridColumn>


                      <BC.GridColumn gridUnits={4} position="last">

                      <BC.GridRow spacing="small">
                              <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/dsn_05._V300743209_.jpg"></BC.Image>


                      </BC.GridRow>

          <BC.Text textColor="edu_tertiary" textSize="base">This bottom sheet uses the full screen to display its contents.</BC.Text>
                                    </BC.GridColumn>


                      </BC.GridRow>





    <div id="interaction" />
        <br /><br /><br />
    <BC.GridRow spacing="small">

      <BC.GridColumn gridUnits={4}>


        <BC.GridRow>

          <BC.GridRow spacing="mini" spacingTop="micro">
          <BC.Text textColor="base" textBold={true}>Interaction / Motion</BC.Text>
          </BC.GridRow>

<BC.GridRow>
        <BC.List listType="unordered" spacing="medium">
        <BC.ListItem spacing="micro">Slides up from the bottom of the screen.</BC.ListItem>
        <BC.ListItem spacing="micro">Dismissable by hitting the Android back
button.</BC.ListItem>
        <BC.ListItem spacing="micro">Taking an action sometimes dismisses the
bottom sheet.</BC.ListItem>

      </BC.List>
    </BC.GridRow>


    <BC.GridRow>
    <BC.Text>Full screen:</BC.Text>
            <BC.List listType="unordered" spacing="medium">
            <BC.ListItem spacing="micro">Dismissed by tapping the top left X,
which is always present on a full screen bottom sheet.</BC.ListItem>
          </BC.List>
        </BC.GridRow>

    <BC.GridRow>
    <BC.Text>Not full screen:</BC.Text>
            <BC.List listType="unordered" spacing="medium">
            <BC.ListItem spacing="micro">Does not have an X to dismiss</BC.ListItem>
            <BC.ListItem spacing="micro">Tapping outside the bottom sheet
dismisses it.</BC.ListItem>
          </BC.List>
        </BC.GridRow>
        </BC.GridRow>

      </BC.GridColumn>




      <BC.GridColumn gridUnits={4}>
            <BC.GridRow spacing="small">
          <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/in_01._V300256200_.jpg"></BC.Image>
          </BC.GridRow>
          <BC.GridRow spacing="small">

    <BC.Text textColor="edu_tertiary" textSize="base">The narration speed control on the bottom right of the screen summons the bottom sheet.</BC.Text>
  </BC.GridRow>
        </BC.GridColumn>
        <BC.GridColumn gridUnits={4} position="last">
          <BC.GridRow spacing="small">
        <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/in_02._V300256200_.jpg"></BC.Image>
        </BC.GridRow>
    <BC.GridRow spacing="small">
            <BC.Text textColor="edu_tertiary" textSize="base">
The reader is overlaid as the bottom sheet slides up.</BC.Text>
                </BC.GridRow>
      </BC.GridColumn>








</BC.GridRow>


          <div id="specs" />
              <br /><br /><br />
                    <BC.GridRow spacing="base">
                      <BC.GridColumn gridUnits={4}>
                        <BC.GridRow spacing="mini" spacingTop="micro">
                        <BC.Text textColor="base" textBold={true}>Specs</BC.Text>

                        </BC.GridRow>
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={4}>
                          <BC.GridRow spacing="mini">
                          <BC.Image source="  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/spc_01._V299068695_.jpg"></BC.Image>
                          </BC.GridRow>


                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4} position="last">
                        <BC.GridRow spacing="mini">
                                <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/spc_02._V299068695_.jpg"></BC.Image>
                                  </BC.GridRow>


                      </BC.GridColumn>




                  </BC.GridRow>


                  <BC.GridRow spacing="base">
                    <BC.GridColumn gridUnits={4}>

                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={4}>
                        <BC.GridRow spacing="mini">
                        <BC.Image source="  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/spc_03._V299068695_.jpg"></BC.Image>
                        </BC.GridRow>
                          <BC.GridRow spacing="mini">
                              <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Text</BC.Text>
                              </BC.GridRow>
                        <BC.List listType="nostyle">
                          <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">English Text: 14sp Roboto Medium, #999999</BC.ListItem>


                        </BC.List>

                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={4} position="last">
                      <BC.GridRow spacing="mini">
                              <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/spc_04._V299068695_.jpg"></BC.Image>
                                </BC.GridRow>
                    <BC.GridRow spacing="mini">
                    <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Text</BC.Text>
                  </BC.GridRow>
                    <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">English Text: 14sp Roboto Medium, #333333</BC.ListItem>
                  <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #333333
                  </BC.ListItem>

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
export default WBottomSheetAndroid;
