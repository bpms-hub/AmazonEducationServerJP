import React from 'react';
import BC from 'AudibleUITags';
import Router, { Route, Link } from 'react-router';

class Header extends React.Component {
  constructor(props,context) {
      super(props,context);
  }

  componentWillMount(){
    // let params = this.context.location.query;
    // let variation = params.vaud ? '(Vaud)':  null
    // this.setState({variation:variation});
  }

  render() {
    let currentRoute = this.context.location;
    // console.log(currentRoute);

    return (
      <div>
        <header className="guidelines-header">
          <BC.Section backgroundColor="base">
            <div className="bc-container">
              <BC.List listDirection="horizontal" listType="menu">
                <BC.ListItem>
                  <BC.Link url={"/"} app={true}>
                    <BC.Image verticalAlign="middle" imageHeight="21px" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar._V314169480_.svg" />
                  </BC.Link>
                </BC.ListItem>
                <BC.LetterSpace size="extra-large" />

                <BC.ListItem cssClass="bc-pub-relative">
                  <BC.Link app={true} textColor="base" url={"/design"}>
                    <BC.GridRow spacing="base" spacingTop="base">Design</BC.GridRow>
                  </BC.Link>
                  { currentRoute === "/design" && <span className="bc-nav-active bc-color-background-active"></span> }
                </BC.ListItem>

                <BC.ListItem cssClass="bc-pub-relative">
                  <BC.Link app={true} textColor="base" url={"/engineering"}>
                    <BC.GridRow spacing="base" spacingTop="base">Engineering</BC.GridRow>
                  </BC.Link>
                  { currentRoute === "/engineering" && <span className="bc-nav-active bc-color-background-active"></span> }
                </BC.ListItem>

                <BC.ListItem cssClass="bc-pub-relative">
                  <BC.Link app={true} textColor="base" url={"/prototyping"}>
                    <BC.GridRow spacing="base" spacingTop="base">Prototyping</BC.GridRow>
                  </BC.Link>
                  { currentRoute === "/prototyping" && <span className="bc-nav-active bc-color-background-active"></span> }
                </BC.ListItem>
              </BC.List>
            </div>
          </BC.Section>
              <BC.Divider />
        </header>
        <div className="header-spacer"></div>
      </div>
    )
  }
}

Header.contextTypes= {
    location: React.PropTypes.object
};

export default Header;
