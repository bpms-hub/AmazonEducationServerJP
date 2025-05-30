import React from 'react';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import productData from '../../../data/prototypes/mcdonaldsLibrary.json';
import RibbonPlayer from './RibbonPlayer';

class Audiobooks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        { productData.map((product, index) => {
            return (
              <BC.Link app={true} url={"/prototypes/mcdonalds-library/player"} key={index}>
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
      </span>
    )
  }
}

export default Audiobooks;
