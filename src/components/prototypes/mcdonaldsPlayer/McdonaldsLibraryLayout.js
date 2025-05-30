import React from 'react';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import productData from '../../../data/prototypes/mcdonaldsLibrary.json';
import RibbonPlayer from './RibbonPlayer';
import McdonaldsPlayer from './McdonaldsPlayer';
import AudioInterface from './AudioInterface';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class McdonaldsLibraryLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeBook: null,
      playerViewActive: false,
      isPlaying: false
    }
  }

  handleBookSelect(index) {
    this.setState({
      activeBook: index,
      isPlaying: true
    });

    this.handlePlayerOpen();
  }

  handlePlayerOpen() {
    this.setState({
      playerViewActive: true
    });
  }

  handlePlayerClose() {
    this.setState({
      playerViewActive: false
    });    
  }

  playAudio() {
    this.setState({
      isPlaying: true
    });  
  }

  pauseAudio() {
    this.setState({
      isPlaying: false
    });  
  }

  render() {
    return (
      <div className="mobile bc-theme-dark">
        <div className="bc-color-background-base bc-color-base">
          <BC.Box paddingSize="small" backgroundColor="secondary"> 
            <BC.GridRow textAlign="center">
              <BC.Image 
                imageHeight="26px"
                source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar.svg" />
            </BC.GridRow>
          </BC.Box>

          <BC.Box backgroundColor="active" heightCss="2px" paddingSize="none"></BC.Box>
          {/* Channels/AudioBooks Tabs
          <BC.GridRow textAlign="center">
            <div style={{
              display: 'inline-block',
              width: '50%'
            }}>
              <BC.Link textColor="base" app={true} url={'/prototypes/mcdonalds-library'}>
                <BC.Box backgroundColor="secondary" paddingSize="small">
                  AudioBooks
                </BC.Box>
                <BC.Box paddingSize="none" backgroundColor="active" heightCss="2px"></BC.Box>
              </BC.Link>          
            </div>
            <div style={{
              display: 'inline-block',
              width: '50%'
            }}>
              <BC.Link textColor="base" app={true} url={'/prototypes/mcdonalds-library/channels'}>
                <BC.Box backgroundColor="secondary" paddingSize="small">
                  Channels
                </BC.Box>
                <BC.Box paddingSize="none" backgroundColor="secondary" heightCss="2px"></BC.Box>
              </BC.Link>          
            </div>
          </BC.GridRow> 
          */}

          <BC.Box paddingSize="mini"> 
            <BC.Heading headingLevel={2} textSize="base">Mcdonalds Library</BC.Heading>
          </BC.Box>         

          { productData.map((product, index) => {
              return (
                <BC.Link onClick={this.handleBookSelect.bind(this, index)} key={index}>
                  <BC.Divider />
                  
                  <BC.Box paddingSize="small">
                    <BC.GridRow>
                      <BC.GridColumn gridUnits={3}>
                        <BC.Image cssClass="bc-product-asin" source={product.product_images[500]} />
                      </BC.GridColumn>
                      
                      <BC.GridColumn gridUnits={9} position="last">
                        <BC.Heading textColor="base" headingLevel={3} textNormal={true}>{product.title}</BC.Heading>
                        <BC.List textSize="small" listType="nostyle" textColor="secondary">
                          <BC.ListItem>By Author</BC.ListItem>
                          <BC.ListItem>Narrated by Narrator</BC.ListItem>
                          <BC.ListItem>22h 38m left</BC.ListItem>
                        </BC.List>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </BC.Box>
                </BC.Link>
              )
            })
          }

          <ReactCSSTransitionGroup transitionName="slideUp" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
            { this.state.playerViewActive ?
              <McdonaldsPlayer
                onClickPause={this.pauseAudio.bind(this)}
                onClickPlay={this.playAudio.bind(this)}
                isPlaying={this.state.isPlaying}
                activeBook={this.state.activeBook}
                onClickClose={this.handlePlayerClose.bind(this)} />
              : null
            }
          </ReactCSSTransitionGroup>

          { this.state.activeBook != null && this.state.playerViewActive === false ?
            <RibbonPlayer
              onClickPause={this.pauseAudio.bind(this)}
              onClickPlay={this.playAudio.bind(this)}
              isPlaying={this.state.isPlaying}
              activeBook={this.state.activeBook}
              onClickAsin={this.handlePlayerOpen.bind(this)} />
            : null
          }
        </div>

        { this.state.activeBook ?
          <AudioInterface
            isPlaying={this.state.isPlaying}
            source={this.state.activeBook ? productData[this.state.activeBook].sample_url : null} />
          : null
        }
      </div>
    )
  }
}

export default McdonaldsLibraryLayout;
