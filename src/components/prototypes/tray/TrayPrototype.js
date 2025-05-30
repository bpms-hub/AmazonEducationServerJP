import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import productData from '../../../data/prototypes/products.json';

class TrayPrototype extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />

          <div className="bc-container">

            <BC.FixedGridRow spacing="large" spacingTop="large" fixedColumn="left" fixedColumnWidth={184}>
              <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={184} side="left">
                test
              </BC.FixedGridColumn>
              <BC.FixedGridColumn columnPadding="20px" fixedColumn="left" side="right">            
                <CC.Tray />
              </BC.FixedGridColumn>
            </BC.FixedGridRow>

          </div>

        <Footer />
      </div>
    );
  }
}


export default TrayPrototype;