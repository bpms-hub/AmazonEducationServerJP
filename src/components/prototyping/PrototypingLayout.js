import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

class PrototypingLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <BC.Section spacingTop="large">
          <div className="bc-container">
            <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={200}>
              <BC.FixedGridColumn side="left" fixedColumn="left" fixedColumnWidth={200}>
                <BC.Box backgroundColor="secondary" paddingSize="mini">
                  <BC.Accordion activeRow={1} titleSize="small" titleCapitalize={true}>
                    <BC.AccordionRow title="Prototypes">
                      <BC.List spacing="mini" listType="nostyle" textSize="small">
                        <BC.ListItem spacing="micro"><BC.Link app={true} textColor="base" url={"/prototypes/brickcity"}>Brick City Desktop</BC.Link></BC.ListItem>
                        <BC.ListItem spacing="micro"><BC.Link app={true} textColor="base" url={"/prototypes/brickcity-mobile"}>Brick City Mobile</BC.Link></BC.ListItem>
                        <BC.ListItem spacing="micro"><BC.Link app={true} textColor="base" url={"/prototypes"}>Prototypes</BC.Link></BC.ListItem>
                      </BC.List>
                    </BC.AccordionRow>

                    <BC.AccordionRow title="Test">

                    </BC.AccordionRow>
                  </BC.Accordion>
                </BC.Box>
              </BC.FixedGridColumn>

              <BC.FixedGridColumn side="right" fixedColumn="left" columnPadding="40px">
                { this.props.children }
              </BC.FixedGridColumn>
            </BC.FixedGridRow>
          </div>
        </BC.Section>

        <Footer />
      </div>
    )
  }
}

PrototypingLayout.PropTypes = {
  activeRow: PropTypes.number
}

export default PrototypingLayout;