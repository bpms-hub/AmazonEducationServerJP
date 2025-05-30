import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import productData from '../../../../data/prototypes/products.json';

class LibraryMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bc-theme-dark">
        <div className="bc-container">
          <BC.Link>
            <BC.Icon iconType="grid" />
          </BC.Link>
          <BC.Link>
            <BC.Icon iconType="list" />
          </BC.Link>

          <BC.GridRow>
            { productData.map(function(product, index){
                return (
                  <BC.GridColumn gridUnits={6} key={index} spacing="base" position={index % 2 === 0 ? 'last' : null}>
                    <CC.Asin
                      ownershipState="owned"
                      product={product} />
                  </BC.GridColumn>
                )
              })
            }
          </BC.GridRow>
        </div>
      </div>
    )
  }
}

export default LibraryMobile;