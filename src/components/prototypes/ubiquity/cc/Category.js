import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class Category extends React.Component {


  render() {

    return(

      <div {...this.props}>
        <a onClick={this.toggleElement.bind(this, "subcategory")}>
          <BC.Text textColor="secondary">{this.props.category}</BC.Text>
        </a>
        {this.props.children}
      </div>

    );
  }
}

Category.PropTypes = {
  id: PropTypes.string,
  category: PropTypes.string
}

export default Category;
