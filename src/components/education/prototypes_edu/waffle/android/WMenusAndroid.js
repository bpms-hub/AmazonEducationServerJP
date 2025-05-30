import React from 'react';
import BC from 'AudibleUITags';
import EDU from '../../../edu';


class WMenusAndroid extends React.Component {
  render() {
    return (
            <div className="">
        <BC.Section spacing="none" spacingTop="none">
<BC.GridRow spacing="mini">
<BC.Text textSize="large" textColor="base">Menus</BC.Text>
</BC.GridRow>
  <BC.Text>Dual Language</BC.Text>
<BC.GridRow spacing="large" spacingTop="micro">
<BC.Text textSize="base" textColor="base">
  A menu is a temporary piece of UI evoked from a button, an action or another control that contains at least two menu items. </BC.Text>
</BC.GridRow>
<BC.GridRow spacing="none">
  <BC.List listType="nostyle">
    <BC.ListItem spacing="mini">
      <BC.Link textColor="edu_link" linkType="nav" app={false} url="#design">Design</BC.Link>
    </BC.ListItem>

                      <BC.ListItem spacing="mini">
                        <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#interaction">Interaction / Motion</BC.Link>
                        </BC.ListItem>

                        <BC.ListItem spacing="none">
                          <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#specs">Specs</BC.Link>
                          </BC.ListItem>
  </BC.List>

</BC.GridRow>

          <BC.GridRow>



  <BC.Box background="#fff" hasBorder={false} paddingSize="none">

    <div id="design" />
    <br /><br /><br />

          <BC.GridRow spacing="micro">
  <BC.GridColumn gridUnits={4}>
  <BC.GridRow spacing="mini" spacingTop="micro">
  <BC.Text  textColor="base" textBold={true}>Design</BC.Text>
    <BC.List listType="unordered" spacing="medium">
    <BC.ListItem spacing="micro">  Keep menu labels concise.</BC.ListItem>
    <BC.ListItem spacing="micro">Menus are left-aligned regardless of touch location.</BC.ListItem>
  <BC.ListItem spacing="micro">
  Consider a default selection for closed    menus, if appropriate.
  </BC.ListItem>
  <BC.ListItem spacing="micro">
    Menus are appropriate for long lists of    options as they can be scrollable.

  </BC.ListItem>
  <BC.ListItem spacing="micro">
 A long list of menu items should open    in the middle (i.e. a list of 100 options    opens with option 50 selected).
  </BC.ListItem>
  </BC.List>
    </BC.GridRow>

                    </BC.GridColumn>
                    <BC.GridColumn gridUnits={4}>
                    <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/dsn_01._V299047565_.jpg"></BC.Image>
                    </BC.GridColumn>
              </BC.GridRow>



                  <BC.GridRow spacing="medium">
                    <BC.GridColumn gridUnits={4} gridPush={4}>
                  <BC.Text textColor="edu_tertiary" textSize="base">There are several menus on the leveling screen, allowing users to inform the app of their test score.</BC.Text>
                  </BC.GridColumn>

                  </BC.GridRow>



<BC.GridRow spacing="base">
  <div id="interaction" />
  <br /><br /><br />
    <BC.GridColumn gridUnits={4}>
    <BC.GridRow spacing="mini" spacingTop="micro">
    <BC.Text  textColor="base" textBold={true}>Interaction / Motion </BC.Text>
    </BC.GridRow>
    <BC.List listType="unordered" spacing="medium">
    <BC.ListItem spacing="micro"> Menus generally cover the emitting    element, rather than below.
  </BC.ListItem>
  <BC.ListItem spacing="micro">  If the menu options exceed the height of    the screen, allow the list to scroll.
  </BC.ListItem>
  <BC.ListItem spacing="micro"> Dismiss a menu by tapping outside of the    menu, or by tapping the emitting button    (if visible).
  </BC.ListItem>
  <BC.ListItem spacing="micro">Selecting a menu item typically    dismisses the menu. (Exception:    menus allowing the selection of    multiple items).
  </BC.ListItem>

    </BC.List>

    </BC.GridColumn>
                          <BC.GridColumn gridUnits={4}>
                            <BC.GridRow spacing="mini">
                          <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/in_01._V299382712_.jpg"></BC.Image>
                            </BC.GridRow>

                            <BC.GridRow spacing="small">

                            <BC.Text textColor="edu_tertiary" textSize="base">The overflow menu for a particular ASIN gives the options to start the title or download it to local storage. The list will grow as features are added</BC.Text>
                            </BC.GridRow>
                          </BC.GridColumn>

                    <BC.GridColumn gridUnits={4} position="last" spacing="base">
                <BC.GridRow spacing="mini">
                   <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/in_02._V299422857_.jpg">
                   </BC.Image>
    </BC.GridRow>
    <BC.GridRow spacing="small">
       <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/dont._V301935058_.jpg">
       </BC.Image>

      <BC.Text textColor="edu_tertiary" textSize="base">
        Don’t display a duplicate of the selected menu item; the menu should cover the emitting control. Don’t truncate text.</BC.Text>
</BC.GridRow>
        </BC.GridColumn>



        <div id="specs" />
        <br /><br /><br />
<BC.GridRow spacingTop="base">
        <BC.GridColumn gridUnits={4}>
          <BC.GridRow spacing="mini" spacingTop="large">
          <BC.Text  textColor="base" textBold={true}>Specs</BC.Text>
          </BC.GridRow>
          </BC.GridColumn>

  <BC.GridColumn gridUnits={8} position="last">
        <BC.GridRow spacingTop="medium" spacing="small">
   <BC.Image  source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/spc_01._V299381320_.jpg"></BC.Image>
   </BC.GridRow>



     <BC.GridRow spacing="none">
       <BC.GridColumn gridUnits={6}>
         <BC.GridRow spacing="micro">
           <BC.Text textColor="secondary" textBold={true} textSize="base">Tabs specs</BC.Text>
         </BC.GridRow>

         <BC.GridRow spacing="micro">
           <BC.Text textColor="edu_tertiary" textSize="base">Background: #ffffff</BC.Text>
         </BC.GridRow>

         <BC.GridRow spacing="base">
           <BC.Text textColor="edu_tertiary" textSize="base">Tappable area: 180dp (if two tabs) by 48dp</BC.Text>
         </BC.GridRow>

       </BC.GridColumn>
       <BC.GridColumn gridUnits={6} position="last" spacing="base">
         <BC.GridRow spacing="micro">
           <BC.Text textColor="secondary" textSize="base" textBold={true}>Text</BC.Text>
         </BC.GridRow>

         <BC.GridRow spacing="micro">
           <BC.Text textColor="edu_tertiary" textSize="base">English Text: 14sp Roboto Medium, #333333</BC.Text>
         </BC.GridRow>

         <BC.GridRow spacing="micro">
       <BC.Text textColor="edu_tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #333333</BC.Text>
       </BC.GridRow>

                 <BC.GridRow spacing="micro">
               <BC.Text textColor="edu_tertiary" textSize="base">Selected State #f7991c</BC.Text>
               </BC.GridRow>


               </BC.GridColumn>
                 </BC.GridRow>

</BC.GridColumn>
  </BC.GridRow>
</BC.GridRow>
          </BC.Box>
          </BC.GridRow>
        </BC.Section>
</div>
    )
  }
}
export default WMenusAndroid;
