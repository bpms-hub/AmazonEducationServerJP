import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WSnackbarsAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Snackbars</BC.Text>
</BC.GridRow>
  <BC.Text>Single Language</BC.Text>
<BC.GridRow spacing="large" spacingTop="micro">
<BC.Text textSize="base" textColor="base">Use snackbars when providing lightweight feedback to users, usually to acknowledge an event’s occurrence. They may contain a brief message and/or a SINGLE action.</BC.Text>
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



  <BC.Box background="#fff" hasBorder={false} paddingSize="none">





          <BC.GridRow>
            <div id="design" />
            <br /><br /><br />


  <BC.GridColumn gridUnits={4}>

    <BC.GridRow spacing="mini" spacingTop="micro">
    <BC.Text textColor="base" textBold={true}>Design</BC.Text>
    </BC.GridRow>
    <BC.GridRow>
    <BC.List listType="unordered" spacing="medium">
    <BC.ListItem spacing="micro">Appears at the bottom of the screen.</BC.ListItem>
    <BC.ListItem spacing="micro">Text is left aligned.</BC.ListItem>

  </BC.List>
    </BC.GridRow>
                    </BC.GridColumn>

                    <BC.GridColumn spacing="base" gridUnits={4}>
                  <BC.GridRow spacing="micro">
                    <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/snackbars/android/dsn_01._V300780691_.jpg"></BC.Image>

                    </BC.GridRow>



                    <BC.GridRow spacing="micro">
                       <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/do._V301935058_.jpg">
                       </BC.Image>
                    </BC.GridRow>

                      <BC.Text textColor="edu_tertiary" textSize="base" hasBold={true}>This snackbar informs the user that the pronunciation is not yet available. This lightweight alert is appropriate as there is no available action.</BC.Text>



                    </BC.GridColumn>


                    <BC.GridColumn spacing="base" gridUnits={4} position="last">
<BC.GridRow spacing="micro">
                    <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/snackbars/android/dsn_02._V301006670_.jpg"></BC.Image>
                            </BC.GridRow>
                            <BC.GridRow spacing="micro">
                               <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/dont._V301935058_.jpg">
                               </BC.Image>
                            </BC.GridRow>
<BC.Text textColor="edu_tertiary" textSize="base" hasBold={true}>Snackbars are not meant for
critical messages.</BC.Text>

                    </BC.GridColumn>




          <BC.GridRow spacing="small">
            <div id="interaction" />
            <br /><br /><br />
      <BC.GridColumn gridUnits={4}>
        <BC.GridRow spacing="mini" spacingTop="micro">
        <BC.Text textColor="base" textBold={true}>Interaction / Motion</BC.Text>
        </BC.GridRow>
        <BC.GridRow spacing="base">

        <BC.List listType="unordered" spacing="micro">
        <BC.ListItem spacing="micro">Upon entrance: animate upwards from
   the bottom edge of the screen.
   </BC.ListItem>
  <BC.ListItem spacing="micro">   Snackbars may dismissed by swiping off-screen, or by interacting with them (if applicable).</BC.ListItem>
    <BC.ListItem spacing="micro"> Snackbars disappear automatically after a timeout.</BC.ListItem>
        </BC.List>

        </BC.GridRow>
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={8} position="last">
                        <BC.GridRow spacing="mini">
  <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/snackbars/android/in_01-2._V300565594_.jpg"></BC.Image>

            </BC.GridRow>

                    </BC.GridColumn>
          </BC.GridRow>
                    <BC.GridRow spacing="base">
                      <BC.GridColumn gridUnits={4}>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>


                      </BC.GridColumn>

                  </BC.GridRow>


                  <BC.GridRow spacing="none">
                    <div id="specs" />
                    <br /><br /><br />
          <BC.GridColumn gridUnits={4}>
          <BC.GridRow spacing="mini" spacingTop="micro">
          <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
          </BC.GridRow>

                            </BC.GridColumn>

                            <BC.GridColumn gridUnits={8} position="last">
                                <BC.GridRow spacing="mini">
                          <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/snackbars/android/spc_01._V301006670_.jpg"></BC.Image>
                            </BC.GridRow>


                            </BC.GridColumn>
                            </BC.GridRow>

                            <BC.GridRow spacing="none">
                    <BC.GridColumn gridUnits={4} gridPush={4}>
                      <BC.GridRow>
    <BC.Text textColor="base" textSize="base">Snackbars specs</BC.Text>
    </BC.GridRow>

                      <BC.GridRow spacing="base">
    <BC.Text textColor="edu_tertiary" textSize="base">Background: #ffffff</BC.Text>
    </BC.GridRow>
                                      </BC.GridColumn>
                                      <BC.GridColumn gridUnits={4}  position="last" spacing="base">
                                        <BC.GridRow>
                                      <BC.Text textColor="secondary" textSize="base" textBold={true}>Text</BC.Text>
                                      </BC.GridRow>

                                        <BC.GridRow>
                                      <BC.Text textColor="edu_tertiary" textSize="base">English Text: 14sp Roboto Medium, #ffffff</BC.Text>
                                      </BC.GridRow>

                                      {/*<BC.GridRow>
                                    <BC.Text textColor="edu_tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #ffffff</BC.Text>
                                    </BC.GridRow>*/}


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
export default WSnackbarsAndroid;
