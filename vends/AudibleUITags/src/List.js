import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import { linkrr } from 'react-router'

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    
  renderUnordered(classes) {
    return (
      <ul
        {...this.props}
        id={this.props.id}
        className={classes}>
        {this.props.children}
      </ul>
    );
  }

  renderOrdered(classes) {
    return (
      <ol
        {...this.props}
        id={this.props.id}
        className={classes}>
        {this.props.children}
      </ol>
    );
  }

  render() {
    let staticClasses = ['bc-list'];
    if(this.props.cssClass) staticClasses.push(this.props.cssClass);
    if(this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if(this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if(this.props.textSize) { staticClasses.push('bc-size-' + this.props.textSize); }
    if(this.props.textColor) { staticClasses.push('bc-color-' + this.props.textColor); }
    if(this.props.textBold) { staticClasses.push('bc-text-bold'); }
    if(this.props.textCapitalize) { staticClasses.push('bc-text-capitalize'); }
    if(this.props.textEmphasis) { staticClasses.push('bc-text-emphasis'); }
    if(this.props.textQuote) { staticClasses.push('bc-text-quote'); }
    if(this.props.textStrike) { staticClasses.push('bc-text-strike'); }
    if(this.props.textNormal) { staticClasses.push('bc-text-normal'); }
    if(this.props.textNowrap) { staticClasses.push('bc-text-nowrap'); }
    if(this.props.listType) { staticClasses.push('bc-list-' + this.props.listType); }
    if(this.props.listDirection) { staticClasses.push('bc-list-' + this.props.listDirection); }

    let renderedListType = this.props.listType === 'ordered' ? 'renderOrdered' : 'renderUnordered';

    return (
      <span>
        {this[renderedListType](classNames(staticClasses))}
      </span>
    );
  }

}

List.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  textBold: PropTypes.bool,
  textCapitalize: PropTypes.bool,
  textEmphasis: PropTypes.bool,
  textQuote: PropTypes.bool,
  textStrike: PropTypes.bool,
  textNormal: PropTypes.bool,
  textNowrap: PropTypes.bool,
  listType: PropTypes.string,
  listDirection: PropTypes.string
}

List.defaultProps = {
  listType: 'unordered',
  spacingTop: 'none',
  spacing: 'none'
}

export default List;
