import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"
export default function Faq (){
    return (
        <div id="faq" className="  min-h-screen flex flex-col items-center justify-center  text-white text-2xl w-3/4  md:w-1/2 mx-auto  " >
              <Accordion type="single" collapsible className="w-full">
                <h1 className='text-6xl flex flex-col justify-center items-center mx-auto mb-10  ' >FAQ&apos;s</h1>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is AMUHACKS 4.0?</AccordionTrigger>
        <AccordionContent>
        AMUHACKS 4.0 is a 36-hour software hackathon where participants build innovative tech solutions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Where will AMUHACKS 4.0 be hosted?</AccordionTrigger>
        <AccordionContent>
        The hackathon will be conducted online on DevFolio.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is there a registration fee?</AccordionTrigger>
        <AccordionContent>
        No, AMUHACKS 4.0 is completely free to participate in.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Who can participate?</AccordionTrigger>
        <AccordionContent>
        Any student currently enrolled in a university course at an accredited institution is eligible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What is the team size?</AccordionTrigger>
        <AccordionContent>
        Teams must consist of 2 to 4 members. Larger teams may be considered upon special request.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Can I participate alone?</AccordionTrigger>
        <AccordionContent>
        No, a minimum of 2 team members is required.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Can a participant be part of multiple teams?</AccordionTrigger>
        <AccordionContent>
        No, each participant can only be in one team.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>When can we start working on our project?</AccordionTrigger>
        <AccordionContent>
        Development must start only after April 12, 2025, at 6:00 PM (IST). Any prior work will result in disqualification.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>What technologies can we use?</AccordionTrigger>
        <AccordionContent>
        Participants are free to use any programming language, frameworks, or development tools.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>Is a GitHub repository mandatory?</AccordionTrigger>
        <AccordionContent>
        Yes, all teams must create a GitHub repository between April 7-12, 2025 and The repository should follow this naming format: TeamName_AMUHACKS4.0
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger>What must be included in the GitHub repository?</AccordionTrigger>
        <AccordionContent>
        	Regular commits throughout the hackathon,
        	A detailed README file with project details and relevant hashtags:
          #AMUHACKS4.0 #GDSCAMU #CSSAMU #CSDAMU #AMU,
        	The project must be hosted and accessible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12">
        <AccordionTrigger>How do we submit our project?</AccordionTrigger>
        <AccordionContent>
        Teams must submit their GitHub repository link via the official form shared by the organizers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-13">
        <AccordionTrigger>What are the judging criteria?</AccordionTrigger>
        <AccordionContent>
        Projects will be evaluated based on:
        	Innovation & Creativity,
        	Technical Complexity,
        	Functionality & Performance,
        	User Experience & Design,
        	Presentation & Pitch Quality
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
    )
}
