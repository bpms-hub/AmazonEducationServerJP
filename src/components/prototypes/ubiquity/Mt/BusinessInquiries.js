import React from 'react';
import BC from 'AudibleUITags';
import CC from '../cc';
import ProdHeader from '../Header/ProdHeader';
import ProdFooter from '../Footer/ProdFooter'

class BusinessInquiries extends React.Component {
  render() {
    return (
      <div>
        <ProdHeader/>

        <div className="bc-container">
          <BC.Heading spacing="medium">We&#39;re great listeners, too.</BC.Heading>

          <BC.GridRow>
            <BC.GridColumn gridUnits={6}>
              <BC.Heading headingLevel={2} spacing="small">Customer Care Support</BC.Heading>

              <BC.Paragraph>
                <BC.Link app={true} url={"/prototypes/brickcity/contact"}>Click here to Contact Us 24/7</BC.Link> 
              </BC.Paragraph> 

              <BC.Paragraph spacing="none">
                For answers to technical problems, go to our <BC.Link>Help Center</BC.Link> 
              </BC.Paragraph> 

              <BC.Paragraph>
                For Customer Care email inquiries, <BC.Link>ask us a question</BC.Link> 
              </BC.Paragraph>

              <BC.Divider spacing="base" />

              <BC.Heading headingLevel={2} spacing="small">Mailing Address</BC.Heading>

              <BC.Heading headingLevel={3}>Audible Headquarters</BC.Heading>
              <BC.Paragraph>
                One Washington Park<br /> Newark, NJ 07102
              </BC.Paragraph>

              <BC.Heading headingLevel={3}>Audible MA</BC.Heading>
              <BC.Paragraph spacing="medium">
                101 Main st.<br /> 5th floor, Audible<br /> Cambridge, MA 02142 
              </BC.Paragraph>

              <BC.Heading headingLevel={2} spacing="small">Press Relations</BC.Heading>

              <BC.Heading headingLevel={3}>Press Inquiries</BC.Heading>
              <BC.Paragraph spacing="medium">
                If you are a member of the press and would like to speak with Audible&#39;s press representative, email 
                us at <BC.Link url="mailto:publicrelations@audible.com">publicrelations@audible.com</BC.Link>
              </BC.Paragraph>

              <BC.Heading headingLevel={2} spacing="small">Business & Marketing </BC.Heading>

              <BC.Heading headingLevel={3}>Business Development</BC.Heading>
              <BC.Paragraph>
                If you are interested in discussing a possible business alliance or partnership with Audible, email us 
                at <BC.Link url="mailto:bizdev@audible.com">bizdev@audible.com</BC.Link>
              </BC.Paragraph>

              <BC.Heading headingLevel={3}>Advertising or Marketing</BC.Heading>
              <BC.Paragraph>
                If you are interested in featuring Audible advertisements on your site or other media properties, or 
                if you would like to discuss co-marketing opportunities, email us at <BC.Link url="mailto:marketing@audible.com">marketing@audible.com</BC.Link> 
              </BC.Paragraph>

              <BC.Heading headingLevel={3}>Domestic Content Partners</BC.Heading>
              <BC.Paragraph>
                If you or your company publish audiobooks in the United States, and would like to sell through 
                Audible&#39;s channels, please <BC.Link>click here</BC.Link> to learn how you can become an Audible partner. Please 
                keep in mind that since Audible listeners pay for the titles they buy here, we prefer not to carry 
                content (whether audiobooks or podcasts) offered free elsewhere on the Web. 
              </BC.Paragraph>

              <BC.Heading headingLevel={3}>International Content Partners</BC.Heading>
              <BC.Paragraph>
                If you or your company publishes audiobooks OUTSIDE of the United States, and you would like to sell 
                through Audible&#39;s channels, please send an email to <BC.Link url="mailto:internationalpartner@audible.com.">
                internationalpartner@audible.com.</BC.Link> In your email, please describe the genre and length of your audiobooks, and let us know how many titles you currently 
                have and how many you&#39;ll publish over the next six months. Please keep in mind that since Audible 
                listeners pay for the titles they download here, we prefer not to carry content (whether audiobooks 
                  or podcasts) offered free elsewhere on the Web. 
              </BC.Paragraph>

              <BC.Heading headingLevel={3}>Current Content Partners</BC.Heading>
              <BC.Paragraph>
                If you are a current Content Partner and have questions about payments and sales reports, please email 
                us at: royalties@audible.com. For all other questions, please email us at: 
                <BC.Link url="mailto:partnerrelations@audible.com">partnerrelations@audible.com</BC.Link>. 
              </BC.Paragraph>

              <BC.Heading headingLevel={3}>Affiliates</BC.Heading>
              <BC.Paragraph spacing="medium">
                If you are interested in joining Audible&#39;s affiliate program, email us at <BC.Link url="mailto:affiliate@audible.com">affiliate@audible.com</BC.Link> 
              </BC.Paragraph>

              <BC.Heading headingLevel={2} spacing="small">Voice Talent</BC.Heading>
              <BC.Paragraph>
                If you&#39;re interested in becoming an audiobook narrator, please email <BC.Link url="mailto:readers@audible.com">readers@audible.com</BC.Link> and include: 
              </BC.Paragraph>

              <BC.List>
                <BC.ListItem>
                  Two-minute MP3 clip of your audiobook narration (i.e., not commercials or radio demos)
                </BC.ListItem>
                <BC.ListItem>
                  List of books you&#39;ve narrated, if any. Indicate which, if any, are being sold on Audible.com
                </BC.ListItem>
                <BC.ListItem>
                  Link to your website, if available
                </BC.ListItem>
                <BC.ListItem>
                  Contact information including the city and state where you&#39;re located
                </BC.ListItem>
              </BC.List>
            </BC.GridColumn>

            <BC.GridColumn gridUnits={6} position="last">
              <BC.Heading headingLevel={2} spacing="small">Feedback</BC.Heading>

              <BC.Heading headingLevel={3}>Book Requests</BC.Heading>
              <BC.Paragraph>
                If you&#39;re interested in a particular author or title, please let us know about it by sending an email 
                to: <BC.Link url="mailto:content-requests@audible.com">content-requests@audible.com</BC.Link>
              </BC.Paragraph>

              <BC.Heading headingLevel={3}>Great Ideas</BC.Heading>
              <BC.Paragraph>
                If you have a great idea about how to improve Audible&#39;s website or service, email us at <BC.Link url="mailto:greatideas@audible.com">greatideas@audible.com</BC.Link>
              </BC.Paragraph>

              <BC.Heading headingLevel={3}>Testimonials</BC.Heading>
              <BC.Paragraph spacing="medium">
                If you would like to share your story about how and when you use Audible, email us at <BC.Link url="mailto:whereilisten@audible.com">whereilisten@audible.com</BC.Link>
              </BC.Paragraph>

              <BC.Heading headingLevel={2} spacing="small">Job Openings </BC.Heading>

              <BC.Paragraph>
                We&#39;re looking for bright, energetic, and creative people who like the idea of building for the future. 
                Submit your resume to <BC.Link url="mailto:jobs@audible.com">jobs@audible.com</BC.Link>. 
              </BC.Paragraph>

              <BC.Paragraph spacing="medium">
                <BC.Link>View all job openings</BC.Link>
              </BC.Paragraph>

              <BC.Heading headingLevel={2} spacing="small">Follow Us!</BC.Heading>
              <BC.List listType="nostyle">
                <BC.ListItem>
                  <BC.Link>Facebook</BC.Link>
                </BC.ListItem>
                <BC.ListItem>
                  <BC.Link>Twitter</BC.Link>
                </BC.ListItem>
              </BC.List>
              
              
            </BC.GridColumn>
          </BC.GridRow>
        </div>
        <ProdFooter/>
      </div>
    )
  }
}

export default BusinessInquiries;


 

