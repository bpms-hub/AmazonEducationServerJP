import React from 'react';
import BC from 'AudibleUITags';
// import ProdHeader from '../Header/ProdHeader';
// import ProdFooter from '../Footer/ProdFooter'
import AEHeader from "../../layout_edu/AEHeader.js";
import AESidebar from "../../layout_edu/AESidebar.js";
import AEFooter from "../../layout_edu/AEFooter.js";

class PrinciplesWaffle extends React.Component{
  render() {
    return (
    <div background="#222222">
              <AEHeader />
            <div className="">
        <BC.Section spacing="none" spacingTop="large">
          <BC.GridRow spacingTop="large" >
  <BC.GridColumn gridUnits={3}>
<AESidebar />
  </BC.GridColumn>


              {/* Content Section */}

  <BC.GridColumn gridUnits={9} cssClass="bc-edu-container">

	<BC.Box background="#fff" hasBorder={false} paddingSize="none" spacingTop="extra-large">

  <BC.GridRow spacing="mini">
  <BC.Text textSize="large" textColor="base">Project Waffle - <i>Principles</i></BC.Text>
  </BC.GridRow>
  <BC.GridRow spacing="medium">
  <BC.Text textSize="base" textColor="edu_base">English is the entertaining and effective way to improve English communication skills with interesting, real world content. Unlike traditional EFL methods, Amazon English provides instant access to thousands of enjoyable real-world English titles that can improve communication fluency through “extensive” reading and listening.</BC.Text>
  </BC.GridRow>

  <BC.GridRow spacing="medium">
    <BC.List listType="nostyle">
      <BC.ListItem spacing="mini">
        <BC.Link textColor="edu_link" linkType="nav" app={false} url="#principles">Guiding Principles</BC.Link>
      </BC.ListItem>
            <BC.ListItem spacing="mini">
                  <BC.Link textColor="edu_link" app={false} url="#voice">UI Voice / Tone Principles</BC.Link>
              </BC.ListItem>


                      <BC.ListItem spacing="mini">
                        <BC.Link textColor="edu_link"  linkType="nav"  app={false} url="#copy">UI Copy Basics</BC.Link>
                        </BC.ListItem>
                        <BC.ListItem spacing="large">
                          <BC.Link textColor="edu_link"  linkType="nav" app={false} url="#dual">Guidelines for Dual Language</BC.Link>
                          </BC.ListItem>
    </BC.List>

  </BC.GridRow>


{/* Guiding Principles */}

<BC.GridRow spacing="base">
  <div id="principles" />

<BC.GridColumn gridUnits={4}>
<BC.Text textBold={true} textColor="base">Guiding Principles</BC.Text>
</BC.GridColumn>
<BC.GridColumn gridUnits={8} position="last">
<BC.List listType="nostyle">
<BC.ListItem>
<BC.Text textBold={true}>1. Guide Me: </BC.Text><BC.Text>English is the entertaining and effective way to improve English communication skills with interesting.</BC.Text>
</BC.ListItem>
<BC.ListItem>
<BC.Text textBold={true}>2. Guide Me: </BC.Text><BC.Text>English is the entertaining and effective way to improve English communication skills with interesting.</BC.Text>
</BC.ListItem>
</BC.List>
</BC.GridColumn>

</BC.GridRow>

{/* UI VOICE/TONE PRINCIPLES */}


<BC.GridRow spacing="base">
  <div id="voice" />
<BC.GridColumn gridUnits={4}>
<BC.Text textBold={true} textColor="base">UI Voice / Tone Principles</BC.Text>
</BC.GridColumn>
<BC.GridColumn gridUnits={8} position="last">
<BC.GridRow spacing="micro">
<BC.Text textBold={true}>Based on the following sources:</BC.Text>
</BC.GridRow>
<BC.List listType="unordered" spacing="base">
<BC.ListItem spacing="micro">
<BC.Text>Amazon English Sell Sheet</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>Amazon and Audible branding guides</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>Meetings with Midori & Maki, Mark, discussions with the team as a whole</BC.Text>
</BC.ListItem>
</BC.List>
<BC.GridRow spacing="micro">
<BC.Text textBold={true}>Who is Amazon English?</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="base">
<BC.Text>Think of the Amazon English personality as a kind, wise uncle or cousin. We want to reduce the fear and anxiety around English language learning, helping our users to expand their horizons in a supportive environment.
</BC.Text>
</BC.GridRow>
<BC.GridRow spacing="micro">
<BC.Text textBold={true}>How would we describe Amazon English' tone or voice?</BC.Text>
</BC.GridRow>
<BC.List listType="nostyle" spacing="base">
<BC.ListItem spacing="micro">
<BC.Text>Friendly - NOT super-hip and zany</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>Encouraging - NOT condescending, as if the user were a child</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>Capable - NOT detached and aloof</BC.Text>
</BC.ListItem>
</BC.List>

<BC.GridRow spacing="micro">
<BC.Text textBold={true}>NOT</BC.Text>
</BC.GridRow>
<BC.List listType="unordered" spacing="base">
<BC.ListItem spacing="micro">
<BC.Text>“Hooray, you finished this title!”</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>“Wow, you finished this title! Way to go!”</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>“Select your most recent test score so we can set your beginning level”</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>“Enter test score here.”</BC.Text>
</BC.ListItem>
</BC.List>
</BC.GridColumn>
</BC.GridRow>



{/* UI COPY BASICS */}
<BC.GridRow spacing="base">
  <div id="copy" />
<BC.GridColumn gridUnits={4}>
<BC.Text textBold={true} textColor="base">UI Copy Basics</BC.Text>
</BC.GridColumn>
<BC.GridColumn gridUnits={8} position="last">
<BC.List listType="unordered" spacing="base">
<BC.ListItem spacing="base">
<BC.Text textBold={true}>Context: </BC.Text><BC.Text>understand the time and place for marketing language (emotionally driven, appealing, more voice-y) and UI copy (strictly navigational/instructional, less-voicey).</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="base">
<BC.Text textBold={true}>Clarity: </BC.Text><BC.Text>be direct and specific about what the user needs to do or understand; start with the verb/action wherever possible ("Enter your test score so we can set your level"; "Tap here to get help choosing").</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="base">
<BC.Text textBold={true}>Brevity: </BC.Text><BC.Text>no superfluous words—balance brand voice with very clear, concise instructions; use a “!" rarely and only if there’s a good reason for it.</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="base">
<BC.Text textBold={true}>Universality: </BC.Text><BC.Text>this should be globally intuitive - no buzzwords, puns, slang.</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="base">
<BC.Text textBold={true}>Consistency: </BC.Text><BC.Text>refer to features, actions (swipe, drag, tap, click, etc.), and the user the same way every time (if a button is in 1st person point of view, i.e. “Get My Free Book”, then don’t have another button say “Start Your Free Trial”).</BC.Text>
</BC.ListItem>
</BC.List>

</BC.GridColumn>
</BC.GridRow>

{/* UI COPY BASICS */}
<BC.GridRow spacing="base">
  <div id="dual" />
<BC.GridColumn gridUnits={4}>
<BC.Text textBold={true} textColor="base">Guidelines for Dual Language</BC.Text>
</BC.GridColumn>
<BC.GridColumn gridUnits={8} position="last">
<BC.GridRow spacing="mini">
<BC.Text textBold={true}>Elements with Japanese Only</BC.Text>
</BC.GridRow>
<BC.List listType="ordered" spacing="base">
<BC.ListItem spacing="micro">
<BC.Text>Long sentences on toasts, widgets and panels (To reduce the cognitive load of reading sentences/questions in two languages and then try to make relationships among words and phrases)
</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>ASIN Metadata on “Categories” page</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>ASIN Metadata inside a category</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>Metadata and Learners' Summary on PDP</BC.Text>
</BC.ListItem>
</BC.List>

<BC.GridRow spacing="mini">
<BC.Text textBold={true}>Elements with Dual Language</BC.Text>
</BC.GridRow>
<BC.List listType="ordered" spacing="base">
<BC.ListItem spacing="micro">
<BC.Text>
UI labels where 1-3 words are being used (i.e. “Categories”/"Start Listening")
</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>All Menus items</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>All primary and secondary action buttons</BC.Text>
</BC.ListItem>
<BC.ListItem spacing="micro">
<BC.Text>All action buttons on toasts</BC.Text>
</BC.ListItem>
</BC.List>

</BC.GridColumn>
</BC.GridRow>



  </BC.Box>
  </BC.GridColumn>
  </BC.GridRow>
        </BC.Section>
</div>
        <AEFooter />
      </div>
    )
  }
}
export default PrinciplesWaffle;
