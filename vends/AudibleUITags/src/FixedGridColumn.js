import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
const defaultColumn = 'left';

class FixedGridColumn extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    let staticClasses = ['bc-col-' + this.props.side];
    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    if(this.props.spacing) { staticClasses.push('bc-spacing-' + this.props.spacing); }
    if(this.props.spacingTop) { staticClasses.push('bc-spacing-top-' + this.props.spacingTop); }
	if(this.props.textAlign) { staticClasses.push('bc-text-' + this.props.textAlign); }

    let paddingSide = 'padding' + this.props.fixedColumn[0].toUpperCase() + this.props.fixedColumn.substring(1);
    let marginSide = 'margin' + this.props.fixedColumn[0].toUpperCase() + this.props.fixedColumn.substring(1);

    let inlineStyles = {};
    inlineStyles[paddingSide] = this.props.columnPadding;
    if (this.props.side === this.props.fixedColumn) {
	inlineStyles.width = this.props.fixedColumnWidth;
    	inlineStyles[marginSide] =  '-' + this.props.fixedColumnWidth;
    }


    return (
      <div id={this.props.id} className={classNames(staticClasses)} style={inlineStyles}>
        {this.props.children}
      </div>
    );
  }

}

FixedGridColumn.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  textAlign: PropTypes.string,
  fixedColumn: PropTypes.string.isRequired,
  fixedColumnWidth: PropTypes.number,
  columnPadding: PropTypes.string,
  side:  PropTypes.string.isRequired
}

FixedGridColumn.defaultProps = {
  fixedColumn: 'left'
}

export default FixedGridColumn;
