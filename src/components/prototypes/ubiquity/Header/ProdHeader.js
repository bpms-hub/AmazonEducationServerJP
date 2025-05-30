import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';

class ProdHeader extends React.Component {
  render() {
    let conf = this.props.config || {color:{primary:"base",secondary:"secondary",pipe:null,link:null,icon:null},style:{container:{background:"none"}},flyer:"bc-library-element-39",logo:"https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo._V314169480_.svg",menu:{top:{user:"Hi John",credits:"0 Credits Available",balance:"Coupon Balance: $5.00",contact:"Contact Us 24/7"},main:{library:"Library",whishlist:"Wish List",browse:"Browse",lp:"Listener Page"}}};
        return (
      <div style={conf.style.container}>
        <header>
          <div className="bc-container" >

            <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={140} spacing="small">

              <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={140} side="left">
                <BC.GridRow spacingTop="medium">
                  <BC.Link app={true} url={"/prototypes/brickcity"}>
                    <BC.Image imageWidth="140px" source={conf.logo} />
                  </BC.Link>
                </BC.GridRow>
              </BC.FixedGridColumn>

              <BC.FixedGridColumn columnPadding="30px" fixedColumn="left" side="right">

                <BC.GridRow cssClass="bc-pub-relative" spacing="base" spacingTop="micro" textAlign="right" textColor={conf.color.secondary} textSize="small">
                  <BC.PopoverTrigger flyout={<div> <BC.GridRow textAlign="left" spacing="mini" > <BC.Link textColor="base">Membership status</BC.Link> <BC.Divider spacingTop="mini" /> </BC.GridRow> <BC.GridRow textAlign="left" spacing="mini" > <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/account-details"}>Account Details</BC.Link> <BC.Divider spacingTop="mini" /> </BC.GridRow> <BC.GridRow textAlign="left" spacing="mini" > <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/how-to-listen"}>How to Listen</BC.Link> <BC.Divider spacingTop="mini" /> </BC.GridRow> <BC.GridRow textAlign="left" spacing="mini" > <BC.Link textColor="base">Help</BC.Link> <BC.Divider spacingTop="mini" /> </BC.GridRow> <BC.GridRow textAlign="left" spacing="mini" > <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/gift-center"}>Gift Center</BC.Link> <BC.Divider spacingTop="mini" /> </BC.GridRow> <BC.GridRow textAlign="left" spacing="mini" > <BC.Link textColor="base"> Video Tutorials</BC.Link> <BC.Divider spacingTop="mini" /> </BC.GridRow> <BC.GridRow textAlign="left" > <BC.Link textColor="base">Not John? </BC.Link><BC.Link textColor="base">Sign Out</BC.Link> </BC.GridRow> </div>} flyoutWidth="170px">
                    <BC.Link textColor="base" >{conf.menu.top.user}</BC.Link>
                    <BC.Icon heightPx={5} iconType="chevron-down" verticalAlign="middle"/>
                  </BC.PopoverTrigger>
                  <BC.LetterSpace />
                  <BC.Divider type="vertical" />
                  <BC.LetterSpace />
                  <BC.Text>{conf.menu.top.credits}</BC.Text>
                  <BC.LetterSpace />
                  <BC.Divider type="vertical" />
                  <BC.LetterSpace />
                  <BC.Text>{conf.menu.top.balance}</BC.Text>
                  <BC.LetterSpace />
                  <BC.Divider type="vertical" />
                  <BC.LetterSpace />
                  <BC.Text>
                    <BC.Link app={true} url={"/prototypes/brickcity/contact"}>{conf.menu.top.contact}</BC.Link>
                  </BC.Text>
                  <BC.LetterSpace />
                  <BC.Divider type="vertical" />
                  <BC.LetterSpace />
                  <BC.Link textColor="base" app={true} url={"/prototypes/brickcity/cart-step1"}>
                    <BC.Icon iconType="cart"/>
                  </BC.Link>
                </BC.GridRow>

                <BC.FixedGridRow fixedColumn="right" fixedColumnWidth={235}>
                  <BC.FixedGridColumn columnPadding="20px" fixedColumn="right" side="left">
                    <BC.List spacingTop="mini" listDirection="horizontal" listType="menu">
                      <BC.ListItem>
                        <BC.PopoverTrigger flyout={<div> <BC.GridRow textAlign="left" spacing="mini" > <BC.Link textColor="base" app={true} url={"/prototypes/brickcity/library"}>My Books</BC.Link>
                          <BC.Divider spacingTop="mini" /> </BC.GridRow> <BC.GridRow textAlign="left" ><BC.Link textColor="base" app={true} url={"/prototypes/brickcity/preorders"}>My Pre Orders</BC.Link></BC.GridRow> </div>} flyoutWidth="170px">
                          <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/library"}>{conf.menu.main.library}</BC.Link>
                          <BC.Icon heightPx={5} iconColor={conf.color.icon} iconType="chevron-down" verticalAlign="middle"/>
                        </BC.PopoverTrigger>
                      </BC.ListItem>
                      <BC.ListItem>
                        <BC.Link textColor="base" url={"/prototypes/brickcity/wishlist"} app={true}>{conf.menu.main.whishlist}</BC.Link>
                      </BC.ListItem>
                      <BC.ListItem>
                        <BC.PopoverTrigger center={true} cssClass={conf.flyer} flyout={<BC.GridRow > <BC.GridColumn gridUnits={9}> <BC.GridRow> <BC.GridColumn gridUnits={6}> <BC.Text textColor="tertiary" >AudioBook Categories</BC.Text> <BC.Divider spacingTop="mini" spacing="mini" /> <BC.GridRow> <BC.GridColumn gridUnits={6}> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}> Mysteries & Thrillers </BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Sci-Fi & Fantasy</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>History</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Science & Technology</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Classics</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Bios & Memoirs</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Business</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Self Development</BC.Link> </BC.GridRow> </BC.GridColumn> <BC.GridColumn gridUnits={6} position="last"> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Romance</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Fiction</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Teens</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Kids</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Nonfiction</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Comedy</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category"}>Foreign Language</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/category-archive"}>More Categories</BC.Link> </BC.GridRow> </BC.GridColumn> </BC.GridRow> </BC.GridColumn> <BC.GridColumn gridUnits={3}> <BC.Text textColor="tertiary" >More to Explore</BC.Text> <BC.Divider spacingTop="mini" spacing="mini" /> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/best-sellers"}>Best Sellers</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link textColor="base">New At Audible</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link textColor="base">Coming Soon</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link textColor="base">The Great Courses</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link textColor="base">Customer Favorites</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link textColor="base">Audible Studios</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link textColor="base">Popular Features</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link textColor="base">Whispersync for Voice</BC.Link> </BC.GridRow> </BC.GridColumn> <BC.GridColumn gridUnits={3} position="last"> <BC.Text textColor="tertiary" >Membership & Gifts</BC.Text> <BC.Divider spacingTop="mini" spacing="mini" /> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/gift-center"}>Gift Membership</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link textColor="base">Gift A Book</BC.Link> </BC.GridRow> <BC.GridRow spacing="mini"> <BC.Link app={true} textColor="base" url={"/prototypes/brickcity/redeem-promo"}>Redeem Promo Code</BC.Link> </BC.GridRow> </BC.GridColumn> </BC.GridRow> </BC.GridColumn> <BC.GridColumn gridUnits={3} position="last"> <BC.Image hiResSource="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/banners/ADBLCRE-4537_Editor_AUG_wingman.jpg" imageHeight="" source="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/banners/ADBLCRE-4537_Editor_AUG_wingman.jpg" ></BC.Image> </BC.GridColumn> </BC.GridRow>} flyoutWidth="1020px">
                          <BC.Link textColor="base" app={true} url={"/prototypes/brickcity"}>{conf.menu.main.browse}</BC.Link>
                          <BC.Icon textColor="base" heightPx={5} iconType="chevron-down" verticalAlign="middle"/>
                        </BC.PopoverTrigger>
                      </BC.ListItem>
                      <BC.ListItem>
                        <BC.Link textColor="base">{conf.menu.main.lp}</BC.Link>
                      </BC.ListItem>
                    </BC.List>
                  </BC.FixedGridColumn>

                  <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={235} side="right" textAlign="right">
                    <BC.Search placeholder="Search"/>
                    <BC.Link textColor="secondary" textSize="mini" app={true} url={"/prototypes/brickcity/advanced-search"}>Advanced Search</BC.Link>
                  </BC.FixedGridColumn>
                </BC.FixedGridRow>
              </BC.FixedGridColumn>

            </BC.FixedGridRow>
          </div>
        </header>
      </div>
    )
  }
}

export default ProdHeader;
