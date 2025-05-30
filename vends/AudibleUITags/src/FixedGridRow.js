import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class FixedGridRow extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    let staticClasses = ['bc-fixed-grid-' + this.props.fixedColumn];

    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.textSize) staticClasses.push('bc-size-' + this.props.textSize);
    if(this.props.textColor) staticClasses.push('bc-color-' + this.props.textColor);
    if(this.props.textAlign) staticClasses.push('bc-text-' + this.props.textAlign);

    let paddingSide = 'padding' + this.props.fixedColumn[0].toUpperCase() + this.props.fixedColumn.substring(1);

    let inlineStyles = {};
    inlineStyles[paddingSide] = this.props.fixedColumnWidth + 'px';

    return (
      <div id={this.props.id} className={classNames(staticClasses)} style={inlineStyles} role={this.props.role}>
        {this.props.children}
      </div>
    );
  }

}

FixedGridRow.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  fixedColumn: PropTypes.string.isRequired,
  fixedColumnWidth: PropTypes.number.isRequired,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  textAlign: PropTypes.string,
  role: PropTypes.string
}

FixedGridRow.defaultProps = {
  fixedColumn: 'left'
}

export default FixedGridRow;
