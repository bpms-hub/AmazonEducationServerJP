import React from 'react';
import BC from 'AudibleUITags';
import CC from '../ubiquity/cc';

class SwitchMembership extends React.Component {

constructor(props) {
  super(props);
  this.state= {
    activePlan: this.props.active
  }
}


choosePlan(element){

  this.setState({
    activePlan: element
  })

}

  render() {

    if(this.state.activeElement === "step2") fadeStep2.push('bc-contact-step2-active')

    return (
        <BC.GridRow spacing="base">
          <BC.GridRow spacing="small">
            <BC.Link><BC.Icon iconType="chevron-left" /> Back</BC.Link>
          </BC.GridRow>

          <BC.GridColumn gridUnits={12} position="last">
            <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="small" spacing="base">
              <BC.Heading headingLevel={2} spacing="small" textColor="base">Switch Membership</BC.Heading>
              <BC.Divider spacing="small"/>                          
              <BC.GridRow spacing="mini" textAlign="center">
                <BC.GridColumn gridUnits={12}>
                  <BC.GridRow>

                    <BC.GridColumn gridUnits={3}>
                      <CC.Card spacing="base"
                          headerColor="#999"
                          backgroundColor="#aaa"
                          headerName=""
                          primaryPrice="$149.50 per year"
                          secondaryPrice="$14.95 per credit"
                          cardName="GOLD ANNUAL"
                          hasBorder={false}
                          >

                        <BC.GridRow spacing="micro" spacingTop="small" textAlign="left">
                          <BC.Divider spacing="small" spacingTop="none"/>                          

                          <BC.GridRow spacing="mini" textAlign="center">
                            <BC.Text textSize="small" spacing="large">12 credits at the start</BC.Text>
                          </BC.GridRow>
                          {/*
                          <BC.Text  textBold={true}>This Plan Also Includes:</BC.Text>
                          <BC.Paragraph  spacing="small">
                            The ability to rollover up to 12 credits at a time for as long as your membership is active
                          </BC.Paragraph>
                          */}
                        </BC.GridRow>
                        <BC.ModalTrigger 
                          modalTitle="Switch Membership" 
                          modalContent={
                            <div>
                              <BC.GridRow textAlign="left">
                                <BC.GridColumn gridUnits={12}>
                                  <BC.Paragraph>
                                    You are about to switch your membership plan from AudibleListener® Gold Monthly to <BC.Text textBold={true}>AudibleListener® Gold Annual</BC.Text>
                                  </BC.Paragraph>
                                  
                                  <BC.Paragraph>
                                    Your new annual charge will be <BC.Text spacing="base" textBold={true}>$149.50</BC.Text>
                                  </BC.Paragraph>
                                  <BC.GridRow textAlign="left">
                                    <BC.GridColumn gridUnits={3} gridPush={5}>
                                      <BC.Button url={'/prototypes/brickcity/account-details/switch-membership'} buttonType="secondary">Cancel</BC.Button>
                                    </BC.GridColumn>
                                    <BC.GridColumn gridUnits={4} position="last">
                                      <BC.Button url={'/prototypes/brickcity/account-details/switch-membership'} buttonType="primary">Confirm Switch</BC.Button>
                                    </BC.GridColumn>
                                  </BC.GridRow>
                                </BC.GridColumn>
                              </BC.GridRow>
                            </div>
                          } 
                          width="740px">
                          <BC.Button buttonType="primary" spacing="micro">Switch Plan</BC.Button>
                        </BC.ModalTrigger>
                      </CC.Card>
                    </BC.GridColumn>

                    <BC.GridColumn gridUnits={3}>
                      <CC.Card spacing="base"
                          headerColor="#197397"
                          backgroundColor="#1999cb"
                          headerName=""
                          primaryPrice="$14.95 per month"
                          secondaryPrice="$14.95 per credit"
                          cardName="GOLD MONTHLY"
                          hasBorder={false}
                          >

                        <BC.Text spacing="base" textBold={true}></BC.Text>

                        <BC.GridRow spacing="micro" spacingTop="small" textAlign="left">
                          <BC.Divider spacing="small" spacingTop="none"/>                          
                          <BC.GridRow spacing="mini" textAlign="center">
                            <BC.Text textSize="small" spacing="large">1 credit per month</BC.Text>
                          </BC.GridRow>
                          {/*
                          <BC.Text  textBold={true}>This Plan Also Includes:</BC.Text>
                          <BC.Paragraph  spacing="small">
                            The ability to rollover up to 12 credits at a time for as long as your membership is active
                          </BC.Paragraph>
                          */}
                        </BC.GridRow>

                      <BC.Button buttonType="primary" spacing="micro" disabled={true}>Current Plan</BC.Button>
                    </CC.Card>
                  </BC.GridColumn>

                  <BC.GridColumn gridUnits={3}>

                    <CC.Card spacing="base"
                        headerColor="#574089"
                        backgroundColor="#714fb7"
                        headerName=""
                        primaryPrice="$229.50 per year"
                        secondaryPrice="$9.56 per credit"
                        hasBorder={false}
                        cardName="PLATINUM ANNUAL"
                        >

                      <BC.GridRow spacing="micro" spacingTop="small" textAlign="left">
                        <BC.Divider spacing="small" spacingTop="none"/>                          
                        <BC.GridRow spacing="mini" textAlign="center">
                          <BC.Text textSize="small" spacing="large">24 credits at the start</BC.Text>
                        </BC.GridRow>
                        {/*
                        <BC.Text  textBold={true}>This Plan Also Includes:</BC.Text>
                        <BC.Paragraph  spacing="small">
                          The ability to rollover up to 12 credits at a time for as long as your membership is active
                        </BC.Paragraph>
                        */}
                      </BC.GridRow>
                    <BC.ModalTrigger 
                      modalTitle="Switch Membership" 
                      modalContent={
                        <div>
                          <BC.GridRow textAlign="left">
                            <BC.GridColumn gridUnits={12}>
                              <BC.Paragraph>
                                You are about to switch your membership plan from AudibleListener® Gold Monthly to <BC.Text textBold={true}>AudibleListener® Platinum Annual</BC.Text>
                              </BC.Paragraph>
                              
                              <BC.Paragraph>
                                Your new annual charge will be <BC.Text spacing="base" textBold={true}>$229.50</BC.Text>
                              </BC.Paragraph>
                              <BC.GridRow textAlign="left">
                                <BC.GridColumn gridUnits={3} gridPush={5}>
                                  <BC.Button url={'/prototypes/brickcity/account-details/switch-membership'} buttonType="secondary">Cancel</BC.Button>
                                </BC.GridColumn>
                                <BC.GridColumn gridUnits={4} position="last">
                                  <BC.Button url={'/prototypes/brickcity/account-details/switch-membership'} buttonType="primary">Confirm Switch</BC.Button>
                                </BC.GridColumn>
                              </BC.GridRow>
                            </BC.GridColumn>
                          </BC.GridRow>
                        </div>
                      } 
                      width="740px">
                      <BC.Button buttonType="primary" spacing="micro">Switch Plan</BC.Button>
                    </BC.ModalTrigger>
                  </CC.Card>

                </BC.GridColumn>

                <BC.GridColumn gridUnits={3} position="last">

                  <CC.Card spacing="base"
                          headerColor="#574089"
                          backgroundColor="#714fb7"
                          headerName=""
                          primaryPrice="$22.95 per month"
                          secondaryPrice="$11.48 per credit"
                          cardName="PLATINUM MONTHLY"
                          hasBorder={false}
                          >

                    <BC.GridRow spacing="micro" spacingTop="small" textAlign="left">
                      <BC.Divider spacing="small" spacingTop="none"/>                          
                      <BC.GridRow spacing="mini" textAlign="center">
                        <BC.Text textSize="small" spacing="large">2 credits per month</BC.Text>
                      </BC.GridRow>
                      {/*
                      <BC.Text  textBold={true}>This Plan Also Includes:</BC.Text>
                      <BC.Paragraph  spacing="small">
                        The ability to rollover up to 12 credits at a time for as long as your membership is active
                      </BC.Paragraph>
                      */}
                    </BC.GridRow>
                  <BC.ModalTrigger 
                    modalTitle="Switch Membership" 
                    modalContent={
                      <div>
                        <BC.GridRow textAlign="left">
                          <BC.GridColumn gridUnits={12}>
                            <BC.Paragraph>
                              You are about to switch your membership plan from AudibleListener® Gold Monthly to <BC.Text textBold={true}>AudibleListener® Platinum Monthly</BC.Text>
                            </BC.Paragraph>
                            
                            <BC.Paragraph>
                              Your new monthly charge will be <BC.Text spacing="base" textBold={true}>$22.95</BC.Text>
                            </BC.Paragraph>
                            <BC.GridRow textAlign="left">
                              <BC.GridColumn gridUnits={3} gridPush={5}>
                                <BC.Button url={'/prototypes/brickcity/account-details/switch-membership'} buttonType="secondary">Cancel</BC.Button>
                              </BC.GridColumn>
                              <BC.GridColumn gridUnits={4} position="last">
                                <BC.Button url={'/prototypes/brickcity/account-details/switch-membership'} buttonType="primary">Confirm Switch</BC.Button>
                              </BC.GridColumn>
                            </BC.GridRow>
                          </BC.GridColumn>
                        </BC.GridRow>
                      </div>
                    } 
                    width="740px">
                    <BC.Button buttonType="primary" spacing="micro">Switch Plan</BC.Button>
                  </BC.ModalTrigger>
                </CC.Card>

              </BC.GridColumn>

            </BC.GridRow>
          </BC.GridColumn>
        </BC.GridRow>

        <BC.Paragraph spacing="micro" textBold={true} textSize="base">All Gold and Platinum Plans Include:</BC.Paragraph>
        <BC.List listType="unordered">
          <BC.ListItem>
            <BC.Paragraph spacing="micro" textColor="secondary">
              30% off on all audiobooks and programs not purchased with audio credits
            </BC.Paragraph>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Paragraph spacing="micro" textColor="secondary">Enjoy free Upgrade audio programs and samples</BC.Paragraph>
          </BC.ListItem>
          <BC.ListItem>
            <BC.Paragraph spacing="micro" textColor="secondary">
              A complimentary subscription to the digital audio version of The New York Times or The Wall Street Journal
            </BC.Paragraph>
          </BC.ListItem>
        </BC.List>
        </BC.Box>

        </BC.GridColumn>
      </BC.GridRow>
    )
  }
}

export default SwitchMembership;
