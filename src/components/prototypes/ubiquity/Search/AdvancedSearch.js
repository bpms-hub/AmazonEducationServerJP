  import React from 'react';
  import BC from 'AudibleUITags';
  import CC from '../cc';
  import ProdHeader from '../Header/ProdHeader';
  import ProdFooter from '../Footer/ProdFooter';

  class AdvancedSearch extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>

        <div className="bc-container">

            <BC.GridRow spacing="medium" spacingTop="medium" textAlign="left">
            <BC.Heading>Advanced Search Options</BC.Heading>

          </BC.GridRow>

          <BC.Form>
            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={4}>
                <BC.TextInput placeholder="Keyword" spacing="mini" />
                <BC.TextInput placeholder="Title" spacing="mini" />
                <BC.TextInput placeholder="Author" spacing="mini" />
                <BC.TextInput placeholder="Narrator or Host" spacing="mini" />
                <BC.Dropdown inline={false} spacing="mini">

                      <BC.DropdownOption>Provider/Publisher</BC.DropdownOption>
                  </BC.Dropdown>
                  <BC.Dropdown inline={false} spacing="mini">

                        <BC.DropdownOption>All Categories</BC.DropdownOption>
                          <BC.DropdownOption>Arts & Entertainment</BC.DropdownOption>
                          <BC.DropdownOption>Bios & Memoirs</BC.DropdownOption>
                          <BC.DropdownOption>Business</BC.DropdownOption>
                          <BC.DropdownOption>Classics</BC.DropdownOption>
                          <BC.DropdownOption>Comedy</BC.DropdownOption>
                          <BC.DropdownOption>Drama & Poetry</BC.DropdownOption>
                          <BC.DropdownOption>Erotica & Sexuality</BC.DropdownOption>
                          <BC.DropdownOption>Fiction</BC.DropdownOption>
                          <BC.DropdownOption>Health & Fitness</BC.DropdownOption>
                    </BC.Dropdown>
                    <BC.Dropdown inline={false} spacing="mini">

                          <BC.DropdownOption>Any Length</BC.DropdownOption>
                      </BC.Dropdown>
                      <BC.Dropdown inline={false} spacing="mini">

                            <BC.DropdownOption>All Ratings</BC.DropdownOption>
                        </BC.Dropdown>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4}>
                <BC.Dropdown inline={false} spacing="mini">
                  <BC.DropdownOption>All Release Dates</BC.DropdownOption>

                </BC.Dropdown>

                <BC.Dropdown inline={false} spacing="mini">
                  <BC.DropdownOption>All Program Types</BC.DropdownOption>
                </BC.Dropdown>

                <BC.Dropdown inline={false} spacing="mini">
                  <BC.DropdownOption>Narrated in English</BC.DropdownOption>
                </BC.Dropdown>


                <BC.Dropdown inline={false} spacing="base">
                  <BC.DropdownOption>Abridged / Unabridged</BC.DropdownOption>
                </BC.Dropdown>

                <BC.GridRow spacing="base">
                    <BC.Checkbox /><BC.LetterSpace/><BC.Link>Whispersync for Voice</BC.Link>
                    </BC.GridRow>
                    <BC.GridRow spacing="medium">
                        <BC.Checkbox /><BC.LetterSpace/><BC.Text>Unlimited Title</BC.Text>
                        </BC.GridRow>
                    <BC.GridRow spacing="base">
                   <BC.Checkbox /><BC.Checkbox /><BC.Checkbox /><BC.Checkbox /><BC.LetterSpace/><BC.Text>Audio Formats<BC.LetterSpace size="base"/></BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="large" spacingTop="base">
                    <BC.Checkbox /><BC.LetterSpace/><BC.Text>Pre-orders</BC.Text>

                    </BC.GridRow>

                <BC.GridRow>
                  <BC.GridColumn gridUnits={3} gridPush={4} spacingTop="mini">
                    <BC.Heading headingLevel={3} textColor="tertiary">Clear all</BC.Heading>
                  </BC.GridColumn>
                  <BC.GridColumn gridUnits={3} gridPull={2} position="last">
                    <BC.Button buttonType="primary" inline={true} app={true} url={"/prototypes/brickcity/search"}>Search</BC.Button>
                  </BC.GridColumn>
                </BC.GridRow>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Form>
        </div>

        <ProdFooter/>
      </div>
    )
  }
  }
  export default AdvancedSearch;
