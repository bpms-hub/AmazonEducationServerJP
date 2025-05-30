import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	activeRows: [0]
       	};
    }

    componentDidMount() {    	
    	if (this.props.hideAllOnload) {
    		this.setState({
    			activeRows: []
    		})
    	};
    	if (this.props.showAllOnload) {
    		let activeRowList = [];

    		for (var i = 0; i < this.props.children.length; i++) {
    			activeRowList.push(i);
    		};

    		this.setState({
    			activeRows: activeRowList
    		});
    	}
    }

	handleClick(row) {
		if (this.props.isAccordion) {
			this.setState({
				activeRows: [row]
			});			
		} else {
			let newActiveRows = this.state.activeRows.slice();

			console.log(newActiveRows, row, newActiveRows.indexOf(row) > -1);

			newActiveRows.indexOf(row) > -1 ? newActiveRows.splice(newActiveRows.indexOf(row), 1) : newActiveRows.push(row);

			console.log(newActiveRows);
			this.setState({
				activeRows: newActiveRows
			});
		}
	}

	renderPanels() {
		return React.Children.map(this.props.children, function(child, index) {
			return React.cloneElement(
			  child,
			  {
			  	active: this.state.activeRows.indexOf(index) > -1,
			  	onSelect: this.handleClick.bind(this, index),
			  	rowIndex: index,
			  	titleSize: this.props.titleSize,
			  	titleBold: this.props.titleBold,
			  	titleCapitalize: this.props.titleCapitalize,
			  	key: index,
			  	accordionRadio: this.props.accordionRadio
			  }
			);			
		}.bind(this));
	}

	render() {
	    let staticClasses = ['bc-accordion'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
	    if(this.props.accordionRadio) { staticClasses.push('bc-accordion-radio', 'bc-color-border-base'); }
    	if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    	if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

		return(
			<div className={classNames(staticClasses)}>
				{this.renderPanels()}
			</div>
		);
	}
}

Accordion.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  collapseable: PropTypes.bool,
  activeRow: PropTypes.number,
  titleSize: PropTypes.string,
  titleBold: PropTypes.string,
  titleCapitalize: PropTypes.string,
  accordionRadio: PropTypes.bool,
  showAllOnload: PropTypes.bool,
  hideAllOnload: PropTypes.bool
}

Accordion.defaultProps = {
  titleBold: false,
  titleSize: "medium",
  titleCapitalize: false
}
export default Accordion;
