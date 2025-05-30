import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WTabsAndroid extends React.Component {
  render() {
    return (
            <div className="">
              <BC.Section spacing="none" spacingTop="none">
                <BC.GridRow spacing="mini">
                  <BC.Text textSize="large" textColor="base">Tabs</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="large">
                  <BC.Text textSize="base" textColor="base">Tabs are used as a means of navigation within a section of the app.
                  </BC.Text>
                </BC.GridRow>
                <BC.GridRow>
                  <BC.List listType="nostyle">

                    <BC.ListItem spacing="mini">
                      <BC.Link textColor="edu_link" app={false} url="#design">Design</BC.Link>
                    </BC.ListItem>

                    <BC.ListItem spacing="mini">
                      <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#interaction">Interaction / Motion</BC.Link>
                    </BC.ListItem>
                    <BC.ListItem spacing="none">
                      <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#specs">Specs</BC.Link>
                    </BC.ListItem>
                  </BC.List>

                </BC.GridRow>

                <BC.GridRow>



                  <BC.Box background="#fff" hasBorder={false} paddingSize="none">

                    <BC.GridRow>
                      <div id="design" />
                      <br /><br /><br />
                      <BC.GridColumn gridUnits={4}>
                        <BC.GridRow spacing="mini" spacingTop="micro">
                          <BC.Text textColor="base" textBold={true}>Design</BC.Text>
                        </BC.GridRow>
                        <BC.GridRow>
                          <BC.List listType="unordered" spacing="base">
                            <BC.ListItem spacing="micro">Keep tab labels short!</BC.ListItem>
                            <BC.ListItem spacing="micro">Avoid nested tabs.</BC.ListItem>
                            <BC.ListItem spacing="micro"> Selected tab has orange label and    an orange underline.</BC.ListItem>
                            <BC.ListItem spacing="micro">   Tabs have an on state and off state.</BC.ListItem>
                            <BC.ListItem spacing="micro">  Only one tab can be active at a time.</BC.ListItem>
                          </BC.List>
                        </BC.GridRow>

                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>
                        <BC.GridRow spacing="small">
                          <BC.Image  source="
                          http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/tabs/android/in_01._V285971524_.jpg"/>

                        </BC.GridRow>
                      </BC.GridColumn>


                      <BC.GridRow>
                        <BC.GridColumn gridUnits={4} gridPush={4} spacing="base">
                          <BC.Text textColor="edu_tertiary" textSize="base">The home page in Amazon English has two tabs, the Categories list and the user’s downloaded titles.</BC.Text>
                        </BC.GridColumn>
                      </BC.GridRow>



                      <BC.GridRow spacing="micro">
                        <div id="interaction" />
                        <br /><br /><br />
                        <BC.GridColumn gridUnits={4}>

                          <BC.Text textColor="base" textBold={true}>Interaction</BC.Text>
                          <BC.List listType="unordered" spacing="medium">
                            <BC.ListItem spacing="micro">Any inactive tab is a tap target.</BC.ListItem>
                          </BC.List>
                        </BC.GridColumn>




                        <BC.GridColumn gridUnits={4}  spacing="mini">

                          <BC.GridRow spacing="small">
                            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/tabs/android/in_02._V298999638_.jpg"></BC.Image>
                          </BC.GridRow>

                          <BC.Text textColor="edu_tertiary" textSize="base">In transition: Tapping on “Categories” causes the orange line to slide left, as content slides in from the right.</BC.Text>


                        </BC.GridColumn>


                      </BC.GridRow>
                      <BC.GridRow spacing="small">
                        <div id="specs" />
                        <br /><br /><br />
                        <BC.GridColumn gridUnits={4}>

                          <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
                        </BC.GridColumn>

                        <BC.GridColumn gridUnits={8} position="last">
                          <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/tabs/android/spc_01._V285971524_.jpg"></BC.Image>
                        </BC.GridColumn>
                      </BC.GridRow>
                    </BC.GridRow>
                    <BC.GridRow spacing="base">





                      <BC.GridRow spacing="none">
                        <BC.GridColumn gridUnits={4} gridPush={4}>
                          <BC.GridRow spacing="micro">
                            <BC.Text textColor="secondary" textBold={true} textSize="base">Tabs specs</BC.Text>
                          </BC.GridRow>

                          <BC.GridRow spacing="micro">
                            <BC.Text textColor="edu_tertiary" textSize="base">Background: #ffffff</BC.Text>
                          </BC.GridRow>

                          <BC.GridRow spacing="base">
                            <BC.Text textColor="edu_tertiary" textSize="base">Tappable area: 180dp (if two tabs) by 48dp</BC.Text>
                          </BC.GridRow>

                        </BC.GridColumn>
                        <BC.GridColumn gridUnits={4}  position="last" spacing="base">
                          <BC.GridRow spacing="micro">
                            <BC.Text textColor="secondary" textSize="base" textBold={true}>Text</BC.Text>
                          </BC.GridRow>

                          <BC.GridRow spacing="micro">
                            <BC.Text textColor="edu_tertiary" textSize="base">English Text: 14sp Roboto Medium, #333333</BC.Text>
                          </BC.GridRow>

                          <BC.GridRow spacing="micro">
                        <BC.Text textColor="edu_tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #333333</BC.Text>
                        </BC.GridRow>

                                  <BC.GridRow spacing="micro">
                                <BC.Text textColor="edu_tertiary" textSize="base">Selected State #f7991c</BC.Text>
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
export default WTabsAndroid;
