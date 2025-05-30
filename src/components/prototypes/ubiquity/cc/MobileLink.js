import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class MobileLink extends React.Component {
  render() {
    let staticClasses = ['bc-link-mobile'];

    return (
      <div>
        {this.props.hasTopBorder ? <BC.Divider /> : null}
          <BC.Link textColor="base" app={this.props.url ? true : null} url={this.props.url ? this.props.url : null}>
            <div className="bc-container bc-clearfix">
              <BC.GridRow spacing="small" spacingTop="small">
                <BC.GridColumn gridUnits={10}>
                  <BC.Text>{this.props.children}</BC.Text>
                </BC.GridColumn>

                <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                  <BC.Icon iconType="chevron-right" textColor="base" />
                </BC.GridColumn>
              </BC.GridRow>
            </div>
          </BC.Link>
        {!this.props.hideBottomBorder ? <BC.Divider /> : null}
      </div>
    );
  }
}

MobileLink.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  url: PropTypes.node,
  hasTopBorder: PropTypes.bool,
  hideBottomBorder: PropTypes.bool
}

export default MobileLink;