import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';



class WRadioButtonsAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Radio Buttons</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="large">
<BC.Text textSize="base" textColor="base">A radio button allows users to select one option from a set. </BC.Text>
</BC.GridRow>
          <BC.GridRow>
          <BC.GridRow spacing="none">
            <BC.List listType="nostyle">


                        <BC.ListItem spacing="mini">
                              <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#design">Design</BC.Link>
                          </BC.ListItem>

                              <BC.ListItem spacing="none">
                                <BC.Link textColor="edu_link"  linkType="nav"  app={false} url="#specs">Specs</BC.Link>
                                </BC.ListItem>
            </BC.List>

          </BC.GridRow>


  <BC.Box background="#fff" hasBorder={false} paddingSize="none">
    <div id="design" />
    <br /><br /><br />


            <BC.GridRow spacing="medium">
    <BC.GridColumn gridUnits={4}>
          <div id="design" />
    <BC.GridRow spacing="mini" spacingTop="micro">
    <BC.Text textColor="base" textBold={true}>Design</BC.Text>
    </BC.GridRow>
    <BC.GridRow>
    <BC.List listType="unordered" spacing="medium">
    <BC.ListItem spacing="micro">Provide a default option if appropriate,    typically the current selection.</BC.ListItem>
    <BC.ListItem spacing="micro"> If the user doesn’t need to see all the    options, consider using a drop down    instead as they take less space.</BC.ListItem>
  </BC.List>
    </BC.GridRow>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>
                        <BC.GridRow spacing="small">


                      <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/radio_buttons/android/dsn_01._V286973016_.jpg"></BC.Image>

                      </BC.GridRow>
  <BC.Text textColor="tertiary" textSize="base">
The highlighting options are presented as radio buttons. In this instance, making a selection also closes the containing bottom sheet.</BC.Text>
                      </BC.GridColumn>
                      </BC.GridRow>

                      <div id="specs" />
                      <br /><br /><br />
          <BC.GridRow spacing="small">

      <BC.GridColumn gridUnits={4}>
      <BC.GridRow spacing="mini" spacingTop="micro">

      <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
      </BC.GridRow>
      <BC.GridRow>
      <BC.Text>Tap target is the entire row on which the radio button is located.</BC.Text>
      </BC.GridRow>
                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={8} position="last">
            <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/radio_buttons/android/spc_01._V286973016_.jpg"></BC.Image>
                    </BC.GridColumn>
          </BC.GridRow>
                    <BC.GridRow spacing="base">
                      <BC.GridColumn gridUnits={4}>
                      </BC.GridColumn>
                      <BC.GridColumn gridUnits={4}>
                      <BC.GridRow spacing="mini">
                      <BC.Text textColor="secondary" textSize="base" hasBold={true} >Button states</BC.Text>
                    </BC.GridRow>
                      <BC.GridRow spacing="mini">
                    <BC.List listType="nostyle">
                      <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">On: #f7991c, opacity 40%</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Off: #cbc3b5, opacity 40%
                    </BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Disabled state: #cccccc, opacity 40%</BC.ListItem>
                    </BC.List>
                    </BC.GridRow>
                      </BC.GridColumn>
                        <BC.GridColumn gridUnits={4} position="last">
                        <BC.GridRow spacing="mini">
                        <BC.Text textColor="secondary" textSize="base" hasBold={true} >Specs</BC.Text>
                      </BC.GridRow>
                        <BC.GridRow spacing="mini">
                      <BC.List listType="nostyle">
                        <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Button Height: 24dp</BC.ListItem>
                      <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Button Width: 24dp
                      </BC.ListItem>
                      </BC.List>
                      </BC.GridRow>
                            </BC.GridColumn>
                  </BC.GridRow>

          <BC.Divider spacing="large"/>
          </BC.Box>
          </BC.GridRow>

        </BC.Section>
</div>
    )
  }
}
export default WRadioButtonsAndroid;
