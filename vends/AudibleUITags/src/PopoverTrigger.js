import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Flyout from './Flyout';
import Tooltip from './Tooltip';

class PopoverTrigger extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      	isFlyoutShown: true,
        tooltipOffsetX: null,
        tooltipOffsetY: null,
        flyoutOffsetX: null,
        flyoutOffsetY: null
     	};
  }

  showFlyout() {
  	this.setState({
  		isFlyoutShown: true
  	});
  }

  hideFlyout() {
  	this.setState({
  		isFlyoutShown: false
  	})
  }

  centerOffsets(){
    let triggerWidth = React.findDOMNode(this).clientWidth;
    let popoverWidth = React.findDOMNode(this.refs['flyout']).clientWidth;
    let popoverLocation = React.findDOMNode(this).offsetLeft;
    let documentWidth = document.body.clientWidth;
    this.setState({'flyoutOffsetX': (-1 * popoverLocation + (documentWidth - popoverWidth ) / 2 ), 'flyoutTriggerOfSetX':  popoverLocation  });
  }

  getOffsets(target, offsetYState, offsetXState){
    let triggerWidth = React.findDOMNode(this).clientWidth;
    let triggerHeight = React.findDOMNode(this).clientHeight;
    let popoverWidth = React.findDOMNode(this.refs[target]).clientWidth;
    let popoverHeight = React.findDOMNode(this.refs[target]).clientHeight;
    let offsetX;
    let offsetY;
    let popoverSide = this.refs[target].props.side;

    if (popoverSide === "left" || popoverSide === "right") {
      offsetY = (triggerHeight - popoverHeight) / 2;
      popoverSide === "right" ? offsetX = triggerWidth : offsetX = "-" + popoverWidth;
    }
    else {
      offsetX = (triggerWidth - popoverWidth) / 2;
      popoverSide === "bottom" ? offsetY = triggerHeight : offsetY = "-" + popoverHeight;
    }

    let stateObject = {};
    stateObject[offsetYState] = offsetY + "px";
    stateObject[offsetXState] = offsetX + "px";
    this.setState(stateObject);
  }

  renderFlyout() {
    return (
      <Flyout
        ref="flyout"
        side={this.props.flyoutSide}
        width={this.props.flyoutWidth}
        active={this.state.isFlyoutShown}
        offsetY={this.state.flyoutOffsetY}
        cssClass={this.props.cssClass}
        offsetX={this.state.flyoutOffsetX}>
        {this.props.flyout}
      </Flyout>
    )
  }

  renderTooltip() {
    return (
      <Tooltip
        ref="tooltip"
        side={this.props.tooltipSide}
        active={this.state.isFlyoutShown}
        offsetY={this.state.tooltipOffsetY}
        offsetX={this.state.tooltipOffsetX}>
        {this.props.tooltip}
      </Tooltip>
    )
  }

  componentDidMount(){
    this.props.tooltip ? this.getOffsets('tooltip', 'tooltipOffsetY', 'tooltipOffsetX') : null;
    this.props.flyout ? this.getOffsets('flyout', 'flyoutOffsetY', 'flyoutOffsetX') : null;
    this.props.center ? this.centerOffsets(): null;


    this.setState({
      isFlyoutShown: false
    });
  }

	render() {
		return (
			<span
				className="bc-popover-trigger"
				onMouseEnter={this.showFlyout.bind(this)}
				onMouseLeave={this.hideFlyout.bind(this)}>
        <span ref="trigger">
          {this.props.children}
        </span>

        { this.props.flyout ? this.renderFlyout() : null}
        { this.props.tooltip ? this.renderTooltip() : null}
    	</span>
		);
	}
}

PopoverTrigger.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipSide: PropTypes.string,
  flyout: PropTypes.node,
  flyoutWidth: PropTypes.string,
  flyoutSide: PropTypes.string,
  center: PropTypes.boolean
}

PopoverTrigger.defaultProps = {
}

export default PopoverTrigger;
