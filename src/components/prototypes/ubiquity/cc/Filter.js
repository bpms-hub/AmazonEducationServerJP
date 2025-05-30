import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterActive: true};
    }

	closeFilter(e) {
		e.preventDefault();

		this.setState({
			filterActive: false
		})
	}

	render() {
	    let staticClasses = ['bc-filter'];
	    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

		return(
			<div className={classNames(staticClasses)} id={this.props.id}>

				{this.state.filterActive &&
					<div id={this.props.id} className={classNames(staticClasses)} role="filter">

										{this.props.children}

				            {this.props.closeable &&

					            <a title="Close filter" href="#" className="filter-close" onClick={this.closeFilter.bind(this)}>
                          <Icon iconType="close" />
					            </a>
					        }

					</div>
				}
			</div>
		);
	}
}

Filter.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  closeable: PropTypes.bool,
  filterActive: PropTypes.bool
}

export default Filter;
