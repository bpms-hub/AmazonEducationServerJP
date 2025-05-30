import React from 'react';
import BC from 'AudibleUITags';

class Footer extends React.Component {
  render() {
    return (
      <BC.Section padding="medium" paddingTop="medium">
        <footer>
          <div className="bc-container">
            <BC.Divider spacing="mini" />

            <BC.Text>&copy; Copyright 1997-2015  Audible Inc.</BC.Text>
            <BC.Pipe />
            <BC.Link>Conditions of Use</BC.Link>
            <BC.Pipe />
            <BC.Link>Privacy Policy</BC.Link>
          </div>
        </footer>
      </BC.Section>
    )
  }
}

export default Footer;
