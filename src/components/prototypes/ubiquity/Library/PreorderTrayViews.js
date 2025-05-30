import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import RecommendationsCarousel from './RecommendationsCarousel';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PreorderTrayViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrayView: 1
    }
  }

  render() {
    return (
      <BC.GridRow textColor="secondary">
        <ReactCSSTransitionGroup transitionName="example4">
          { this.state.currentTrayView === 1 &&
            <div>
              <BC.Box paddingSize="medium" backgroundColor="base" heightCss="285px">
                <BC.GridRow>
                  {this.props.showAsin &&
                    <BC.GridColumn gridUnits={3}>
                      <CC.Asin product={this.props.product} />
                    </BC.GridColumn>
                  }

                  <BC.GridColumn gridUnits={this.props.showAsin ? 9 : 12} position="last">
                    <BC.Heading spacing="micro">
                      {this.props.product.title}
                      <BC.LetterSpace />
                    </BC.Heading>

                    <BC.GridRow spacing="medium">
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

                    <BC.GridRow>
                      <BC.GridColumn gridUnits={this.props.showAsin ? 6 : 7}>
                        <BC.List listType="nostyle">
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
                          <BC.ListItem spacing="mini">Series: <BC.LetterSpace /> <BC.Link>Series Name Here</BC.Link></BC.ListItem>
                        </BC.List>
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={1}>
                        <BC.Divider type="vertical" />
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={this.props.showAsin ? 5 : 4} position="last">
                        <BC.List cssClass="bc-inline-block" listType="nostyle" spacingTop="mini" spacing="mini">
                          <BC.ListItem spacing="mini">
                            <BC.Link textColor="base" onClick={()=> this.setState({currentTrayView: 2})}>
                              <BC.Icon iconType="whispersync" /><BC.LetterSpace />But Matching Kindle Book
                            </BC.Link>
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.Link textColor="base" onClick={()=> this.setState({currentTrayView: 3})}>
                              <BC.Icon iconType="close" /><BC.LetterSpace />Cancel Pre-order
                            </BC.Link>
                          </BC.ListItem>
                        </BC.List>
                      </BC.GridColumn>
                    </BC.GridRow>
                  </BC.GridColumn>
                </BC.GridRow>
              </BC.Box>

              <RecommendationsCarousel product={this.props.product} />
            </div>
          }
        </ReactCSSTransitionGroup>
        
        <ReactCSSTransitionGroup transitionName="example3">
          { this.state.currentTrayView === 2 &&
            <BC.Box paddingSize="medium" backgroundColor="base">
              <BC.Heading spacing="mini">
                <BC.Link onClick={() => this.setState({currentTrayView: 1})} textColor="base">
                  <BC.Icon iconType="chevron-left" iconSize="large" verticalAlign="top" />
                </BC.Link>

                <BC.Text>Get the kindle companion</BC.Text>
              </BC.Heading>

              <BC.Paragraph spacing="base">
                Whispersync for Voice lets you seamlessly switch back and forth between listening and reading without ever losing your place.
              </BC.Paragraph>

              <BC.Divider spacing="base" />
              
              <BC.GridRow>
                <BC.GridColumn gridUnits={2}>
                  <BC.Image block={true} imageWidth="100%" imageHeight="170px" source={this.props.product.product_images[500]} />
                </BC.GridColumn>

                <BC.GridColumn gridUnits={6}>
                  <BC.GridRow spacing="mini" textColor="secondary">Kindle Edition</BC.GridRow>

                  <BC.Heading spacing="mini">{this.props.product.title}</BC.Heading>

                  <BC.GridRow spacing="micro">by <BC.Link>Author Name</BC.Link></BC.GridRow>

                  <BC.ReviewStars />                                
                </BC.GridColumn>

                <BC.GridColumn gridUnits={4} position="last">
                  <BC.GridRow spacing="base">Sold and delivered by Amazon.com</BC.GridRow>

                  <BC.Button buttonType="primary">Buy on Amazon.com</BC.Button>
                </BC.GridColumn>
              </BC.GridRow>
            </BC.Box>
          }
        </ReactCSSTransitionGroup>
      </BC.GridRow>
    );
  }
}

PreorderTrayViews.PropTypes = {
  product: PropTypes.object,
  showAsin: PropTypes.bool
}

export default PreorderTrayViews;