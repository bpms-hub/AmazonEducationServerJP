import React, { PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import BC from 'AudibleUITags';
import CC from '../cc';
import productData from '../../../../data/prototypes/products.json';

class ProductListingMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showActionButtons: false
    };
  }

toggleActionButtons(){
  if (this.state.showActionButtons) {
    this.setState({
      showActionButtons: false
    });
  }
  else {
    this.setState({
      showActionButtons: true
    });
  }

}
  renderProduct() {

    return (
      <div>
      <div className="bc-container">

      <BC.Divider spacing="base"  />

          <BC.GridRow spacing="base">
            <BC.GridColumn gridUnits={3} >
              <CC.Asin product={productData[0]} />
            </BC.GridColumn>

            <BC.GridColumn gridUnits={7}>
                <BC.List listDirection="nostyle" textSize="mini">
                    {this.props.bookSeries
                      ? <BC.ListItem textColor="secondary">Series: <BC.Link>{this.props.bookSeries}</BC.Link></BC.ListItem>
                      : null
                    }
                    {this.props.bookTitle
                      ? <BC.ListItem textColor="base" textSize="base">{this.props.bookTitle}</BC.ListItem>
                      : null
                    }
                    {this.props.bookAuthor
                      ? <BC.ListItem textColor="secondary">by {this.props.bookAuthor}</BC.ListItem>
                      : null
                    }
                    {this.props.bookNarrator
                      ? <BC.ListItem textColor="secondary">
                          <BC.Text>Narrator: </BC.Text>
                          {this.props.bookNarrator}
                        </BC.ListItem>
                      : null
                    }
                    {this.props.bookLength
                      ? <BC.ListItem textColor="secondary" >
                          <BC.Text>Duration: </BC.Text>
                          {this.props.bookLength}
                        </BC.ListItem>
                      : null
                    }
                    {this.props.bookPrice
                      ? <BC.ListItem textColor="secondary" spacing="micro">
                          <BC.Text textBold={true}>${this.props.bookPrice} With Membership</BC.Text>
                        </BC.ListItem>
                      : null
                    }
                    {this.props.bookRating
                      ? <BC.ListItem textColor="secondary">
                          <BC.ReviewStars averageRating={4.8} iconColor="state" showAverageRating={true}/>
                        </BC.ListItem>
                      : null
                    }
                      </BC.List>

              </BC.GridColumn>

              <BC.GridColumn gridUnits={2} position="last" textAlign="right">
                      <BC.Link onClick={this.toggleActionButtons.bind(this)}>
                        <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/overflow._V288120370_.svg" />
                      </BC.Link>

              </BC.GridColumn>

            </BC.GridRow>
        </div>
            <div className={classNames(["bc-action-sheet, bc-action-sheet", this.state.showActionButtons ? "bc-block" : "bc-hidden"])}>
              <BC.Section textAlign="center">
                <div
                className="bc-action-sheet-btns"
                style={{
                  top: this.state.showActionButtons ? "auto" : "100%",
                  bottom: this.state.showActionButtons ? "0" : "auto"
                }}>
                  <BC.List listType="nostyle">
                    <BC.ListItem>
                      <BC.Divider />
                      <BC.Link textColor="base" onClick={this.toggleActionButtons.bind(this)}><BC.Box backgroundColor="secondary">Add to Library</BC.Box></BC.Link>
                    </BC.ListItem>
                    <BC.ListItem>
                      <BC.Divider />
                      <BC.Link textColor="base" onClick={this.toggleActionButtons.bind(this)}><BC.Box backgroundColor="secondary">Add to Wish List</BC.Box></BC.Link>
                    </BC.ListItem>
                    <BC.ListItem>
                      <BC.Divider />
                      <BC.Link textColor="base" onClick={this.toggleActionButtons.bind(this)}><BC.Box backgroundColor="secondary">Cancel</BC.Box></BC.Link>
                    </BC.ListItem>
                  </BC.List>
               </div>
            </BC.Section>
          </div>

      </div>
    );
  }

  render() {
    return (
      <span>
      {this.renderProduct()}
      </span>
    );
  }

}

ProductListingMobile.propTypes = {
  bookAuthor: PropTypes.string,
  bookLength: PropTypes.string,
  bookNarrator: PropTypes.string,
  bookPrice: PropTypes.string,
  bookRating: PropTypes.bool,
  bookSeries: PropTypes.string,
  bookTitle: PropTypes.string,
}

export default ProductListingMobile;
