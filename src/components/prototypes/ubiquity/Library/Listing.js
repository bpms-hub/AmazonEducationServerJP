import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';

class Listing extends React.Component {
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
        onMouseEnter={this.toggleHover.bind(this, true)} 
        onMouseLeave={this.toggleHover.bind(this, false)}>
        <BC.Box cssClass="bc-clearfix bc-relative" paddingSize="none" backgroundColor={this.state.isHovered ? 'secondary' : 'base'}>
          {this.props.isSelected &&
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2
            }}></div>
          }
          <BC.Divider cssClass={this.props.isSelected ? 'bc-disabled' : null} spacing="base" />

          <BC.GridRow spacing="base" textColor="secondary" verticalAlign="middle">
            <BC.GridColumn gridUnits={1}>
              <BC.LetterSpace size="base" />
              <BC.Checkbox style={{position: 'relative', zIndex: 3}} onChange={this.props.onChangeBulkSelector} checked={this.props.isSelected ? true : false } />
            </BC.GridColumn>

            <BC.GridColumn cssClass={this.props.isSelected ? 'bc-disabled' : null} gridUnits={1} textAlign="center">
              {!this.props.isSelected && this.state.isHovered 
                ? <CC.AudioTrigger />
                : <BC.Image imageHeight="40px" source={this.props.product.product_images[500]} />
              }
            </BC.GridColumn>

            <BC.GridColumn cssClass={this.props.isSelected ? 'bc-disabled' : null} gridUnits={4}>
              <div>
                <BC.Link>{this.props.product.title}</BC.Link>
              </div>
            </BC.GridColumn>

            <BC.GridColumn cssClass={this.props.isSelected ? 'bc-disabled' : null} gridUnits={2}>
              <BC.List listType="nostyle">
                { this.props.product.authors.map(function(author, index, originalArr) {
                    return (
                      <BC.ListItem>
                        <BC.Link>
                          {author.name}
                        </BC.Link>
                      </BC.ListItem>
                    )
                  })
                }
              </BC.List>
            </BC.GridColumn>

            <BC.GridColumn cssClass={this.props.isSelected ? 'bc-disabled' : null} gridUnits={2}>
              <BC.List listType="nostyle">
                { this.props.product.narrators.map(function(narrator, index, originalArr) {
                    return (
                      <BC.ListItem>
                        <BC.Link>
                          {narrator.name}
                        </BC.Link>
                      </BC.ListItem>
                    )
                  })
                }
              </BC.List>
            </BC.GridColumn>

            <BC.GridColumn cssClass={this.props.isSelected ? 'bc-disabled' : null} gridUnits={1}>
              <BC.Text textSize="small">
                {this.props.ownershipState === 'owned' && '2h 35min' }
                {this.props.ownershipState === 'preordered' && '03 Days' }
                {this.props.ownershipState === 'unowned' && '$0.00' }
              </BC.Text>
            </BC.GridColumn>

            <BC.GridColumn cssClass={this.props.isSelected ? 'bc-disabled' : null} gridUnits={1} position="last" textAlign="center">
              <BC.Link textColor="base" onClick={this.props.onClickQuickview}>
                <BC.Icon iconType="chevron-down" />
              </BC.Link>
            </BC.GridColumn>
          </BC.GridRow>
        </BC.Box>
      </div>
    );
  }

}

Listing.propTypes = {
  url: PropTypes.string,
  ownershipState: PropTypes.string,
  hasCard: PropTypes.bool,
  hasQuickview: PropTypes.bool,
  product: PropTypes.object
}

Listing.defaultProps = {
    ownershipState: 'unowned'
}

export default Listing;
