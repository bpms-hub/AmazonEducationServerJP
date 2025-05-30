import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Link from './Link';
import Text from './Text';
import Icon from './Icon';
import LetterSpace from './LetterSpace';
import Router from 'react-router';

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBreadcrumbs() {
    let routes = this.props.breadcrumbTrail;     

    let routeMap = routes.map(function(route, index){
      if(index + 1 < routes.length) {
        return (
          <span key={index}>
            <Link app={true} linkType={this.props.inverse ? "inverse" : "nav"} url={route.url}>{route.name}</Link>
            <LetterSpace size="mini"/>
            <Icon iconType="chevron-right" textColor={this.props.inverse ? "inverse" : null} />
            <LetterSpace size="mini"/>
          </span> 
        )      
      }
      else {
        return (
          <Text key={index} textColor={this.props.inverse ? "inactive" : "tertiary"}>{route.name}</Text>
        )
      }
    }.bind(this))

    return routeMap;
  }

  render() {
    let staticClasses = ['bc-breadcrumbs'];
    if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
    if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
    if (this.props.textColor) staticClasses.push('bc-color-' + this.props.textColor);

    return (
      <div className={classNames(staticClasses)}>
        {this.renderBreadcrumbs()}
      </div>
    );
  }

}
Breadcrumbs.propTypes = {
  includeHome: React.PropTypes.bool,
  spacing: PropTypes.string,
  spacingTop: PropTypes.string,
  textColor: PropTypes.string,
  inverse: PropTypes.bool,
  breadcrumbTrail: PropTypes.array.isRequired

}

export default Breadcrumbs;