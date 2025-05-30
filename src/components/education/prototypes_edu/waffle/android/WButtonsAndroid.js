import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';

class WButtonsAndroid extends React.Component{

  render() {
    return (
<div className="">
  <BC.Section spacing="none" spacingTop="none">
    <BC.GridRow spacing="mini">
      <BC.Text textSize="large" textColor="base">Buttons</BC.Text>
    </BC.GridRow>
    <BC.GridRow spacing="large">
      <BC.Text textSize="base" textColor="base">
        A button clearly communicates what action will occur when the user touches it. It consists of text, an image, or both. The Tap target is the entire button. There are four main button styles used in Amazon English.
      </BC.Text>
    </BC.GridRow>

    <BC.GridRow spacing="none">
      <BC.List listType="nostyle">
      
        <BC.ListItem spacing="mini">
          <BC.Link textColor="edu_link" app={false} url="#primary-button">Primary Button</BC.Link>
        </BC.ListItem>
        {/*
        <BC.ListItem spacing="mini">
          <BC.Link textColor="edu_link" app={false} url="#">Secondary Button (TBD)</BC.Link>
        </BC.ListItem>
        */}
        <BC.ListItem spacing="mini">
          <BC.Link textColor="edu_link"  linkType="nav"  app={false} url="#small-button">Small Button</BC.Link>
        </BC.ListItem>
        <BC.ListItem spacing="none">
          <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#text-button">Text Button</BC.Link>
        </BC.ListItem>
      </BC.List>
    </BC.GridRow>

    <div id="overview" />
    <br />
    <br />
    <br />
    <BC.Box background="#fff" hasBorder={false} paddingSize="none">
      <div id="overview" />
      <br />
      <br />
      <br />
      <BC.Box background="#fff" hasBorder={false} paddingSize="none">
        <BC.GridRow>
          <BC.GridRow spacing="medium">
            <BC.GridColumn gridUnits={4}>
              <BC.GridRow spacing="mini" spacingTop="micro">
                <BC.Text textColor="base" textBold={true}>Primary Button</BC.Text>
              </BC.GridRow>
              <BC.GridRow>
                <BC.Text>
                  This is a primary button to invoke an action. It should be the main call to action on the screen.
                </BC.Text>
              </BC.GridRow>
            </BC.GridColumn>

              <BC.GridColumn gridUnits={8} position="last">

                <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_01._V286595274_.jpg"></BC.Image>

              </BC.GridColumn>
            </BC.GridRow>
            {/*
            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="mini" spacingTop="micro">
                  <BC.Text  textColor="base" textBold={true}>Secondary Button [TBD]</BC.Text>
                </BC.GridRow>
                <BC.GridRow>
                  <BC.Text>
                    This button is secondary in hierarchy to the primary button. As of December 2015 Amazon English has no secondary buttons.
                  </BC.Text>
                </BC.GridRow>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={8} position="last">

                <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_02._V286595274_.jpg"></BC.Image>

                <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_02._V286595274_.jpg"></BC.Image>

              </BC.GridColumn>
            </BC.GridRow>
            */}
            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="mini" spacingTop="micro">
                  <BC.Text  textColor="base" textBold={true}>Text Button</BC.Text>
                </BC.GridRow>
                <BC.GridRow>
                  <BC.Text>
                    These buttons consist of text only. They are used on transactional dialogues.
                  </BC.Text>
                </BC.GridRow>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={8} position="last">
                <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_04._V286595274_.jpg"></BC.Image>
              </BC.GridColumn>
            </BC.GridRow>

            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="mini" spacingTop="micro">
                  <BC.Text  textColor="base" textBold={true}>Small Button</BC.Text>
                </BC.GridRow>
                <BC.GridRow>
                  <BC.Text>
                    This button is much smaller and is used in situations where the action doesn’t need to command hierarchy on the screen.
                  </BC.Text>
                </BC.GridRow>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={8} position="last">
                <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_03._V286595274_.jpg"></BC.Image>
              </BC.GridColumn>
            </BC.GridRow>

          </BC.GridRow>

          <BC.GridRow>
            <BC.GridColumn gridUnits={8}></BC.GridColumn>
          </BC.GridRow>

          <div id="primary-button" />
          <br />
          <br />
          <br />
          <BC.GridRow spacing="base">
            <BC.Text textColor="edu_primary" textSize="medium" textBold={true}>Primary Button -</BC.Text>
            <BC.Text textColor="base" textSize="medium" textBold={false}> <i>Dual Language ( <i>3 states</i>
                )</i>
            </BC.Text>
          </BC.GridRow>

          <BC.GridRow spacing="mini">
            <BC.Text  textColor="base" textBold={true}>Overview</BC.Text>
          </BC.GridRow>
          <BC.GridRow spacing="medium">
            <BC.Text textBold={false}>
              This is a primary button to invoke an action The main call to action on a page, the Primary Button may be displayed alone or in conjunction with other (non-primary) buttons.
            </BC.Text>
          </BC.GridRow>

          <BC.GridRow spacing="medium">
            <BC.GridColumn gridUnits={4}>
              <BC.GridRow spacing="base">
                <BC.Text  textColor="base" textBold={true}>Design</BC.Text>
              </BC.GridRow>
              <BC.List listType="unordered" spacing="medium">
                <BC.ListItem spacing="micro">
                  Appears to the right of any secondary button(s) or above if space will not allow.
                </BC.ListItem>
                <BC.ListItem spacing="micro">Button labels are actions, often starting with a verb.</BC.ListItem>
                <BC.ListItem spacing="micro">
                  A Primary Button with Icon can be used for a particularly important call to action.
                </BC.ListItem>
              </BC.List>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={4}>
              <BC.GridRow spacing="small">

                <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_01._V300739957_.jpg" />

              </BC.GridRow>

              <BC.Text textColor="tertiary" textSize="base">Sign-in is the main call to action when the app launches.</BC.Text>

            </BC.GridColumn>

            <BC.GridColumn gridUnits={4} position="last">

              <BC.GridRow spacing="small">

                <BC.Image  source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_02._V300739957_.jpg" />

              </BC.GridRow>

              <BC.Text textColor="tertiary" textSize="base">
                A primary button with icon has even more priority. This is appropriate for Listen & Read as the main purpose of the app.
              </BC.Text>

            </BC.GridColumn>
          </BC.GridRow>

          <BC.GridRow spacing="medium">

            <BC.GridColumn gridUnits={4}>
              <BC.GridRow spacing="base">
                <BC.Text  textColor="#333333" textBold={true}></BC.Text>
              </BC.GridRow>

            </BC.GridColumn>

            <BC.GridRow>
              <BC.GridColumn gridUnits={4} gridPush={4} spacing="base">
                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.Image source="  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/do._V301935058_.jpg"></BC.Image>
                </BC.GridRow>
                <BC.Text textColor="tertiary" textSize="base">
                  Use action-oriented button text that clearly communicates its associated action and completes the sentence, “As a user, I want to ____.”
                </BC.Text>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4}>
                <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_03._V299213393_.jpg" />
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_03_02._V299213393_.jpg" />
              </BC.GridColumn>

              <BC.GridRow>
                <BC.GridColumn gridUnits={4} gridPush={4} spacing="base">
                  <BC.GridRow spacing="mini" spacingTop="mini">
                    <BC.Image source="  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/do._V301935058_.jpg"></BC.Image>
                  </BC.GridRow>
                  <BC.Text textColor="tertiary" textSize="base">
                    Use action-oriented button text that clearly communicates its associated action and completes the sentence, “As a user, I want to ____.”
                  </BC.Text>
                </BC.GridColumn>

                <BC.GridColumn gridUnits={4} position="last">
                  <BC.GridRow spacing="mini" spacingTop="mini">
                    <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/dont._V301935058_.jpg"></BC.Image>
                  </BC.GridRow>
                  <BC.Text textColor="tertiary" textSize="base">
                    Do not use two primary buttons on the same screen. Pick the most important or most common action for the primary button.
                  </BC.Text>
                </BC.GridColumn>
              </BC.GridRow>

            </BC.GridRow>
            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="base">
                  <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
                </BC.GridRow>

              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} >
                <BC.GridRow spacing="mini">
                  <BC.Image  source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_01._V299216823_.jpg" />
                </BC.GridRow>

                <BC.GridRow spacing="mini">
                  <BC.Text textColor="secondary" textSize="base" textBold={true} >Button states</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">

                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Pressed state: 65% #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Disabled state: 40% #f7991c</BC.ListItem>
                  </BC.List>
                </BC.GridRow>

              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.GridRow spacing="mini">
                  <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_02._V299216823_.jpg" />
                </BC.GridRow>

                <BC.GridRow spacing="mini">

                  <BC.Text textColor="secondary" textSize="base" textBold={true}>Specs</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">English Text: 14sp Roboto Medium, #ffffff</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #ffffff</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Button Height: 48dp</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Button text left and right minimum padding: 16dp</BC.ListItem>
                  </BC.List>

                </BC.GridRow>
              </BC.GridColumn>
            </BC.GridRow>
            {/*
            <BC.Divider  spacing="large"/>

            <div id="secondary-button" />
            <BC.GridRow spacing="base">
              <BC.Text textColor="primary" textSize="medium" textBold={true}>Secondary Button:</BC.Text>
              <BC.Text textColor="base" textSize="medium" textBold={false}>Dual Language (3 states)</BC.Text>
            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.Text textBold={true}>Overview</BC.Text>
            </BC.GridRow>
            <BC.GridRow spacing="medium">
              <BC.Text textBold={false}>
                Secondary buttons only appear as companions to a Primary Button and provide an alternate course of action.
              </BC.Text>
            </BC.GridRow>

            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="base">
                  <BC.Text textBold={true}>Design</BC.Text>
                </BC.GridRow>
                <BC.List listType="unordered" spacing="medium">
                  <BC.ListItem spacing="micro">
                    It’s possible to have multiple Secondary Buttons, but use them cautiously.
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    If numerous options are needed, buttons may not be the right element.
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={8} position="last">
                <BC.Box background="#f8f6f3" hasBorder={false} paddingSize="large" heightCss="490" spacing="micro"></BC.Box>
                <BC.Text textColor="tertiary" textSize="mini">
                  Do not use two primary buttons as they compete against one another. Pick the most important or most common action
                </BC.Text>
              </BC.GridColumn>

            </BC.GridRow>

            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="base">
                  <BC.Text textBold={true}>Design Specs</BC.Text>
                </BC.GridRow>
                <BC.List listType="unordered" spacing="medium">
                  <BC.ListItem spacing="micro">Lorem Ipsum</BC.ListItem>
                  <BC.ListItem spacing="micro">Lorem Ipsum</BC.ListItem>
                </BC.List>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4}>

                <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_sec_01._V286931567_.jpg"/>
                <BC.GridRow spacing="mini">
                  <BC.Text textColor="secondary" textSize="small" hasBold={true} >Button states</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Hover state: 100% #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Pressed state: 65% #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Disabled state: 40% #999999</BC.ListItem>
                  </BC.List>
                </BC.GridRow>

              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_sec_02._V286931567_.jpg"/>

                <BC.GridRow spacing="mini">

                  <BC.Text textColor="secondary" textSize="small" hasBold={true} >Specs</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">English Text: 14sp Roboto Medium, #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Translation Text: 12sp Noto Sans Regular, #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Border: #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Background: #ffffff</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Button Height: 48dp</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Button text left and right minimum padding: 16dp</BC.ListItem>

                  </BC.List>

                </BC.GridRow>
              </BC.GridColumn>
            </BC.GridRow>

            <BC.Divider  spacing="large"/>
            */}
            <div id="text-button" />
            <br />
            <br />
            <br />
            <BC.GridRow spacing="base">
              <BC.Text textColor="edu_primary" textSize="medium" textBold={true}>Text Button</BC.Text>
              <BC.Text textColor="base" textSize="medium" textBold={false}>
                - Dual Language (
                <i>borderless</i>
                )
              </BC.Text>
            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.Text  textColor="base" textBold={true}>Overview</BC.Text>
            </BC.GridRow>
            <BC.GridRow spacing="medium">
              <BC.Text textBold={false}>
                Text buttons are lightweight, consisting of text only. They are more subtle and have less prominence than the other button styles.
              </BC.Text>
            </BC.GridRow>

            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="base">
                  <BC.Text textColor="base" textBold={true}>Screen Samples</BC.Text>
                </BC.GridRow>
                <BC.List listType="unordered" spacing="medium">
                  <BC.ListItem spacing="micro">
                    Used on transactional dialogues. These are lightweight buttons
               that consist of text only.
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    May be useful for infrequently used
              actions, or when another button style
              would be too prominent.
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="mini">
                  <BC.Image source="       http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_06._V300739957_.jpg"/>
                </BC.GridRow>

                <BC.GridRow spacing="mini">
                  <BC.Text textColor="tertiary" textSize="base">Text buttons in a sign out dialogue.</BC.Text>
                </BC.GridRow>

              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.GridRow spacing="mini">
                  <BC.Image source="      http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_07._V300739957_.jpg"/>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.Text textColor="tertiary" textSize="base">
                    Undo text button: undoing a deletion is important when needed, but is unlikely to be used frequently.
                  </BC.Text>
                </BC.GridRow>

              </BC.GridColumn>
            </BC.GridRow>

            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="base">
                  <BC.Text textColor="base" textBold={true}>Design Specs</BC.Text>
                </BC.GridRow>

              </BC.GridColumn>

              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="mini">
                  <BC.Image source="      http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_05._V286595274_.jpg"/>
                </BC.GridRow>

                <BC.GridRow spacing="mini">
                  <BC.Text textColor="secondary" textSize="base" textBold={true} >Button states</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">

                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">2. Pressed(bg): 65% #dddddd</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">3. Disabled text(bg): 40% #dddddd</BC.ListItem>
                  </BC.List>
                </BC.GridRow>

              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.GridRow spacing="mini">
                  <BC.Image source="        http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_06._V286595274_.jpg"/>
                </BC.GridRow>
                <BC.GridRow spacing="mini">

                  <BC.Text textColor="secondary" textSize="base" textBold={true}>Specs</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">English Text: 14sp Roboto Medium, #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Text Button Height: 48dp</BC.ListItem>
                  </BC.List>

                </BC.GridRow>
              </BC.GridColumn>
            </BC.GridRow>

            <div id="small-button" />
            <br />
            <br />
            <br />
            <BC.GridRow spacing="base">
              <BC.Text textColor="base" textSize="medium" textBold={true}>Small Button</BC.Text>
              <BC.Text textColor="base" textSize="medium" textBold={false}>
                -
                <i>Single Language</i>
              </BC.Text>
            </BC.GridRow>

            <BC.GridRow spacing="mini">
              <BC.Text  textColor="base" textBold={true}>Overview</BC.Text>
            </BC.GridRow>
            <BC.GridRow spacing="medium">
              <BC.Text textBold={false}>
                Small buttons are used when space is limited, and when the action(s) associated don’t need to be given visual priority on the screen.
              </BC.Text>
            </BC.GridRow>

            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="base">
                  <BC.Text  textColor="base" textBold={true}>Design</BC.Text>
                </BC.GridRow>
                <BC.List listType="unordered" spacing="medium">
                  <BC.ListItem spacing="micro">Single language due to space constraints</BC.ListItem>
                  <BC.ListItem spacing="micro">
                    Don’t place it too close to other controls - the touch target is taller than the height of the button itself.
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4}>
                <BC.GridRow>
                  <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_04._V300739957_.jpg" />
                </BC.GridRow>
                <BC.GridRow spacing="mini" spacingTop="mini">
                  <BC.Image source="  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/do._V301935058_.jpg"></BC.Image>
                </BC.GridRow>
                <BC.Text textColor="tertiary" textSize="base">
                  Use small buttons for actions that might not be the sole or most important function on a  page.
                </BC.Text>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.GridRow>
                  <BC.Image source="     http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_05._V300739957_.jpg" />
                </BC.GridRow>
                <BC.GridRow>
                  <BC.GridRow spacing="mini" spacingTop="mini">
                    <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/dont._V301935058_.jpg"></BC.Image>
                  </BC.GridRow>
                  <BC.Text textColor="tertiary" textSize="base">
                    Small button would not be appropriate for Listen and Read as it’s the main function of the app. Multiple small buttons create a confusing hierarchy.
                  </BC.Text>
                </BC.GridRow>

              </BC.GridColumn>

            </BC.GridRow>

            <BC.GridRow spacing="medium">
              <BC.GridColumn gridUnits={4}>
                <BC.GridRow spacing="base">
                  <BC.Text  textColor="base" textBold={true}>Design Specs</BC.Text>
                </BC.GridRow>

              </BC.GridColumn>
              <BC.GridColumn gridUnits={4}>

                <BC.GridRow spacing="small">

                  <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_03._V286595274_.jpg" />

                </BC.GridRow>

                <BC.GridRow spacing="mini">
                  <BC.Text textColor="secondary" textSize="base" textBold={true} >Button states for Small Button</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Hover state: 100%, border #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Pressed state: 100%, bg #f7991c</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Disabled state: 40%, border #999999</BC.ListItem>

                  </BC.List>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.Text textColor="secondary" textSize="base" textBold={true} >Button states for Hanshi</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Hover state: 100%, border #cbc3b5</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Pressed state: 100%, bg #cbc3b5</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Disabled state: 40%, border #cbc3b5</BC.ListItem>

                  </BC.List>
                </BC.GridRow>

              </BC.GridColumn>

              <BC.GridColumn gridUnits={4} position="last">
                <BC.GridRow spacing="small">
                  <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_04._V286595274_.jpg" />
                </BC.GridRow>

                <BC.GridRow spacing="mini">

                  <BC.Text textColor="secondary" textSize="base" textBold={true} >Specs for Small Button</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">English Text: 14sp Roboto Medium, #ffffff</BC.ListItem>
                    {/*
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #ffffff</BC.ListItem>
                    */}
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Background: #ffffff</BC.ListItem>
                  </BC.List>

                </BC.GridRow>

                <BC.GridRow spacing="mini">
                  <BC.Text textColor="secondary" textSize="base" textBold={true} >Specs for Hashi</BC.Text>
                </BC.GridRow>
                <BC.GridRow spacing="mini">
                  <BC.List listType="nostyle">
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">English Text: 14sp Roboto Medium, #ffffff</BC.ListItem>
                    {/*
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #fffff</BC.ListItem>
                    */}
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Background: #f2eee8</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Minimum Button Height: 28dp</BC.ListItem>
                    <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Tabable Area: 48dp</BC.ListItem>
                  </BC.List>
                </BC.GridRow>

              </BC.GridColumn>
            </BC.GridRow>

          </BC.GridRow>
        </BC.Box>
        </BC.Box>
      </BC.Section>
    </div>
    )
  }
}
export default WButtonsAndroid;
