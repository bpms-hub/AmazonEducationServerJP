import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import CC from '../cc';
import classNames from 'classnames';

var AllCategories = {
  title: ['Mysteries & Thrillers', 'Sci-Fi & Fantasy', 'History', 'Science & Technology', 'Classics', 'Bios & Memoirs', 'Business', 'Self Development',
  'Romance', 'Fiction', 'Teens', 'Kids', 'Nonfiction', 'Comedy', 'Foreign Language', 'Kids', 'Erotica & Sexuality', 'Health & Fitness', 'Language Instruction',
  'Live Events', 'Newspapers & Magazines', 'Radio & TV', 'Religion & Spirituality', 'Sports', 'Travel & Adventure']
};

var Categories = {
  SciFiFantasy: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars'],
  Romance: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars'],
  Fiction: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars'],
  Teens: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars'],
  MysteriesThrillers: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars']
};

var filters = [
  ['LANGUAGE', 'English (27697)', 'German (3266)', 'Spanish (800)', 'Italian (598)', 'French (455)', 'More Languages'],
  ['PROGRAM TYPE', 'Audiobook (27612)', 'Performance (3266)', 'Speech (800)', 'Periodical (598)', 'Lecture (455)', 'More Languages'],
  ['PROGRAM FORMAT', 'Unabridged (27697)', 'Abridged (3266)', 'Original (800)', 'Highlights (598)'],
  ['LENGTH', 'Under 1 Hour (4)', '1-3 Hours (3)', '3-6 Hours (1)', '6-10 Hours (6)', '10-20 Hours (5)', 'More Languages'],
  ['RELEASE DATE', 'Whispersync for Voice (6)']
];

class BrowseSearch extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selected: null,
        height: null,
        lockBottom: false,
        lockTop: false,
        lastScrollPosition: null,

      }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {

    let menuHeight =  React.findDOMNode(this).scrollHeight;
    let marginTop = 160;
    let windowHeight = window.innerHeight;
    let hiddenMenu = menuHeight - windowHeight;
    let ScrollPos = window.scrollY;

    if ((this.state.lastScrollPosition > ScrollPos) && (this.state.lockBottom == true)){
        if (ScrollPos <= marginTop + hiddenMenu) {
          this.setState({
            lockBottom: false
          });
        } else {
          this.setState({
            lockBottom: true,
          });
        }
    }else{
      if ( (ScrollPos > marginTop) && (menuHeight < windowHeight) ) {
        this.setState({
          lockTop: true,
          lockBottom: true,
          height: menuHeight,
          lastScrollPosition: ScrollPos
        });
      }
      if ( (menuHeight > windowHeight) && (ScrollPos >= hiddenMenu + marginTop) ) {
        this.setState({
          lockTop:false,
          lockBottom: true,
          height: menuHeight,
          lastScrollPosition: ScrollPos
        });
      }
      if (ScrollPos < marginTop) {
        this.setState({
          lockBottom: false,
          lockTop: false,
          lastScrollPosition: ScrollPos
        });
      }

    }
  }

    handleClick(CategoryTitle) {
      this.setState({
        selected: CategoryTitle
      });

    }

    renderAllCategories(){
      var data = [];

      for (var x = 0; x <= AllCategories.title.length - 16; x++) {
        data.push(x)
      }

      var rowMap = data.map(function(index) {
        return(
            <BC.ListItem spacing="mini">
              <BC.Text>{AllCategories.title[index]}</BC.Text>
            </BC.ListItem>
        )
      })
      return rowMap;
    }

    renderAllCategoriesExpander(){
      var data = [];

      for (var x = 10; x <= AllCategories.title.length - 1; x++) {
        data.push(x)
      }

      var rowMap = data.map(function(index) {
        return(
            <BC.ListItem spacing="mini">
              <BC.Text>{AllCategories.title[index]}</BC.Text>
            </BC.ListItem>
        )

      })
      return rowMap;

    }

    renderCategory(){

          let Category = Categories.SciFiFantasy

            .map((Category) => {
            return(
              <BC.ListItem spacing="mini">
                <BC.LetterSpace />
                <BC.Link
                  onClick={this.handleClick.bind(this, Category)}
                  textColor={this.state.selected === Category ? "active" : "base"}>
                  {[Category]}
                </BC.Link>
              </BC.ListItem>
              )
          }, this);

          return Category;

        }


renderFilter(){
  var data = [];
  for(var i = 0; i < filters.length; i++) {
    var filterTitle = filters[i];
    var j = 0
      data.push(filterTitle[j])
      console.log("filterTitle[" + i + "][" + j + "] = " + filterTitle[j])

  }

  var rowFilterTitle = data.map(function(title, filter) {
    return(
      <div>
      <BC.Divider spacing="small" />

      <BC.Expander spacing="mini" anchor={true} showText={[title]} hideText={[title]} textBold={true}>
        <BC.List listType="nostyle" spacing="base">
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
            <BC.Text textColor="secondary">See More</BC.Text>
          </BC.ListItem>
        </BC.List>
      </BC.Expander>
      </div>
    )
  })
  return rowFilterTitle;
}


    render() {
      return (
        <div style={{
          width: "220px",
          top: this.state.lockTop ? "0" :  "auto",
          position: this.state.lockBottom ? "fixed" : "relative",
          bottom: this.state.lockBottom ? "0" : "auto",
          left: this.state.lockBottom ? "50%" : "auto",
          marginLeft: this.state.lockBottom ? "-500px" : "auto"}}>

        {this.props.allcategories
          ? <div>
            <BC.GridRow spacing="mini">
              <BC.Box backgroundColor="secondary">
                <BC.GridRow spacing="mini">
                  <BC.Text textSize="small" textCapitalize={true} textBold={true}>Categories</BC.Text>
                </BC.GridRow>
                <BC.Divider spacing="small" />

                <BC.List listType="nostyle">
                  {this.renderAllCategories()}
                </BC.List>

                {this.props.hasExpander
                ? <BC.Expander anchor={false} hideText="See Less" showText="See More">
                  <BC.List listType="nostyle">
                    {this.renderAllCategoriesExpander()}
                  </BC.List>
                </BC.Expander>
                : null
                }

               </BC.Box>
             </BC.GridRow>
            </div>
          : null
        }

        {this.props.categories
          ? <div>
            <BC.GridRow spacing="mini">
              <BC.Box backgroundColor="secondary">
                <BC.GridRow spacing="mini">
                  <BC.Text textSize="small" textCapitalize={true} textBold={true}>Categories</BC.Text>
                </BC.GridRow>
                <BC.Divider spacing="small" />
                <BC.GridRow spacing="mini">
                  <BC.Icon iconType="chevron-left" />
                  <BC.Link linkType="nav" app={true} url={this.props.categoryUrl}>All Categories</BC.Link>
                </BC.GridRow>
                <BC.List listType="nostyle">
                  <BC.ListItem spacing="mini">
                    <BC.Text textSize="small" textCapitalize={true}>{AllCategories.title[1]}</BC.Text>
                  </BC.ListItem>
                  {this.renderCategory()}
                </BC.List>
               </BC.Box>
             </BC.GridRow>
            </div>
          : null
        }

        {this.props.filters
          ? <div>
          <BC.Box backgroundColor="secondary">
            <BC.GridRow spacing="mini" textSize="mini">
              <BC.GridColumn gridUnits={6}>
                  <BC.Heading headingLevel={3} textCapitalize={true} textBold={true}>Filter By</BC.Heading>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={6} position="last" textAlign="right" textSize="micro">
                <BC.Text >Clear all</BC.Text>
              </BC.GridColumn>
            </BC.GridRow>
            {this.renderFilter()}
          </BC.Box>
            </div>
          : null
        }

        </div>
    )

    }

  }

  BrowseSearch.PropTypes = {
    id: PropTypes.string,
    allcategories: PropTypes.bool,
    categories: PropTypes.bool,
    subcategories: PropTypes.bool,
    categoryUrl: PropTypes.string,
    filters: PropTypes.bool,
    hasExpander: PropTypes.bool,
  }

  export default BrowseSearch;
