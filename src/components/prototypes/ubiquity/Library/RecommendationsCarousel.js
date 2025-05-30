import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import productData from '../../../../data/prototypes/recommendations.json';

class RecommendationsCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BC.Box paddingSize="medium" backgroundColor="secondary">
        {this.props.product.publication_name &&
          <CC.Tabs>          
              <CC.TabPanel title="Series">
                  { productData.series.map((product, index)=>{
                      if (index < 3) {
                        return (
                          <BC.GridColumn gridUnits={4} position={index === 2 ? 'last' : null}>
                            <BC.GridColumn gridUnits={3}>
                              <BC.Link app={true} url={"/prototypes/brickcity/pdp/" + product.asin}>
                                <BC.Image source={product.product_images[500]} />
                              </BC.Link>
                            </BC.GridColumn>
                            <BC.GridColumn gridUnits={9} spacingTop="micro" position="last">
                              <BC.Heading style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }} headingLevel={3} textNowrap={true}>{product.title}</BC.Heading>
                              <BC.Text textSize="small">by</BC.Text>
                              <BC.LetterSpace />
                              { product.authors.map(function(author, index, originalArr) {
                                  return (
                                    <BC.Link textSize="small">
                                      {index + 1 >= originalArr.length ? author.name : author.name + ', '}
                                    </BC.Link>
                                  )
                                })
                              }
                            </BC.GridColumn>
                          </BC.GridColumn>  
                        )
                      } else {
                        return false;
                      }
                    })
                  } 
              </CC.TabPanel>
              <CC.TabPanel title="">
              </CC.TabPanel>
          </CC.Tabs>                                    
        }
          
        {!this.props.product.publication_name &&
        <CC.Tabs>          
            <CC.TabPanel title="Author">
              <BC.GridRow>
                { productData.author.map((product, index)=>{
                    if (index < 3) {
                      return (
                        <BC.GridColumn gridUnits={4} position={index === 2 ? 'last' : null}>
                          <BC.GridColumn gridUnits={3}>
                            <BC.Link app={true} url={"/prototypes/brickcity/pdp/" + product.asin}>
                              <BC.Image source={product.product_images[500]} />
                            </BC.Link>
                          </BC.GridColumn>
                          <BC.GridColumn gridUnits={9} spacingTop="micro" position="last">
                            <BC.Heading style={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }} headingLevel={3} textNowrap={true}>{product.title}</BC.Heading>
                            <BC.Text textSize="small">by</BC.Text>
                            <BC.LetterSpace />
                            { product.authors.map(function(author, index, originalArr) {
                                return (
                                  <BC.Link textSize="small">
                                    {index + 1 >= originalArr.length ? author.name : author.name + ', '}
                                  </BC.Link>
                                )
                              })
                            }
                          </BC.GridColumn>
                        </BC.GridColumn>  
                      )
                    } else {
                      return false;
                    }
                  })
                }
              </BC.GridRow> 
            </CC.TabPanel>

            <CC.TabPanel title="Narrator">
                { productData.narrator.map((product, index)=>{
                    if (index < 3) {
                      return (
                        <BC.GridColumn gridUnits={4} position={index === 2 ? 'last' : null}>
                          <BC.GridColumn gridUnits={3}>
                            <BC.Link app={true} url={"/prototypes/brickcity/pdp/" + product.asin}>
                              <BC.Image source={product.product_images[500]} />
                            </BC.Link>
                          </BC.GridColumn>
                          <BC.GridColumn gridUnits={9} spacingTop="micro" position="last">
                            <BC.Heading style={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }} headingLevel={3} textNowrap={true}>{product.title}</BC.Heading>
                            <BC.Text textSize="small">by</BC.Text>
                            <BC.LetterSpace />
                            { product.authors.map(function(author, index, originalArr) {
                                return (
                                  <BC.Link textSize="small">
                                    {index + 1 >= originalArr.length ? author.name : author.name + ', '}
                                  </BC.Link>
                                )
                              })
                            }
                          </BC.GridColumn>
                        </BC.GridColumn>  
                      )
                    } else {
                      return false;
                    }
                  })
                } 
            </CC.TabPanel>
        </CC.Tabs>
        }                                     
      </BC.Box>
    );
  }

}

RecommendationsCarousel.propTypes = {
  product: PropTypes.object
}

RecommendationsCarousel.defaultProps = {
}

export default RecommendationsCarousel;