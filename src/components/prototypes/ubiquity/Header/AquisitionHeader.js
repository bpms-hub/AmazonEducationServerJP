import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';

class AquisitionHeader extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="bc-container">

            <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={140} spacing="small">

              <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={140} side="left">
                <BC.GridRow spacingTop="medium">
                  <BC.Link app={true} url={"/prototypes/brickcity"}>
                    <BC.Image imageWidth="140px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo._V314169480_.svg" />
                  </BC.Link>
                </BC.GridRow>
              </BC.FixedGridColumn>

              <BC.FixedGridColumn columnPadding="30px" fixedColumn="left" side="right" textAlign="right" spacingTop="large">
                <BC.Link app={true} url={"/prototypes/brickcity"}>Already a Member?</BC.Link>
              </BC.FixedGridColumn>

            </BC.FixedGridRow>
          </div>
        </header>
      </div>
    )
  }
}

export default AquisitionHeader;
