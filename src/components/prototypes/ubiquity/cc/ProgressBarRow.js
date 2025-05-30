import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class ProgressBarRow extends React.Component {

  render() {
    let staticClasses = ['bc-progressBar-row'];
    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

ProgressBarRow.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  
}

export default ProgressBarRow;
