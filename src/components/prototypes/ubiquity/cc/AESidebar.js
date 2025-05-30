import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';


class AESidebar extends React.Component {


	render() {

		return(
				<BC.Box background="#f9f8f6" hasBorder={false} paddingSize="base">
					<BC.GridRow>
						<BC.GridColumn gridUnits={12} gridPush={2}>
					<BC.List spacing="small" listType="nostyle" textSize="small">
						<BC.ListItem spacing="base">
							<BC.Heading headingLevel={3}>Project Waffle</BC.Heading>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.Heading headingLevel={3}>Elements</BC.Heading>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Buttons</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Back Arrow</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Tabs</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Tabs</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Inputs</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Menus</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Lists</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Snackbars & Toasts</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Cards</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Sliders</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Progression</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Text Fields</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Selection Controls</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">ASIN covers</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="base">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Information Tiles</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.Heading headingLevel={3}>Components</BC.Heading>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">3-up grid</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Chapters</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Bottom Sheet</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Dialogue</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Navigation</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Swipe to Delete</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Refine & Sort</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Search</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Settings</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Coach marks</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Progression circle</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Tour Screen</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Toolbar</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Empty / Zero States</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Errors</BC.Link>
						</BC.ListItem>
						<BC.ListItem spacing="mini">
							<BC.LetterSpace size="base"/><BC.Link textColor="base">Notifications</BC.Link>
						</BC.ListItem>
					</BC.List>
				</BC.GridColumn>
				</BC.GridRow>
				</BC.Box>


		);
	}
}


export default AESidebar;
