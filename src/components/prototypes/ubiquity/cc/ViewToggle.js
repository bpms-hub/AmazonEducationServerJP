import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';

class ViewToggle extends React.Component {

  render() {
    return (
    	<span>
			<BC.PopoverTrigger tooltip="Grid View" tooltipSide="top">
				<BC.Link textColor="base" onClick={()=> this.setState({activeView: 'grid'})}>
				  <BC.Icon heightPx={24} iconType="grid"/>
				</BC.Link>
			</BC.PopoverTrigger>   
			<BC.LetterSpace size="medium"/>

			<BC.PopoverTrigger tooltip="List View" tooltipSide="top">
				<BC.Link textColor="base" onClick={()=> this.setState({activeView: 'list'})}>
				  <BC.Icon heightPx={24} iconType="list"/>
				</BC.Link>
			</BC.PopoverTrigger> 
		</span> 
    );
  }

}
ViewToggle.propTypes = {

}

export default ViewToggle;