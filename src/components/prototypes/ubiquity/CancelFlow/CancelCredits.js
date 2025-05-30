import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import CancelLayout from './CancelLayout';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class CancelCredits extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader />

        <BC.Box backgroundColor="inverse" heightCss="500px" paddingSize="extra-large" spacing="large">
          <BC.GridRow textAlign="center" textSize="large" textColor="inverse">To be done by cancel stream</BC.GridRow>
        </BC.Box>        

        <ProdFooter />
      </div>
    )
  }
}

export default CancelCredits;

// <CancelLayout>
//   <BC.Heading spacing="micro">If you cancel, you'll lose your 4 credits!</BC.Heading>
//   <BC.Paragraph spacing="large">
//     1 credit is good for any title. Cancel and your credits will be gone.
//   </BC.Paragraph>

//   <CC.ProductCarousel carouselTitle="Choose from Your Wish List" />

//   <BC.GridRow textAlign="right">
//     <BC.Button inline={true} buttonType="primary" app={true} url={"/prototypes/brickcity"}>Shop with Credits</BC.Button>
//     <BC.LetterSpace />
//     <BC.Button inline={true} app={true} url={"/prototypes/brickcity/cancel/form"}>Continue to Cancel</BC.Button>
//   </BC.GridRow>        
// </CancelLayout>