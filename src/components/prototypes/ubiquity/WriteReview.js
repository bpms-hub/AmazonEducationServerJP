import React from 'react';
import BC from 'AudibleUITags';
import CC from './cc';
import ProdHeader from './Header/ProdHeader';
import ProdFooter from './Footer/ProdFooter';
import classNames from 'classnames';

class WriteReview extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        activeElement: "step1",
        ratingClicks: 0
      }

  }


  numClicks(){
    this.state.ratingClicks++

    if (this.state.ratingClicks === 3) {
      this.setState({
        activeElement: "step2"
      });
    }
    else{
      this.setState({
        activeElement: "step1"
      });
    }
  }

  changeOpacity(element) {

    if (this.state.activeElement === element && element != "step3a") {
      this.setState({
        activeElement: null
      });
    }
    else {
      this.setState({
        activeElement: element
      });
    }
}

  render() {

    return (

      <div>
        <ProdHeader/>
        <div className="bc-container" >

          <BC.GridRow spacingTop="medium">
            <CC.ProductListingColumn2
              bookTitle="First Meetings: In the Enderverse"
              bookAuthor="Orson Scott Card"
              bookNarrator="Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki"
            />
          </BC.GridRow>

            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={1} >
                <CC.Step activeState={true} number="1" />
              </BC.GridColumn>

              <BC.GridColumn gridUnits={7}>
                <BC.Heading headingLevel={3} spacing="micro">Please rate this title:</BC.Heading>
                <BC.List listType="nostyle">
                  <BC.ListItem >
                  <BC.Text>Overall</BC.Text>
                  <BC.LetterSpace />
                  <BC.Link onClick={this.numClicks.bind(this)}>
                    <BC.RatingSelector />
                  </BC.Link>
                  <BC.LetterSpace size="large" />
                  <BC.Text>Performance</BC.Text>
                  <BC.LetterSpace />
                  <BC.Link onClick={this.numClicks.bind(this)}>
                    <BC.RatingSelector />
                  </BC.Link>
                  <BC.LetterSpace size="large" />
                  <BC.Text>Story</BC.Text>
                  <BC.LetterSpace />
                  <BC.Link onClick={this.numClicks.bind(this)}>
                    <BC.RatingSelector />
                  </BC.Link>
                  </BC.ListItem>
                </BC.List>
              </BC.GridColumn>

              <BC.GridColumn gridUnits={3} position="last">
              <div className={classNames(this.state.activeElement === "step1" ? "bc-block" : "bc-hidden")}>
                <BC.Box hasBorder={true} paddingSize="mini" >
                  <BC.Heading headingLevel={3} >Ratings</BC.Heading>
                  <BC.Text textSize="mini">You can rate a Title&#39;s story and performance as well as the overall experience.</BC.Text>
                </BC.Box>
              </div>
              </BC.GridColumn>

          </BC.GridRow>

      <div className={classNames(this.state.activeElement != "step1" ? "bc-block" : "bc-faded")}>
      <BC.Divider spacing="base" />
        <BC.GridRow spacing="base">
          <BC.GridColumn gridUnits={1}>
            <CC.Step activeState={this.state.activeElement != "step1" ? true : false} number="2" />
          </BC.GridColumn>

          <BC.GridColumn gridUnits={7}>
            <BC.GridRow spacing="micro">
              <BC.Text textBold={true} spacing="micro">Enter a headline for your review: </BC.Text><BC.Text textSize="small" textColor="tertiary">(maximum 50 characters)</BC.Text>
            </BC.GridRow>
            <BC.TextArea spacing="base" onKeyUp={this.changeOpacity.bind(this, "step3a")}></BC.TextArea>
          </BC.GridColumn>

          <BC.GridColumn gridUnits={3} position="last">
          <div className={classNames(this.state.activeElement === "step2" ? "bc-block" : "bc-hidden")}>
            <BC.Box hasBorder={true} paddingSize="mini">
              <BC.Heading headingLevel={3} >Stand out from the crowd!</BC.Heading>
              <BC.Text textSize="mini">Your opinion counts. Give readers an idea of what to expect with a descriptive headline.</BC.Text>
            </BC.Box>
          </div>
          </BC.GridColumn>
        </BC.GridRow>
      </div>

      <div className={classNames(this.state.activeElement === "step3a" || this.state.activeElement === "step3b" ? "bc-block" : "bc-faded")}>
        <BC.Divider spacing="base" />

            <BC.GridRow spacing="base">
              <BC.GridColumn gridUnits={1}>
                <CC.Step activeState={this.state.activeElement === "step3a" || this.state.activeElement === "step3b" ? true : false} number="3" />
              </BC.GridColumn>

              <div className={classNames(this.state.activeElement === "step3a" ? "bc-block" : [this.state.activeElement === "step3b" ? "bc-hidden" : "bc-faded"])}>
                  <BC.GridColumn gridUnits={7} >
                    <BC.GridRow spacing="small">
                      <BC.Heading headingLevel={3}>Write your review by answering the following questions: </BC.Heading>
                      <BC.Text textSize="small" textColor="tertiary">(minimum 15 words and 25 characters)</BC.Text>
                    </BC.GridRow>

                    <BC.Heading headingLevel={3} spacing="micro">What did you like about this audiobook?</BC.Heading>
                    <BC.TextArea spacing="base"></BC.TextArea>
                    <BC.Heading headingLevel={3} spacing="micro">How has the book increase your interest in the subject matter?</BC.Heading>
                    <BC.TextArea spacing="base"></BC.TextArea>
                    <BC.Heading headingLevel={3} spacing="micro">Does the author present information in a way that is interesting and insightful, and if so, how does he achieve this?</BC.Heading>
                    <BC.TextArea spacing="base"></BC.TextArea>
                    <BC.Heading headingLevel={3} spacing="micro">What did you find wrong about the narrato&#39;s performance?</BC.Heading>
                    <BC.TextArea spacing="base"></BC.TextArea>
                    <BC.Heading headingLevel={3} spacing="micro">Do you have any additional comments?</BC.Heading>
                    <BC.TextArea spacing="micro"></BC.TextArea>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={3} position="last">
                  <div className={classNames(this.state.activeElement != "step3a" || this.state.activeElement === "step3b" ? "bc-hidden" : "bc-block")}>
                    <BC.Box hasBorder={true} paddingSize="mini">
                      <BC.GridRow spacing="small">
                        <BC.Heading headingLevel={3}>Guidend Review</BC.Heading>
                        <BC.Text textSize="mini">Don&#39;t worry we&#39;ve saved the information from the last screen. If you decide to go back just click this button.</BC.Text>
                      </BC.GridRow>
                      <BC.Button size="small" onClick={this.changeOpacity.bind(this, "step3b")}>Switch to Freeform</BC.Button>
                    </BC.Box>
                  </div>
                  </BC.GridColumn>
              </div>

              <div className={classNames(this.state.activeElement === "step3b" ? "bc-block" : "bc-hidden")}>
                <BC.GridColumn gridUnits={7} >
                    <BC.GridRow spacing="small">
                      <BC.Heading headingLevel={3}>Write your review in the space below: </BC.Heading>
                      <BC.Text textSize="small" textColor="tertiary">(minimum 15 words and 25 characters)</BC.Text>
                    </BC.GridRow>
                    <BC.TextArea spacing="micro" heightCss="200px"></BC.TextArea>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={3} position="last">
                    <BC.Box hasBorder={true} paddingSize="mini">
                      <BC.GridRow spacing="small">
                        <BC.Heading headingLevel={3}>Freeform Review</BC.Heading>
                        <BC.Text textSize="mini">Would you prefer to write a guided review?</BC.Text>
                      </BC.GridRow>
                      <BC.Button size="small" onClick={this.changeOpacity.bind(this, "step3a")}>Switch to Guided</BC.Button>
                    </BC.Box>
                  </BC.GridColumn>
              </div>

              </BC.GridRow>
            </div>

          <BC.Divider spacing="base" />

          <BC.GridRow spacing="extra-large">
          <BC.GridColumn gridUnits={8} gridPush={1}>
            <BC.GridRow spacing="base">
            <BC.Text textBold={true}>Please note: </BC.Text>
            <BC.Text textColor="tertiary" textSize="small" spacing="base">Audible posts reviews at its discretion. All the submitted reviews become the property of Audible.com as set forth in our <BC.Link>Conditions of Use</BC.Link>. In most cases, reviews will be processed for display in one or two days.</BC.Text>
            </BC.GridRow>
            <BC.GridRow spacing="extra-large">
              <BC.GridColumn gridUnits={2}>
                <BC.Link app={true} url="/prototypes/brickcity/write-review">
                  <BC.Button buttonType="secondary">Cancel</BC.Button>
                </BC.Link>
              </BC.GridColumn>
              <BC.GridColumn gridUnits={2}  gridPull={8} position="last">
                 <BC.Button buttonType="primary">Preview</BC.Button>
              </BC.GridColumn>
            </BC.GridRow>
          </BC.GridColumn>
          </BC.GridRow>

          <ProdFooter/>
        </div>
      </div>
    )
  }

}

export default WriteReview;
