import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeaderMobile from '../Header/ProdHeaderMobile';
import ProdFooterMobile from '../Footer/ProdFooterMobile';
import productData from '../../../../data/prototypes/products.json';

class SearchMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSearchResults() {
    var rows = [];

    for (var x = 0; x < 3; x++) {
      rows.push(x)
    }

    var rowMap = rows.map(function() {
      return (
        <div>
          <BC.Heading headingLevel={2} spacing="small">
            Browse Category Title
          </BC.Heading>
          <BC.GridRow cssClass="bc-mobile-carousel">
          <BC.List pacing="small" listType="horizontal" cssClass="bc-mobile-panes" >
              <BC.ListItem>
                <CC.Product asinSize="114" bookTitle="Title of Book"
                bookAuthor="by First Last" hasStars={true} asinImageUrl={productData[0].product_images[500]} />
<BC.ReviewStars />
              </BC.ListItem>
              <BC.ListItem>
                <CC.Product asinSize="114" bookTitle="Title of Book"
                bookAuthor="by First Last" asinImageUrl={productData[1].product_images[500]} />
              <BC.ReviewStars />
              </BC.ListItem>
              <BC.ListItem>
                <CC.Product asinSize="114" bookTitle="Title of Book"
                bookAuthor="by First Last" asinImageUrl={productData[2].product_images[500]} />
              <BC.ReviewStars />
              </BC.ListItem>
              <BC.ListItem>
                <CC.Product asinSize="114" bookTitle="Title of Book"
                bookAuthor="by First Last" asinImageUrl={productData[3].product_images[500]} />
              <BC.ReviewStars />
              </BC.ListItem>
              <BC.ListItem>
                <CC.Product asinSize="114" bookTitle="Title of Book"
                bookAuthor="by First Last" asinImageUrl={productData[4].product_images[500]} />
              <BC.ReviewStars />
              </BC.ListItem>
              <BC.ListItem>
                <CC.Product asinSize="114" bookTitle="Title of Book"
                bookAuthor="by First Last" asinImageUrl={productData[0].product_images[500]} />
              <BC.ReviewStars />
              </BC.ListItem>
              <BC.ListItem>
                <CC.Product asinSize="114" bookTitle="Title of Book"
                bookAuthor="by First Last" asinImageUrl={productData[1].product_images[500]} />
              <BC.ReviewStars />
              </BC.ListItem>
              <BC.ListItem>
                <CC.Product asinSize="114" bookTitle="Title of Book"
                bookAuthor="by First Last" hasStars={true} asinImageUrl={productData[2].product_images[500]} />
              <BC.ReviewStars />
              </BC.ListItem>
          </BC.List>
</BC.GridRow>
        </div>

      )
    })
    return rowMap;
  }

  render() {
    return (
      <div>
        <ProdHeaderMobile member={true}/>
               <BC.Box paddingSize="small">
                 <BC.Text>315 results</BC.Text>
               </BC.Box>
               <BC.Table spacing={"small"}>
                 <BC.TableRow>
                   <BC.TableColumn>Sorted by "Relevance"</BC.TableColumn>
                   <BC.TableColumn><BC.Link>Filter</BC.Link></BC.TableColumn>
                 </BC.TableRow>
               </BC.Table>
        <div className="bc-container">

        <BC.GridRow spacing="small">
        <BC.Heading headingLevel={2} spacing="small">
        Editor's Pick
        </BC.Heading>
        <BC.GridColumn gridUnits={5}>
        <CC.Product hasStars={false}
        asinImageUrl={productData[2].product_images[500]} />
      </BC.GridColumn>

      <BC.GridColumn gridUnits={6} position="last">
        <BC.GridRow spacing="none">
<BC.Text textColor="base" textSize="base">Title of Book here</BC.Text>
</BC.GridRow>
  <BC.GridRow spacing="micro">
<BC.Text textColor="secondary" textSize="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus lectus arcu, varius
eget erat a, pellentesque
aliquet odio. Phasellus in
dolor augue. Aliquam dictum
turpis nisi</BC.Text>
</BC.GridRow>
<BC.ReviewStars /><BC.LetterSpace size="mini" /><BC.Text textSize="small">(210)</BC.Text>
      </BC.GridColumn>

        </BC.GridRow>
<BC.Divider size="medium" spacing="small"/>

        {this.renderSearchResults()}


        <BC.GridRow spacing="medium">
        <BC.Divider size="medium" spacing="small"/>
        <BC.Heading headingLevel={2} spacing="small">
        Popular in Fiction
        </BC.Heading>

        <BC.GridColumn gridUnits={6}>
          <BC.Box backgroundColor="inverse" paddingSize="extra-large" heightCss="186px" spacing="micro">
            <BC.GridRow  spacing="micro" textAlign="center" textSize="large" textColor="inverse">FPO Feature Image</BC.GridRow>
          </BC.Box>

          <BC.Box backgroundColor="inverse" paddingSize="extra-large" heightCss="186px">
            <BC.GridRow  spacing="micro" textAlign="center" textSize="large" textColor="inverse">FPO Feature Image</BC.GridRow>
          </BC.Box>
</BC.GridColumn>

        <BC.GridColumn gridUnits={6} position="last">
          <BC.Box backgroundColor="inverse" paddingSize="extra-large" heightCss="186px" spacing="micro">
            <BC.GridRow  spacing="micro" textAlign="center" textSize="large" textColor="inverse">FPO Feature Image</BC.GridRow>
          </BC.Box>

          <BC.Box backgroundColor="inverse" paddingSize="extra-large" heightCss="186px">
            <BC.GridRow  spacing="micro" textAlign="center" textSize="large" textColor="inverse">FPO Feature Image</BC.GridRow>
          </BC.Box>


        </BC.GridColumn>

        </BC.GridRow>

        <BC.GridRow>
        <BC.Heading headingLevel={2} spacing="small">
        Explore more in Fiction
        </BC.Heading>
        </BC.GridRow>



        </div>




        <ProdFooterMobile/>
      </div>
    )
  }
}

export default SearchMobile;
