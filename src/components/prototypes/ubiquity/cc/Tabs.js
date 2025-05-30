import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	tabActive: this.props.tabActive
       	};
    }

	setActiveTab(index, e) {
		this.setState({
			tabActive: index
		});

		e.preventDefault();
	}

	getTabs() {
		let tabList = this.props.children.map((tab, index) => {
			return (
				<BC.ListItem key={index} cssClass='bc-tab-heading'>
					<BC.Link textColor="base" textCapitalize={true} onClick={this.setActiveTab.bind(this, index + 1)}>
						<BC.Box cssClass="bc-relative" paddingSize="small">
							{tab.props.title}
							<span className={classNames([this.state.tabActive === (index + 1) && 'bc-tab-heading-active','bc-color-background-active'])}></span>
						</BC.Box>
					</BC.Link>
				</BC.ListItem>
			)
		});

		return tabList;
	}

	getPanels() {
	    let currentTab = this.state.tabActive - 1;

	    let panelList = this.props.children.map((tab, index) => {
			return (
				<div key={index} className={classNames([currentTab === index ? "bc-active" : "bc-hidden", "bc-clearfix"])}>
	            	{this.props.children[index]}
	          	</div>
			)
		});

		return panelList;
	}

	render() {
	    let staticClasses = ['bc-tabs'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    	if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    	if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

		return(
			<div className={classNames(staticClasses)}>
				<BC.List listDirection="horizontal" id={this.props.id} cssClass="bc-tab-set">
					{this.getTabs()}
				</BC.List>

        		<BC.Divider spacing="base" />

				{this.getPanels()}
			</div>
		);
	}
}

Tabs.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  tabActive: PropTypes.number
}

Tabs.defaultProps = {
  tabActive: 1
}

export default Tabs;
