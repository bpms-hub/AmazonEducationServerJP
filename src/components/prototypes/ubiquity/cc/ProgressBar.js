import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class ProgressBar extends React.Component {

  renderText() {

    return (
        <span {...this.props}
          className={classNames('bc-progressBar-text')}>
        </span>
    )

  }

  render() {
    let staticClasses = ['bc-progressBar'];
    let widthPercentage = {
      width: this.props.widthPercentage + '%'
    }
    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.activeState) staticClasses.push('bc-progressBar-active');
    if(this.props.textSize) { staticClasses.push('bc-size-' + this.props.textSize); }
    if(this.props.textBold) { staticClasses.push('bc-text-bold'); }

        return (

            <span id={this.props.id} className={classNames(staticClasses)} style={widthPercentage}>
            {this.props.number &&
              <span className={classNames('bc-progressBar-num-icon')}>{this.props.number}.</span>
            }
            {this.props.checkMark &&
              <span className={classNames('bc-progressBar-num-icon')}>
                  <BC.Icon iconType="check" />
              </span>
            }
              {this.renderText()}
            </span>
        );

  }

}

ProgressBar.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  activeState: PropTypes.bool,
  widthPercentage: PropTypes.number.isRequired,
  textSize: PropTypes.string,
  textBold: PropTypes.bool,
  number: PropTypes.string,
  checkMark: PropTypes.bool
}

ProgressBar.defaultProps = {
  widthPercentage: 33.3
}

export default ProgressBar;
