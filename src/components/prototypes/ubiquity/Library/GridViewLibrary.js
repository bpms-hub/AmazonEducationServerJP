import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import Tray from './Tray';
import BulkSelect from './BulkSelect';
import LibraryTrayViews from './LibraryTrayViews';
import WishlistTrayViews from './WishlistTrayViews';
import PreorderTrayViews from './PreorderTrayViews';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class GridViewLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAsinHovered: null
    }
  }

  onChangeBulkSelector(index, event) {
    this.props.onChangeBulkSelector(index, event);
  }

  onClickQuickview(index) {
    this.props.onClickQuickview(index)
  }

  render() {
    let productList = this.props.products;

    return (
      <BC.GridRow spacing="base">
        { productList.length === 0 &&
          <BC.GridRow heightCss="150px" spacing="double-large" spacingTop="double-large" textAlign="center">
            <BC.Heading textSize="large" headingLevel={2} spacing="mini">No results found</BC.Heading>
            <BC.Paragraph textSize="medium">Try adjusting your search or filter to find what you&#39;re looking for.</BC.Paragraph>
          </BC.GridRow>
        }

        { productList.map(function(product, index, productArray) {
          return (
            <span key={index}>
              <BC.GridColumn gridUnits={3} key={product.asin} spacing="base" position={(index + 1) % 4 === 0 ? 'last' : null}>
                <div
                  onMouseEnter={() => this.setState({currentAsinHovered: index})}
                  onMouseLeave={() => this.setState({currentAsinHovered: null})}
                  className="bc-pub-relative"
                  style={{
                    opacity: this.state.currentAsinHovered !== index && this.props.activeBook !== null && this.props.activeBook  !== index && this.props.bulkSelectedItems.indexOf(index) === -1 ? null : null,
                    top: this.props.activeBook === index ? '78px' : 0,
                    WebkitTransition: 'top 250ms ease-in-out'
                  }}>
                  <BulkSelect
                    activeBook={this.props.activeBook === index}
                    onChangeBulkSelector={this.onChangeBulkSelector.bind(this, index)}
                    isSelected={this.props.bulkSelectedItems.indexOf(index) > -1 ? true : false}>
                    <CC.Asin
                      url={"/prototypes/brickcity/pdp/" + product.asin}
                      onClickQuickview={this.onClickQuickview.bind(this, index)}
                      product={product}
                      ownershipState={this.props.ownershipState}
                      hasHoverMask={this.props.bulkSelectedItems.indexOf(index) > -1 ? false : true}
                      disabled={this.props.bulkSelectedItems.indexOf(index) > -1 ? true : false}
                      meterProgress={product.complete ? 100 : product.listening_progress}
                      hasCard={this.props.activeBook === index ? false : true} />
                  </BulkSelect>
                </div>
              </BC.GridColumn>

              <ReactCSSTransitionGroup transitionName="slideDown" transitionEnterTimeout={850} transitionLeaveTimeout={850}>
                { this.props.activeBook !== null && ((Math.ceil((this.props.activeBook + 1) / 4) * 4) === index + 1) ?
                  <BC.GridColumn gridUnits={12} position="last" key="tray">
                    { this.props.ownershipState === 'owned' &&
                      <Tray trayHeight={480} onClickTrayClose={this.props.onClickTrayClose}>
                        <LibraryTrayViews product={productArray[this.props.activeBook]} />
                      </Tray>
                    }
                    { this.props.ownershipState === 'preordered' &&
                      <Tray trayHeight={480} onClickTrayClose={this.props.onClickTrayClose}>
                        <PreorderTrayViews product={productArray[this.props.activeBook]} />
                      </Tray>
                    }
                    { this.props.ownershipState === 'unowned' &&
                      <Tray trayHeight={430} onClickTrayClose={this.props.onClickTrayClose}>
                        <WishlistTrayViews product={productArray[this.props.activeBook]} />
                      </Tray>
                    }
                  </BC.GridColumn>
                  : null
                }
              </ReactCSSTransitionGroup>
            </span>
          )}, this)
        }
      </BC.GridRow>
    );
  }

}



GridViewLibrary.PropTypes = {
  products: PropTypes.array,
  activeBook: PropTypes.number,
  bulkSelectedItems: PropTypes.array,
  onChangeBulkSelector: PropTypes.function,
  onClickQuickview: PropTypes.function,
  onClickTrayClose: PropTypes.function,
  ownershipState: PropTypes.string
}

GridViewLibrary.defaultProps = {
  products: []
}

export default GridViewLibrary;
