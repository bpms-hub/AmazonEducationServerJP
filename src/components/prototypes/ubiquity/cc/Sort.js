import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';

class Sort extends React.Component {

  render() {
    return (
      <BC.Dropdown inline={true}>
        <BC.DropdownOption>Most Recent</BC.DropdownOption>
        <BC.DropdownOption>Most Recent</BC.DropdownOption>
        <BC.DropdownOption>Most Recent</BC.DropdownOption>
        <BC.DropdownOption>Most Recent</BC.DropdownOption>
      </BC.Dropdown>
    );
  }

}
Sort.propTypes = {

}

export default Sort;