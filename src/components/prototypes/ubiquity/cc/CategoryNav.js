import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import BC from 'AudibleUITags';
import classNames from 'classnames';

class CategoryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeElement: "category"
    }
  }

  toggleElement(element) {
    this.setState({
      activeElement: element
    });

  }

  render() {

    if (this.state.activeElement === "category") {
        return (

          <div>
          <BC.Section spacing="mini">
            <a onClick={this.toggleElement.bind(this, "subcategory")}>
                <BC.Text textColor="secondary">{this.props.category}</BC.Text>
            </a>
          </BC.Section>
          </div>

        )
      }

      if (this.state.activeElement === "subcategory") {
        return (
          <div>
          <BC.Section >
              <a onClick={this.toggleElement.bind(this, "category")}>
                  <BC.Section spacing="mini">
                    <BC.Icon iconType="chevron-left" textColor="secondary" />
                    <BC.Text textColor="secondary" textSize="small">Back to Categories</BC.Text>
                  </BC.Section>
              </a>
              <BC.Heading headingLevel={3} spacing="mini" textColor="secondary">{this.props.category}</BC.Heading>
              <BC.List listType="nostyle" textSize="small" >
                <BC.ListItem spacing="mini">
                  <BC.LetterSpace />
                  <BC.Text textColor="secondary">Doctor Who</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="mini">
                  <BC.LetterSpace />
                  <BC.Text textColor="secondary">Dramatizations</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="mini">
                  <BC.LetterSpace />
                  <BC.Text textColor="secondary">Fantasy: Epic</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="mini">
                  <BC.LetterSpace />
                  <BC.Text textColor="secondary">Fantasy: Paranormal</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="mini">
                  <BC.LetterSpace />
                  <BC.Text textColor="secondary">Sci-Fi: Classic</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="mini">
                  <BC.LetterSpace />
                  <BC.Text textColor="secondary">Sci-Fi: Contemporary</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="mini">
                  <BC.LetterSpace />
                  <BC.Text textColor="secondary">Star Trek</BC.Text>
                </BC.ListItem>
                <BC.ListItem spacing="mini">
                  <BC.LetterSpace />
                  <BC.Text textColor="secondary">Star Wars</BC.Text>
                </BC.ListItem>
              </BC.List>
          </BC.Section>
          </div>
        )
      }
    }
}

CategoryNav.PropTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
}

export default CategoryNav;
