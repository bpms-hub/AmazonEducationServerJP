import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WBackArrowAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Back Arrow</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="large">
<BC.Text textSize="base" textColor="base">Returns the user to the previous screen.
</BC.Text>
</BC.GridRow>
<BC.GridRow>
  <BC.List listType="nostyle">

          <BC.ListItem spacing="mini">
                <BC.Link textColor="edu_link" app={false} url="#design-button">Design</BC.Link>
            </BC.ListItem>
                      <BC.ListItem>
                        <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#specs-button">Specs</BC.Link>
                        </BC.ListItem>
  </BC.List>

</BC.GridRow>

          <BC.GridRow>




<div id="design-button" />
<br /><br /><br />
  <BC.Box background="#fff" hasBorder={false} paddingSize="none">





            <BC.GridRow spacing="small">
    <BC.GridColumn gridUnits={4}>
    <BC.GridRow spacing="mini" spacingTop="micro">
    <BC.Text textColor="base" textBold={true}>Design</BC.Text>
    </BC.GridRow>
    <BC.GridRow>
    <BC.List listType="unordered" spacing="medium">
    <BC.ListItem spacing="micro">The Back Arrow is used on drill-down pages (aka secondary pages) and always appears on the left side of the top bar.
</BC.ListItem>
    <BC.ListItem spacing="micro">Don’t confuse the back arrow with
the X used on full screen <BC.Link textColor="edu_link" url={"/education/waffle/bottom-sheet"} linkType="nav">bottom sheets</BC.Link>. (X dismisses a single sheet, while the arrow can take a user back through multiple levels.)</BC.ListItem>

  </BC.List>
    </BC.GridRow>
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={4}>

                      <BC.GridRow spacing="mini">
                      <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/backarrow/android/dsn_01._V300743436_.jpg">

                      </BC.Image>
                      </BC.GridRow>
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={4} position="last">

                      <BC.GridRow spacing="mini">
                      <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/backarrow/android/dsn_02._V300743436_.jpg">

                      </BC.Image>
                      </BC.GridRow>
                      </BC.GridColumn>



<BC.GridRow spacing="base">


<BC.GridColumn gridUnits={4} gridPush={4} spacing="none">

<BC.Text textColor="edu_tertiary" textSize="base">The back arrow on this category page returns the user to the list of categories.</BC.Text>

</BC.GridColumn>
  <BC.GridColumn gridUnits={4} position="last">

<BC.Text textColor="edu_tertiary" textSize="base">A somewhat unique use of the back arrow, this provides a means to exit search in the absence of the (now hidden) menu button</BC.Text>
</BC.GridColumn>

  </BC.GridRow>


  <div id="specs-button" />
  <br /><br /><br />
                        <BC.GridRow spacing="none">

                        <BC.GridColumn gridUnits={4}>
    <BC.GridRow spacing="small">
                        <BC.Text textColor="base"  textBold={true}>Specs</BC.Text>
                      </BC.GridRow>

                          <BC.GridRow>

<BC.Text>Arrow color depends on the background. Surrounding color depends on the page content.</BC.Text>
                                </BC.GridRow>
                      </BC.GridColumn>

                    <BC.GridColumn gridUnits={8} position="last">
            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/backarrow/android/spc_01._V300695506_.jpg"></BC.Image>
                    </BC.GridColumn>
                        </BC.GridRow>
          </BC.GridRow>
                    <BC.GridRow spacing="base">
                      <BC.GridColumn gridUnits={4}>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>

                      <BC.GridRow spacing="mini">
                    <BC.List listType="nostyle">
                      <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Arrow: #ffffff on a #f1971c background</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="edu_tertiary" textSize="base">Tappable area: minimum 48dp
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
export default WBackArrowAndroid;
