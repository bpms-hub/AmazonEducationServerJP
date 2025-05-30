import React from 'react';
import BC from 'AudibleUITags';
import ProdHeader from './Header/ProdHeader';

class ExampleHeader extends React.Component {
  render() {
    let conf = {
          color:{
            primary:'inverse', //base
            secondary: 'inverse', //secondary
            pipe: 'base', //none
            link: 'inverse', //base
            icon: 'white' //none
          },
          style:{
            container:{
              background:"url(https://images-na.ssl-images-amazon.com/images/G/08/AudibleFR/fr_FR/img/site/anonhp/hero_shot2.jpg) top center no-repeat"
              ,height:'300px'
            }
          },
          flyer: 'bc-library-element-39',
          logo: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_knockout.svg',
          menu: {
            top:{
              user:"Hallo User",
              credits:"0 Credits Verfügba",
              balance:"Coupon Abgleich: $5.00",
              contact:"Kostenlose Hotline  0800 58900 73",
            },

            main:{
              library:"Library",
              whishlist:"Wish List",
              browse:"Browse",
              lp:"Listener Page"
            }
          }
    }

    let conf1 = {
          color:{
            primary:'base', //base
            secondary: 'secondary', //secondary
            pipe: null, //none
            link: null, //base
            icon: null //none
          },
          style:{
            container:{
              background:'none',
            }
          },
          flyer: 'bc-library-element-39',
          logo: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo._V314169480_.svg'
          ,menu: {
            top:{
              user:"Hi User",
              credits:"0 Credits Available",
              balance:"Coupon Balance: $5.00",
              contact:"Contact Us 24/7",
            },

            main:{
              library:"Library",
              whishlist:"Wish List",
              browse:"Browse",
              lp:"Listener Page"
            }
          }
    }

    let conf2 = {
          color:{
            primary:'inverse', //base
            secondary: 'inverse', //secondary
            pipe: 'base', //none
            link: 'inverse', //base
            icon: 'white' //none
          },
          style:{
            container:{
              background:'url(https://images-na.ssl-images-amazon.com/images/G/03/AudibleDE/de_DE/img2/site/anon-hp/WOW_2_junge_hoert_hoerbuch.jpg) top center no-repeat '
              ,height:'300px'
            }
          },
          flyer: 'bc-library-element-42',
          logo: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_knockout.svg'
          ,          menu: {
                      top:{
                        user:"Hi User",
                        credits:"0 Credits Available",
                        balance:"Coupon Balance: $5.00",
                        contact:"Contact Us 24/7",
                      },

                      main:{
                        library:"Bibilothek",
                        whishlist:"Startseite",
                        browse:"Hörbücher",
                        lp:""
                      }
                    }
    }

    return (
      <div>
        <ProdHeader config={conf1}/>
          <BC.Divider dividerType="dotted" spacing="micro" spacingTop="micro" ></BC.Divider>
        <ProdHeader config={conf}/>
          <BC.Divider dividerType="dotted" spacing="micro" spacingTop="micro" ></BC.Divider>
        <ProdHeader config={conf2}/>
          <BC.Divider dividerType="dotted" spacing="large" spacingTop="micro" ></BC.Divider>
      </div>
    )
  }
}

export default ExampleHeader;
