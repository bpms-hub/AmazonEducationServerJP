import React, { PropTypes } from 'react'
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import productData from '../../../data/prototypes/mcdonaldsLibrary.json';

class AudioInterface extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('mounted', this.refs);
    this.refs.audioPlayer.play();
  }

  componentDidUpdate() {
    console.log('updated', this.props.isPlaying);
    this.props.isPlaying ? this.refs.audioPlayer.play() : this.refs.audioPlayer.pause();
  }

  render() {
    return (
      <audio ref="audioPlayer" src={this.props.source} />
    )
  }
}

AudioInterface.PropTypes = {
  isPlaying: PropTypes.bool,
  source: PropTypes.string
}

export default AudioInterface;
