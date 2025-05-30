import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WScrubbersAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Scrubbers</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="large">
<BC.Text textSize="base" textColor="base">Scrubbers indicate the current position within a range and can be used to quickly jump to another position.</BC.Text>
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
    <BC.ListItem spacing="micro">Orange dot represents current position.</BC.ListItem>
    <BC.ListItem spacing="micro"> Don’t use a scrubber for very short pieces    of content, unless desirable for consistency.</BC.ListItem>

  </BC.List>
    </BC.GridRow>
                      </BC.GridColumn>



<BC.GridColumn gridUnits={4} spacing="base">
<BC.GridRow spacing="small">
<BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/scrubbers/android/dsn_02._V285637387_.jpg">

</BC.Image>
</BC.GridRow>
<BC.Text textColor="edu_tertiary" textSize="base">Reader showing text</BC.Text>

</BC.GridColumn>
  <BC.GridColumn gridUnits={4} position="last">
        <BC.GridRow spacing="small">
   <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/scrubbers/android/dsn_03._V285637387_.jpg"></BC.Image>
   </BC.GridRow>

<BC.Text textColor="edu_tertiary" textSize="base">Reader in listen-only mode</BC.Text>
</BC.GridColumn>
<BC.GridRow>
<BC.GridColumn gridUnits={8} position="last">
<BC.Text textColor="edu_tertiary" textSize="base">The reader screens use the scrubber, which is always visible regardless of the reading mode.</BC.Text>
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
      <BC.Text>Number on the left reflect dot’s position<br /><br /> Touch targets:</BC.Text>
      <BC.List listType="unordered" spacing="medium">
      <BC.ListItem spacing="micro">User can tap anywhere on the line to jump to a specific point</BC.ListItem>
 <BC.ListItem spacing="micro"> User can touch and drag on the dot<br />
<i>Note: need to document/define rules for incrementation</i></BC.ListItem>
    </BC.List>
      </BC.GridRow>

                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={8} position="last" spacing="base">
                      <BC.GridRow spacing="small">
            <BC.Image source="  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/scrubbers/android/in_01._V299157613_.jpg"></BC.Image></BC.GridRow>
          <BC.Text textColor="edu_tertiary" textSize="base">Two Methods of interacting with scrubber </BC.Text>
                    </BC.GridColumn>

                    <div id="specs" />
                    <br /><br /><br />
                        <BC.GridRow spacing="small">

                        <BC.GridColumn gridUnits={4}>

                        <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
                      </BC.GridColumn>

                    <BC.GridColumn gridUnits={8} position="last">
            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/scrubbers/android/spc_01._V285637387_.jpg"></BC.Image>
                    </BC.GridColumn>
                        </BC.GridRow>
          </BC.GridRow>
                    <BC.GridRow spacing="base">
                      <BC.GridColumn gridUnits={4}>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>
                      <BC.GridRow spacing="mini">
                      <BC.Text textColor="edu_tertiary" textSize="base" textBold={true} >Slider specs</BC.Text>
                    </BC.GridRow>
                      <BC.GridRow spacing="mini">
                    <BC.List listType="nostyle">
                      <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Highlight: #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Track: #f2eee8
                    </BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Knob: #f7991c</BC.ListItem>
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
export default WScrubbersAndroid;
