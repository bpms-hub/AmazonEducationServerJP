import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WDialoguesAndroid extends React.Component {
  render() {
    return (
<div className="">
  <BC.Section spacing="none" spacingTop="none">
    <BC.GridRow spacing="mini">
      <BC.Text textSize="large" textColor="base">Dialogues</BC.Text>
    </BC.GridRow>

    <BC.GridRow spacing="large">
      <BC.Text textSize="base" textColor="base">
        Dialogues contain text and UI controls focused on a specific task. They inform users about critical information and/or require users to make decisions.
      </BC.Text>
    </BC.GridRow>

    <BC.GridRow spacing="none">
      <BC.List listType="nostyle">
        <BC.ListItem spacing="mini">
          <BC.Link textColor="edu_link" linkType="nav" app={false} url="#overview">Design</BC.Link>
        </BC.ListItem>
        <BC.ListItem spacing="mini">
          <BC.Link textColor="edu_link" app={false} url="#design">Interaction / Motion</BC.Link>
        </BC.ListItem>
        <BC.ListItem spacing="none">
          <BC.Link textColor="edu_link" app={false} url="#specs">Specs</BC.Link>
        </BC.ListItem>
      </BC.List>
    </BC.GridRow>

    <BC.GridRow>

      <div id="overview" />
      <br />
      <br />
      <br />
      <BC.Box background="#fff" hasBorder={false} paddingSize="none">

        <BC.GridRow spacing="medium">
          <BC.GridColumn gridUnits={4}>
            <BC.GridRow spacing="mini" spacingTop="micro">
              <BC.Text textColor="base" textBold={true}>Design</BC.Text>
            </BC.GridRow>

            <BC.GridRow spacing="mini" spacingTop="micro">
              <BC.Paragraph>
                Use dialogues sparilngly because they are interuptive. Their sudden appearance forces users to stop their current task and focus on the dialog content.
              </BC.Paragraph>
              <BC.List listType="unordered" spacing="medium">
                <BC.ListItem spacing="micro">
                  Dialogues are often the result of a user    input, in which case the primary action    should align with the user’s intent.
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  If using a title, it should contain language    mirroring the dialogue’s primary action.
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  If presenting multiple actions, the primary    action always appears on the right.
                </BC.ListItem>
                <BC.ListItem spacing="micro">
                  A primary button is sometimes used to    add importance to the associated action    and convey excitement for significant    events.
                </BC.ListItem>
              </BC.List>
            </BC.GridRow>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={8} position="last">
            <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dialogues/android/1-4._V300269276_.jpg"></BC.Image>
          </BC.GridColumn>


        <BC.GridRow spacing="medium">
          <BC.GridColumn gridPush={4} gridUnits={4}>
            <BC.Text textColor="edu_tertiary" textSize="base">
              A dialogue may contain a single action, though this is less common.
            </BC.Text>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={4} position="last">
            <BC.Text textColor="edu_tertiary" textSize="base">
              This congratulatory dialogue informs the user of their progress and (hopefully) inspires them to increase their usage.
            </BC.Text>
          </BC.GridColumn>
        </BC.GridRow>
  </BC.GridRow>

        <BC.GridRow spacing="medium">
          <BC.GridColumn gridUnits={4} gridPush={4}>
            <BC.GridRow spacing="micro">
              <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dialogues/android/dsn_02._V299569809_.jpgg"></BC.Image>
            </BC.GridRow>
            <BC.GridRow spacing="medium">
              <BC.Text textColor="edu_tertiary" textSize="base">
                This dialogue appears when users attempt to skip the leveling tool on first use. It attempts to steer users away from an undesirable path, but the primary action is still to skip, as initiated by the user.
              </BC.Text>
            </BC.GridRow>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={4} gridPush={4}>
            <BC.GridRow spacing="micro">
              <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dialogues/android/dsn_02._V299569809_.jpgg"></BC.Image>
            </BC.GridRow>
            <BC.GridRow spacing="medium">
              <BC.Text textColor="edu_tertiary" textSize="base">
                This dialogue appears when users attempt to skip the leveling tool on first use. It attempts to steer users away from an undesirable path, but the primary action is still to skip, as initiated by the user.
              </BC.Text>
            </BC.GridRow>
          </BC.GridColumn>

<BC.GridRow>

          </BC.GridRow>
        </BC.GridRow>

        <BC.GridRow spacing="base">
          <div id="interaction" />
          <br />
          <br />
          <br />
          <BC.GridColumn gridUnits={4}>
            <BC.GridRow spacing="mini" spacingTop="micro">
              <BC.Text textColor="base" textBold={true}>Interaction / Motion</BC.Text>

            </BC.GridRow>
            <BC.GridRow spacing="mini" spacingTop="micro">

              <BC.Text>
                Dialogs can be dismissed by touching/clicking outside of a dialog or by using the system back button (Android). Alternatively, dialog behavior can be overridden so that users must explicitly choose one of the actions.
              </BC.Text>
            </BC.GridRow>

          </BC.GridColumn>

          <BC.GridColumn gridUnits={4}>
            <BC.GridRow spacing="mini">
              <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dialogues/android/in_01._V301931029_.jpg"></BC.Image>
            </BC.GridRow>

            <BC.List listType="nostyle">
              <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">
                Modal dialogues may be dismissed either by tapping outside (1), or typically by selecting the secondary action (2), when available).
              </BC.ListItem>

            </BC.List>

          </BC.GridColumn>
          <BC.GridColumn gridUnits={4} position="last">
            <BC.GridRow spacing="mini">
              <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dialogues/android/dsn_03._V300262176_.jpg"></BC.Image>
            </BC.GridRow>
            <BC.GridRow spacing="mini">
              <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/dont._V301935058_.jpg"></BC.Image>
            </BC.GridRow>
            <BC.Text textColor="edu_tertiary" textSize="base">
              “Continue” is ambiguous word choice: does it mean continue using the app, or continue to quit?
            </BC.Text>
          </BC.GridColumn>
        </BC.GridRow>

        <BC.GridRow spacing="base">
          <div id="specs" />
          <br />
          <br />
          <br />
          <BC.GridColumn gridUnits={4}>
            <BC.GridRow spacing="mini" spacingTop="micro">
              <BC.Text textColor="base" textBold={true}>Specs</BC.Text>
            </BC.GridRow>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={8} position="last">
            <BC.GridRow spacing="none">
              <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/dialogues/android/spc_01._V299374562_.jpg"></BC.Image>
            </BC.GridRow>

          </BC.GridColumn>
        </BC.GridRow>

        <BC.GridRow spacing="base">
          <BC.GridColumn gridUnits={8} gridPush={4}>
            A typical dialogue resulting from a user action, providing the user with two options.
          </BC.GridColumn>
        </BC.GridRow>

        <BC.GridRow spacing="base">

          <BC.GridColumn gridUnits={2} position="last">
            <BC.GridRow spacing="mini">
              <BC.Text textColor="secondary" textSize="base" hasBold={true} >Dialogues specs</BC.Text>
            </BC.GridRow>
            <BC.GridRow spacing="mini">
              <BC.List listType="nostyle">
                <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Dialog box bg color: #ffffff</BC.ListItem>
              </BC.List>
            </BC.GridRow>
          </BC.GridColumn>
          <BC.GridColumn gridUnits={6} gridPush={4} >
            <BC.GridRow spacing="mini">
              <BC.Text textColor="secondary" textSize="base" hasBold={true} >Text</BC.Text>
            </BC.GridRow>
            <BC.GridRow spacing="mini">
              <BC.List listType="nostyle">
                <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">
                  1: Title (optional):
                  <BC.LetterSpace size="base"/>
                  17sp Noto Sans Japanese Medium, #333333
                </BC.ListItem>
                <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">2:  Message:     17sp Noto Sans Japanese Medium, #999999</BC.ListItem>
                <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">3: Action: 14sp Noto Sans Japanese Medium, #f7991c</BC.ListItem>
                <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Local Language: 12sp Noto Sans Japanese Medium, #f7991c</BC.ListItem>
              </BC.List>
            </BC.GridRow>
          </BC.GridColumn>
        </BC.GridRow>

      </BC.Box>
    </BC.GridRow>

  </BC.Section>
</div>
)
  }
}
export default WDialoguesAndroid;
