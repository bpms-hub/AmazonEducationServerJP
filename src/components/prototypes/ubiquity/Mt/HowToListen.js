import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter'

{
/*
       TO DO:

      •Set height with GridRow, equal spacing
      •Line break copy
      •Questions section – linebreak/link



      */}
class HowToListen extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          {/*Title/Headline*/}
          <BC.GridRow spacing="medium" textAlign="center">
            <BC.Heading>How to Listen</BC.Heading>
            <BC.Paragraph>Get started listening on any of the devices supported here</BC.Paragraph>
          </BC.GridRow>

          <BC.Divider spacing="large"/>

          {/*Smartphones*/}
          <BC.GridRow spacing="large" textAlign="center">
            <BC.Heading spacing="large" textSize="medium">Smartphones & Tablets</BC.Heading>

            <BC.GridRow textAlign="center">
              <BC.GridColumn gridPull={1} gridUnits={4}>
                <BC.GridColumn gridUnits={6} position="last">
                  <BC.GridRow heightCss="140px" spacingTop="none">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/ios._V288437165_.png"/>
                  </BC.GridRow>
                  <BC.Paragraph>Apple iOS</BC.Paragraph>

                  <BC.Button buttonType="primary" spacing="mini">Get the App</BC.Button>
                  <BC.Link textSize="small">Visit the support page</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

              <BC.GridColumn gridPull={1} gridUnits={4}>
                <BC.GridColumn gridUnits={6} position="last">
                  <BC.GridRow heightCss="140px">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/android._V288437165_.png"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph>Android</BC.Paragraph>
                  <BC.Button buttonType="primary" spacing="mini">Get the App</BC.Button>
                  <BC.Link textSize="small">Visit the support page</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

              <BC.GridColumn gridPull={1} gridUnits={4} position="last">
                <BC.GridColumn gridUnits={6} position="last">
                  <BC.GridRow heightCss="140px">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/windows._V288437165_.png"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph>Windows</BC.Paragraph>
                  <BC.Button buttonType="primary" spacing="mini">Get the App</BC.Button>
                  <BC.Link textSize="small">Visit the support page</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

            </BC.GridRow>
          </BC.GridRow>

          <BC.Divider spacing="large"/>

          {/*Kindle*/}
          <BC.GridRow spacing="large" textAlign="center">
            <BC.Heading spacing="large" textSize="medium">Kindle Devices</BC.Heading>

            <BC.GridRow textAlign="center">
              <BC.GridColumn gridPull={1} gridUnits={4}>
                <BC.GridColumn gridUnits={6} position="last" spacing="mini">
                  <BC.GridRow heightCss="140px" spacingTop="none">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/kindle_touch._V288437165_.png"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph spacing="none">Kindle Touch & Keyboard</BC.Paragraph>
                  <BC.Link textSize="small">Visit the support page</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

              <BC.GridColumn gridPull={1} gridUnits={4}>
                <BC.GridColumn gridUnits={6} position="last">
                  <BC.GridRow heightCss="140px" spacingTop="none">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/kindle_1st._V288437165_.png"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph spacing="none">Kindle Fire 1st Generation</BC.Paragraph>
                  <BC.Link textSize="small">Visit the support page</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

              <BC.GridColumn gridPull={1} gridUnits={4} position="last">
                <BC.GridColumn gridUnits={6} position="last">
                  <BC.GridRow heightCss="140px" spacingTop="none">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/kindle_2nd._V288437165_.png"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph spacing="none" textSize="small">Kindle Fire 2nd Generation, Kindle Fire HD, Kindle Fire HDX</BC.Paragraph>
                  <BC.Link textSize="small">Visit the support page</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.GridRow>

          <BC.Divider spacing="large"/>

          {/*Computers & MP3 Players*/}
          <BC.GridRow spacing="large" textAlign="center">
            <BC.Heading spacing="large" textSize="medium">Computers & MP3 Players</BC.Heading>

            <BC.GridRow textAlign="center">
              <BC.GridColumn gridPull={1} gridUnits={4}>
                <BC.GridColumn gridUnits={6} position="last">
                  <BC.GridRow heightCss="136px" spacingTop="medium">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/itunes._V288437165_.png" verticalAlign="top"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph spacing="mini">Mac & PC Users</BC.Paragraph>
                  <BC.Button buttonType="primary" spacing="mini">Get the App</BC.Button>
                  <BC.Link textSize="small">Visit the support page</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

              <BC.GridColumn gridPull={1} gridUnits={4}>
                <BC.GridColumn gridUnits={6} position="last">
                  <BC.GridRow heightCss="150px">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/audible_cloud._V288437165_.png" verticalAlign="top"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph spacingTop="mini">Audible Cloud Player</BC.Paragraph>
                  <BC.Button buttonType="primary" spacing="mini">Get the App</BC.Button>
                  <BC.Link textSize="small">Visit the support page</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>

              <BC.GridColumn gridPull={1} gridUnits={4} position="last">
                <BC.GridColumn gridUnits={6} position="last">
                  <BC.GridRow heightCss="90px" spacingTop="large">
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/impaired._V288437165_.png" verticalAlign="top"></BC.Image>
                  </BC.GridRow>
                  <BC.Paragraph>MP3 & Devices for the Visually Imparied</BC.Paragraph>
                  <BC.Button buttonType="primary" spacing="mini">Get the App</BC.Button>
                  <BC.Link textSize="small">Visit the support page</BC.Link>
                </BC.GridColumn>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.GridRow>

          {/*Questions*/}
          <BC.GridRow spacing="medium" textAlign="center">

            <BC.Heading spacing="small">Still have questions?</BC.Heading>

            <BC.Paragraph  textSize="small">Call us directly at: 1-888-283-5051 (USA and Canada) | 1-973-820-0400 (International)<br/>
              Don&#39;t see your device listed? We have more,
              <BC.Link>learn more here</BC.Link>.
            </BC.Paragraph>

          </BC.GridRow>

        </div>

        <ProdFooter/>
      </div>
    )
  }
}
export default HowToListen;
