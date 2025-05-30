import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import productData from '../../../../data/prototypes/products.json';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var ReactCSSTransitionGroup = BC.Text;

class Tray extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BC.Box 
          cssClass="bc-pub-relative bc-pub-overflow-hidden bc-shadow"
          spacing="base"
          paddingSize="none" 
          hasBorder={true} 
          heightCss={this.props.trayHeight && this.props.trayHeight + 'px'}>
          
          <span style={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            zIndex: '2'
          }}>
            <BC.Link onClick={this.props.onClickTrayClose}>
              <BC.Icon iconType="close" textColor="base" />
            </BC.Link>
          </span>

          {this.props.children}
        </BC.Box>
    )  
  }
}

Tray.PropTypes = {
  onClickTrayClose: PropTypes.function,
  trayHeight: PropTypes.string
}

export default Tray;