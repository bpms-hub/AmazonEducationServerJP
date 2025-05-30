import React from 'react';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import ProdHeader from '../ubiquity/Header/ProdHeader';
import ProdFooter from '../ubiquity/Footer/ProdFooter';

class AccountDetailsLayout extends React.Component{
  constructor(props,context) {
      super(props,context);
  }

  componentDidMount(){
    console.log(this.props.location.pathname)
  }

  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
          <BC.Heading spacingTop="medium" spacing="mini">Account Details</BC.Heading>

          <BC.GridRow>
            <BC.GridColumn gridUnits={12} position="last" spacingTop="micro">
              <BC.List listDirection="horizontal" id={this.props.id} cssClass="bc-tab-set">
                <BC.ListItem spacing="micro">
                  <BC.Link
                    app={true}
                    textBold={this.props.location.pathname === '/prototypes/brickcity/account-details' || this.props.location.pathname === '/prototypes/brickcity/account-details/switch-membership'}
                    url={'/prototypes/brickcity/account-details'}
                    textColor="base">
                    <BC.Box cssClass="bc-relative" paddingSize="small">
                      Overview
                      <span
                        style={{
                          display: 'block',
                          height: '5px',
                          position: 'absolute',
                          left: '0',
                          right: '0',
                          bottom: '0'
                        }}
                        className={this.props.location.pathname === '/prototypes/brickcity/account-details' || this.props.location.pathname === '/prototypes/brickcity/account-details/switch-membership' ? 'bc-color-background-active' : null}></span>
                    </BC.Box>
                  </BC.Link>
                  <BC.LetterSpace size="micro" />
                  <BC.Text textColor="tertiary"></BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Link
                    app={true}
                    textBold={this.props.location.pathname === '/prototypes/brickcity/account-details/billing'}
                    url={'/prototypes/brickcity/account-details/billing'}
                    textColor="base">
                    <BC.Box cssClass="bc-relative" paddingSize="small">
                      Payment
                      <span
                        style={{
                          display: 'block',
                          height: '5px',
                          position: 'absolute',
                          left: '0',
                          right: '0',
                          bottom: '0'
                        }}
                        className={this.props.location.pathname === '/prototypes/brickcity/account-details/billing' ? 'bc-color-background-active' : null}></span>
                    </BC.Box>
                  </BC.Link>
                  <BC.LetterSpace size="micro" />
                  <BC.Text textColor="tertiary"></BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Link
                    app={true}
                    textBold={this.props.location.pathname === '/prototypes/brickcity/account-details/purchase-history'}
                    url={'/prototypes/brickcity/account-details/purchase-history?orderType=orders'}
                    textColor="base">
                    <BC.Box cssClass="bc-relative" paddingSize="small">
                      Purchase History
                      <span
                        style={{
                          display: 'block',
                          height: '5px',
                          position: 'absolute',
                          left: '0',
                          right: '0',
                          bottom: '0'
                        }}
                        className={this.props.location.pathname === '/prototypes/brickcity/account-details/purchase-history' ? 'bc-color-background-active' : null}></span>
                    </BC.Box>
                  </BC.Link>
                  <BC.LetterSpace size="micro" />
                  <BC.Text textColor="tertiary"></BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  <BC.Link
                    app={true}
                    textBold={this.props.location.pathname === '/prototypes/brickcity/account-details/preferences'}
                    url={'/prototypes/brickcity/account-details/preferences'}
                    textColor="base">
                    <BC.Box cssClass="bc-relative" paddingSize="small">
                      Preferences
                      <span
                        style={{
                          display: 'block',
                          height: '5px',
                          position: 'absolute',
                          left: '0',
                          right: '0',
                          bottom: '0'
                        }}
                        className={this.props.location.pathname === '/prototypes/brickcity/account-details/preferences' ? 'bc-color-background-active' : null}></span>
                    </BC.Box>
                  </BC.Link>
                  <BC.LetterSpace size="micro" />
                  <BC.Text textColor="tertiary"></BC.Text>
                </BC.ListItem>
              </BC.List>

              {this.props.children}
            </BC.GridColumn>
          </BC.GridRow>
        </div>
        <ProdFooter/>
      </div>
    )
  }
}

AccountDetailsLayout.contextTypes= {
    location: React.PropTypes.object,
};

export default AccountDetailsLayout;
