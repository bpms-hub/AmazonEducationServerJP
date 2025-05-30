import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';

class Product extends React.Component {
  render() {
    return (
      <span {...this.props}>

        <div className="bc-relative">
          <BC.GridRow spacing="micro">
            <BC.Link url={this.props.url ? this.props.url : null} app={this.props.url ? true : null}>
              <BC.Image cssClass="bc-product-asin" block={true} imageWidth={this.props.asinSize ? this.props.asinSize : '100%'} imageHeight={this.props.asinSize ? this.props.asinSize : '100%'} source={this.props.asinImageUrl ? this.props.asinImageUrl : 'test'} />
            </BC.Link>
            <CC.AudioTrigger fullTitle={this.props.triggerFullTitle} onClick={this.props.onAudioTriggerClick} initialText={this.props.initialAudioTriggerText} />
          </BC.GridRow>
        </div>
        <BC.GridRow>
        <BC.Text>{this.props.bookTitle}</BC.Text>
        </BC.GridRow>
        <BC.GridRow>
        <BC.Text>{this.props.bookAuthor}</BC.Text>
        </BC.GridRow>
        <BC.GridRow>

        </BC.GridRow>
      </span>
    );
  }

}



Product.propTypes = {
  asinSize: PropTypes.string,
  url: PropTypes.string,
  asinImageUrl: PropTypes.string,
  bookTitle: PropTypes.string,
  bookLength: PropTypes.string,
  bookAuthor: PropTypes.string,
  initialAudioTriggerText: PropTypes.string,
  hasStars: PropTypes.bool,
  onAudioTriggerClick: PropTypes.func
}

Product.defaultProps = {
    hasStars: false
}

export default Product;
