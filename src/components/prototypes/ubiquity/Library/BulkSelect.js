import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';

class bulkSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    }
  }

  toggleHover(state) {
    this.setState({
      isHovered: state
    });
  }

  render() {
    return (
      <div
        {...this.props}
        className={classNames(["bc-relative"])}
        onMouseEnter={this.toggleHover.bind(this, true)} 
        onMouseLeave={this.toggleHover.bind(this, false)}>
        <div style={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 3
        }}>
          <BC.Checkbox onChange={this.props.onChangeBulkSelector} checked={this.props.isSelected ? true : false } />
        </div>

        {this.props.children}

        { this.props.isSelected &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2
          }}></div>
        }
      </div>
    );
  }

}

bulkSelect.propTypes = {
  isSelected: PropTypes.bool,
  activeBook: PropTypes.bool,
  viewType: PropTypes.string
}


export default bulkSelect;

