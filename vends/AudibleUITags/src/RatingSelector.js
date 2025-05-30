import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Text from './Text';
import Icon from './Icon';
import Link from './Link';
import LetterSpace from './LetterSpace';
import PopoverTrigger from './PopoverTrigger';

class RatingSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverSelection: 0,
      ratingDesc: "It's ok",
      currentSelection: null,
      color: "inactive"
    };
  }

  setStarsShown(selection) {
    let tooltipText;

    switch (selection)
    {
      case 1: tooltipText = "I hate it";
        break;
      case 2: tooltipText = "I don't like it";
        break;
      case 3: tooltipText = "It's ok";
        break;
      case 4: tooltipText = "I like it";
        break;
      case 5: tooltipText = "I love it";
        break;
    }

    this.setState({
      hoverSelection: selection,
      ratingDesc: tooltipText,
      color: "base"
    });
  }

  selectStar(indexPlusOne) {
    this.setState({
      currentSelection: indexPlusOne
    });
  }

  leaveHover(indexPlusOne) {
    let selection = this.state.currentSelection ? this.state.currentSelection : 0;
    this.setStarsShown(selection);
  }

  renderStars() {
    let starArray = [];

    for (var i = 0; i < 5; i++) {
      starArray.push(
        <Link>
          <Icon 
            onMouseEnter={this.setStarsShown.bind(this, i+1)} 
            onClick={this.selectStar.bind(this, i+1)}
            verticalAlign="baseline" 
            iconType={this.state.hoverSelection >= i+1 ? 'star' : 'star-hollow'} 
            textColor={this.state.color} />
        </Link>
      )
    }

    return starArray;
  }

  render() {
    let staticClasses = ['bc-rating-selector'];

    return (
      <PopoverTrigger tooltip={this.state.ratingDesc} tooltipSide="right">
        <span className={classNames(staticClasses)} onMouseLeave={this.leaveHover.bind(this)}>
        	{this.renderStars()}
        </span>
      </PopoverTrigger>
    );
  }

}

RatingSelector.propTypes = {
  numRatings: PropTypes.number,
  averageRating: PropTypes.number
}

export default RatingSelector;