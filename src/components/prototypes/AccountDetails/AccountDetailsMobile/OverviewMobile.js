import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../ubiquity/cc';

class OverviewMobile extends React.Component {
  render() {
    return (
      <BC.GridRow spacingTop="none">
        <BC.GridRow spacing="base">
          <BC.GridColumn gridUnits={12}>
            <BC.Heading headingLevel={2} spacing="micro">Membership</BC.Heading>

            <BC.Box background="#1999cb" hasBorder={false} paddingSize="small" spacing="none">
              <BC.GridRow textAlign="center">
                <BC.GridColumn gridUnits={12}>

                  <BC.Text textSize="extra-large"  textColor="inverse" spacing="small" textBold={true}>GOLD MONTHLY</BC.Text>
                  <BC.GridRow spacing="micro">
                    <BC.Text textSize="small" textColor="inverse">Member since January 12, 2015</BC.Text>
                  </BC.GridRow>
                  {/*
                  <BC.Text textBold={true} textColor="inverse" textSize="medium">$14.95 / month</BC.Text>
                  <br/>
                  <BC.Text textBold={false} textColor="inverse" textSize="base">$14.95 each credit</BC.Text>
                  */}
                </BC.GridColumn>
              </BC.GridRow>

            </BC.Box>

            <BC.Box hasBorder={false} background="#F9F9F9" paddingSize="base" spacing="mini">
              <BC.GridRow spacing="base" textAlign="center">
                <BC.GridRow spacing="none">
                  <BC.Text spacing="none" textSize="medium" textBold={true}>Credits:</BC.Text>
                  <BC.LetterSpace />
                  <BC.Text textSize="medium">0</BC.Text>
                </BC.GridRow>
                {/*
                <BC.GridRow>
                  <BC.Text spacing="mini" textSize="base" textBold={true}>Coupon Balance:</BC.Text>
                  <BC.LetterSpace />
                  <BC.Text>4</BC.Text>
                </BC.GridRow>
                */}
                <BC.GridRow>
                  <BC.Text spacing="mini" textSize="base" textBold={true}>Next Credit:</BC.Text>
                  <BC.LetterSpace />
                  <BC.Text>2-15-2016</BC.Text>
                </BC.GridRow>
              </BC.GridRow>
              <BC.GridRow spacing="none" textAlign="center">
                <BC.Divider spacing="base" spacingTop="base"/>
                <BC.Text  textBold={false} textSize="base">$14.95 per month</BC.Text>
                <BC.LetterSpace />
                <BC.Text textColor="tertiary">|</BC.Text>
                <BC.LetterSpace />

                <BC.Text  textBold={false} textSize="base">1 credit per month</BC.Text>

              </BC.GridRow>
            </BC.Box>
          </BC.GridColumn>

        </BC.GridRow>

        <BC.Heading headingLevel={2} spacing="micro">Profile</BC.Heading>

        <BC.GridColumn gridUnits={12} spacing="medium">
          <BC.Box backgroundColor="secondary" paddingSize="small" spacing="base">
            <BC.GridRow textAlign="left">
              <BC.Heading headingLevel={3} spacing="none">Name:</BC.Heading>
              <BC.Paragraph spacing="micro" textColor="secondary">Lisa Del Monte</BC.Paragraph>
            </BC.GridRow>

            <BC.GridRow textAlign="left">
              <BC.Heading headingLevel={3} spacing="none">Email Address:</BC.Heading>
              <BC.Paragraph spacing="micro" textColor="secondary">lisadelmonte@gmail.com</BC.Paragraph>
            </BC.GridRow>
            <BC.GridRow>
              <BC.GridColumn gridUnits={3} spacing="none">
                <BC.Heading headingLevel={3} spacing="none">Password:</BC.Heading>
                <BC.GridRow spacing="base">
                  <BC.Paragraph spacing="micro" textColor="secondary">xxxxxxxxxx</BC.Paragraph>
                </BC.GridRow>
              </BC.GridColumn>

              <BC.GridRow textAlign="left" spacing="none">
                <BC.Link>Edit</BC.Link>
              </BC.GridRow>

            </BC.GridRow>
          </BC.Box>
        </BC.GridColumn>
      </BC.GridRow>
    )
  }
}
export default OverviewMobile;