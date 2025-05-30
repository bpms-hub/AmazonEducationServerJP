import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class AccountSettings extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          <BC.GridRow spacingTop="large">
              <BC.GridColumn gridUnits={12}>
<BC.Heading headingLevel={2} spacing="large">Change Name, Email Address, or Password</BC.Heading>

  <BC.GridRow>
    <BC.GridColumn gridUnits={9}>
      <BC.List listType="horizontal">
        <BC.ListItem>
      <BC.Heading headingLevel="4" spacing="none" textColor="secondary">
        Name:
      </BC.Heading>
    </BC.ListItem>
        <BC.ListItem>
      <BC.Paragraph spacing="base" textColor="tertiary">
        John Doe
      </BC.Paragraph>
    </BC.ListItem>
    </BC.List>

    </BC.GridColumn>
    <BC.GridColumn gridUnits={2} position="last" spacingTop="base" textAlign="right">
      <BC.Link>Edit</BC.Link>

    </BC.GridColumn>
  </BC.GridRow>

  <BC.Divider />


    <BC.GridRow>
      <BC.GridColumn gridUnits={9}>
        <BC.List listType="horizontal">
          <BC.ListItem>
        <BC.Heading headingLevel="4" spacing="none" textColor="secondary">
          Email:
        </BC.Heading>
      </BC.ListItem>
          <BC.ListItem>
        <BC.Paragraph spacing="base" textColor="tertiary">
          johndough@audible.com
        </BC.Paragraph>
      </BC.ListItem>
      </BC.List>

      </BC.GridColumn>
      <BC.GridColumn gridUnits={2} position="last" spacingTop="base" textAlign="right">
        <BC.Link>Edit</BC.Link>

      </BC.GridColumn>
    </BC.GridRow>

    <BC.Divider />

      <BC.GridRow>
        <BC.GridColumn gridUnits={9}>
          <BC.List listType="horizontal">
            <BC.ListItem>
          <BC.Heading headingLevel="4" spacing="none" textColor="secondary">
            Password:
          </BC.Heading>
        </BC.ListItem>
            <BC.ListItem>
          <BC.Paragraph spacing="base" textColor="tertiary">
            ***********
          </BC.Paragraph>
        </BC.ListItem>
        </BC.List>

        </BC.GridColumn>
        <BC.GridColumn gridUnits={2} position="last" spacingTop="base" textAlign="right">
          <BC.Link>Edit</BC.Link>

        </BC.GridColumn>


      </BC.GridRow>


      <BC.Divider />


        <BC.GridRow>
  <BC.GridColumn gridUnits={4} spacingTop="base" >
          <BC.Button buttonType="primary" inline={true}  url={"/prototypes/brickcity/account-details"}>Back To Account Details</BC.Button>

                      </BC.GridColumn>
            <BC.GridColumn gridUnits={2} gridPull={0} position="last" spacingTop="base" textAlign="right">
          <BC.Button buttonType="primary">Done</BC.Button>

            </BC.GridColumn>

        </BC.GridRow>


              </BC.GridColumn>
          </BC.GridRow>


        </div>
</div>
      )
    }
  }
  export default AccountSettings;
