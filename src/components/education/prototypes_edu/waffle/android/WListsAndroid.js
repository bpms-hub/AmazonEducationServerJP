import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WListsAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Lists</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="large">
<BC.Text textSize="base" textColor="base">Lists present vertically aligned rows of <BC.Link textColor="primary" url={"/education/waffle/tiles"}>tiles</BC.Link> as a single continuous element. Lists are typically single language, but this depends on their content.</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="none">
  <BC.List listType="nostyle">

          <BC.ListItem spacing="mini">
                <BC.Link textColor="edu_link" app={false} url="#design">Design</BC.Link>
            </BC.ListItem>


                    <BC.ListItem spacing="none">
                      <BC.Link textColor="edu_link"  linkType="nav"  app={false} url="#interaction">Interaction / Motion</BC.Link>
                      </BC.ListItem>
  </BC.List>
</BC.GridRow>


<div id="design" />
<br /><br /><br />
          <BC.GridRow>
  <BC.Box background="#fff" hasBorder={false} paddingSize="none">
          <BC.GridRow>
  <BC.GridColumn gridUnits={4}>
    <BC.GridRow spacing="mini">
    <BC.Text textColor="base" textBold={true}>Design</BC.Text>
    </BC.GridRow>
    <BC.GridRow>
    <BC.List listType="unordered" spacing="medium">
    <BC.ListItem spacing="micro">Lists are best suited to presenting homogeneous data or sets of data types, such as images and text.</BC.ListItem>
    <BC.ListItem spacing="micro"> If more than 3 lines of text are needed in a single row, use cards instead of a list of tiles.</BC.ListItem>
  </BC.List>
    </BC.GridRow>
                    </BC.GridColumn>

                    <BC.GridColumn spacing="base" gridUnits={4}>
  <BC.GridRow spacing="small">
                    <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/lists/android/dsn_01._V301005943_.jpg"></BC.Image>
                    </BC.GridRow>
                      <BC.GridRow spacing="none">
                      <BC.Text textColor="edu_tertiary" textSize="base" hasBold={true} >The chapter list shows each chapter in the book. Each row returns to the reader at the beginning of that chapter.</BC.Text>
                    </BC.GridRow>
                    </BC.GridColumn>




                  <BC.GridRow spacing="medium">
                    <div id="interaction" />
                    <br /><br /><br />
          <BC.GridColumn gridUnits={4}>
          <BC.GridRow spacing="mini" spacingTop="micro">
          <BC.Text textColor="base" textBold={true}>Interaction / Motion</BC.Text>
          </BC.GridRow>
          <BC.GridRow spacing="base">
            <BC.Text>A list item may be swipeable.<br />
          Lists scroll vertically only.<br /><br /> Accordion Lists:</BC.Text>
          <BC.List listType="unordered" spacing="micro">
          <BC.ListItem spacing="micro">Some lists expand to show more
information when a given row is tapped.</BC.ListItem>
                    <BC.ListItem spacing="micro">Tapping another row closes the
previous row.</BC.ListItem>
          </BC.List>

          </BC.GridRow>
                            </BC.GridColumn>

                            <BC.GridColumn gridUnits={4}>
                                <BC.GridRow spacing="small">
                            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/lists/android/in_01._V301005867_.png"></BC.Image>
                            </BC.GridRow>
                              <BC.GridRow spacing="mini">
                            <BC.GridColumn gridUnits={12}>
                    <BC.Text textColor="edu_tertiary" textSize="base">Lists may allow swiping, such as swiping to delete a word from the word list.</BC.Text>
                    </BC.GridColumn>
                    </BC.GridRow>

                            </BC.GridColumn>

                            <BC.GridColumn gridUnits={4} position="last">
                                <BC.GridRow spacing="small">
                            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/lists/android/in_02._V301005940_.jpg"></BC.Image>
                            </BC.GridRow>
                            <BC.GridRow spacing="mini">
                                <BC.GridColumn gridUnits={12}>
                          <BC.Text textColor="edu_tertiary" textSize="base">Tapping on a row in an accordion list causes that row to expand. Tapping outside collapses that row.</BC.Text>
                          </BC.GridColumn>
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
export default WListsAndroid;
