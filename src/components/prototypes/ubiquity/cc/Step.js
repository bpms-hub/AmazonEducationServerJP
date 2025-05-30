import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class Step extends React.Component {

  render() {
    let staticClasses = ['bc-step'];

    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.activeState) staticClasses.push('bc-step-active');

    if(this.props.textBold) { staticClasses.push('bc-text-bold'); }

    return (
      <span id={this.props.id} className={classNames(staticClasses)}>
          {this.props.number &&
            <span className={classNames('bc-step-text')}>{this.props.number}</span>
          }
          {this.props.checkMark &&
            <span className={classNames('bc-step-checkMark')}>
              <BC.Icon iconType="check" />
            </span>
          }
      </span>

    );
  }

}

Step.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  activeState: PropTypes.bool,
  textBold: PropTypes.bool,
  number: PropTypes.string,
  checkMark: PropTypes.bool
}


export default Step;
