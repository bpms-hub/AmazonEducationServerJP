import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Asin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }
  }

  toggleHover(willHover) {
    this.setState({
      isHovered: willHover
    })
  }

  render() {
    return (
      <div
        className={this.props.disabled ? 'bc-disabled' : null}
        onMouseEnter={this.props.hasHoverMask && this.toggleHover.bind(this, true)}
        onMouseLeave={this.props.hasHoverMask && this.toggleHover.bind(this, false)}>

        <div className={classNames(["bc-pub-relative"])}>
          <BC.Link url={this.props.url ? this.props.url : null} app={this.props.url ? true : null}>
            <BC.Image cssClass="bc-product-asin" block={true} imageWidth={this.props.asinSize ? this.props.asinSize : '100%'} imageHeight={this.props.asinSize ? this.props.asinSize : '100%'} source={this.props.product ? this.props.product.product_images[500] : 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/image_placeholder._V288789908_.jpg'} />

            { (this.props.hasHoverMask && this.state.isHovered) &&
                <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 1
              }}></div>
            }
          </BC.Link>

          <CC.AudioTrigger
            style={{
              left: '12px',
              bottom: '12px',
              position: 'absolute',
              zIndex: 2
            }}
            fullTitle={this.props.triggerFullTitle}
            onClick={(e)=> {
              e.stopPropagation();
              alert('play book');
            }} />
        </div>

        { this.props.ownershipState === 'owned' &&
          <BC.Meter meterHeight={6} percentage={this.props.meterProgress} progressColor="active" inactiveColor="secondary" />
        }

        { this.props.hasCard ?
          <span>
            { this.state.isHovered &&
              <BC.Link textColor="base" onClick={this.props.onClickQuickview}>
                <BC.Box
                  cssClass="bc-relative"
                  backgroundColor="base"
                  hasBorder={true}
                  heightCss="78px"
                  paddingSize="mini">

                  <BC.GridRow textAlign="center" verticalAlign="middle" heightCss="100%">
                    <BC.GridColumn gridUnits={12}>
                      <BC.Text>Quickview</BC.Text>
                      <BC.Icon iconType="chevron-down" />
                    </BC.GridColumn>
                  </BC.GridRow>
                </BC.Box>
              </BC.Link>
            }

            { !this.state.isHovered &&
              <BC.Box
                cssClass="bc-relative"
                backgroundColor="base"
                hasBorder={true}
                heightCss="78px"
                paddingSize="mini">

                <BC.GridRow textSize="small">
                  <BC.GridRow cssClass="bc-overflow-hidden" heightCss="36px">
                    <BC.Text textColor="base">
                    {this.props.product.title.length > 37 ? this.props.product.title.substring(0, 37)+" ..." : this.props.product.title}
                    </BC.Text>
                  </BC.GridRow>

                  <BC.GridRow textColor="secondary">
                    { this.props.ownershipState === 'owned' &&
                      <BC.Text>2h 35min left</BC.Text>
                    }
                    { this.props.ownershipState === 'preordered' &&
                      <BC.Text>00 Days</BC.Text>
                    }
                    { this.props.ownershipState === 'unowned' &&
                      <BC.ReviewStars />
                    }
                  </BC.GridRow>
                </BC.GridRow>
              </BC.Box>
            }
          </span>
          : null
        }
      </div>
    );
  }

}

Asin.propTypes = {
  url: PropTypes.string,
  asinSize: PropTypes.string,
  ownershipState: PropTypes.string,
  meterProgress: PropTypes.number,
  hasCard: PropTypes.bool,
  hasQuickview: PropTypes.bool,
  hasHoverMask: PropTypes.bool,
  product: PropTypes.object,
  onClickQuickview: PropTypes.func
}

Asin.defaultProps = {
    ownershipState: 'unowned'
}

export default Asin;
