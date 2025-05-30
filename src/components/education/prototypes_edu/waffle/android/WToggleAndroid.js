import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WToggleAndroid extends React.Component {
  render() {
    return (
            <div className="">
              <BC.Section spacing="none" spacingTop="none">
                <BC.GridRow spacing="mini">
                  <BC.Text textSize="large" textColor="base">Toggle</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="large">
                  <BC.Text textSize="base" textColor="base">Allow user to switch back and forth between an item or attribute’s two possible states, such as on/off or selected/unselected. Amazon English uses both toggle buttons and toggle switches, depending on the scenario.</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="none">
                  <BC.List listType="nostyle">

                    <BC.ListItem spacing="mini">
                      <BC.Link textColor="edu_link" app={false} url="#design">Design</BC.Link>
                    </BC.ListItem>


                    <BC.ListItem spacing="mini">
                      <BC.Link textColor="edu_link"  linkType="nav"  app={false} url="#interaction">Interaction / Motion</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="none">
                      <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#specs">Specs</BC.Link>
                    </BC.ListItem>
                  </BC.List>

                </BC.GridRow>

                <BC.GridRow>

                  <div id="design" />
                  <br /><br /><br />

                  <BC.Box background="#fff" hasBorder={false} paddingSize="none">


                    <BC.GridRow>

                      <BC.GridColumn gridUnits={4}>

                        <BC.GridRow spacing="mini" spacingTop="micro">
                          <BC.Text textColor="base" textBold={true}>Design</BC.Text>
                        </BC.GridRow>
                        <BC.GridRow>
                          <BC.Text>Toggle Switches</BC.Text>
                          <BC.List listType="unordered" spacing="medium">

                            <BC.ListItem spacing="micro"> Label is horizontally aligned with the switch</BC.ListItem>
                            <BC.ListItem spacing="micro"> The entire row acts is the tap target</BC.ListItem>
                            <BC.ListItem spacing="micro"> Animated switch slides on tap</BC.ListItem>

                          </BC.List>
                          <BC.Text>Toggle buttons</BC.Text>
                          <BC.List listType="unordered" spacing="medium">

                            <BC.ListItem spacing="micro">  Button width depends on the length    of the labels</BC.ListItem>


                          </BC.List>
                        </BC.GridRow>
                      </BC.GridColumn>




                        <BC.GridColumn gridUnits={4}>
                          <BC.GridRow spacing="micro">
                              <BC.Image source="     http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/dsn_04._V299486961_.jpg"></BC.Image>
                          </BC.GridRow>
                          <BC.GridRow spacingTop="none">
                            <BC.Text textColor="edu_tertiary" textSize="base" hasBold={true} >This switch in the Reader options toggles TOEIC word highlighting on and off.</BC.Text>
                          </BC.GridRow>
                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={4} position="last">
                          <BC.GridRow spacing="micro">
                            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/dsn_03._V299486961_.jpg"></BC.Image>

                  </BC.GridRow>

                  <BC.Text textColor="edu_tertiary" textSize="base" hasBold={true} >Toggle buttons in Refine feature allow users to limit results to content lasting a certain duration</BC.Text>


                    </BC.GridColumn>


                    <BC.GridRow spacing="base">
                      <BC.GridColumn gridUnits={4}>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>


                      </BC.GridColumn>

                  </BC.GridRow>


                  <BC.GridRow spacing="medium">
                    <div id="interaction" />
                    <br /><br /><br />
          <BC.GridColumn gridUnits={4}>
          <BC.GridRow spacing="mini" spacingTop="micro">
          <BC.Text textColor="base" textBold={true}>Interaction / Motion</BC.Text>
          </BC.GridRow>
          <BC.GridRow spacing="base">
            <BC.Text>Buttons:</BC.Text>
          <BC.List listType="unordered" spacing="micro">
          <BC.ListItem spacing="micro">Entire button is touch target</BC.ListItem>
          </BC.List>
            <BC.Text>Switches:</BC.Text>
            <BC.List listType="unordered" spacing="medium">

          <BC.ListItem spacing="micro">Entire row acts as a tap target</BC.ListItem>
            <BC.ListItem spacing="micro">Switch is animated, slides on tap</BC.ListItem>
        </BC.List>
          </BC.GridRow>
                            </BC.GridColumn>

                            <BC.GridColumn gridUnits={8} position="last">
                                <BC.GridRow spacing="mini">
                            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/in_01._V300999104_.jpg"></BC.Image>
                            </BC.GridRow>

        <BC.Text textColor="edu_tertiary" textSize="base">Toggle switch as a full-width control, enabling or disabling the highlighting of TOEIC words.</BC.Text>
                            </BC.GridColumn>
                            </BC.GridRow>

                            <BC.GridRow spacing="medium">
                              <div id="specs" />
                              <br /><br /><br />
                    <BC.GridColumn gridUnits={4}>

                    <BC.GridRow spacing="mini" spacingTop="micro">

                    <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
                    </BC.GridRow>

                                      </BC.GridColumn>
                                      <BC.GridColumn gridUnits={8} position="last">
                                          <BC.GridRow spacing="mini">
                                      <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/spc_01._V285375482_.jpg"></BC.Image>
</BC.GridRow>
                                    <BC.GridColumn gridUnits={6}>

                                    <BC.GridRow spacing="mini">
                                      <BC.List listType="nostyle">
                                        <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base" textBold={true}>Toggle switch active</BC.ListItem>
                                      <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Switch: #f7991c  50%
                                      </BC.ListItem>
                                      <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Knob: #f7991c</BC.ListItem>
                                      </BC.List>
                                      </BC.GridRow>
                                      </BC.GridColumn>

                                      <BC.GridColumn gridUnits={6} position="last" >

                                      <BC.GridRow spacing="mini">
                                        <BC.List listType="nostyle">
                                          <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base" textBold={true}>Toggle switch inactive</BC.ListItem>
                                        <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Switch: #e0dbcd  50%
                                        </BC.ListItem>
                                        <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Knob: #cbc3b5</BC.ListItem>
                                        </BC.List>
                                        </BC.GridRow>
                                        </BC.GridColumn>

                                    </BC.GridColumn>
                                      </BC.GridRow>

                                      <BC.GridRow spacing="medium">

                                                <BC.GridColumn gridUnits={8} position="last">
                                                    <BC.GridRow spacing="mini">
                                                <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/spc_02._V285375482_.jpg"></BC.Image>
                                                </BC.GridRow>

                              <BC.GridColumn gridUnits={6} >

                              <BC.GridRow spacing="mini">
                                <BC.List listType="nostyle">
                                  <BC.ListItem spacing="micro"  textColor="edu_tertiary" textBold={true} textSize="base">Toggle buttons</BC.ListItem>
                                <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Active: #f7991c fill color
                                </BC.ListItem>
                                <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Inactive: 1dp #dddddd stroke, #ffffff fill color</BC.ListItem>
                                </BC.List>
                                </BC.GridRow>
                                </BC.GridColumn>

                                <BC.GridColumn gridUnits={6} position="last" >

                                <BC.GridRow spacing="mini">
                                  <BC.List listType="nostyle">
                                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textBold={true} textSize="base">Buttons Text</BC.ListItem>
                                  <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">English Text: 14sp Roboto Medium, #ffffff (active), #999999 (inactive)
                                  </BC.ListItem>
                                  <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #ffffff (active), #999999 (inactive)</BC.ListItem>
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
export default WToggleAndroid;
