import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class StepMobile extends React.Component {

  render() {
    let staticClasses = ['bc-stepMobile'];

    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.activeState) staticClasses.push('bc-step-active');

    return (
        <span id={this.props.id} className={classNames(staticClasses)}>
          <div {...this.props}
            className={classNames('bc-stepMobile-text')}>
          </div>
        </span>
    );
  }

}

StepMobile.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  activeState: PropTypes.bool,
}

export default StepMobile;
