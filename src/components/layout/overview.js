import React from 'react';
import BC from 'AudibleUITags';
import Header from './Header';
import Footer from './Footer';
import CC from '../prototypes/ubiquity/cc';


class overview extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <BC.Section spacingTop="medium" spacing="large">
          <div className="bc-container">
            <BC.Heading spacing="small">Welcome to Brick City</BC.Heading>

            <BC.Paragraph>
              Newark, New Jersey—Brick City. Home of Audible since 2007.
            </BC.Paragraph>

            <BC.Paragraph>
              Just as Audible is committed to revitalizing Newark, we are working to build a cohesive design system. 
              Brick-by-solid-brick we are creating a set of standards and a UI toolkit on how to build Audible user 
              interfaces.
            </BC.Paragraph>

            <BC.GridRow>
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="base">
                  <BC.Link app={true} url={'/design'}>
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/brickcity_hp_categories_design._V286431245_.jpg" imageWidth="100%" imageHeight="100%" />
                  </BC.Link>
                </BC.GridRow>

                <BC.Link url="mailto:aud-design-platform@amazon.com">Contact Us</BC.Link>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="base">
                  <BC.Link app={true} url={'/engineering'}>
                    <BC.Image source=" https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/brickcity_hp_categories_engineering._V286431245_.jpg" imageWidth="100%" imageHeight="100%" />
                  </BC.Link>
                </BC.GridRow>

                <BC.Link url="mailto:audible-platform-dev@amazon.com">Contact Us</BC.Link>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.GridRow spacing="base">
                  <BC.Link app={true} url={'/prototyping'}>
                    <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/brickcity_hp_categories_prototypes._V286431245_.jpg" imageWidth="100%" imageHeight="100%" />
                  </BC.Link>
                </BC.GridRow>

                <BC.Link url="mailto:aud-design-prototype@amazon.com">Contact Us</BC.Link>
              </BC.GridColumn>
            </BC.GridRow>
          </div>
        </BC.Section>

        <Footer />
      </div>
    )
  }
}

export default overview;