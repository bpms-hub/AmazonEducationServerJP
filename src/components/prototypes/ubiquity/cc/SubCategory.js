import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class SubCategory extends React.Component {
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
          <BC.Section spacing="mini" className={this.state.activeElement === "category" ? 'bc-block' : 'bc-hidden'}>
            <a onClick={this.toggleElement.bind(this, "subcategory")}>
                <BC.Text textColor="secondary">{this.props.category}</BC.Text>
            </a>
          </BC.Section>
          </div>
        )
      }else {
        return (
          <div>
          <BC.Section className={this.state.activeElement === "subcategory" ? 'bc-block' : 'bc-hidden'}>
              <a onClick={this.toggleElement.bind(this, "category")}>
                  <BC.Section spacing="mini">
                    <BC.Icon iconType="chevron-left" textColor="secondary" />
                    <BC.Text textColor="secondary" textSize="small">Back to Categories</BC.Text>
                  </BC.Section>
              </a>
              <BC.Heading headingLevel={3} spacing="mini" textColor="secondary">{this.props.category}</BC.Heading>
              <div>
                {this.props.children}
              </div>
          </BC.Section>
          </div>
        )
      }
    }
}

SubCategory.PropTypes = {
  id: PropTypes.string,
  category: PropTypes.string
}

export default SubCategory;
