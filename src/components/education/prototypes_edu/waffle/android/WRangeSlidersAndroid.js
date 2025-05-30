import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WRangeSlidersAndroid extends React.Component {
  render() {
    return (
            <div className="">
              <BC.Section spacing="none" spacingTop="none">
                <BC.GridRow spacing="mini">
                  <BC.Text textSize="large" textColor="base">Range Sliders</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="large">
                  <BC.Text textSize="base" textColor="base">Allows a user to specify a minimum and/or maximum value</BC.Text>
                </BC.GridRow>

<BC.GridRow spacing="none">
  <BC.List listType="nostyle">

          <BC.ListItem spacing="mini">
                <BC.Link textColor="edu_link" app={false} url="#design">Design</BC.Link>
            </BC.ListItem>



                    <BC.ListItem spacing="mini">
                      <BC.Link textColor="edu_link"  linkType="nav"  app={false} url="#interaction-button">Interaction / Motion</BC.Link>
                      </BC.ListItem>
                      <BC.ListItem spacing="none">
                        <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#specs-button">Specs</BC.Link>
                        </BC.ListItem>
  </BC.List>

                </BC.GridRow>
                <BC.GridRow>


                  <BC.Box background="#fff" hasBorder={false} paddingSize="none">
                    <div id="overview" />
                    <br /><br /><br />
                    <BC.GridRow>
          {/*<BC.GridRow spacing="medium">
  <BC.GridColumn gridUnits={4}>
  <BC.GridRow spacing="mini" spacingTop="micro">
  <BC.Text textColor="base" textBold={true}>Usage</BC.Text>
  </BC.GridRow>
  <BC.GridRow>
  <BC.Text>Used in Refine feature, the sliders allow users to limit results to content lasting a certain duration</BC.Text>
  </BC.GridRow>
                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={8} position="last">

                    <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/rangeslider/android/usg_01._V285374579_.jpg"></BC.Image>
                    </BC.GridColumn>
                    </BC.GridRow>*/}

                      <BC.GridRow spacing="medium">
                        <div id="design" />
                        <br /><br /><br />
                        <BC.GridColumn gridUnits={4}>
                          <BC.GridRow spacing="mini" spacingTop="micro">
                            <BC.Text textColor="base" textBold={true}>Design</BC.Text>
                          </BC.GridRow>
                          <BC.GridRow>
                            <BC.List listType="unordered" spacing="medium">
                              <BC.ListItem spacing="micro"> By default, dots are positioned at the far left and right (end-to-end).
                              </BC.ListItem>
    <BC.ListItem spacing="micro">Left = 0 minutes; Right = minutes of the    longest title in the set.</BC.ListItem>
      <BC.ListItem spacing="micro"> Don’t use too large/small an increment!    Ensure the user’s ability to control the    slider in a meaningful way.</BC.ListItem>
        <BC.ListItem spacing="micro"> The slider should have labels nearby    describing its purpose and current numeric    selection.</BC.ListItem>
  </BC.List>
    </BC.GridRow>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>
                        <BC.GridRow spacing="mini">
                      <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/rangeslider/android/dsn_01._V299486624_.jpg"></BC.Image>
                      </BC.GridRow>
  <BC.Text textColor="edu_tertiary" textSize="base">In the refine feature, users drag sliders to specify the duration of the displayed titles.</BC.Text>
                      </BC.GridColumn>
                      </BC.GridRow>

          <BC.GridRow spacing="small">
            <div id="interaction-button" />
            <br /><br /><br />
      <BC.GridColumn gridUnits={4}>
      <BC.GridRow spacing="mini" spacingTop="micro">
      <BC.Text textColor="base" textBold={true}>Interaction / Motion</BC.Text>
      </BC.GridRow>

      <BC.GridRow>
      <BC.List listType="unordered" spacing="medium">
      <BC.ListItem spacing="micro">Control is on the dots; touching the line has no effect.
  </BC.ListItem>
      <BC.ListItem spacing="micro">Sliding a dot changes the associated
   numeric value</BC.ListItem>
        <BC.ListItem spacing="micro">Bar between the two dots is always
   colored in</BC.ListItem>

    </BC.List>
      </BC.GridRow>

                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={8} position="last">
  <BC.GridRow spacing="small">
            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/rangeslider/android/in_01._V299495533_.jpg"></BC.Image>
            </BC.GridRow>

                    </BC.GridColumn>
          </BC.GridRow>
                    <BC.GridRow spacing="base">
                      <div id="specs-button" />
                      <br /><br /><br />
                        <BC.GridColumn gridUnits={4}>
                      <BC.GridRow spacing="mini" spacingTop="micro">
                      <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
                      </BC.GridRow>
                    </BC.GridColumn>
                      <BC.GridColumn gridUnits={8} position="last">
                          <BC.GridRow spacing="mini">
              <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/rangeslider/android/spc_01._V299495532_.jpg"></BC.Image>
              </BC.GridRow>


                <BC.GridColumn gridUnits={5}>
                <BC.GridRow spacing="mini">
                <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Slider specs</BC.Text>
              </BC.GridRow>
                <BC.GridRow spacing="mini">
              <BC.List listType="nostyle">
                <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Highlight: #f7991c</BC.ListItem>
              <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Track: #999999
              </BC.ListItem>
              <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Knob: #f7991c</BC.ListItem>
              </BC.List>
              </BC.GridRow>
                </BC.GridColumn>
                  <BC.GridColumn gridUnits={7} position="last">
                  <BC.GridRow spacing="mini">
                  <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Text</BC.Text>
                </BC.GridRow>
                  <BC.GridRow spacing="mini">
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">English Text: 14sp Roboto Medium, #333333</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #333333
                    </BC.ListItem>
                <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Timeline Text: 12sp Roboto Regular, #f7991c
                </BC.ListItem>

                </BC.List>
                </BC.GridRow>
                      </BC.GridColumn>

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
export default WRangeSlidersAndroid;
