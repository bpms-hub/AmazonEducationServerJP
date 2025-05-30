import React, { PropTypes } from 'react'
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import productData from '../../../data/prototypes/mcdonaldsLibrary.json';

class RibbonPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span style={{
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed'
      }}>
        <BC.Meter meterHeight={2} percentage={16} />
        <BC.Box backgroundColor="secondary" paddingSize="none"> 
          <BC.GridRow>
            <BC.GridColumn gridUnits={8}>
              <BC.Link onClick={this.props.onClickAsin}>
                <BC.Image verticalAlign="top" imageWidth="50px" source={productData[this.props.activeBook].product_images[500]} />
              </BC.Link>
              <BC.LetterSpace />
              <div className="bc-pub-inline-block bc-pub-align-middle">
                <BC.GridRow spacingTop="micro">
                  <BC.Text textSize="small">{productData[this.props.activeBook].title}</BC.Text>
                </BC.GridRow>
                <BC.GridRow>
                  <BC.Text textSize="mini" textColor="secondary">Audio Sample</BC.Text>
                </BC.GridRow>
              </div>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={4} position="last" textAlign="right" spacingTop="small">
              <BC.Link>
                <BC.Image imageWidth="14px" verticalAlign="middle" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/refresh_bk._V288162041_.svg" />
              </BC.Link>
              <BC.LetterSpace size="medium" />
              {this.props.isPlaying 
                ?
                <BC.Link onClick={this.props.onClickPause} textColor="link">  
                  <BC.Icon iconType="pause" iconSize="medium" />
                </BC.Link>  
                :                    
                <BC.Link onClick={this.props.onClickPlay}>  
                  <BC.Image imageWidth="20px" verticalAlign="middle" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/play._V288168872_.svg" />
                </BC.Link>
              }
              <BC.LetterSpace size="medium" />
              <BC.Link>
                <BC.Image imageWidth="14px" verticalAlign="middle" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/refresh_fwd._V288163336_.svg" />
              </BC.Link>
              <BC.LetterSpace size="medium" />
            </BC.GridColumn>
          </BC.GridRow>
        </BC.Box>
      </span>
    )
  }
}

RibbonPlayer.PropTypes = {
  activeBook: PropTypes.string,
  onClickPause: PropTypes.func,
  onClickPlay: PropTypes.func,
  onClickAsin: PropTypes.func
}

export default RibbonPlayer;
