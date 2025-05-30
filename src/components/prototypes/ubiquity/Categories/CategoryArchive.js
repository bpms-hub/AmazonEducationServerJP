import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';

class CategoryArchive extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>
        <div className="bc-container">
          <BC.Heading>View all Categories</BC.Heading>

          <BC.Heading headingLevel={3} spacing="base" spacingTop="medium">Category List</BC.Heading>
          {/* Section 1 */}

          <BC.GridRow spacing="large">
            <BC.GridColumn gridUnits={3}>
              <BC.Link>Audiobooks Abridged</BC.Link>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={3}>
              <BC.Link>Audiobooks Unabridged</BC.Link>
            </BC.GridColumn>
          </BC.GridRow>

          <BC.GridRow spacing="large">
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Arts & Entertainment</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Celebrity Bios</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Interviews & Panels</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Music</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>TV & Film</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Visual Arts</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Bios & Memoirs</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Artists, Writers, & Musicians</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Business Leaders</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Celebrities</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Criminals</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Personal Memoirs</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Political Figures</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Religious Figures
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Science & Technology Leaders</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Business</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Career Skills</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Commerce & Economy</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Leadership</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Management</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Marketing</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Personal Finance & Investing</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Sales
                  </BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3} position="last">

              <BC.Link>Classics</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>American Literature</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>British Literature</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Drama</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>European Literature</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Greek & Roman</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Kids & Young Adults</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Nonfiction</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Poetry</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Shakespeare</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>World Literature</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>

          </BC.GridRow>

          {/*Row 2*/}

          <BC.GridRow spacing="large" spacingTop="large">
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Comedy</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Classic American</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Classic British</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Memoris</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Satire</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Stand-Up & Jokes</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Storytelling</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Drama & Poetry</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Classic Drama</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Modern Drama</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Poetry</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Erotica & Sexuality</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">

                <BC.ListItem>
                  <BC.Link>Advice</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Fiction</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Susie Bright
                  </BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3} position="last">

              <BC.Link>Fiction</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>African-American</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Chick Lit</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Contemporary</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Gay & Lesbian</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Historical</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Horror</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Humor</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Literary</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Religious & Inspirational</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Short Stories & Anthologies</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Westerns</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>

          </BC.GridRow>

          {/* Row 4 */}

          <BC.GridRow spacing="large" spacingTop="large">
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Health & Fitness</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Aging Well</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Diets & Nutrition</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Workouts</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>History</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>20th Century</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>21st Century</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>American</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Ancient</BC.Link>
                </BC.ListItem>

                <BC.ListItem>
                  <BC.Link>European</BC.Link>
                </BC.ListItem>

                <BC.ListItem>
                  <BC.Link>Kids & Young Adults</BC.Link>
                </BC.ListItem>

                <BC.ListItem>
                  <BC.Link>Military</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Political</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>World</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Kids</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">

                <BC.ListItem>
                  <BC.Link>Ages 0-4</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Ages 5-7</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Animal Stories
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Biographies & History
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Classics
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Fables, Fairy Tales & Myths
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Fiction
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Mysteries
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Nonfiction
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Sci-Fi & Fantasy
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>With Synchronized Images
                  </BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3} position="last">

              <BC.Link>Language Instruction</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>English</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>French</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>German</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Italian</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Japanese</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Kids & Young Adults</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Other Languages</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Spanish</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>

          </BC.GridRow>

          {/* Row 4 */}

          <BC.GridRow spacing="large" spacingTop="large">
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Live Events</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Business</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Comedy</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Culture</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Personal Growth</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Politics</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Storytelling</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Mysteries & Thrillers</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Classic Detective</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Espionage</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Historical</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Legal Thrillers</BC.Link>
                </BC.ListItem>

                <BC.ListItem>
                  <BC.Link>Medical Thrillers</BC.Link>
                </BC.ListItem>

                <BC.ListItem>
                  <BC.Link>Modern Detective</BC.Link>
                </BC.ListItem>

                <BC.ListItem>
                  <BC.Link>Noir</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Police Procedurals</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Radio Dramas</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Suspense</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>True Crime</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Newspapers & Magazines</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">

                <BC.ListItem>
                  <BC.Link>Business</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>News & culture</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Science & Technology
                  </BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3} position="last">

              <BC.Link>Nonfiction</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Economics</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Gender Issues</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Philosophy</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Politics</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Social Sciences</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>True Crime</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Unexplained Phenomena</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>World Affairs</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>

          </BC.GridRow>

          {/* Row 5 */}

          <BC.GridRow spacing="large" spacingTop="large">
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Nostalgia Radio</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Comedy & Variety</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Crime & Mystery</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Movies</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Sci-Fi & Fantasy</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Westerns</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Radio & TV</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>British</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Documentaries</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Entertainment</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Great Interviews</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>How-To</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>News, Business, & Culture</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Science & Technology</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Religion & Spirituality</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">

                <BC.ListItem>
                  <BC.Link>Bibles</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Buddhism & Eastern Religions</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Christianity
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Islam
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Judaism
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Religious Thought
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Sermons & Ministries
                  </BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3} position="last">

              <BC.Link>Romance</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Chick Lit</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Contemporary</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Erotica</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Fantasy</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Historical</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Religious & Inspirational</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Suspense</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>

          </BC.GridRow>

          {/* Row 6 */}

          <BC.GridRow spacing="large" spacingTop="large">
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Science & Technology</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Astronomy</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Biology</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Environment</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Magazine & Radio</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Medicine</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Physics</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Psychology & The Mind</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Technology</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Science Fiction & Fantasy</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Doctor Who</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Dramatizations</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Fantasy: Contemporary</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Fantasy: Epic</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Fantasy: Paranormal</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Sci-Fi: Classic</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Sci-Fi: Contemporary</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Short Stories & Anthologies</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Star Trek</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Star Wars</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Self Development</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">

                <BC.ListItem>
                  <BC.Link>Communication Skills</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>How-To</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Hypnosis
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Meditation
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Motivation & Inspiration
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Parenting
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Personal Finance
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Relationships
                  </BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Sexuality
                  </BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3} position="last">

              <BC.Link>Sports</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Baseball</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Basketball</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Football</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Golf</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Other</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>

          </BC.GridRow>

          {/* Row 7 */}

          <BC.GridRow spacing="large" spacingTop="large">
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Teens</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Ages 11-13</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Ages 13 & Up</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Bios & Memoirs</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Family & Relationships</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Fiction & Literature</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Health & Sports</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>History & Historical Fiction</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Mysteries & Thrillers</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Myths & Legends</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Religion & Spirituality</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Romance & Friendship</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Sci-Fi & Fantasy</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Series</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Social Issues</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Study Guides & Language Learning</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>
            <BC.GridColumn gridUnits={3}>

              <BC.Link>Travel & Adventure</BC.Link>
              <BC.List listType="unordered" spacing="base" spacingTop="base">
                <BC.ListItem>
                  <BC.Link>Adventure & Exploration</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Essays & Travelogues</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Guided Tours</BC.Link>
                </BC.ListItem>

              </BC.List>

            </BC.GridColumn>

          </BC.GridRow>

        </div>
        <ProdFooter/>
      </div>
    )
  }
}
export default CategoryArchive;
