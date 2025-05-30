import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import RecommendationsCarousel from './RecommendationsCarousel';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class LibraryTrayViews extends React.Component {
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
                      {this.props.product.complete
                        ? <BC.Button buttonType="primary" inline="true" size="small">Marked as Finished</BC.Button>
                        : <BC.Button inline="true" size="small">Mark as Finished</BC.Button>
                      }
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
                          {this.props.product.publication_name &&
                            <BC.ListItem spacing="mini">
                              <BC.Text>Series:</BC.Text>
                              <BC.LetterSpace />                              
                              <BC.Link>{this.props.product.publication_name}</BC.Link>
                            </BC.ListItem>
                          }
                        </BC.List>
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={1}>
                        <BC.Divider type="vertical" />
                      </BC.GridColumn>

                      <BC.GridColumn gridUnits={this.props.showAsin ? 5 : 4} position="last">
                        <BC.List cssClass="bc-inline-block" listType="nostyle" spacingTop="mini" spacing="mini">
                          <BC.ListItem spacing="mini">
                            <BC.TextButton iconType="download" onClick={()=> this.setState({currentTrayView: 2})} label="Download" />
                          </BC.ListItem>
                          <BC.ListItem spacing="mini">
                            <BC.TextButton iconType="star-hollow" onClick={()=> this.setState({currentTrayView: 3})} label="Rate & Review" />
                          </BC.ListItem>
                          <BC.ListItem spacing="mini">
                            <BC.TextButton iconType="whispersync" onClick={()=> this.setState({currentTrayView: 4})} label="Buy matching Kindle book" />
                          </BC.ListItem>
                          <BC.ListItem>
                            <BC.TextButton iconType="file" label="Download PDF" />
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

                <BC.Text>Download Options</BC.Text>
              </BC.Heading>

              <BC.GridRow spacing="base">
                <BC.GridColumn gridUnits={7}>
                  <BC.Heading headingLevel={2} spacing="mini">{this.props.product.title}</BC.Heading>
                </BC.GridColumn>

                <BC.GridColumn gridUnits={5} position="last" textAlign="right">
                  <BC.Text>Audio Quality</BC.Text>
                  <BC.LetterSpace />
                  <BC.Dropdown inline={true}>
                    <BC.DropdownOption>Enhanced</BC.DropdownOption>
                    <BC.DropdownOption>test</BC.DropdownOption>
                    <BC.DropdownOption>test</BC.DropdownOption>
                    <BC.DropdownOption>test</BC.DropdownOption>
                  </BC.Dropdown>
                </BC.GridColumn>
              </BC.GridRow>

              <BC.Divider spacing="medium" />
              
              <BC.Table spacing="base">
                <BC.TableRow>
                  <BC.TableColumn>
                    <BC.Heading headingLevel={3}>{this.props.product.title}</BC.Heading>
                  </BC.TableColumn>

                  <BC.TableColumn>00h 00m</BC.TableColumn>

                  <BC.TableColumn>
                    <BC.Dropdown>
                      <BC.DropdownOption>Deliver to...</BC.DropdownOption>
                      <BC.DropdownOption>test</BC.DropdownOption>
                      <BC.DropdownOption>test</BC.DropdownOption>
                      <BC.DropdownOption>test</BC.DropdownOption>
                    </BC.Dropdown>
                  </BC.TableColumn>

                  <BC.TableColumn>
                    <BC.Button disabled={true}>Deliver</BC.Button>
                  </BC.TableColumn>

                  <BC.TableColumn>
                    <BC.Button buttonType="primary">Download</BC.Button>
                  </BC.TableColumn>
                </BC.TableRow>
              </BC.Table>

              <BC.Expander anchor={true} hideText="Hide" showText="Download in Parts">
                <BC.Table>
                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Heading headingLevel={3}>Part 1</BC.Heading>
                    </BC.TableColumn>

                    <BC.TableColumn>00h 00m</BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Dropdown>
                        <BC.DropdownOption>Deliver to...</BC.DropdownOption>
                        <BC.DropdownOption>test</BC.DropdownOption>
                        <BC.DropdownOption>test</BC.DropdownOption>
                        <BC.DropdownOption>test</BC.DropdownOption>
                      </BC.Dropdown>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Button>Deliver</BC.Button>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Button buttonType="primary">Download</BC.Button>
                    </BC.TableColumn>
                  </BC.TableRow>

                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Heading headingLevel={3}>Part 2</BC.Heading>
                    </BC.TableColumn>

                    <BC.TableColumn>00h 00m</BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Dropdown>
                        <BC.DropdownOption>Deliver to...</BC.DropdownOption>
                        <BC.DropdownOption>test</BC.DropdownOption>
                        <BC.DropdownOption>test</BC.DropdownOption>
                        <BC.DropdownOption>test</BC.DropdownOption>
                      </BC.Dropdown>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Button>Deliver</BC.Button>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Button buttonType="primary">Download</BC.Button>
                    </BC.TableColumn>
                  </BC.TableRow>

                  <BC.TableRow>
                    <BC.TableColumn>
                      <BC.Heading headingLevel={3}>Part 3</BC.Heading>
                    </BC.TableColumn>

                    <BC.TableColumn>00h 00m</BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Dropdown>
                        <BC.DropdownOption>Deliver to...</BC.DropdownOption>
                        <BC.DropdownOption>test</BC.DropdownOption>
                        <BC.DropdownOption>test</BC.DropdownOption>
                        <BC.DropdownOption>test</BC.DropdownOption>
                      </BC.Dropdown>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Button>Deliver</BC.Button>
                    </BC.TableColumn>

                    <BC.TableColumn>
                      <BC.Button buttonType="primary">Download</BC.Button>
                    </BC.TableColumn>
                  </BC.TableRow>
                </BC.Table>
              </BC.Expander>
            </BC.Box>
          }
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup transitionName="example3">
          { this.state.currentTrayView === 3 &&
            <BC.Box paddingSize="medium" backgroundColor="base" heightCss="480px">
              <div className="bc-pub-relative" style={{
                height: '100%'
              }}>
                <BC.Heading spacing="mini">
                  <BC.Link onClick={() => this.setState({currentTrayView: 1})} textColor="base">
                    <BC.Icon iconType="chevron-left" iconSize="large" verticalAlign="top" />
                  </BC.Link>

                  <BC.Text>Rate and Review</BC.Text>
                </BC.Heading>

                <BC.Heading headingLevel={2} textColor="secondary" spacing="medium">{this.props.product.title}</BC.Heading>

                <BC.Divider spacing="base" />

                <BC.Heading headingLevel={3} textColor="secondary" spacing="base">Click to rate this title</BC.Heading>

                <BC.GridRow spacing="extra-large">
                  <BC.GridColumn gridUnits={4}> 
                    <BC.Heading headingLevel={3} spacing="mini">Overall</BC.Heading>
                    
                    <BC.RatingSelector />
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={4}> 
                    <BC.Heading headingLevel={3} spacing="mini">Performance</BC.Heading>

                    <BC.RatingSelector />
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={4} position="last"> 
                    <BC.Heading headingLevel={3} spacing="mini">Story</BC.Heading>

                    <BC.RatingSelector />
                  </BC.GridColumn>
                </BC.GridRow>

                <div style={{
                  bottom: 0,
                  position: 'absolute',
                  right: 0
                }}>
                  <BC.Link>Write a Review</BC.Link>
                </div>
              </div>
            </BC.Box>
          }
        </ReactCSSTransitionGroup>
        
        <ReactCSSTransitionGroup transitionName="example3">
          { this.state.currentTrayView === 4 &&
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

                  <BC.GridRow spacing="micro">
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
        
        <ReactCSSTransitionGroup transitionName="example3">
          { this.state.currentTrayView === 5 &&
            <BC.Box paddingSize="medium" backgroundColor="base">
              <BC.Link onClick={() => this.setState({currentTrayView: 1})}>
                <BC.Icon iconType="chevron-left" iconSize="large" />
              </BC.Link>
              
              <BC.Heading spacing="base">The New Yorker, 12-Month Subscription</BC.Heading>

              <BC.Divider spacing="mini" />

              <BC.GridRow spacing="mini">
                <BC.GridColumn gridUnits={1}>
                  <BC.Image block={true} imageWidth="100%" imageHeight="100%" source={this.props.product.product_images[500]} />
                </BC.GridColumn>

                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Heading spacing="micro" headingLevel={3}>Can the G.O.P. Deal with Inequality?</BC.Heading>
                  
                  <BC.GridRow>
                    <BC.GridColumn gridUnits={4}>
                      In Progress
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={4}>
                      George Packer
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={4} position="last">
                      00h 00m
                    </BC.GridColumn>
                  </BC.GridRow>
                </BC.GridColumn>
              </BC.GridRow>

              <BC.Divider spacing="mini" />

              <BC.GridRow spacing="mini">
                <BC.GridColumn gridUnits={1}>
                  <BC.Image block={true} imageWidth="100%" imageHeight="100%" source={this.props.product.product_images[500]} />
                </BC.GridColumn>

                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Heading spacing="micro" headingLevel={3}>Can the G.O.P. Deal with Inequality?</BC.Heading>
                  
                  <BC.GridRow>
                    <BC.GridColumn gridUnits={4}>
                      In Progress
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={4}>
                      George Packer
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={4} position="last">
                      00h 00m
                    </BC.GridColumn>
                  </BC.GridRow>
                </BC.GridColumn>
              </BC.GridRow>

              <BC.Divider spacing="mini" />

              <BC.GridRow spacing="mini">
                <BC.GridColumn gridUnits={1}>
                  <BC.Image block={true} imageWidth="100%" imageHeight="100%" source={this.props.product.product_images[500]} />
                </BC.GridColumn>

                <BC.GridColumn gridUnits={11} position="last">
                  <BC.Heading spacing="micro" headingLevel={3}>Can the G.O.P. Deal with Inequality?</BC.Heading>
                  
                  <BC.GridRow>
                    <BC.GridColumn gridUnits={4}>
                      In Progress
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={4}>
                      George Packer
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={4} position="last">
                      00h 00m
                    </BC.GridColumn>
                  </BC.GridRow>
                </BC.GridColumn>
              </BC.GridRow>
            </BC.Box>
          }
        </ReactCSSTransitionGroup>
      </BC.GridRow>
    );
  }
}

LibraryTrayViews.PropTypes = {
  product: PropTypes.object,
  showAsin: PropTypes.bool
}

export default LibraryTrayViews;