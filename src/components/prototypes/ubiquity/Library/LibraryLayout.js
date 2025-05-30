import React from 'react';
import BC from 'AudibleUITags';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter';


class LibraryLayout extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      fixed: false,
      topPosition: null,
      bottomPosition: null,
      lastScrollPosition: null,
      currentDirection: null
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
      console.log('library mounted');
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      console.log('library unmounted');
  }

  handleScroll() {
    let sideNav = this.refs.sideNav;
    let content = this.refs.content;
    let container = this.refs.container;

    // console.log(window.scrollY, this.state.lastScrollPosition);

    let isAboveComponent = window.scrollY < container.offsetTop;
    let isBelowComponent = window.scrollY + window.innerHeight > container.offsetTop + container.offsetHeight;

    if (isAboveComponent) {
      this.refs.sideNav.style.position = 'relative';
    } else if (isBelowComponent) {
      let distanceFromTop = sideNav.getBoundingClientRect().top + window.scrollY - this.refs.container.offsetTop;
      this.refs.sideNav.style.position = 'relative';
      this.refs.sideNav.style.top = distanceFromTop + 'px';
    } else {
      if(this.state.lastScrollPosition > window.scrollY) {
        // console.log('scrolling up', sideNav.getBoundingClientRect().top);
        if (sideNav.getBoundingClientRect().top >= 0) {
          // console.log('hits top of nav');
          this.refs.sideNav.style.position = 'fixed';
          this.refs.sideNav.style.top = 0;
        } else {
          // console.log('not at top of nav');
          let distanceFromTop = sideNav.getBoundingClientRect().top + window.scrollY - this.refs.container.offsetTop;
          this.refs.sideNav.style.position = 'relative';
          this.refs.sideNav.style.top = distanceFromTop + 'px'; 
        }

      } else {
        // console.log('scrolling down', window.innerHeight, sideNav.offsetHeight + sideNav.getBoundingClientRect().top);

        if (window.innerHeight >= sideNav.offsetHeight + sideNav.getBoundingClientRect().top) {
          // console.log('at sidenav bottom');
          this.refs.sideNav.style.position = 'fixed';

          if (window.innerHeight >= sideNav.offsetHeight) {
            this.refs.sideNav.style.top = 0;
            this.refs.sideNav.style.bottom = null;
          } else {
            this.refs.sideNav.style.top = null; 
            this.refs.sideNav.style.bottom = 0;
          }


        } else {
          // console.log('not at sidenav bottom');
          let distanceFromTop = sideNav.getBoundingClientRect().top + window.scrollY - this.refs.container.offsetTop;
          this.refs.sideNav.style.position = 'relative';
          this.refs.sideNav.style.top = distanceFromTop + 'px';
        }
      }
    }

    this.setState({
      lastScrollPosition: window.scrollY
    });
  }

  render() {
    return (
      <div>
        <ProdHeader />

        <div className="bc-container bc-spacing-large">
          <div 
            className="bc-pub-relative bc-pub-clearfix" 
            ref="container" 
            style={{
              paddingLeft: '200px'
            }}>
            <div ref="sideNav" style={{
              float: 'left',
              marginLeft: '-200px',
              width: '200px'
            }}>
              <BC.Box backgroundColor="secondary" paddingSize="mini" spacingTop="small" spacing="small">
                <BC.GridRow spacing="mini">
                  <BC.Heading headingLevel={3} textSize="small" textCapitalize={true}>{this.props.title}</BC.Heading>
                </BC.GridRow>
                <BC.Divider spacing="small" />

                <BC.List spacing="mini" listType="nostyle" textSize="small">
                  <BC.ListItem spacing="micro">
                    <BC.Link app={true} textBold={!this.props.filter} url={this.props.type === 'library' ? '/prototypes/brickcity/library' : '/prototypes/brickcity/wishlist'} textColor="base">Everything</BC.Link>
                    <BC.LetterSpace size="micro" />
                    <BC.Text textColor="tertiary"></BC.Text>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base" textBold={this.props.filter === '1'} app={true} url={this.props.type === 'library' ? '/prototypes/brickcity/library?filter=1' :  '/prototypes/brickcity/wishlist?filter=1'}>Mystery & Thrillers</BC.Link>
                    <BC.LetterSpace size="micro" />
                    <BC.Text textColor="tertiary"></BC.Text>
                  </BC.ListItem>
                  <BC.ListItem spacing="micro">
                    <BC.Link textColor="base" textBold={this.props.filter === '2'} app={true} url={this.props.type === 'library' ? '/prototypes/brickcity/library?filter=2' :  '/prototypes/brickcity/wishlist?filter=2'}>Sci-Fi & Fantasy</BC.Link>
                    <BC.LetterSpace size="micro" />
                    <BC.Text textColor="tertiary"></BC.Text>
                  </BC.ListItem>
                </BC.List>
              </BC.Box>

              <BC.Box backgroundColor="secondary" paddingSize="mini" spacing="small">
                <BC.GridRow spacing="mini">
                  <BC.GridColumn gridUnits={6}>
                    <BC.Heading headingLevel={3} textSize="small" textCapitalize={true}>Filter By</BC.Heading>
                  </BC.GridColumn>

                  <BC.GridColumn textAlign="right" gridUnits={6} position="last">
                    <BC.Link textSize="mini" textColor="base">Clear All</BC.Link>
                  </BC.GridColumn>
                </BC.GridRow>
                <BC.Divider />

                <BC.Accordion activeRows={1} titleSize="small" titleCapitalize={true} showAllOnload={true}>
                  <BC.AccordionRow title="Program Types">
                    <BC.List spacing="mini" listType="nostyle" textSize="small">
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">Audiobooks</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">Periodicals</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                    </BC.List>
                  </BC.AccordionRow>

                  <BC.AccordionRow title="Progress">
                    <BC.List spacing="mini" listType="nostyle" textSize="small">
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">Everything</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">Finished</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">Unfinished</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>                      
                    </BC.List>
                  </BC.AccordionRow>

                  <BC.AccordionRow title="Length">
                    <BC.List spacing="mini" listType="nostyle" textSize="small">
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">Under 1 Hour</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">1-3 Hours</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">3-6 Hours</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">6-10 Hours</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">10-20 Hours</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                      <BC.ListItem spacing="micro">
                        <BC.Link textColor="base">Over 20 Hours</BC.Link>
                        <BC.LetterSpace size="micro" />
                        <BC.Text textColor="tertiary"></BC.Text>
                      </BC.ListItem>
                    </BC.List>
                  </BC.AccordionRow>
                </BC.Accordion>
              </BC.Box>
            </div>         

            <div ref="content" style={{
              float: 'left',
              paddingLeft: '20px',
              width: '100%'
            }}>
              { this.props.children }
            </div>
          </div>
        </div>

        <ProdFooter />
      </div>
    )
  }
}

export default LibraryLayout;