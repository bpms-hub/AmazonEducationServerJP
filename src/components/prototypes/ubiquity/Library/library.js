import React from 'react';
import BC from 'AudibleUITags';
import BulkManager from './BulkManager';
import LibraryLayout from './LibraryLayout';


class Library extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    console.log(this.props.location.query.filter, 'mount again');
  }

  render() {
    return (
      <LibraryLayout title="Library"
        type="library"
        filter={this.props.location.query.filter}>
        <BulkManager
          filter={this.props.location.query.filter}
          ownershipState="owned"        
          title="Library" />
      </LibraryLayout>
    )
  }
}

Library.contextTypes= {
    location: React.PropTypes.object
};

export default Library;
