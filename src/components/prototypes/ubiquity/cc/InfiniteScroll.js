import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

function scrollToTop(scrollDuration) {
const   scrollHeight = window.scrollY,
        scrollStep = Math.PI / ( scrollDuration / 15 ),
        cosParameter = scrollHeight / 2;
var scrollCount = 0,
    scrollMargin,
    scrollInterval = setInterval( function() {
  
  if ( window.scrollY != 0 ) {
    scrollCount = scrollCount + 1;  
    scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
    window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
  } 
  else clearInterval(scrollInterval); 
  }, 15 );
}

class InfiniteScroll extends React.Component {
  moveToTop() {
    scrollToTop(300);
  }

  render() {
    let staticClasses = ['bc-link-mobile'];

    return (
      <BC.GridRow spacing="medium">
        <BC.GridColumn gridUnits={11}>
          <BC.Button onClick={this.props.onClick}>Load More</BC.Button>
        </BC.GridColumn>

        <BC.GridColumn gridUnits={1} position="last">
          <BC.Button onClick={this.moveToTop.bind(this)}><BC.Icon iconType="move-to-top" /></BC.Button>
        </BC.GridColumn>
      </BC.GridRow>
    );
  }
}

InfiniteScroll.PropTypes = {
  onClick: PropTypes.func
}

export default InfiniteScroll;