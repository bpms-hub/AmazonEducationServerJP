import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      value: null
    }
  }

  // clearSearch() {

  // }

  componentDidUpdate() {
    if (this.refs.input) {
      React.findDOMNode(this.refs.input).focus();
    }
  }

  onChange(event) {
    console.log('changed');
    this.props.onChange(event);
  }

  showSearch() {
    this.setState({
      showSearch: true
    });
  }

  hideSearch(e) {
    this.setState({
      showSearch: false
    });
  }

  render() {
    let staticClasses = [];

    return (
      <span className="bc-relative">
        <span style={{
          position: 'absolute',
          left: 0
        }}>
          <BC.Icon iconType="search" onClick={this.showSearch.bind(this)} />
        </span>

        {this.state.showSearch &&
          <span>
            <input
              {...this.props}
              onChange={this.onChange.bind(this)}
              ref="input"
              value={this.state.val}
              style={{
                backgroundColor: 'none',
                border: 'none',
                borderBottom: '1px solid #ccc',
                outline: 'none',
                padding: '0 20px'
              }} />

            <span style={{
              position: 'absolute',
              right: 0
            }}>
              <BC.Icon iconType="close" onClick={this.hideSearch.bind(this)} />
            </span>
          </span>
        }
      </span>
    );
  }

}
SearchFilter.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  onChange: PropTypes.function
}

export default SearchFilter;
