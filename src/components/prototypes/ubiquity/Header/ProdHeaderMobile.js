import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import CC from '../cc';
import classNames from 'classnames';

class ProdHeaderMobile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        activeElement: null
      }
  }

  toggleElement(element) {
    if (this.state.activeElement === element) {
      this.setState({
        activeElement: null
      });
    }
    else {
      this.setState({
        activeElement: element
      });
    }

    if (element === "menu"  && this.state.activeElement != "menu") {
      document.body.classList.add('bc-nav-mobile-open');
    }
    else {
      document.body.classList.remove('bc-nav-mobile-open');
    }
  }


  renderHeader() {
        if (this.props.member) {
          return (
            <div>

            <BC.Link cssClass="bc-nav-mobile-cta" onClick={this.toggleElement.bind(this, "credits")} textColor={this.state.activeElement === "credits" ? "active" : "base"}>
              <div className={classNames(["bc-nav-mobile-balance", this.state.activeElement === "credits" ? "active" : null])}>1</div>
            </BC.Link>

            <BC.Link cssClass="bc-nav-mobile-cta" onClick={this.toggleElement.bind(this, "search")}>
              <BC.Icon iconType="search" iconSize="medium" textColor={this.state.activeElement === "search" ? "active" : "base"} />
            </BC.Link>
            </div>
          )
        }else {
          return (
            <div>

            <BC.Link cssClass="bc-nav-mobile-cta" onClick={this.toggleElement.bind(this, "search")}>
              <BC.Icon iconType="search" iconSize="medium" textColor={this.state.activeElement === "search" ? "active" : "base"} />
            </BC.Link>
            </div>
          )
        }
      }

      renderSearch() {
            if (this.props.member) {
              return (
                <div>
                  <BC.Divider spacing="mini" />

                  <div className="bc-container">

                    <BC.FixedGridRow spacing="small" fixedColumn="right" fixedColumnWidth={40}>
                      <BC.FixedGridColumn fixedColumn="right" side="left" columnPadding="10px">
                        <BC.Search value="Search" />
                      </BC.FixedGridColumn>

                      <BC.FixedGridColumn textAlign="right" fixedColumn="right" side="right" fixedColumnWidth={40}>
                        <BC.Link onClick={this.toggleElement.bind(this, null)}>
                          <BC.Icon iconType="close" />
                        </BC.Link>
                      </BC.FixedGridColumn>
                    </BC.FixedGridRow>
                  </div>

                </div>
              )
            }else {
              return (
                <div>
                <BC.Divider spacing="mini" />

                  <div className="bc-container">
                    <BC.FixedGridRow spacing="small" fixedColumn="right" fixedColumnWidth={40}>
                      <BC.FixedGridColumn fixedColumn="right" side="left" columnPadding="10px">
                        <BC.Text>Choose any audiobook from over 180,000 <br />
                        titles... yours to keep with a free trial.</BC.Text>
                      </BC.FixedGridColumn>

                      <BC.FixedGridColumn textAlign="right" fixedColumn="right" side="right" fixedColumnWidth={40}>
                        <BC.Link onClick={this.toggleElement.bind(this, null)}>
                          <BC.Icon iconType="close" />
                        </BC.Link>
                      </BC.FixedGridColumn>
                    </BC.FixedGridRow>

                    <BC.FixedGridRow spacing="small">
                      <BC.Search value="Search" />
                    </BC.FixedGridRow>
                  </div>
                </div>
              )
            }
          }

  renderNav() {
        if (this.props.member) {
          return (
            <div>
            <BC.Section backgroundColor="base" cssClass="bc-nav-mobile-menu">
              <BC.Box paddingSize="small">
                <BC.GridRow spacing="micro" textSize="large" textColor="tertiary">Lisa</BC.GridRow>
                <BC.GridRow spacing="micro" textSize="base" textColor="tertiary">Coupon balance: <BC.Text textBold={true}> $50.00</BC.Text></BC.GridRow>
                <BC.GridRow textSize="base" textColor="tertiary">Credit: <BC.Text textBold={true}> 1</BC.Text></BC.GridRow>
                <BC.GridRow textSize="small" textColor="tertiary">Next credit available: Oct 03, 2015</BC.GridRow>

                <BC.Link>Get More Credits Now</BC.Link>

              </BC.Box>
              <BC.Divider spacing="micro" />

              <BC.Box paddingSize="small">
                <BC.List listType="nostyle">
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" >Wish List</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="small">
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">My Pre Orders</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                </BC.List>

                <BC.Heading spacing="mini" headingLevel={2} textCapitalize={true} textSize="small" textColor="tertiary">Browse</BC.Heading>
                <BC.Divider spacing="micro" />

                <BC.List listType="nostyle">
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix" app={true} url={"/prototypes/brickcity-mobile"}>
                      <BC.GridRow spacing="mini" spacingTop="mini">Home</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Best Sellers</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>

                    <CC.DropdownNavMobile anchor={true} hideNavs="Categories" showNavs="Categories">
                      <BC.GridRow>
                        <BC.GridColumn gridUnits={11} position="last">
                          <BC.List listType="nostyle">
                            <BC.ListItem>
                              <BC.Link cssClass="bc-clearfix">
                                <BC.GridRow spacing="mini" spacingTop="mini">Mysteries & Thrillers</BC.GridRow>
                              </BC.Link>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Link cssClass="bc-clearfix">
                                <BC.GridRow spacing="mini" spacingTop="mini">Scrience Fiction & Fantasy</BC.GridRow>
                              </BC.Link>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Link cssClass="bc-clearfix">
                                <BC.GridRow spacing="mini" spacingTop="mini">History</BC.GridRow>
                              </BC.Link>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Link cssClass="bc-clearfix">
                                <BC.GridRow spacing="mini" spacingTop="mini">Fiction</BC.GridRow>
                              </BC.Link>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Link cssClass="bc-clearfix">
                                <BC.GridRow spacing="mini" spacingTop="mini">Comedy</BC.GridRow>
                              </BC.Link>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Link cssClass="bc-clearfix">
                                <BC.GridRow spacing="mini" spacingTop="mini">Business</BC.GridRow>
                              </BC.Link>
                            </BC.ListItem>
                            <BC.ListItem>
                              <BC.Link cssClass="bc-clearfix">
                                <BC.GridRow spacing="mini" spacingTop="mini">View All Categories</BC.GridRow>
                              </BC.Link>
                            </BC.ListItem>
                          </BC.List>
                        </BC.GridColumn>
                      </BC.GridRow>
                    </CC.DropdownNavMobile>

                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">New Releases</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Coming Soon</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="small">
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">The Great Courses</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                </BC.List>

                <BC.Heading spacing="mini" headingLevel={2} textCapitalize={true} textSize="small" textColor="tertiary">Listen to Audiobooks</BC.Heading>
                <BC.Divider spacing="micro" />
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="small">
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">How To Listen</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                </BC.List>

                <BC.Heading spacing="mini" headingLevel={2} textCapitalize={true} textSize="small" textColor="tertiary">Promotions and Gifts</BC.Heading>
                <BC.Divider spacing="micro" />
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="small">
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Enter a Promo Code</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                </BC.List>

                <BC.Heading spacing="mini" headingLevel={2} textCapitalize={true} textSize="small" textColor="tertiary">More</BC.Heading>
                <BC.Divider spacing="micro" />
                <BC.List listType="nostyle">
                <BC.ListItem>
                  <BC.Link cssClass="bc-clearfix">
                    <BC.GridRow spacing="mini" spacingTop="mini">My Account</BC.GridRow>
                  </BC.Link>
                </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Contact Us</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix" app={true} url={"/prototypes/brickcity-mobile/help-center"}>
                      <BC.GridRow spacing="mini" spacingTop="mini">Help</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Send Us Suggestions</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="small">
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Sign Out</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                </BC.List>

                <BC.Divider />

                <BC.Link cssClass="bc-clearfix">
                  <BC.FixedGridRow spacing="mini" spacingTop="mini" fixedColumn="left" fixedColumnWidth={46}>
                    <BC.FixedGridColumn fixedColumn="left" side="left" fixedColumnWidth={46}>
                      <BC.Image block={true} imageHeight="46px" imageWidth="46px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/app_icon._V288474374_.jpg" />
                    </BC.FixedGridColumn>

                    <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="10px">
                      <BC.GridRow>
                        <BC.Text textSize="small">Listen on your device</BC.Text>
                      </BC.GridRow>
                      <BC.GridRow>
                        <BC.Text textSize="small">Get the free Audible App</BC.Text>
                      </BC.GridRow>
                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>
                </BC.Link>

                <BC.Divider />
              </BC.Box>
            </BC.Section>
            </div>
          )
        }

        else {
          return (
            <div>
            <BC.Section backgroundColor="base" cssClass="bc-nav-mobile-menu">

              <BC.Box paddingSize="small">
                <BC.Button spacing="small" buttonType="primary">Sign in</BC.Button>

                <BC.Heading spacing="mini" headingLevel={2} textCapitalize={true} textSize="small" textColor="tertiary">Browse</BC.Heading>
                <BC.Divider spacing="micro" />
                <BC.List listType="nostyle">
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix" app={true} url={"/prototypes/brickcity-mobile"}>
                      <BC.GridRow spacing="mini" spacingTop="mini">Home</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Best Sellers</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>

                  <CC.DropdownNavMobile anchor={true} hideNavs="Categories" showNavs="Categories">
                    <BC.GridRow>
                      <BC.GridColumn gridUnits={11} position="last">
                        <BC.List listType="nostyle">
                          <BC.ListItem>
                            <BC.Link cssClass="bc-clearfix">
                              <BC.GridRow spacing="mini" spacingTop="mini">Mysteries & Thrillers</BC.GridRow>
                            </BC.Link>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Link cssClass="bc-clearfix">
                              <BC.GridRow spacing="mini" spacingTop="mini">Scrience Fiction & Fantasy</BC.GridRow>
                            </BC.Link>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Link cssClass="bc-clearfix">
                              <BC.GridRow spacing="mini" spacingTop="mini">History</BC.GridRow>
                            </BC.Link>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Link cssClass="bc-clearfix">
                              <BC.GridRow spacing="mini" spacingTop="mini">Fiction</BC.GridRow>
                            </BC.Link>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Link cssClass="bc-clearfix">
                              <BC.GridRow spacing="mini" spacingTop="mini">Comedy</BC.GridRow>
                            </BC.Link>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Link cssClass="bc-clearfix">
                              <BC.GridRow spacing="mini" spacingTop="mini">Business</BC.GridRow>
                            </BC.Link>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Link cssClass="bc-clearfix">
                              <BC.GridRow spacing="mini" spacingTop="mini">View All Categories</BC.GridRow>
                            </BC.Link>
                          </BC.ListItem>
                        </BC.List>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </CC.DropdownNavMobile>

                  </BC.ListItem>

                  <BC.ListItem spacing="small">
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">The Best of Audible</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                </BC.List>

                <BC.Heading spacing="mini" headingLevel={2} textCapitalize={true} textSize="small" textColor="tertiary">Listen to Audiobooks</BC.Heading>
                <BC.Divider spacing="micro" />
                <BC.List listType="nostyle">
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Why Audiobooks?</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Learn About Membership</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">How To Listen</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="small">
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Why Audible?</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                </BC.List>

                <BC.Heading spacing="mini" headingLevel={2} textCapitalize={true} textSize="small" textColor="tertiary">Promotions and Gifts</BC.Heading>
                <BC.Divider spacing="micro" />
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="small">
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Enter a Promo Code</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                </BC.List>

                <BC.Heading spacing="mini" headingLevel={2} textCapitalize={true} textSize="small" textColor="tertiary">More</BC.Heading>
                <BC.Divider spacing="micro" />
                <BC.List listType="nostyle">
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Contact Us</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem>
                    <BC.Link cssClass="bc-clearfix" app={true} url={"/prototypes/brickcity-mobile/help-center"}>
                      <BC.GridRow spacing="mini" spacingTop="mini">Help</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                  <BC.ListItem spacing="small">
                    <BC.Link cssClass="bc-clearfix">
                      <BC.GridRow spacing="mini" spacingTop="mini">Send Us Suggestions</BC.GridRow>
                    </BC.Link>
                  </BC.ListItem>
                </BC.List>

                <BC.Divider />

                <BC.Link cssClass="bc-clearfix">
                  <BC.FixedGridRow spacing="mini" spacingTop="mini" fixedColumn="left" fixedColumnWidth={46}>
                    <BC.FixedGridColumn fixedColumn="left" side="left" fixedColumnWidth={46}>
                      <BC.Image block={true} imageHeight="46px" imageWidth="46px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/app_icon._V288474374_.jpg" />
                    </BC.FixedGridColumn>

                    <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="10px">
                      <BC.GridRow>
                        <BC.Text textSize="small">Listen on your device</BC.Text>
                      </BC.GridRow>
                      <BC.GridRow>
                        <BC.Text textSize="small">Get the free Audible App</BC.Text>
                      </BC.GridRow>
                    </BC.FixedGridColumn>
                  </BC.FixedGridRow>
                </BC.Link>

                <BC.Divider />
              </BC.Box>
            </BC.Section>
            </div>
          )
        }
  }

  render() {
    let navClasses = ['bc-nav-mobile'];
    if(this.state.activeElement === "menu") navClasses.push('bc-nav-mobile-menu-active');

    return (
      <span className="bc-theme-dark">
        <BC.Section cssClass={classNames(navClasses)} backgroundColor="base" textColor="base">
          <header>
            <div className="bc-container">
              <BC.GridRow heightCss="50px">
                  <BC.GridColumn gridUnits={5}>
                    <BC.Link cssClass="bc-nav-mobile-cta" onClick={this.toggleElement.bind(this, "menu")}>
                      <BC.Icon iconType="hamburger" iconSize="medium" textColor={this.state.activeElement === "menu" ? "active" : "base"} />
                    </BC.Link>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={2} textAlign="center">
                    <BC.Link cssClass={classNames(["bc-nav-mobile-logo", "bc-nav-mobile-cta"])} app={true} url={"/prototypes/brickcity-mobile"}>
                      <BC.Image verticalAlign="middle" imageHeight="30px" source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar.svg" />
                    </BC.Link>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={5} textAlign="right" position="last">
                    {this.renderHeader()}
                  </BC.GridColumn>
              </BC.GridRow>
            </div>

            <div className={this.state.activeElement === "search" ? "bc-active" : "bc-hidden"}>
                  {this.renderSearch()}
            </div>

            <div className={this.state.activeElement === "credits" ? "bc-active" : "bc-hidden"}>
              <BC.Divider spacing="mini" />

              <div className="bc-container">
                <BC.FixedGridRow spacing="mini" fixedColumn="right" fixedColumnWidth={40}>
                  <BC.FixedGridColumn fixedColumn="right" side="left" columnPadding="10px">
                    <BC.GridRow textSize="base" spacing="micro">
                      <BC.Text>Coupon balance: <BC.Text textBold={true}> $50.00</BC.Text></BC.Text>
                    </BC.GridRow>

                    <BC.GridRow textSize="base">
                      <BC.Text>Credit: <BC.Text textBold={true}> 1</BC.Text></BC.Text>
                    </BC.GridRow>

                    <BC.GridRow textColor="tertiary" textSize="small">
                      <BC.Text>Next credit available: Oct 03, 2015</BC.Text>
                    </BC.GridRow>

                    <BC.GridRow textSize="small">
                      <BC.Link>Get More Credits Now</BC.Link>
                    </BC.GridRow>
                  </BC.FixedGridColumn>

                  <BC.FixedGridColumn textAlign="right" fixedColumn="right" side="right" fixedColumnWidth={40}>
                    <BC.Link onClick={this.toggleElement.bind(this, null)}>
                      <BC.Icon iconType="close" />
                    </BC.Link>
                  </BC.FixedGridColumn>
                </BC.FixedGridRow>

              </div>
            </div>
            {this.renderNav()}
          </header>
        </BC.Section>

        {this.state.activeElement === "menu"
          ? [<div style={{backgroundColor: "rgba(0,0,0,0.8)", position: "fixed", left: 0, right: 0, bottom: 0, top: 0, zIndex: "9998"}} onClick={this.toggleElement.bind(this, null)}></div>]
          : null
        }

        {this.state.activeElement === "search"
        ? [<div style={{ position: "fixed", left: 0, right: 0, bottom: 0, top: 0, zIndex: "9998"}} onClick={this.toggleElement.bind(this, null)}></div>]
          : null
        }

        {this.state.activeElement === "credits"
        ? [<div style={{ position: "fixed", left: 0, right: 0, bottom: 0, top: 0, zIndex: "9998"}} onClick={this.toggleElement.bind(this, null)}></div>]
          : null
        }
        <div className="bc-nav-mobile-spacer"></div>
      </span>
    )
  }
}

ProdHeaderMobile.PropTypes = {
  member: PropTypes.bool,

}
export default ProdHeaderMobile;
