import React from 'react';
import BC from 'AudibleUITags';
import Router, { Route, Link } from 'react-router';

class AEHeader extends React.Component {

  constructor(props,context) {
      super(props,context);
  }

  componentDidMount(){
    // console.log(this.props.location.pathname)
  }




  render() {
    return (
      <div>
        <header className="guidelines-header">
          <BC.Section cssClass="bc-pub-clearfix" backgroundColor="secondary" hasBorder={true}>
            <BC.GridRow spacing="micro">
              <BC.GridColumn gridUnits={6}>
                <BC.Link url={"/education"} app={true}>
                  <BC.GridRow spacingTop="small">
                    <BC.Image verticalAlign="bottom" cssClass="logo-margin" imageHeight="21px" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar._V314169480_.svg" />
                  </BC.GridRow>

                </BC.Link>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={2} textAlign="left">

                <BC.GridRow spacingTop="small">
                  <BC.List listDirection="menu" listType="menu">
                    <BC.ListItem>
                      <BC.Link app={true} textColor="base" linkType="nav" url={"/education/waffle/updates"}>Amazon English</BC.Link>
                    </BC.ListItem>
                  </BC.List>
                </BC.GridRow>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={2}  textAlign="left">
                <BC.GridRow spacingTop="small">
                  <BC.List listDirection="menu" listType="menu">
                    <BC.ListItem>
                      <BC.Link app={true} textColor="base" linkType="nav" url={"/education/cupcake/coming-soon"}>Project Cupcake</BC.Link>
                    </BC.ListItem>
                  </BC.List>
                </BC.GridRow>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={2} textAlign="left" position="last">
                <BC.GridRow spacingTop="small">


                  <BC.List listDirection="menu" listType="menu">
                    <BC.ListItem>


                      <BC.Link app={true} linkType="nav"  textColor="base" url={"/education/resources/resource-index"}>Resources</BC.Link>
                    </BC.ListItem>
                  </BC.List>
                </BC.GridRow>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.Section>
    {this.props.children}
          <BC.Divider />
        </header>
      </div>
    )
  }
}


AEHeader.contextTypes= {
    location: React.PropTypes.object,
};

export default AEHeader;
