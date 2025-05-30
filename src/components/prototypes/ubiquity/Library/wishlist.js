import React from 'react';
import BC from 'AudibleUITags';
import LibraryLayout from './LibraryLayout';
import BulkManager from './BulkManager';


class Wishlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LibraryLayout title="Wishlist"
        type="wishlist"
        filter={this.props.location.query.filter}>
        <BulkManager
          filter={this.props.location.query.filter}
          title="Wishlist" />
      </LibraryLayout>
    )
  }
}

export default Wishlist;
