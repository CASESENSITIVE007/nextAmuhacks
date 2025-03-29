import { Timeline } from "./ui/timeline";
export default function HacksTimeline() {
  const data = [
    {
      title: "11th Apr 10:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          Registration Ends
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          We will review your application and will let you know.
          </p>
        </div>
      ),
    },
   
  
    {
      title: "12th Apr 3:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          Opening Ceremony
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          Let &apos;s kickoff DUHacks 4.0 with us !
          </p>
        </div>
      ),
    },
    {
      title: "12th Apr 6:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          Hacking Period Starts on DevFolio
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          Join with over 3000+ innovative minds and start building
          </p>
        </div>
      ),
    },
 

    
    {
      title: "14th Apr 6:00 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          Final Submission Ends
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          We &apos;ll review your project and will let you know.
          </p>
        </div>
      ),
    },
    {
      title: "15th Apr 11:59 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
         Top 10  teams announce
          </p>
        
        </div>
      ),
    },
    {
      title: "17th Apr 3:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
         Final Presentation
          </p>
        
        </div>
      ),
    },
  
    
  ];
  return (
    <div id="timeline" className="w-full mt-30 min-h-screen ">
  
      <Timeline data={data} />
    </div>
  );
}
