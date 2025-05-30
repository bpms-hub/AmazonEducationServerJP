import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class MobilePageTitle extends React.Component {
  render() {
    let staticClasses = ['bc-link-mobile'];

    return (
      <div>
        <BC.Link linkType="nav" app={this.props.url ? true : null} url={this.props.url ? this.props.url : null}>
          <div className="bc-clearfix">
          <BC.Box background="#F9F9F9" paddingSize="micro">
            <BC.FixedGridRow fixedColumn="left" spacing="micro" spacingTop="mini" fixedColumnWidth={0}>
              <BC.FixedGridColumn fixedColumn="left" side="left" fixedColumnWidth={0}>
                <BC.Icon iconType="chevron-left" textColor="base" verticalAlign="bottom" />
              </BC.FixedGridColumn>

              <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="0px">
                <BC.Heading textSize="large" textAlign="center" headingLevel={2}>
                  {this.props.children}
                </BC.Heading>
              </BC.FixedGridColumn>
            </BC.FixedGridRow>
            </BC.Box>
          </div>
        </BC.Link>

      {/*  <BC.Divider spacing={this.props.spacing} /> */}
      </div>
    );
  }
}

MobilePageTitle.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  url: PropTypes.node,
  first: PropTypes.bool
}

export default MobilePageTitle;
