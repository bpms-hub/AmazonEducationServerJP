import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WCheckboxAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Check Boxes</BC.Text>
</BC.GridRow>
  <BC.Text>Single Language</BC.Text>
<BC.GridRow spacing="large" spacingTop="micro">

<BC.Text textSize="base" textColor="base">
A single checkbox may be used as an acknowledgement in a dialogue. <br /> Multiple checkboxes are useful in lists where non-exclusive options are presented, allowing a user to multi-select</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="none">
  <BC.List listType="nostyle">

          <BC.ListItem spacing="mini">
                <BC.Link textColor="edu_link" app={false} url="#design">Design</BC.Link>
            </BC.ListItem>
                      <BC.ListItem spacing="none">
                        <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#specs">Specs</BC.Link>
                        </BC.ListItem>
  </BC.List>

</BC.GridRow>



          <BC.GridRow>
  <BC.Box background="#fff" hasBorder={false} paddingSize="none">
  <div id="design" />
      <br /><br /><br />
    <BC.GridColumn gridUnits={4}>
    <BC.GridRow spacing="mini">
    <BC.Text textColor="base" textBold={true}>Design</BC.Text>
    </BC.GridRow>

    <BC.GridRow>
    
    <BC.List listType="unordered" spacing="micro">
    <BC.ListItem spacing="micro">Use a check box in a dialogue to acknowledge a message or enable a setting.</BC.ListItem>
    <BC.ListItem spacing="micro"> Use check boxes in menus to present multiple non-exclusive options (no such examples at present time).</BC.ListItem>
  <BC.ListItem spacing="micro">Provide a select all control when appropriate</BC.ListItem>
    <BC.ListItem spacing="micro">Check box menu items can not be mutually exclusive.</BC.ListItem>

</BC.List>
    </BC.GridRow>
    </BC.GridColumn>

                      <BC.GridColumn gridUnits={4}>
                        <BC.GridRow spacing="micro">
                      <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/dsn_01._V285369721_.jpg"></BC.Image>
                        </BC.GridRow>
                        <BC.Text textColor="edu_tertiary" textSize="base">The single checkbox on this dialogue lets the user prevent the dialogue from automatically appearing in the future.</BC.Text>
                      </BC.GridColumn>

                <BC.GridColumn gridUnits={4} position="last" spacing="large">
            <BC.GridRow spacing="micro">
               <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/dsn_02._V301936104_.jpg">
               </BC.Image>
</BC.GridRow>
  <BC.Text textColor="edu_tertiary" textSize="base">The same message and functionality, but using a different color palette.</BC.Text>

    </BC.GridColumn>

<BC.GridRow spacing="base">
  <BC.GridColumn gridUnits={8} position="last">
        <BC.GridRow spacing="micro">
   <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/dsn_03._V300164186_.jpg"></BC.Image>
   </BC.GridRow>

   <BC.GridRow spacing="mini" spacingTop="mini" textAlign="center">
      <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/1-3._V300266305_.jpg">
      </BC.Image>
 </BC.GridRow>
<BC.Text textColor="edu_tertiary" textSize="base">These check boxes contradict one another. They should be presented as radio buttons instead.</BC.Text>
</BC.GridColumn>
  </BC.GridRow>



  <div id="specs" />
      <br /><br /><br />
          <BC.GridRow spacing="small">
      <BC.GridColumn gridUnits={4}>
      <BC.GridRow spacing="mini" spacingTop="micro">
      <BC.Text textBold={true}>Specs</BC.Text>
      </BC.GridRow>

                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={8} position="last">
            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/spc_01._V299597286_.jpg"></BC.Image>
                    </BC.GridColumn>
          </BC.GridRow>
                    <BC.GridRow spacing="base">
                      <BC.GridColumn gridUnits={4}>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>
                      <BC.GridRow spacing="mini">
                      <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Checkboxes switch black</BC.Text>
                    </BC.GridRow>
                      <BC.GridRow spacing="mini">
                    <BC.List listType="nostyle">
                      <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">On: #333333, Opacity 100% </BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Off: #333333, Opacity 54%
                    </BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Disabled: #333333, Opacity 26%</BC.ListItem>
                    </BC.List>
                    </BC.GridRow>
                      </BC.GridColumn>
                        <BC.GridColumn gridUnits={4} position="last">
                        <BC.GridRow spacing="mini">
                        <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Checkboxes switch white</BC.Text>
                      </BC.GridRow>
                        <BC.GridRow spacing="mini">
                      <BC.List listType="nostyle">
                        <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">On: #FFFFFF, Opacity 100%</BC.ListItem>
                      <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Off: #FFFFFF, Opacity 70%
                      </BC.ListItem>
                      <BC.ListItem spacing="micro"  textColor="edu_tertiary"  textSize="base">Disabled: #FFFFFF, Opacity 30%
                      </BC.ListItem>
                      </BC.List>
                      </BC.GridRow>
                            </BC.GridColumn>
                  </BC.GridRow>


          </BC.Box>
          </BC.GridRow>

        </BC.Section>
</div>
    )
  }
}
export default WCheckboxAndroid;
