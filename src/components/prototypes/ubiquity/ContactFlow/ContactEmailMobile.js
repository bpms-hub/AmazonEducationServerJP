import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';
import classNames from 'classnames';

class ContactEmailMobile extends React.Component {
  render() {
    return (
        <div>
        <ProdHeaderMobile />

        <div className="bc-container">
          <BC.Heading headingLevel={2} spacing="small" spacingTop="medium">Email a Question</BC.Heading>
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
          <BC.GridRow>
            <BC.Text textBold={true}>To:</BC.Text>
          </BC.GridRow>
          <BC.GridRow spacing="small">
            <BC.Text>Audible Customer Service</BC.Text>
          </BC.GridRow>
          <BC.GridRow>
            <BC.Text textBold={true}>Email Address:</BC.Text>
          </BC.GridRow>
          <BC.GridRow spacing="small">
            <BC.Text>rutledm+goldmember@amazon.com</BC.Text>
          </BC.GridRow>
          <BC.GridRow spacing="micro">
            <BC.Text textBold={true}>Subject</BC.Text>
          </BC.GridRow>
          <BC.GridRow spacing="small">
            <BC.TextInput />
          </BC.GridRow>
          <BC.GridRow spacing="micro">
            <BC.Text textBold={true}>How can we help you?</BC.Text>
          </BC.GridRow>
          <BC.GridRow spacing="base">
            <BC.TextArea heightCss="150px" />
          </BC.GridRow>

          <BC.GridRow spacing="base">
          <BC.Link textSize="small">Attach File</BC.Link>
          </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.GridColumn gridUnits={12}>
                <BC.Button buttonType="primary">Send Email</BC.Button>
              </BC.GridColumn>
            </BC.GridRow>

            <BC.GridRow spacing="large" textAlign="center">
              <BC.Link textSize="small" textColor="secondary"><BC.Pipe/>Clear All</BC.Link>
            </BC.GridRow>
        </div>

        <ProdFooterMobile/>
        </div>
        )
    }
  }
export default ContactEmailMobile;
