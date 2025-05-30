import React from 'react';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import AccountDetailsLayout from './AccountDetailsLayout';

class Preferences extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      notificationsUpdated: false,
      notifications: true,
      privacy: true
    }
  }

  updateNotifications() {
    this.setState({
      notificationsUpdated: true
    });

    setTimeout(()=>{
      this.setState({
        notificationsUpdated: false
      });      
    }, 7000)
  }

  render() {
    return (
      <BC.GridRow spacingTop="micro" spacing="large">
        <BC.Box hasBorder={true} paddingSize="medium" spacing="medium">
          <BC.GridRow>
            <BC.Heading inline={true} headingLevel={2} spacing="base" textColor="base">Notifications</BC.Heading>
            <BC.LetterSpace />
            <BC.ToggleSwitch checked={this.state.notifications} labelOn="on" labelOff="off" onChange={(event)=>{
              this.setState({
                notifications: event.target.checked
              })
            }} />
            <BC.Divider spacing="small"/>      
            <BC.Paragraph textColor="secondary">Update your name, email address, and password</BC.Paragraph>
          </BC.GridRow>

          <BC.Box backgroundColor="secondary" paddingSize="small" spacing="base">
            <BC.Paragraph spacing="none" textColor="secondary">
              Note: Even if you choose not to receive some marketing emails from us, you will still receive our 
              transactional emails, such as messages related to your orders, updates about products or services 
              you have purchased from us, or information about your account. <BC.Link>Learn More</BC.Link>                
            </BC.Paragraph>
          </BC.Box>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="Credit Alert" />      

            <BC.Paragraph textColor="secondary">     
              Get a note saying your monthly credit(s) are available (and what better news than that, right?)
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="Editors' Picks & Customer Favorites" />      

            <BC.Paragraph textColor="secondary">     
              Stay in touch with editor updates on new and upcoming releases and member reviews in your favorite category.
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="Sales & Offers" />      

            <BC.Paragraph textColor="secondary">     
              Be the first to know about sales and special offers.
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="User Research Study Announcements" />      

            <BC.Paragraph textColor="secondary">     
              We will send occasional emails letting you know about Audible user research studies you can participate in and earn money.
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="Audible News & Announcements" />      

            <BC.Paragraph textColor="secondary">     
              We will send occasional emails letting you know about site improvements or changes.
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="Rate & Review" />      

            <BC.Paragraph textColor="secondary">     
              What you thought of your most recent purchase? Most members find reviews really helpful in deciding what to listen to next.
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="Hear & Now: New Releases Newsletter" />      

            <BC.Paragraph textColor="secondary">     
              We will keep you updated with the best new books each week.
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="OneBook" />      

            <BC.Paragraph textColor="secondary">     
              Receive audiobook recommendations from your friends.
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="Author, Narrator, & Series Alerts" />      

            <BC.Paragraph textColor="secondary">     
              Personalized emails with recommendations based on your past purchases.
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.notifications ? true : false} label="Daily Deal" />      

            <BC.Paragraph textColor="secondary">     
              One great book on sale every day at a super-low price.
            </BC.Paragraph>
          </BC.GridRow>
        </BC.Box>

        <BC.Box hasBorder={true} paddingSize="medium" spacing="medium">
          <BC.Heading headingLevel={2} spacing="base" textColor="base">Other Contact Options</BC.Heading>
          <BC.Divider spacing="small"/>      

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked="true" label="Send me offers through mail." />      
          </BC.GridRow>

          <BC.GridRow>
            <BC.Checkbox spacing="micro" checked="true" label="Send me offers through phone." />      
          </BC.GridRow>
        </BC.Box>


        <BC.Box hasBorder={true} paddingSize="medium" spacing="medium">
          <BC.GridRow>
            <BC.Heading inline={true} headingLevel={2} spacing="base" textColor="base">Privacy Preferences</BC.Heading>
            <BC.LetterSpace />
            <BC.ToggleSwitch checked={true} labelOn="on" labelOff="off" />
            <BC.Divider spacing="small"/>      
            <BC.Paragraph textColor="secondary">Update your name, email address, and password</BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.privacy} label="Display my location to other Audible members" />      
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.privacy} label="Share my ratings with other Audible members" />      

            <BC.Paragraph textColor="secondary">     
              This will allow other users to see each book that you have rated in your library
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.privacy} label="Display my listening stats to other Audible members" />      

            <BC.Paragraph textColor="secondary">     
              Join date, membership plan, number of books
            </BC.Paragraph>
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.privacy} label="Let me show up in suggestion to other Audible members" />      
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.privacy} label="Hide adult content in searches" />      
          </BC.GridRow> 

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.privacy} label="Share my likes on Audible.com" />      
          </BC.GridRow>                

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.privacy} label="Get notified of reviews posted by people you follow" />      
          </BC.GridRow>

          <BC.GridRow spacing="base">
            <BC.Checkbox spacing="micro" checked={this.state.privacy} label="Software verification" />      
          </BC.GridRow>
        </BC.Box>

        <BC.Button inline={true} buttonType="primary" onClick={this.updateNotifications.bind(this)}>Update</BC.Button>

        {this.state.notificationsUpdated &&
          <BC.ToastAlert onClose={()=>{
            this.setState({
              notificationsUpdated: false
            })
          }}>Your preferences have been updated</BC.ToastAlert>
        }
      </BC.GridRow>
    )
  }
}

export default Preferences;
