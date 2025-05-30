import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class BulkActions extends React.Component {

  render() {
    return (
      <div>
        <span>
          <BC.PopoverTrigger tooltip="Select/Deselect All" tooltipSide="top">
            <BC.Checkbox onChange={this.handleBulkSelect.bind(this)} />
          </BC.PopoverTrigger>                  
          <BC.LetterSpace />

          <BC.PopoverTrigger tooltip="Mark as Read" tooltipSide="top">
            <BC.Link onClick={this.triggerToast.bind(this, 'Items have been marked as read')} textColor="base">
              <BC.Icon iconType="check" />
            </BC.Link>
          </BC.PopoverTrigger>  
          <BC.LetterSpace />
        </span>
        <BC.PopoverTrigger tooltip="Archive" tooltipSide="top">
          <BC.Link onClick={this.triggerToast.bind(this, 'Items have been archived')} textColor="base">
            <BC.Icon iconType="archive" />
          </BC.Link>
        </BC.PopoverTrigger>  
        <BC.LetterSpace />

        <BC.Dropdown inline={true}>
          <BC.DropdownOption>More Actions</BC.DropdownOption>
          <BC.DropdownOption>More Actions</BC.DropdownOption>
          <BC.DropdownOption>More Actions</BC.DropdownOption>
          <BC.DropdownOption>More Actions</BC.DropdownOption>
        </BC.Dropdown>
        <BC.LetterSpace />
      </div>
    );
  }

}
BulkActions.propTypes = {

}

export default BulkActions;