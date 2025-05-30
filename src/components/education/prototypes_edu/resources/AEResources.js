import React from 'react';
import BC from 'AudibleUITags';

import AEHeader from "../../layout_edu/AEHeader.js";

import AEFooter from "../../layout_edu/AEFooter.js";

class AEResources extends React.Component{
  constructor(props,context) {
      super(props,context);
  }

  componentDidMount(){
    // console.log(this.props.location.pathname)
  }


render() {


    return (
    <div background="#222222">
      <AEHeader />
      <div className="">
        <BC.Section spacing="none" spacingTop="large">
          <BC.GridRow spacingTop="large" >
            <BC.GridColumn gridUnits={1}>
{/*<AESidebar />*/}
            </BC.GridColumn>
            {/* Content Section */}
            <BC.GridColumn gridUnits={9} cssClass="bc-edu-container">
              <BC.Box background="#fff" hasBorder={false} paddingSize="none" spacingTop="extra-large">
                <BC.GridRow spacing="mini">
        <BC.Text textColor='base' textSize="large" spacing="base">Amazon English </BC.Text>
  </BC.GridRow>
  <BC.GridRow spacing="medium">
        <BC.Text textColor='base' textSize="base" spacing="secondary">Find source files for Audible’s Amazon English application here. Design Style Guides, Pattern Library, collections of assets, and more. For additional information or questions, contact <BC.Link textColor="base" url="mailto:ae-design@audible.com"><u> ae-design@audible.com</u></BC.Link>.</BC.Text>
  </BC.GridRow>

          <BC.GridRow spacing="large">
            <BC.GridColumn gridUnits={3}>
              <BC.GridRow>
      <BC.Text textColor="base" textBold={true}>Amazon English<br />Style Guide & UI Kit v1.2</BC.Text>
      </BC.GridRow>
      </BC.GridColumn>
      <BC.GridColumn gridUnits={8}>
        <BC.GridRow spacing="mini">
        <BC.Text textColor="base" textBold={true} >Includes:</BC.Text>
        </BC.GridRow>
    <BC.LetterSpace />
  <BC.GridRow spacing="mini">
      <BC.Text textColor="base" textBold={true} >UI Kit: </BC.Text>
    <BC.Text textColor="base">Examples of the screens currently in use in Amazon English. Use it as a template for designing new pages rather than building them from scratch.</BC.Text>
        </BC.GridRow>
    <BC.LetterSpace />
    <BC.GridRow spacing="medium">
      <BC.Text textColor="base" textBold={true} >Style Guide: </BC.Text>
    <BC.Text textColor="base">Color palettes, fonts, logos and fundamental design elements from across the application. Refer to the style guide when creating new components or patterns for Amazon English.</BC.Text>
        </BC.GridRow>


      <BC.Divider cssClass="bc-divider"/>

        <BC.GridRow spacing="medium">
          <BC.GridColumn gridUnits={1}>
            <BC.Link url="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/resources/ANDROID_StyleGuide_UIKIT._V299212401_.zip">
          <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/resources/downloadicon._V300571770_.png"/>
        </BC.Link>
          </BC.GridColumn>
        <BC.Link textColor="edu_link" url="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/resources/ANDROID_StyleGuide_UIKIT._V299212401_.zip">Sketch | 37mb (zip)</BC.Link>
        </BC.GridRow>

        <BC.GridRow>
          <BC.GridColumn gridUnits={1}>

          <BC.Link url="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/education/ae/resources/ANDROID_StyleGuide_UIKIT._V299211846_.pdf">
            <BC.Image  source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/resources/downloadicon._V300571770_.png"/>
</BC.Link>
            </BC.GridColumn>

            <BC.Link textColor="edu_link" url="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/education/ae/resources/ANDROID_StyleGuide_UIKIT._V299211846_.pdf">PDF | 3.6mb</BC.Link>
        </BC.GridRow>


  </BC.GridColumn>


      </BC.GridRow>
<BC.GridRow>
</BC.GridRow>
  <BC.GridRow spacing="base">
        <BC.Divider />
              </BC.GridRow>

  </BC.Box>
  </BC.GridColumn>
  </BC.GridRow>
        </BC.Section>
</div>
        <AEFooter />
      </div>
    )
  }
}




export default AEResources;
