import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import SearchItems from './SearchItems';
import productData from '../../../../data/prototypes/products.json';
import classNames from 'classnames';

class Search extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        lockBottom: false
      }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.isScrolling.bind(this));
    console.log("mounted");
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.isScrolling.bind(this));
    console.log("unmounted");
  }

  isScrolling() {
    let menuHeight =  React.findDOMNode(this.refs.menu).scrollHeight;
    let contentHeight =  React.findDOMNode(this.refs.content).scrollHeight;
    let marginTop = 160;
    let windowHeight = window.innerHeight;
    let hiddenContent = contentHeight - windowHeight;
    let ScrollPos = window.scrollY;

    let reachedFooter = (this.state.lockBottom == true)
                        && (contentHeight > windowHeight)
                        && (ScrollPos >= hiddenContent + marginTop);

    if(reachedFooter) {
      console.log('reached footer');
      this.setState({
        lockBottom: false
      });
    }
  }

  render() {

    return (

      <div>

        <ProdHeader />
        <div className="bc-container">

          {/* Left Side - Nav */}
          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={220} spacingTop="large">
              <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={220} side="left">
                <div
                ref="menu"
                style={{
                  width: "220px",
                  position: this.state.lockBottom ? "fixed" : "relative",
                  bottom: this.state.lockBottom ? "0" : "auto",
                  left: this.state.lockBottom ? "50%" : "auto",
                  marginLeft: this.state.lockBottom ? "-500px" : "auto"}}
                >
                  <CC.BrowseSearch allcategories={true} filters={true} openFilter={true} />
                </div>
              </BC.FixedGridColumn>

            {/* Right Side - Search Result */}
            <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="20px">
              <div ref="content">

                <SearchItems />
              </div>
            </BC.FixedGridColumn>
          </BC.FixedGridRow>

          <CC.ProductCarousel carouselTitle="You Might Also Like ..."/>

        </div>

        <ProdFooter />
      </div>
    )
  }
}

export default Search;
