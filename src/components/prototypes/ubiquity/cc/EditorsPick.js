import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import productData from '../../../../data/prototypes/products.json';

class EditorsPick extends React.Component {
  render() {

    return (
      <div>
        <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={this.props.hasBrowseSearch ? 170 : 200}>
          <BC.FixedGridColumn side="left" fixedColumn="left" fixedColumnWidth={this.props.hasBrowseSearch ? 170 : 200}>
            <CC.Asin product={productData[0]} />
          </BC.FixedGridColumn>

          <BC.FixedGridColumn side="right" fixedColumn="left" columnPadding="15px">
              <BC.Heading headingLevel={2} spacing="micro">Remembering E.L Doctor Row</BC.Heading>
              {this.props.hasBrowseSearch
                ? <BC.Paragraph>
                The prolific author passed away on Tuesday, July 21st in New York City. ific author passed away on
                Tuesday, He was 84...
                </BC.Paragraph>

                : <BC.Paragraph>
                The prolific author passed away on Tuesday, July 21st in New York City. ific author passed away on
                Tuesday, He was 84. Renowned for his st in New York City. He was 84. historical novels, he was a master
                at ed for his historical novels, he was a blending fiction with...
                </BC.Paragraph>
              }

          </BC.FixedGridColumn>
        </BC.FixedGridRow>
      </div>
    );
  }
}

EditorsPick.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  hasBrowseSearch: PropTypes.bool
}

EditorsPick.defaultProps = {
  hasBrowseSearch: false
}

export default EditorsPick;
