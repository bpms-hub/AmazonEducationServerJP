import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class CancelSuccess extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>

        <BC.Section spacing="large">
	        <div className="bc-container">
		        <BC.Image source="https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cancel-flow/santana-account-details._V288437107_.jpg" />
	        </div>
	    </BC.Section>

        <ProdFooter/>
      </div>
    )
  }
}

export default CancelSuccess;
