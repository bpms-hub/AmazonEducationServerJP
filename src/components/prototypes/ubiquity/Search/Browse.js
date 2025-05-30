import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';
import productData from '../../../../data/prototypes/products.json';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">

          {/* Left Side - Nav */}

          <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={200} spacingTop="medium">
            <BC.FixedGridColumn fixedColumn="left" fixedColumnWidth={200} side="left">

{/*
              <BC.Heading headingLevel={2} textColor="tertiary" spacing="mini">Categories</BC.Heading>

                <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Sci-Fi &amp; Fantasy</BC.Heading>
          <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Teens</BC.Heading>
        <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Kids</BC.Heading>
          <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Fiction</BC.Heading>
          <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Nostalgia Radio</BC.Heading>
          <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Mysteries & Thrillers</BC.Heading>
            <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Romance</BC.Heading>
<BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Classics</BC.Heading>
            <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Radio & TV</BC.Heading>
            <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Comedy</BC.Heading>
        <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Arts & Entertainment</BC.Heading>
          <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Drama & Poetry</BC.Heading>
      <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Erotica & Sexuality</BC.Heading>
            <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Comedy</BC.Heading>
            <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Arts & Entertainment</BC.Heading>
    <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Drama & Poetry</BC.Heading>
        <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Erotica & Sexuality</BC.Heading>
          <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Religion & Spirituality</BC.Heading>
          <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Language Instruction</BC.Heading>
      <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Podcasts</BC.Heading>
      <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Bios & Memoirs</BC.Heading>
        <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Nonfiction</BC.Heading>
        <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Science & Technology</BC.Heading>
    <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Live Events</BC.Heading>
    <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Newspapers & Magazines</BC.Heading>
        <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">History</BC.Heading>



                    <BC.Divider spacing="base"/>
                    <BC.Heading headingLevel={2} textColor="tertiary" spacing="mini">Filters</BC.Heading>
                    <BC.Expander spacing="mini" anchor={true} showText="Language" hideText="Language" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">English (27697)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">German (3266)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Spanish (800)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Italian (598)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">French (455)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Icon iconType="add"></BC.Icon>
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">More Languages</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                  </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Program Type" hideText="Program Type" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Audiobook (27612)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Performance (3266)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Speech (800)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Periodical (598)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Lecture (455)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Icon iconType="add"></BC.Icon>
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">More Program Types</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                    </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Program Format" hideText="Program Format" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Unabridged (27612)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Abridged (3266)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Original (800)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Highlights (598)</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                    </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Release Date" hideText="Release Date" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Last 30 Days (483)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Last 90 Days (1146)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Coming Soon (77)</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                    </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Length" hideText="Length" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Under 1 Hour (1725)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">1-3 Hours (2255)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">3-6 Hours (2588)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">6-10 Hours (4805)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">10-20 Hours (6423)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Over 20 Hours (855)</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                    </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Listen or Read" hideText="Listen or Read" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Whispersync for Voice (8868)</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                  </BC.Expander>

*/}

              <BC.Heading headingLevel={2} textColor="tertiary" spacing="mini">Categories</BC.Heading>
                    <BC.GridRow spacing="mini">
               <BC.Icon iconSize="mini" iconType="chevron-left" /> <BC.Text textSize="mini" textColor="secondary">See all categories</BC.Text>
               </BC.GridRow>
                <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Sci-Fi &amp; Fantasy</BC.Heading>
                    <BC.List listType="nostyle" textSize="small" spacing="base" >
                      <BC.ListItem spacing="mini">
                        <BC.LetterSpace size="base" /><BC.Text textColor="secondary">Doctor Who</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.LetterSpace size="base" />
                        <BC.Text textColor="secondary">Dramatizations</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.LetterSpace size="base" />
                      <BC.Text textColor="secondary">Fantasy: Contemporary</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.LetterSpace size="base" />
                      <BC.Text textColor="secondary">Fantasy: Epic</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.LetterSpace size="base" />
                      <BC.Text textColor="secondary">Fantasy: Paranormal</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.LetterSpace size="base" />
                      <BC.Text textColor="secondary" textBold={true}>Sci-Fi: Contemporary</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.LetterSpace size="base" />
                      <BC.Text textColor="secondary">Star Trek</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.LetterSpace size="base" />
                      <BC.Text textColor="secondary">Star Wars</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                    <BC.Divider spacing="base"/>
                    <BC.Heading headingLevel={2} textColor="tertiary" spacing="mini">Filters</BC.Heading>
                    <BC.Expander spacing="mini" anchor={true} showText="Language" hideText="Language" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">English (27697)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">German (3266)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Spanish (800)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Italian (598)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">French (455)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Icon iconType="add"></BC.Icon>
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">More Languages</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                  </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Program Type" hideText="Program Type" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Audiobook (27612)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Performance (3266)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Speech (800)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Periodical (598)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Lecture (455)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Icon iconType="add"></BC.Icon>
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">More Program Types</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                    </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Program Format" hideText="Program Format" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Unabridged (27612)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Abridged (3266)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Original (800)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Highlights (598)</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                    </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Release Date" hideText="Release Date" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Last 30 Days (483)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Last 90 Days (1146)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Coming Soon (77)</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                    </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Length" hideText="Length" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Under 1 Hour (1725)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">1-3 Hours (2255)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">3-6 Hours (2588)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">6-10 Hours (4805)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">10-20 Hours (6423)</BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Over 20 Hours (855)</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                    </BC.Expander>
                    <BC.Expander spacing="mini" anchor={true} showText="Listen or Read" hideText="Listen or Read" textBold={true}>
                    <BC.List listType="nostyle" spacing="base" textSize="small">
                      <BC.ListItem spacing="mini">
                        <BC.Checkbox />
                        <BC.LetterSpace />
                        <BC.Text textColor="secondary">Whispersync for Voice (8868)</BC.Text>
                      </BC.ListItem>
                    </BC.List>
                  </BC.Expander>
            </BC.FixedGridColumn>

            {/* Right Side - Search Result */}



            <BC.FixedGridColumn columnPadding="40px" fixedColumn="left" side="right" spacing="extra-large">


<BC.GridRow spacing="base">
  <BC.GridColumn gridUnits={6}>
<BC.Heading headingLevel={1}>Sci-Fi: Contemporary</BC.Heading>
  </BC.GridColumn>
  <BC.GridColumn gridUnits={3} position="last">
{/*    <BC.Text textAlign="right" textColor="tertiary" textSize="medium">See All: 5,892</BC.Text>*/}
  </BC.GridColumn>

</BC.GridRow>




<BC.Heading headingLevel={2} spacing="mini">Editor's Pick</BC.Heading>

    <BC.GridColumn gridUnits={4}>
        <CC.Product  asinImageUrl={productData[0].product_images[500]} />
</BC.GridColumn>

	<BC.Box backgroundColor="secondary" heightCss="240px" paddingSize="medium" spacing="small">
        <BC.GridColumn gridUnits={8} position="last">
          <BC.Heading headingLevel={1} spacing="base">Magnificent, Etoarum Etoum</BC.Heading>
      <BC.Paragraph textColor="secondary" spacing="base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </BC.Paragraph>
      <BC.GridRow>
        <BC.ReviewStars />
        </BC.GridRow>
        </BC.GridColumn>
  	</BC.Box>



<CC.ProductCarousel carouselSize="base" carouselTitle="Recommended For You In Sci-Fi: Contemporary" />
  	<BC.Box backgroundColor="inverse" heightCss="120px" spacing="medium"><BC.Text textColor="tertiary">Marketing Promotion</BC.Text></BC.Box>
      <CC.ProductCarousel  carouselSize="base" carouselTitle="New Releases In Sci-Fi: Contemporary"/>
          <CC.ProductCarousel  carouselSize="base" carouselTitle="Best Sellers In Sci-Fi: Contemporary"/>
            </BC.FixedGridColumn>
          </BC.FixedGridRow >
        </div>
        <ProdFooter/>
      </div>
    )
  }
}

export default Browse;
