import React from 'react';
import BC from 'AudibleUITags';

import Router, {Route, Link} from 'react-router';

class AEFooter extends React.Component {
  render() {
    return (
      <BC.Section padding="medium" paddingTop="medium" backgroundColor="secondary">
        <footer>
          <div className="bc-edu-footer">
            <BC.GridRow spacing="medium" textAlign="left">
              <BC.GridColumn gridUnits={9} gridPush={3}>
              <BC.List listType="menu" cssClass="footer-list">
                <BC.ListItem spacing="micro">
                  <BC.Link textColor="base" linkType="nav" url="https://w.amazon.com/index.php/Audible/BrickCity">Audible.com</BC.Link>
                </BC.ListItem>
              </BC.List>

              <BC.List listType="menu" cssClass="footer-list">
                <BC.ListItem spacing="micro">
                  <BC.Link textColor="base" linkType="nav" app={true} url={"/changelog"} >Design</BC.Link>
                </BC.ListItem>
              </BC.List>

              <BC.List listType="menu" cssClass="footer-list">
                <BC.ListItem spacing="micro">
                  <BC.Link textColor="base" linkType="nav" app={true} url={"/prototypes"}>Develop</BC.Link>
                </BC.ListItem>
              </BC.List>

              <BC.List listType="menu" cssClass="footer-list">
                <BC.ListItem spacing="micro">
                  <BC.Link textColor="base" linkType="nav" url="mailto:audible-brickcity@amazon.com">Api Reference</BC.Link>
                </BC.ListItem>
              </BC.List>

              <BC.List listType="menu" cssClass="footer-list">

                <BC.ListItem spacing="micro">
                  <BC.Link textColor="base" linkType="nav"  url="https://sage.amazon.com/questions/ask?tags=brickcity">Career</BC.Link>
                </BC.ListItem>
              </BC.List>
            </BC.GridColumn>
            </BC.GridRow>

            <BC.GridRow textAlign="left" >

              <BC.GridColumn gridUnits={6} gridPush={3} >
                <BC.Text> &copy; Copyright 1997-2015  Audible Inc.</BC.Text>
              <BC.Pipe /> <BC.Link textColor="base" url="">| Conditions of Use </BC.Link>
            <BC.Pipe />
          <BC.Link textColor="base" url="">| Privacy Policy</BC.Link>
                  </BC.GridColumn>
                <BC.GridColumn gridUnits={3}>

                </BC.GridColumn>
            <BC.GridColumn gridUnits={2}>

            </BC.GridColumn>
            </BC.GridRow>



          </div>
        </footer>
      </BC.Section>
    )
  }
}

export default AEFooter;
