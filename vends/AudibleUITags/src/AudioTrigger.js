import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class AudioTrigger extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let staticClasses = ['bc-audio-trigger'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.hasCountdown && this.props.isPlaying) staticClasses.push('bc-audio-trigger-countdown');

    return (
      <span className={classNames(staticClasses)} onClick={this.props.onClick}>
        <span className="bc-audio-trigger-cta">
          {this.props.isLoading 
            ? [<BC.Image cssClass="bc-audio-trigger-spinner" block={true} imageHeight={33} imageWidth={33} source="/test.svg" />]
            : [<BC.Icon iconType={!this.props.isPlaying ? 'play' : 'pause'} textColor="inverse" verticalAlign="middle" />]
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
  triggerType: PropTypes.string,
  isPlaying: PropTypes.boolean,
  hasCountdown: PropTypes.boolean
}

export default AudioTrigger;