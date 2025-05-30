import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import CancelLayout from './CancelLayout';

class CancelForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        currentOffer: 1,
        showOther: false
      }
  }

  selectOffers(offerNumber, otherOption) {
    console.log(otherOption);

    this.setState({
      currentOffer: offerNumber,
      showOther: otherOption
    })
  }

  render() {
    return (
      <CancelLayout>
        <BC.Heading spacing="micro">Will you let us know why you're canceling?</BC.Heading>
        <BC.Paragraph spacing="medium">
          It'll just take a minute.
        </BC.Paragraph>

        <BC.Form spacing="medium">
          <BC.GridRow spacing="mini">
            <BC.RadioButton name="cancel-option" onChange={this.selectOffers.bind(this, 1, false)} label="It&#39;s too expensive" />
          </BC.GridRow>
          <BC.GridRow spacing="mini">
            <BC.RadioButton name="cancel-option" onChange={this.selectOffers.bind(this, 3, false)} label="I had technical issues" />
          </BC.GridRow>
          <BC.GridRow spacing="mini">
            <BC.RadioButton name="cancel-option" onChange={this.selectOffers.bind(this, 1, false)} label="I couldn&#39;t find audiobooks I liked" />
          </BC.GridRow>
          <BC.GridRow spacing="mini">
            <BC.RadioButton name="cancel-option" onChange={this.selectOffers.bind(this, 4, false)} label="Audiobooks aren&#39;t for me" />
          </BC.GridRow>
          <BC.GridRow spacing="mini">
            <BC.RadioButton name="cancel-option" onChange={this.selectOffers.bind(this, 1, false)} label="I didn&#39;t know it was a member" />
          </BC.GridRow>
          <BC.GridRow spacing="mini">
            <BC.RadioButton name="cancel-option" onChange={this.selectOffers.bind(this, 2, false)} label="I don&#39;t use it enough" />
          </BC.GridRow>
          <BC.GridRow spacing="mini">
            <BC.RadioButton name="cancel-option" onChange={this.selectOffers.bind(this, 1, false)} label="I&#39;m using another service" />
          </BC.GridRow>
          <BC.GridRow spacing="mini">
            <BC.RadioButton name="cancel-option" onChange={this.selectOffers.bind(this, 1, true)} label="Other reason:" />
          </BC.GridRow>
          <BC.GridRow cssClass={this.state.showOther ? null : "bc-hidden"} spacing="mini">
            <BC.GridColumn gridUnits={6}>
              <BC.TextArea rows={10} placeholder="Please describe your reason for canceling." />
            </BC.GridColumn>
          </BC.GridRow>
        </BC.Form>

        <BC.Divider spacing="medium" />

        <BC.GridRow textAlign="right">
          <BC.Button inline={true} buttonType="primary" app={true} url={"/prototypes/brickcity/cancel/offers/" + this.state.currentOffer}>Continue to Cancel</BC.Button>
        </BC.GridRow>      
      </CancelLayout>
    )
  }
}

export default CancelForm;