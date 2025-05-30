import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import RangeSlider from './RangeSlider';

class Iframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
			currentTime: 0,
			trackDuration: 0,
			isHoveringAsin: false
		}
	}

	componentDidMount() {
		var player = this.refs.player;

		player.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
	}

	componentWillUnMount() {
		var player = this.refs.player;

		player.removeEventListener('timeupdate', this.handleTimeUpdate);
	}

	handleTimeUpdate() {
		var player = this.refs.player,
		    currentTime = player.currentTime,
		    trackDuration = player.duration;

		this.setState({
		  currentTime: currentTime,
		  trackDuration: trackDuration
		});
	}

	onAsinHover() {
		this.setState({
			isHoveringAsin: !this.state.isHoveringAsin
		})
	}

	rangeTest(event) {
		console.log(event.target.value)
	}

	render () {
		return (
			<div style={{
				width: '100%'
			}}>
				{ this.props.hasAsin &&
					<div
						onMouseOver={this.onAsinHover.bind(this)}
						onMouseOut={this.onAsinHover.bind(this)}
						className="bc-theme-dark" 
						style={{
							overflow: 'hidden',
							position: 'relative'
						}}>
						
						<div style={{
							transition: 'opacity .5s ease-in-out', 
							opacity: this.state.isHoveringAsin ? 0 : 1, 
							position: 'relative', 
							zIndex: 1
						}}>
							<BC.Image
								block={true} 
								imageWidth="100%" 
								source="http://ecx.images-amazon.com/images/I/61kqENa2G0L._SL500_.jpg" />
						</div>

						<div style={{
							bottom: 0,
							left: 0,
							right: 0,
							top: 0,
							position: 'absolute',
							zIndex: 0
						}}>

							<BC.Box textAlign="left" paddingSize="medium">
								<BC.Heading spacing="micro" textColor="base">Harry Potter and the Chamber of Secrets, Book 2</BC.Heading>

								<BC.GridRow textColor="secondary" spacing="small">by J.K. Rowling</BC.GridRow>
								<BC.GridRow textColor="secondary" spacing="micro">Narrated by Jim Dale</BC.GridRow>
								<BC.GridRow textColor="secondary" spacing="micro">9 hrs and 24 mins</BC.GridRow>

								<BC.GridRow spacing="medium">
									<BC.ReviewStars />
								</BC.GridRow>

								<BC.Button buttonType="primary">Buy Now</BC.Button>
							</BC.Box>

							<div style={{
								background: "url(http://ecx.images-amazon.com/images/I/61kqENa2G0L._SL500_BL60_.jpg)",
								bottom: 0,
								left: 0,
								right: 0,
								top: 0,
								position: 'absolute',
								zIndex: '-2'
							}}></div>

							<div style={{
								background: 'rgba(0,0,0,0.35)',
								bottom: 0,
								left: 0,
								right: 0,
								top: 0,
								position: 'absolute',
								zIndex: '-1'
							}}></div>
						</div>
					</div>
				}

				{ this.props.hasUpsell &&
					<BC.Box backgroundColor="secondary" paddingSize="mini">
						<BC.GridRow>
							<BC.GridColumn gridUnits={2}>
								<BC.Image block={true} imageWidth="100%" source="http://ecx.images-amazon.com/images/I/61kqENa2G0L._SL500_.jpg" />
							</BC.GridColumn>

							<BC.GridColumn gridUnits={7}>
								<BC.List listType="nostyle" textSize="mini">
									<BC.ListItem textSize="small" textColor="base">
										Harry Potter and the Chamber of Secrets, Book 2
									</BC.ListItem>
									<BC.ListItem>
										Author: J.K. Rowling
									</BC.ListItem>
									<BC.ListItem>
										Narrator: Jim Dale
									</BC.ListItem>
								</BC.List>
							</BC.GridColumn>

							<BC.GridColumn gridUnits={3} position="last" textAlign="right">
								<BC.Button inline={true} size="small" buttonType="primary">Get Book</BC.Button>
							</BC.GridColumn>
						</BC.GridRow>
					</BC.Box>
				}

				<BC.Meter meterHeight={3} percentage={(this.state.currentTime / this.state.trackDuration) * 100} />

				<span className="bc-theme-dark">
					<BC.Box backgroundColor="base" paddingSize="mini">
						<BC.GridRow>
							<BC.GridColumn gridUnits={10} spacingTop="micro">
								{ !this.state.isPlaying ?
									<BC.Link onClick={()=>{
										this.setState({
											isPlaying: true
										});
										this.refs.player.play();
									}}>
										<BC.Image 
											verticalAlign="middle" 
											imageHeight={24} 
											source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/platform/iframe/play._V299526713_.svg" />
									</BC.Link>
									:
									<BC.Link onClick={()=>{
										this.setState({
											isPlaying: false
										});
										this.refs.player.pause();
									}}>
										<BC.Image 
											verticalAlign="middle" 
											imageHeight={24} 
											source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/platform/iframe/pause._V299505455_.svg" />
									</BC.Link>
								}
								<BC.LetterSpace />
								<BC.Link>
									<BC.Image 
										verticalAlign="middle" 
										imageHeight={24} 
										source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/platform/iframe/volume._V299526713_.svg" />
								</BC.Link>
								<RangeSlider />
								<BC.LetterSpace />
								<BC.Text textSize="small" textColor="base">
									{Math.floor(this.state.currentTime / 60)}:{Math.floor(this.state.currentTime % 60) < 10 ? "0" + Math.floor(this.state.currentTime % 60) : Math.floor(this.state.currentTime % 60)}
								</BC.Text>
								<BC.LetterSpace size="mini" />
								<BC.Text textSize="small" textColor="base">/</BC.Text>
								<BC.LetterSpace size="mini" />
								<BC.Text textSize="small" textColor="base">
									{Math.floor(this.state.trackDuration / 60)}:{Math.ceil(this.state.trackDuration % 60) < 10 ? "0" + Math.floor(this.state.trackDuration % 60) : Math.floor(this.state.trackDuration % 60)}
								</BC.Text>
							</BC.GridColumn>

							<BC.GridColumn gridUnits={2} position="last">
								<BC.Link url="http://www.audible.com">
									<BC.Image 
										block={true} 
										source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/platform/iframe/audible_logo._V299526713_.svg" />
								</BC.Link>
							</BC.GridColumn>
						</BC.GridRow>
					</BC.Box>
				</span>

				<audio ref="player" src="http://samples.audible.com/bk/potr/000002/bk_potr_000002_sample.mp3" />
			</div>
		)
	}
}

Iframe.propTypes = {
	hasAsin: PropTypes.bool,
	hasUpsell: PropTypes.bool
}

export default Iframe;