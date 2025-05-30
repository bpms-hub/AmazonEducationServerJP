import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import LibraryLayout from './LibraryLayout';
import BulkManager from './BulkManager';


class Preorders extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LibraryLayout title="Preorders">
        <BulkManager
          ownershipState="preordered"
          title="Preorders" />
      </LibraryLayout>
    )
  }
}

export default Preorders;
