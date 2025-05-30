import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import Tray from './Tray';
import BulkSelect from './BulkSelect';
import LibraryTrayViews from './LibraryTrayViews';
import WishlistTrayViews from './WishlistTrayViews';
import PreorderTrayViews from './PreorderTrayViews';
import Listing from './Listing';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ListViewLibrary extends React.Component {
  onChangeBulkSelector(index, event) {
    this.props.onChangeBulkSelector(index, event);
  }

  onClickQuickview(index) {
    this.props.onClickQuickview(index)
  }

  render() {
    let productList = this.props.products;

    return (
      <BC.Section spacing="base">
        { productList.length === 0 &&
          <BC.GridRow heightCss="150px" spacing="double-large" spacingTop="double-large" textAlign="center">
            <BC.Heading textSize="large" headingLevel={2} spacing="mini">No results found</BC.Heading>
            <BC.Paragraph textSize="medium">Try adjusting your search or filter to find what you&#39;re looking for.</BC.Paragraph>
          </BC.GridRow>
        }

        { productList.map(function(product, index) {
          return (
            <BC.GridRow key={index}>
              <ReactCSSTransitionGroup component="div" transitionName="fadeIn" transitionEnterTimeout={500} transitionLeave={false}>
                {this.props.activeBook != index ?
                  <Listing
                    ownershipState={this.props.ownershipState}
                    onChangeBulkSelector={this.onChangeBulkSelector.bind(this, index)}
                    isSelected={this.props.bulkSelectedItems.indexOf(index) > -1 ? true : false}
                    onClickQuickview={this.onClickQuickview.bind(this, index)}
                    product={product} />
                  : null
                }
              </ReactCSSTransitionGroup>

              <ReactCSSTransitionGroup component="div" transitionName="slideDown" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
                {this.props.activeBook === index ?
                  <div key="tray">
                    { this.props.ownershipState === 'owned' &&
                      <Tray trayHeight={480} onClickTrayClose={this.props.onClickTrayClose}>
                        <LibraryTrayViews showAsin={true} product={product} />
                      </Tray>
                    }
                    { this.props.ownershipState === 'preordered' &&
                      <Tray trayHeight={480} onClickTrayClose={this.props.onClickTrayClose}>
                        <PreorderTrayViews showAsin={true} product={product} />
                      </Tray>
                    }
                    { this.props.ownershipState === 'unowned' &&
                      <Tray trayHeight={430} onClickTrayClose={this.props.onClickTrayClose}>
                        <WishlistTrayViews showAsin={true} product={product} />
                      </Tray>
                    }
                  </div>
                  : null
                }
              </ReactCSSTransitionGroup>
            </BC.GridRow>
          )
        }, this)}
      </BC.Section>
    );
  }
}

ListViewLibrary.PropTypes = {
  products: PropTypes.array,
  activeBook: PropTypes.number,
  bulkSelectedItems: PropTypes.array,
  onChangeBulkSelector: PropTypes.function,
  onClickQuickview: PropTypes.function,
  onClickTrayClose: PropTypes.function,
  ownershipState: PropTypes.string
}

ListViewLibrary.defaultProps = {
  products: []
}

export default ListViewLibrary;
