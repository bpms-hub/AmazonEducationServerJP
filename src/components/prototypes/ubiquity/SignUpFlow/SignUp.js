import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class CartNoCard extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        
        <div className="bc-container">
          <BC.GridRow>
            <BC.GridColumn gridUnits={4}>
              test
            </BC.GridColumn>

            <BC.GridColumn gridUnits={4}>
              test
            </BC.GridColumn>
          </BC.GridRow>
        </div>

        <ProdFooter/>
      </div>
    )
  }

}

export default CartNoCard;
