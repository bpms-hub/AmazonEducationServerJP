import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';

class PrototypingOverview extends React.Component {
  render() {
    return (
		  <div>
        <BC.Heading spacing="base">Prototypes</BC.Heading>

        <BC.GridRow textAlign="left" spacing="base">
          <BC.GridColumn gridUnits={6}>
            <BC.Box hasBorder={true}>
              <BC.Heading headingLevel={2} spacing="base">Brick City Desktop</BC.Heading>

              <BC.Divider spacing="base"/>

              <BC.Paragraph spacing="medium">Prototype for Brick City on Ubiquity.</BC.Paragraph>

              <BC.Button app={true} buttonType="primary" inline={true} url={"/prototypes/brickcity"}>View Prototype</BC.Button>
            </BC.Box>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={6} position="last">
            <BC.Box hasBorder={true}>
              <BC.Heading headingLevel={2} spacing="base">Brick City Mobile</BC.Heading>

              <BC.Divider spacing="base"/>

              <BC.Paragraph spacing="medium">Prototype for Brick City Mobile on Ubiquity.</BC.Paragraph>

              <BC.Button app={true} buttonType="primary" inline={true} url={"/prototypes/brickcity-mobile"}>View Prototype</BC.Button>
            </BC.Box>
          </BC.GridColumn>
        </BC.GridRow>

        <BC.GridRow textAlign="left">
          <BC.GridColumn gridUnits={6}>
            <BC.Box hasBorder={true}>
              <BC.Heading headingLevel={2} spacing="base">Jeff/Lisa PDP</BC.Heading>

              <BC.Divider spacing="base"/>

              <BC.Paragraph spacing="medium">Future state of PDP</BC.Paragraph>

              <BC.Button app={true} buttonType="primary" inline={true} url={"/prototypes/pdp-explorations/jeff"}>View Prototype</BC.Button>
            </BC.Box>
          </BC.GridColumn>
        </BC.GridRow>
      </div>
    )
  }
}

PrototypingOverview.PropTypes = {

}

export default PrototypingOverview;