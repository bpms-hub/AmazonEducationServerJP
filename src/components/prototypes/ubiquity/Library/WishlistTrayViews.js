import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
var ReactCSSTransitionGroup = BC.Text;

class LibraryTrayViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrayView: 1
    }
  }

  render() {
    let productSummary = this.props.product.publisher_summary;

    return (
      <BC.Box paddingSize="medium" backgroundColor="base" heightCss="430px">
        <BC.GridRow textColor="secondary">
          {this.props.showAsin &&
            <BC.GridColumn gridUnits={3}>
              <CC.Asin product={this.props.product} />
            </BC.GridColumn>
          }

          <BC.GridColumn gridUnits={this.props.showAsin ? 9 : 12} position="last">
            <BC.Heading spacing="micro">{this.props.product.title}</BC.Heading>

            <BC.GridRow>
              <BC.GridColumn gridUnits={this.props.showAsin ? 6 : 7}>
                <BC.GridRow spacing="mini">
                  <BC.Text>by</BC.Text>
                  <BC.LetterSpace />
                    { this.props.product.authors.map(function(author, index, originalArr) {
                        return (
                          <BC.Link>
                            {index + 1 >= originalArr.length ? author.name : author.name + ', '}
                          </BC.Link>
                        )
                      })
                    }
                </BC.GridRow>

                <BC.GridRow spacing="base">  
                  <BC.ReviewStars />
                </BC.GridRow>

                <BC.List listType="nostyle" spacing="medium">
                  <BC.ListItem spacing="mini">
                    <BC.Text>Narrated by:</BC.Text>
                    <BC.LetterSpace /> 
                      { this.props.product.narrators.map(function(narrator, index, originalArr) {
                          return (
                            <BC.Link>
                              {index + 1 >= originalArr.length ? narrator.name : narrator.name + ', '}
                            </BC.Link>
                          )
                        })
                      }
                  </BC.ListItem>
                  <BC.ListItem spacing="mini">
                    <BC.Text>Duration:</BC.Text>
                    <BC.LetterSpace /> 
                    { Math.floor(this.props.product.runtime_length_min / 60) } hrs { this.props.product.runtime_length_min % 60 } mins
                  </BC.ListItem>
                  <BC.ListItem spacing="mini">Series: <BC.Link>Series Name Here</BC.Link></BC.ListItem>
                </BC.List>

                <BC.Paragraph spacing="micro">
                  <span dangerouslySetInnerHTML={{__html: productSummary.substring(0,250) + '...'}} />
                </BC.Paragraph>
                
                <BC.Link onClick={()=>alert('opens pdp')}>Read More</BC.Link>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={this.props.showAsin ? 5 : 4} position="last">
                <CC.BuyBox
                  inWishlist={true} />                               
              </BC.GridColumn>
            </BC.GridRow>
          </BC.GridColumn>
        </BC.GridRow>
      </BC.Box>
    );
  }
}

LibraryTrayViews.PropTypes = {
  product: PropTypes.object,
  showAsin: PropTypes.bool
}

export default LibraryTrayViews;