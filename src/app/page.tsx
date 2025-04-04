"use client";

export default function Home() {
  type feature = {
    heading: string;
    body: string;
  };
  let featureList: feature[] = [
    {
      heading: "Seamless Job Requisition",
      body: "Effortlessly upload and manage multiple job descriptions through our intuitive interface. Import JDs directly from CSV files or enter them manually with our structured form. Track all your open positions in one centralized location and maintain a comprehensive database of your hiring needs across departments and locations.",
    },
    {
      heading: "Intelligent JD Analysis",
      body: "Our AI engine automatically extracts critical information from verbose job descriptions, identifying key requirements, skills, qualifications, and responsibilities. Transform lengthy documents into structured data points that power our matching algorithms. Save hours of manual processing while ensuring consistent interpretation of job requirements.",
    },
    {
      heading: "Precision Candidate Matching",
      body: "Match the right talent to the right role with our advanced comparison engine. NeuralHire analyzes candidate profiles against job requirements, generating comprehensive match scores based on skills, experience, and qualifications. Automatically identify top prospects and access their contact information for immediate outreach. Focus your recruitment efforts on the candidates most likely to succeed.",
    },
    {
      heading: "Automated Interview Coordination",
      body: "Streamline the interview process with intelligent scheduling automation. Send personalized interview requests to shortlisted candidates based on their qualification scores. The system tracks responses, manages calendar availability, and sends timely reminders to ensure smooth coordination. Eliminate the back-and-forth of manual scheduling and accelerate your time-to-hire metrics.",
    },
  ];
  return (
    <div className="flex flex-col font-spaceG gap-y-6">
      <div>
        <p className="text-3xl lg:text-4xl font-bold">
          Revolutionize Your Recruitment Process with AI
        </p>
        <h2 className="text-sm font-light font-firaSC">
          NeuralHire matches the right candidates to your jobs with{" "}
          <b>intelligent screening</b> and <b>automated workflows</b>
        </h2>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-2xl font-bold font-spaceG">Features</h1>
        <div className="flex flex-col items-center md:flex-row gap-y-4 md:gap-x-4 md:items-start">
          {featureList.map((feature: feature, id: number): any => {
            return (
              <div key={id} className="min-h-60 border rounded p-4 w-80">
                <p className="text-base font-bold border-b mb-2 pb-2">
                  {feature.heading}
                </p>
                <p className="text-xs font-inter">{feature.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
