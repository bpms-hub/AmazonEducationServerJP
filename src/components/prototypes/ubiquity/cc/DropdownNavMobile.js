import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class DropdownNavMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavShown: this.props.active
    };
  }

  toggleContent() {
    this.setState({
      isNavShown: !this.state.isNavShown
    });
  }

  renderRegular() {
    return (
      <span>
        {this.renderContent()}

        <a aria-expanded="false" className="bc-drodown-nav" onClick={this.toggleContent.bind(this)}>
          {
            this.state.isNavShown
            ? [<BC.Text>{this.props.hideNavs}</BC.Text>, <BC.Icon iconType="chevron-down" />]
            : [<BC.Text>{this.props.showNavs}</BC.Text>, <BC.Icon iconType="chevron-up" />]
          }
        </a>
      </span>
    )
  }

  renderAnchor() {
    return (
      <span>
        <a aria-expanded="false" className="bc-dropdown-nav" onClick={this.toggleContent.bind(this)}>
          {
            this.state.isNavShown
            ? [<BC.Text>{this.props.hideNavs}</BC.Text>, <BC.Icon iconType="chevron-up" />]
            : [<BC.Text>{this.props.showNavs}</BC.Text>, <BC.Icon iconType="chevron-down" />]
          }
        </a>

        {this.renderContent()}
      </span>
    )
  }

  renderContent() {
    return (
      <div className={this.state.isNavShown ? null : 'bc-dropdown-nav-inactive'}>
        {this.props.children}
      </div>
    )
  }

  render() {
    let staticClasses = ['bc-dropdown-nav'];
    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

    return(
      <div id={this.props.id} className={classNames(staticClasses)}>
        {!this.props.anchor ? this.renderRegular() : this.renderAnchor()}
      </div>
    );
  }
}

DropdownNavMobile.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  showNavs: PropTypes.string,
  hideNavs: PropTypes.string,
  active: PropTypes.bool,
  anchor: PropTypes.bool
}


export default DropdownNavMobile;
