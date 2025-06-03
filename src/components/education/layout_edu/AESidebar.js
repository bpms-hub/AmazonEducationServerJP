import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';


class AESidebar extends React.Component {

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
		return(
			<div className="">
						<BC.Box background="#fff" cssClass="fixed-sidebar" hasBorder={true} paddingSize="large">
	              <BC.GridRow>
	                <BC.GridColumn gridUnits={12}>
	              <BC.List spacing="none" listType="nostyle" textSize="base">

	                <BC.ListItem spacing="mini">
	              <div onClick={this.handleClick.bind(this, "step1")}>    <BC.Link textColor="base" textBold={true} textSize="base" linkType="nav" url={"#/education/waffle/updates"}>Updates</BC.Link> </div>
	                </BC.ListItem>
									<BC.ListItem spacing="mini">
										<BC.Link textColor="base" textBold={true} linkType="nav" textSize="base" url={"#/education/waffle/principles"}>Principles</BC.Link>
									</BC.ListItem>
									<BC.ListItem spacing="small">
										<BC.Text textColor="base" textBold={true} textSize="base" linkType="nav" disabled={true}>Components</BC.Text>
									</BC.ListItem>

									<BC.LetterSpace size="large">	<BC.ListItem spacing="mini">
							<BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/back-arrow"}>
									Back Arrow </BC.Link>
									</BC.ListItem></BC.LetterSpace>


									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/bottom-sheet"}>Bottom Sheet</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link  textColor="base" textSize="base" linkType="nav" url={"#/education/waffle/buttons"}>Buttons</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/cards"}>Cards</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/checkbox"}>Check Boxes</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
	                  <BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/dialogues"}>Dialogues</BC.Link>
	                </BC.ListItem>




									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/lists"}>Lists</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/menus"}>Menus</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" url={"#/education/waffle/dots"} textSize="base">Progression Dots</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link textColor="base" linkType="nav" textSize="base" url={"#/education/waffle/radio-buttons"}>Radio Buttons</BC.Link>
									</BC.ListItem>

	                <BC.ListItem spacing="mini">
	                  <BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/range-sliders"}>Range Sliders</BC.Link>
	                </BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/scrubbers"}>Scrubbers</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/snackbars"}>Snackbars</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/tabs"}>Tabs</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/tiles"}>Tiles</BC.Link>
									</BC.ListItem>

									<BC.ListItem spacing="mini">
										<BC.LetterSpace size="base"/><BC.Link linkType="nav" textColor="base" textSize="base" url={"#/education/waffle/toggle"}>Toggle</BC.Link>
									</BC.ListItem>

	              </BC.List>
	            </BC.GridColumn>
	            </BC.GridRow>
	            </BC.Box>
							</div>

		);
	}
}


export default AESidebar;
