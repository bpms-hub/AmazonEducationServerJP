import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';
import classNames from 'classnames';

  class ContactPhoneMobile extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        activeElement: "step1"
      }
    }

    handleClick(element) {
      this.setState({
        activeElement: element
      });
    }

  render() {
    return (
        <div>
        <ProdHeaderMobile />

          <div className="bc-container">

          <BC.Heading headingLevel={2} spacing="small" spacingTop="medium">Talk with Audible Customer Service</BC.Heading>
          <BC.Section spacing="small" >
          <BC.Divider />
              <BC.Link linkType="nav" app={true} url="/prototypes/brickcity-mobile/contact2">
                  <div className="bc-container bc-clearfix">
                    <BC.GridRow spacing="small" spacingTop="small">
                      <BC.GridColumn gridUnits={1}>
                        <BC.Icon iconType="chevron-left" textColor="base" />
                        </BC.GridColumn>
                      <BC.GridColumn gridUnits={11} position="last">
                        <BC.Text>Back</BC.Text>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </div>
                </BC.Link>
            <BC.Divider />
            </BC.Section>
          <BC.Heading headingLevel={3} spacing="base">Enter your number and we&#39;ll call you</BC.Heading>
          <BC.Section spacing="base">
            <BC.GridRow>
                <BC.Text textBold={true}>Country</BC.Text>
            </BC.GridRow>
            <BC.GridRow>
              <BC.Dropdown spacing="small">
                <BC.DropdownOption>United States</BC.DropdownOption>
                <BC.DropdownOption>Canada</BC.DropdownOption>
                <BC.DropdownOption>Guam</BC.DropdownOption>
                <BC.DropdownOption>Porto Rico</BC.DropdownOption>
                <BC.DropdownOption>Virginia Islands, U.S.</BC.DropdownOption>
                <BC.DropdownOption>Other</BC.DropdownOption>
              </BC.Dropdown>
            </BC.GridRow>
            <BC.GridRow>
                <BC.Text textBold={true}>Your number</BC.Text>
            </BC.GridRow>
            <BC.GridRow>
                <BC.TextInput />
            </BC.GridRow>
          </BC.Section>

          <BC.GridRow spacing="medium">
            <BC.GridColumn gridUnits="12">
              <BC.Button buttonType="primary" spacing="mini">Call Me Now</BC.Button>
              <BC.Button>Call Me in 5 Minutes</BC.Button>
            </BC.GridColumn>
          </BC.GridRow>
        </div>

        <ProdFooterMobile/>
        </div>
        )
    }
  }
export default ContactPhoneMobile;
