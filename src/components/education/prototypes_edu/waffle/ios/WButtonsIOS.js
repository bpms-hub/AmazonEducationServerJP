import React from 'react';
import BC from 'AudibleUITags';


class WButtonsIOS extends React.Component{
  render() {
    return (

            <div className="bc-container">
        <BC.Section spacing="none" spacingTop="none">
          <BC.GridRow>

          <BC.Box background="#fff" hasBorder={false} paddingSize="small">

          <BC.GridRow spacing="large">
            <BC.List listType="nostyle">
              <BC.ListItem spacing="micro">
                <BC.Link linkType="nav" app={true} url={"/prototypes"}>IOS overview</BC.Link>

              </BC.ListItem>
                <BC.ListItem spacing="micro">
                      <BC.Link linkType="nav" app={true} url={"/prototypes"}>Usage</BC.Link>
                  </BC.ListItem>
                    <BC.ListItem spacing="micro">
                          <BC.Link linkType="nav" app={true} url={"/prototypes"}>Design</BC.Link>
                      </BC.ListItem>
                        <BC.ListItem spacing="micro">
                              <BC.Link linkType="nav" app={true} url={"/prototypes"}>Interaciton & Motion</BC.Link>
                          </BC.ListItem>
                            <BC.ListItem spacing="micro">
                              <BC.Link linkType="nav" app={true} url={"/prototypes"}>Specs</BC.Link>
                              </BC.ListItem>
                              <BC.ListItem spacing="micro">
                                <BC.Link linkType="nav" app={true} url={"/prototypes"}>Revisions</BC.Link>
                                </BC.ListItem>
            </BC.List>

          </BC.GridRow>

  <BC.GridRow spacing="mini">
    <BC.Text textColor="primary">Overview</BC.Text>
  </BC.GridRow>
  <BC.GridRow spacing="base">
          <BC.Paragraph>updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.</BC.Paragraph>

<BC.Divider spacing="base"/>
  </BC.GridRow>



        <BC.GridRow spacing="mini">
    <BC.Text textColor="primary">Usage</BC.Text>
</BC.GridRow>
<BC.GridRow >
<BC.Paragraph>updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.</BC.Paragraph>

  <BC.Divider  spacing="base"/>
</BC.GridRow>

<BC.GridRow spacing="mini">
<BC.Text textColor="primary">Design</BC.Text>
</BC.GridRow>
<BC.GridRow >
<BC.Paragraph>updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.</BC.Paragraph>

<BC.Divider  spacing="base"/>
</BC.GridRow>

<BC.GridRow spacing="mini">
<BC.Text textColor="primary">Interaction & Motion</BC.Text>
</BC.GridRow>
<BC.GridRow >
<BC.Paragraph>updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.</BC.Paragraph>

<BC.Divider  spacing="base"/>
</BC.GridRow>

<BC.GridRow spacing="mini">
<BC.Text textColor="primary">Specs</BC.Text>
</BC.GridRow>
<BC.GridRow >
<BC.Paragraph>updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.</BC.Paragraph>

<BC.Divider  spacing="base"/>
</BC.GridRow>

<BC.GridRow spacing="mini">
<BC.Text textColor="primary">Revisions</BC.Text>
</BC.GridRow>
<BC.GridRow >
<BC.Paragraph>updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.</BC.Paragraph>

<BC.Divider  spacing="base"/>
</BC.GridRow>

          </BC.Box>
  </BC.GridRow>
        </BC.Section>
</div>
    )
  }
}
export default WButtonsIOS;
