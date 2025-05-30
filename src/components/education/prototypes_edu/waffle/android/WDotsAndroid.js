import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WDotsAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Progression Dots</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="large">
<BC.Text textSize="base" textColor="base">Allow users to see how far along they are in a series of screens.
</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="none">
  <BC.List listType="nostyle">
  {/*<BC.ListItem spacing="mini">
        <BC.Link textColor="edu_link" app={false} url="#usage">Usage</BC.Link>
    </BC.ListItem>*/}
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

          <BC.GridRow>



  <BC.Box background="#fff" hasBorder={false} paddingSize="none">



    {/*<div id="usage" />
        <br /><br /><br />*/}

            {/*<BC.GridRow spacing="small">
    <BC.GridColumn gridUnits={4}>
    <BC.GridRow spacing="mini" spacingTop="micro">
    <BC.Text textColor="base" textBold={true}>Usage</BC.Text>
    </BC.GridRow>
    <BC.GridRow>
    <BC.Text spacing="micro">Used in the tour screens when first launching the app, the dots inform the user that there are additional screens to view.</BC.Text>


    </BC.GridRow>
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={8} position="last">

                      <BC.GridRow spacing="mini">
                      <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dots/android/usg_01._V285869988_.jpg">

                      </BC.Image>
                      </BC.GridRow>
                      </BC.GridColumn>


</BC.GridRow>*/}

<div id="design" />
    <br /><br /><br />
<BC.GridRow spacing="small">
<BC.GridColumn gridUnits={4}>
<BC.GridRow spacing="mini" spacingTop="micro">
<BC.Text textColor="base" textBold={true}>Design</BC.Text>
</BC.GridRow>
<BC.GridRow>
<BC.Text spacing="micro">One dot is distinct from the rest, typically brighter or more opaque.</BC.Text>


</BC.GridRow>
          </BC.GridColumn>


          <BC.GridColumn gridUnits={4}>

          <BC.GridRow spacing="none">
          <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dots/android/dsn_01._V285869988_.jpg">

          </BC.Image>
          </BC.GridRow>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={4} position="last">

          <BC.GridRow spacing="none">
          <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dots/android/dsn_02._V285869988_.jpg">

          </BC.Image>
          </BC.GridRow>
          </BC.GridColumn>


</BC.GridRow>



<BC.GridRow spacing="base">


<BC.GridColumn gridUnits={4} gridPush={4} spacing="base">
  <BC.GridRow spacing="micro">
     {/*<BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/do._V301935058_.jpg">
     </BC.Image>*/}
  </BC.GridRow>



<BC.Text textColor="edu_tertiary" textSize="base">Used in the tour screens when first launching the app, the dots inform the user that there are additional screens to view.</BC.Text>

</BC.GridColumn>
  <BC.GridColumn gridUnits={4} position="last">
    <BC.GridRow spacing="micro">
       <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/dont._V301935058_.jpg">
       </BC.Image>
    </BC.GridRow>
<BC.Text textColor="edu_tertiary" textSize="base">Don’t use dots for an excessive number of screens. (You probably shouldn’t have that many screens in the first place!)</BC.Text>
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
<BC.List listType="unordered">
<BC.ListItem>
<BC.Text spacing="micro">The image itself is the swipe target.</BC.Text>
</BC.ListItem>
<BC.ListItem>
<BC.Text spacing="micro">The dots are position indicators only,    not controls.</BC.Text>
</BC.ListItem>
<BC.ListItem>
<BC.Text spacing="micro">  Current (orange) dot should change when the new image becomes larger than the previous.</BC.Text>
</BC.ListItem>
</BC.List>
</BC.GridRow>
          </BC.GridColumn>


          <BC.GridColumn gridUnits={4}>

          <BC.GridRow spacing="mini">
          <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dots/android/in_01._V299217642_.jpg">

          </BC.Image>

          </BC.GridRow>
          <BC.GridRow spacing="mini">
          <BC.Text textColor="edu_tertiary" textSize="base">Transitioning between screens 2 and 3. More of screen 2 is currently visible.</BC.Text>
            </BC.GridRow>
          </BC.GridColumn>

</BC.GridRow>




<div id="specs" />
    <br /><br /><br />
                        <BC.GridRow spacing="small">

                        <BC.GridColumn gridUnits={4}>

                        <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
                      </BC.GridColumn>

                    <BC.GridColumn gridUnits={8} position="last">
            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dots/android/spc_01._V285869988_.jpg"></BC.Image>
                    </BC.GridColumn>
                        </BC.GridRow>

                    <BC.GridRow spacing="base">
                      <BC.GridColumn gridUnits={4}>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>
                      <BC.GridRow spacing="mini">
                      <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Progression dots states</BC.Text>
                    </BC.GridRow>
                      <BC.GridRow spacing="mini">
                    <BC.List listType="nostyle">
                      <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">On: #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Off: #cbc3b5</BC.ListItem>

                    </BC.List>
                    </BC.GridRow>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4} position="last">
                      <BC.GridRow spacing="mini">
                      <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Specs</BC.Text>
                    </BC.GridRow>
                      <BC.GridRow spacing="mini">
                    <BC.List listType="nostyle">
                      <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Dot Height: 8dp</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Dot width: 8dp</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Padding: 8dp</BC.ListItem>

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
export default WDotsAndroid;
