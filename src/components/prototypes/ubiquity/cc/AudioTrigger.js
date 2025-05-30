import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class AudioTrigger extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickDisabled(e) {
    e.preventDefault();
  }

  render() {
    let staticClasses = ['bc-audio-trigger'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.hasCountdown && this.props.isPlaying) staticClasses.push('bc-audio-trigger-countdown');
    if(this.props.disabled) staticClasses.push('bc-disabled');

    return (
      <span {...this.props} className={classNames(staticClasses)} onClick={this.props.disabled ? this.onClickDisabled.bind(this) : this.props.onClick}>
        <span className="bc-audio-trigger-cta">
          {this.props.isLoading 
            ? <BC.Image cssClass="bc-audio-trigger-spinner" block={true} imageHeight={33} imageWidth={33} source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/spinner._V289264237_.svg" />
            : <BC.Icon iconType={!this.props.isPlaying ? 'play' : 'pause'} textColor="inverse" verticalAlign="middle" />
          }
        </span>

        {(this.props.isPlaying && this.props.hasCountdown) && 
          <span className="bc-audio-trigger-text">
            <BC.Text>22:22</BC.Text>
          </span>
        }
      </span>
    )
  }
}

AudioTrigger.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  isPlaying: PropTypes.bool,
  disabled: PropTypes.bool,
  hasCountdown: PropTypes.bool
}

export default AudioTrigger;