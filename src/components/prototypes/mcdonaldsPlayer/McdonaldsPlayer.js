import React, { PropTypes } from 'react'
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import productData from '../../../data/prototypes/mcdonaldsLibrary.json';

class McdonaldsPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="mcdonalds-player"
        style={{
          backgroundImage: 'url(' + productData[this.props.activeBook].product_images[500].replace('.jpg', 'BL60.jpg') + ')',
          backgroundColor: '#2D2D2D',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          bottom: 0,
          left: 0,
          right: 0,
          position: 'fixed',
          zIndex: 1
        }}>
        <div className="bc-theme-dark">
          <div className="bc-color-base">
            {/* Artwork Half */}
            <div style={{
              top: 0,
              bottom: '44%',
              width: '100%',
              position: 'absolute',
              zIndex: 2
            }}>
              <div className="bc-container">
                <BC.GridRow spacingTop="mini" spacing="small">
                  <BC.GridColumn gridUnits={6}>
                    <BC.Link onClick={this.props.onClickClose} textColor="base">
                      <BC.Icon iconSize="medium" iconType="chevron-down"/>
                    </BC.Link>
                  </BC.GridColumn>

                  {/*
                  <BC.GridColumn gridUnits={6} textAlign="right" position="last">
                    <BC.Image imageHeight="24px" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/overflow._V288120370_.svg" />
                  </BC.GridColumn>
                  */}
                </BC.GridRow>
                
                <BC.GridRow textAlign="center">
                  <BC.Image imageWidth="240px" source={productData[this.props.activeBook].product_images[500]} />
                </BC.GridRow>
              </div>
            </div>

            <div style={{
              bottom: 0,
              top: '56%',
              width: '100%',
              position: 'absolute',
              zIndex: 2
            }}>
              {/*
              <BC.GridRow spacing="large">
                <BC.Meter meterHeight={7} />
              </BC.GridRow>
              */}

              <div className="bc-container">
                <BC.GridRow textAlign="center" spacingTop="large" spacing="large">
                  <BC.GridColumn gridUnits={2}></BC.GridColumn>

                  <BC.GridColumn gridUnits={2} textalign="center" spacingTop="small">
                    <BC.Link>
                      <BC.Image imageWidth="32px" verticalAlign="middle" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/refresh_bk._V288162041_.svg" />
                    </BC.Link>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={4} textalign="center">
                    {this.props.isPlaying 
                      ?
                      <BC.Link onClick={this.props.onClickPause} textColor="link">  
                        <BC.Icon iconType="pause" iconSize="large" />
                      </BC.Link>   
                      :                    
                      <BC.Link onClick={this.props.onClickPlay}>  
                        <BC.Image imageWidth="64px" verticalAlign="middle" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/play._V288168872_.svg" />
                      </BC.Link>
                    }
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={2} textalign="center" spacingTop="small">
                    <BC.Link>
                      <BC.Image imageWidth="32px" verticalAlign="middle" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/refresh_fwd._V288163336_.svg" />
                    </BC.Link>
                  </BC.GridColumn>
                </BC.GridRow>

                <BC.GridRow spacing="micro" textAlign="center">
                  <BC.Text textSize="base">{productData[this.props.activeBook].title}</BC.Text>
                </BC.GridRow>
              </div>
            </div>

              {/* Footer Button Controls
              <BC.GridRow cssClass="media-player-footer" spacing="small" textAlign="center" >
                <BC.GridColumn gridUnits={3}>
                  <BC.Image imageHeight="24px" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/play-speed._V288162803_.svg" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={3}>
                  <BC.Image imageHeight="24px" source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/timer._V288120370_.svg" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={3}>
                  <BC.Image imageHeight="24px" source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/bookmark._V288120370_.svg" />
                </BC.GridColumn>
                <BC.GridColumn gridUnits={3} position="last">
                  <BC.Image imageHeight="24px" source="        http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/volume._V288120370_.svg" />
                </BC.GridColumn>
              </BC.GridRow>
               */}
          </div>
          <div style={{
            backgroundColor: 'rgba(0,0,0,0.35)',
            height: '100%',
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: '-1'
          }}></div>
        </div>
      </div>
    )
  }
}

McdonaldsPlayer.PropTypes = {
  onClickPause: PropTypes.func,
  onClickPlay: PropTypes.func,
  activeBook: PropTypes.number,
  onClickClose: PropTypes.func
}


export default McdonaldsPlayer;