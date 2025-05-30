import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Icon from './Icon';
import Text from './Text';
import LetterSpace from './LetterSpace';

class Expander extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanderShown: this.props.active
    };
  }

  toggleContent() {
    this.setState({
      isExpanderShown: !this.state.isExpanderShown
    });
  }

  renderRegular() {
    return (
      <span>
        {this.renderContent()}

        <a aria-expanded="false" className="bc-expander-link" onClick={this.toggleContent.bind(this)}>
          {
            this.state.isExpanderShown
            ? [<Text textColor="secondary">{this.props.hideText}</Text>, <Icon iconType="caret-up" />]
            : [<Text textColor="secondary">{this.props.showText}</Text>, <Icon iconType="caret-down" />]
          }
        </a>
      </span>
    )  
  }

  renderAnchor() {
    return (
      <span>
        <a aria-expanded="false" className="bc-expander-link" onClick={this.toggleContent.bind(this)}>
          {
            this.state.isExpanderShown
            ? [<Icon iconType="caret-down" />, <Text textColor="secondary">{this.props.hideText}</Text>]
            : [<Icon iconType="caret-right" />, <Text textColor="secondary">{this.props.showText}</Text>]
          }
        </a>    
        
        {this.renderContent()}
      </span>
    )
  }

  renderContent() {
    return (
      <div className={this.state.isExpanderShown ? null : 'bc-expander-inactive'}>
        {this.props.children}     
      </div>
    )
  }

  render() {
    let staticClasses = ['bc-expander'];
    if(this.props.cssClass) { staticClasses.push(this.props.cssClass); }

    return(
      <div id={this.props.id} className={classNames(staticClasses)}>
        {!this.props.anchor ? this.renderRegular() : this.renderAnchor()}
      </div>
    );
  }
}

Expander.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  showText: PropTypes.string,
  hideText: PropTypes.string,
  active: PropTypes.bool,
  anchor: PropTypes.bool
}

Expander.defaultProps = {
  hideText: 'hide',
  showText: 'more'
}

export default Expander;