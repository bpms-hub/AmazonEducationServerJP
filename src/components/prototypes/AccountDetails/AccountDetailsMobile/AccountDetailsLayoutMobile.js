import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../ubiquity/cc';
import ProdHeaderMobile from '../../ubiquity/Header/ProdHeaderMobile';
import ProdFooterMobile from '../../ubiquity/Footer/ProdFooterMobile';


class AccountDetailsLayoutMobile extends React.Component {
  render() {
    return (
      <div>
        <ProdHeaderMobile/>

        <CC.MobilePageTitle url={"/prototypes/brickcity-mobile"} textAlign="center" first={true}>
          <BC.Text textColor="base" >Account</BC.Text>
        </CC.MobilePageTitle>

        <div className="bc-container">
          <BC.List style={{whiteSpace: 'nowrap', overflow: 'scroll'}} listDirection="horizontal" id={this.props.id}>
            <BC.ListItem spacing="micro">
              <BC.Link 
                app={true} 
                textBold={this.props.location.pathname === '/prototypes/brickcity-mobile/account-details'} 
                url={'/prototypes/brickcity-mobile/account-details'} 
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
                    className={this.props.location.pathname === '/prototypes/brickcity-mobile/account-details' ? 'bc-color-background-active' : null}></span>
                </BC.Box>
              </BC.Link>
              <BC.LetterSpace size="micro" />
              <BC.Text textColor="tertiary"></BC.Text>
            </BC.ListItem>
            <BC.ListItem spacing="micro">
              <BC.Link 
                app={true} 
                textBold={this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/billing'} 
                url={'/prototypes/brickcity-mobile/account-details/billing'} 
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
                    className={this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/billing' ? 'bc-color-background-active' : null}></span>
                </BC.Box>
              </BC.Link>
              <BC.LetterSpace size="micro" />
              <BC.Text textColor="tertiary"></BC.Text>
            </BC.ListItem>
            <BC.ListItem spacing="micro">
              <BC.Link 
                app={true} 
                textBold={this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/purchase-history'} 
                url={'/prototypes/brickcity-mobile/account-details/purchase-history'} 
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
                    className={this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/purchase-history' ? 'bc-color-background-active' : null}></span>
                </BC.Box>
              </BC.Link>
              <BC.LetterSpace size="micro" />
              <BC.Text textColor="tertiary"></BC.Text>
            </BC.ListItem>
            <BC.ListItem spacing="micro">
              <BC.Link 
                app={true} 
                textBold={this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/preferences'} 
                url={'/prototypes/brickcity-mobile/account-details/preferences'} 
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
                    className={this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/preferences' ? 'bc-color-background-active' : null}></span>
                </BC.Box>
              </BC.Link>
              <BC.LetterSpace size="micro" />
              <BC.Text textColor="tertiary"></BC.Text>
            </BC.ListItem>
          </BC.List>

          {this.props.children}
        </div>

        <ProdFooterMobile/>
      </div>
    )
  }
}
export default AccountDetailsLayoutMobile;