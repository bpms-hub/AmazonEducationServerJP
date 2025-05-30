import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Divider from './Divider';
import Icon from './Icon';
import Text from './Text';
import LetterSpace from './LetterSpace';
import RadioButton from './RadioButton';
import Box from './Box';
import GridRow from './GridRow';
import Link from './Link';

class AccordionRow extends React.Component {
    constructor(props) {
        super(props);
    }

	handleClick() {
		this.props.onSelect(this);
	}

	render() {
	    let staticClasses = ['bc-accordion-row'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

			if (this.props.accordionRadio) {
				return (
					<div id={this.props.id} className={classNames(staticClasses)}>
						<Box paddingSize="mini" backgroundColor={!this.props.active ? "secondary" : "base"} cssClass='bc-accordion-header' onClick={this.handleClick.bind(this)}>
							<RadioButton checked={this.props.active}></RadioButton>
							<LetterSpace />
							<Text textSize="base" textColor="base" textBold={this.props.titleBold}>{this.props.title}</Text>
						</Box>
						<div className={classNames(['bc-accordion-inner', this.props.active ? 'bc-active' : 'bc-hidden'])}>
							<Box paddingSize="mini" backgroundColor={!this.props.active ? "secondary" : "base"}>
								{this.props.children}
							</Box>
						</div>

						<Divider dividerType="regular" />
					</div>
				)
			} else {
				return (
					<div id={this.props.id} className={classNames(staticClasses)}>
						<Link cssClass='bc-accordion-header bc-pub-clearfix' textColor="base" onClick={this.handleClick.bind(this)}>
							<GridRow spacing="mini" spacingTop="mini">
								<Text textSize={this.props.titleSize} textBold={this.props.titleBold} textCapitalize={this.props.titleCapitalize}>{this.props.title}</Text>
								<Icon iconType={this.props.active ? 'chevron-up' : 'chevron-down'} />
							</GridRow>
						</Link>

						{ this.props.active &&
							<div className="bc-accordion-inner">
						  		<GridRow spacing="base">
									{this.props.children}
								</GridRow>
							</div>
						}

						<Divider />
					</div>
				)
			}
	}
}

AccordionRow.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  title: PropTypes.string,
  titleBold: PropTypes.bool,
  titleCapitalize: PropTypes.bool,
  titleSize: PropTypes.string,
  active: PropTypes.bool,
  rowIndex: PropTypes.string,
  accordionRadio: PropTypes.bool,
  onSelect: PropTypes.func
}

export default AccordionRow;
