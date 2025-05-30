import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import CC from '../cc';
import GridViewLibrary from './GridViewLibrary';
import ListViewLibrary from './ListViewLibrary';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';
import wishlistData from '../../../../data/prototypes/wishlist.json';

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

class BulkManager extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      activeBook: 0,
      currentView: 'grid',
      bulkSelectedItems: [],
      data: this.props.ownershipState === 'owned' ? productData.slice(0,8) : wishlistData.slice(0,8),
      actionBarFixed: false,
      actionBarWidth: null,
      showSearchClear: false,
      activeAlert: false,
      filter: this.props.filter
    };
  }

  componentDidMount() {
    this.debounce = debounce(function(e){
      let currentSearch = e.target.value;
      let newData = productData;
      
      let filteredData = newData.filter(function(value){
        return (value.title.indexOf(currentSearch) > -1);
      });

      this.setState({
        data: currentSearch ? filteredData : productData
      });
    }, 500);

    // this.setState({
    //   filter: this.props.location.query.filter,
    // });

    console.log('bulk mounted');
    if (this.props.filter == "1") {
      this.setState({
        data: this.props.ownershipState === 'owned' ? productData.slice(0,3) : wishlistData.slice(0,3),
      });
    } else if (this.props.filter == "2") {
      this.setState({
        data: this.props.ownershipState === 'owned' ? productData.slice(4,7) : wishlistData.slice(4,7),
      });
    } else {
      this.setState({
        data: this.props.ownershipState === 'owned' ? productData.slice(0,8) : wishlistData.slice(0,8),
      });
    }

    this.setState({
      actionBarWidth: this.refs.actionBarContainer.offsetWidth,
    });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    console.log(this.state.filter == this.props.filter, 'filter state');

    if (this.state.filter != this.props.filter) {
      if (this.props.filter == "1") {
        this.setState({
          data: this.props.ownershipState === 'owned' ? productData.slice(0,3) : wishlistData.slice(0,3),
        });
      } else if (this.props.filter == "2") {
        this.setState({
          data: this.props.ownershipState === 'owned' ? productData.slice(4,7) : wishlistData.slice(4,7),
        });
      } else {
        this.setState({
          data: this.props.ownershipState === 'owned' ? productData.slice(0,8) : wishlistData.slice(0,8),
        });
      }
      this.setState({
        filter: this.props.filter
      });
    } else {
      return false;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  loadMore() {
    this.setState({
      data: this.props.ownershipState === 'owned' ? productData : wishlistData
    });
  }

  onChangeSearchFilter(e) {
    e.persist();
    this.debounce(e);

    this.setState({
      showSearchClear: e.target.value.length > 0 ? true : false
    });
  }

  onClickSearchClear() {
    this.refs.searchFilter.value = null;

    this.setState({
      data: productData,
      showSearchClear: false,
    });
  }

  setActiveBook(index) {
    this.setState({
      activeBook: index
    })
  }

  toggleView(viewType) {
    this.setState({
      currentView: viewType
    })
  }

  toggleBulkSelectAll(e) {
    let isChecked = e.target.checked;

    let bulkSelectArray = [];

    for (var i=0; i <this.state.data.length; i++) {
      bulkSelectArray.push(i);
    }

    this.setState({
      bulkSelectedItems: !isChecked ? [] : bulkSelectArray
    });
  }

  toggleBulkSelectItem(index, e) {
    let newBulkGroup = this.state.bulkSelectedItems;

    if (e.target.checked) {
      newBulkGroup.push(index);

      this.setState({
        bulkSelectedItems: newBulkGroup
      });
    } else {
      newBulkGroup.splice(newBulkGroup.indexOf(index), 1);

      this.setState({
        bulkSelectedItems: newBulkGroup
      })
    }
  }

  handleScroll() {
    if (this.refs.actionBarContainer.getBoundingClientRect().top < 0) {
      this.refs.actionBar.style.position === 'fixed' ? null : this.refs.actionBar.style.position = 'fixed';
      // this.state.actionBarFixed ? false : this.setState({ actionBarFixed: true });
    } else {
      this.refs.actionBar.style.position === 'absolute' ? null : this.refs.actionBar.style.position = 'absolute';
      // !this.state.actionBarFixed ? false : this.setState({ actionBarFixed: false });     
    }
  }

  triggerToast(alert) {
    this.setState({
      alertActive: alert
    });

    setTimeout(()=> {
        this.setState({
          alertActive: false
        })
      }, 8000, this)
  }

  render() {
    return (
      <div>
        <BC.Heading spacing="base">
          <BC.Text>{this.props.title}</BC.Text>
          <BC.LetterSpace />
          <BC.Text textColor="tertiary" textSize="base">({this.state.data.length})</BC.Text>
        </BC.Heading>

        <BC.GridRow spacing="small">
          <BC.GridColumn gridUnits={3}>
            <div className="bc-pub-relative bc-pub-inline-block">
              <span style={{
                marginTop: '-11px',
                position: 'absolute',
                top: '50%',
                left: 0
              }}>
                <BC.Icon iconType="search" />
              </span>

              <input
                onChange={this.onChangeSearchFilter.bind(this)}
                ref="searchFilter"
                placeholder={
                  this.props.ownershipState === "unowned" 
                    ? "Search Wishlist" 
                    : (this.props.ownershipState === "preordered" ? "Search Pre-orders" : "Search Library")
                }
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  height: '36px',
                  outline: 'none',
                  padding: '0 20px'
                }} />

                {this.state.showSearchClear &&
                  <span style={{
                    marginTop: '-11px',
                    position: 'absolute',
                    top: '50%',
                    right: 0
                  }}>
                    <BC.Icon iconType="close" onClick={this.onClickSearchClear.bind(this)} />
                  </span>
                }
            </div>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={6} textAlign="right" position="last">
            <BC.Dropdown inline={true}>
              <BC.DropdownOption>Most Recent</BC.DropdownOption>
              <BC.DropdownOption>Title</BC.DropdownOption>
              <BC.DropdownOption>Author</BC.DropdownOption>
              <BC.DropdownOption>Narrator</BC.DropdownOption>
              <BC.DropdownOption>Length</BC.DropdownOption>
              <BC.DropdownOption>Overall Rating</BC.DropdownOption>
              <BC.DropdownOption>My Rating</BC.DropdownOption>
              <BC.DropdownOption>Downloaded</BC.DropdownOption>
            </BC.Dropdown>
            <BC.LetterSpace />

            <BC.PopoverTrigger tooltip="Grid View" tooltipSide="top">
              <BC.Link textColor={this.state.currentView === 'grid' ? 'active' : 'base'} onClick={this.toggleView.bind(this, 'grid')}>
                <BC.Icon heightPx={24} iconType="grid"/>
              </BC.Link>
            </BC.PopoverTrigger>   
            <BC.LetterSpace />

            <BC.PopoverTrigger tooltip="List View" tooltipSide="top">
              <BC.Link textColor={this.state.currentView === 'list' ? 'active' : 'base'} onClick={this.toggleView.bind(this, 'list')}>
                <BC.Icon heightPx={24} iconType="list"/>
              </BC.Link>
            </BC.PopoverTrigger>   
          </BC.GridColumn>
        </BC.GridRow>

          <div 
            ref="actionBarContainer"
            className="bc-pub-relative">
            <div style={{height: '53px'}}></div>
            <div
              ref="actionBar" 
              style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                position: 'absolute',
                top: 0,
                width: this.state.actionBarWidth,
                zIndex: 4
              }}>
              <BC.GridRow padding="small" paddingTop="small" backgroundColor="secondary" textColor="base">
                {this.state.bulkSelectedItems.length === 0 &&
                  <BC.GridColumn gridUnits={2}>
                    <BC.LetterSpace size="base" />
                    <BC.Checkbox checked={this.state.bulkSelectedItems.length > 0} onChange={this.toggleBulkSelectAll.bind(this)} label={ this.state.currentView === 'grid' ? 'Select All' : null } />
                  </BC.GridColumn>
                }

                {this.state.bulkSelectedItems.length > 0 &&
                  <span>
                    <BC.LetterSpace size="base" />
                    <BC.Checkbox checked={this.state.bulkSelectedItems.length > 0} onChange={this.toggleBulkSelectAll.bind(this)} label={ this.state.currentView === 'grid' ? 'Select All' : null } />
                    <BC.LetterSpace size="large" />
                  </span>
                }

                { (this.state.bulkSelectedItems.length === 0 && this.state.currentView === 'list') &&
                  <span>
                    <BC.GridColumn gridUnits={4}>
                      <BC.Text>Title</BC.Text>
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={2}>
                      <BC.Text>Author</BC.Text>
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={2}>
                      <BC.Text>Narrator</BC.Text>
                    </BC.GridColumn>


                    <BC.GridColumn gridUnits={1}>
                      <BC.Text>
                        {this.props.ownershipState === 'owned' && 'Duration' }
                        {this.props.ownershipState === 'preordered' && 'Release' }
                        {this.props.ownershipState === 'unowned' && 'Price' }
                      </BC.Text>
                    </BC.GridColumn>
                  </span>
                }

                { this.state.bulkSelectedItems.length > 0 &&
                  <span className={this.state.bulkSelectedItems.length > 0 ? null : 'bc-disabled'}>
                    {this.props.ownershipState === 'owned' &&
                      <span>
                        <BC.TextButton iconType="check" onClick={this.triggerToast.bind(this, 1)} label="Mark as Finished" />
                        <BC.LetterSpace size="large" />
                      </span>
                    }

                    {this.props.ownershipState === 'preordered' &&
                      <span>
                        <BC.TextButton iconType="close" onClick={this.triggerToast.bind(this, 4)} label="Cancel Pre-order" />
                        <BC.LetterSpace size="large" />
                      </span>
                    }

                    {this.props.ownershipState === 'unowned' &&
                      <span>
                        <BC.TextButton iconType="trash" onClick={this.triggerToast.bind(this, 2)} label="Remove" />
                        <BC.LetterSpace size="large" />

                        <BC.TextButton iconType="cart" onClick={this.triggerToast.bind(this, 3)} label="Add to Cart" />

                        <BC.LetterSpace size="large" />
                      </span>
                    }
                  </span>
                }
              </BC.GridRow>
            </div>
          </div>

        {this.state.currentView === 'grid' &&
          <BC.GridRow spacingTop="small">
            <GridViewLibrary
              ownershipState={this.props.ownershipState}
              onChangeBulkSelector={this.toggleBulkSelectItem.bind(this)}
              onClickTrayClose={this.setActiveBook.bind(this, null)}
              onClickQuickview={this.setActiveBook.bind(this)}
              activeBook={this.state.activeBook}
              bulkSelectedItems={this.state.bulkSelectedItems}
              products={this.state.data} />
          </BC.GridRow>
        }

        {this.state.currentView === 'list' &&
          <ListViewLibrary
            ownershipState={this.props.ownershipState} 
            onChangeBulkSelector={this.toggleBulkSelectItem.bind(this)}
            onClickTrayClose={this.setActiveBook.bind(this, null)}
            onClickQuickview={this.setActiveBook.bind(this)}
            activeBook={this.state.activeBook}
            bulkSelectedItems={this.state.bulkSelectedItems}
            products={this.state.data} />
        }

        <CC.InfiniteScroll onClick={this.loadMore.bind(this)} />

        { this.state.alertActive === 1 &&
          <CC.ToastAlert
            actionText="Undo"
            message="X items marked as finished" />
        }
        { this.state.alertActive === 2 &&
          <CC.ToastAlert
            actionText="Undo"
            message="X items removed from wishlist" />
        }
        { this.state.alertActive === 3 &&
          <CC.ToastAlert
            actionText="Undo"
            message="X items added to the cart" />
        }
        { this.state.alertActive === 4 &&
          <CC.ToastAlert
            actionText="Undo"
            message="X pre-orders have been cancelled" />
        }
      </div>
    )
  }
}

BulkManager.PropTypes = {
  title: PropTypes.string,
  filter: PropTypes.number,
  ownershipState: PropTypes.string,
}

BulkManager.defaultProps = {
    ownershipState: 'unowned'
}

BulkManager.contextTypes= {
    location: React.PropTypes.object,
};

export default BulkManager;
