"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.6,
    },
  },
};

const stepTextVariants = {
  hidden: {
    opacity: 0.5,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      mass: 0.5,
    },
  },
};

const FlowStepText = ({ text }) => (
  <motion.span
    className="inline-block text-4xl font-medium text-gray-800 bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-200"
    variants={stepTextVariants}
  >
    {text}
  </motion.span>
);

function HowItWorks() {
  const workflowTexts = [
    "Upload Job Descriptions",
    "Extract Key Info",
    "Match CVs",
    "Schedule Interviews",
  ];
  return (
    <div className="flex flex-col mt-12">
      <motion.div
        className="flex flex-row flex-wrap justify-center items-center gap-x-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {workflowTexts.map((text, index) => (
          <React.Fragment key={text}>
            <FlowStepText text={text} />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

function Features() {
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

  const featureVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 , staggerChildren:0.4},
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opactiy: 1, transition: { staggerChildren: 0.4 } },
  };
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        transition: { staggerChildren: 0.5, delayChildren: 5 },
      }}
      className="flex flex-col gap-y-4"
    >
      {featureList.map((feature: any, index: number) => {
        return (
          <motion.div
            whileInView="visible"
            initial="hidden"
            key={index}
            variants={featureVariants}
            className="flex flex-col md:flex-row p-4 border gap-x-4 justify-center items-center"
          >
            <h1 className="md:min-w-1/4 md:border-r font-bold font-spaceG text-3xl lg:text-5xl text-wrap">{feature.heading}</h1>
            <p className="font-inter text-sm lg:text-xl">{feature.body}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="h-screen flex flex-col items-center w-full gap-y-18">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl lg:text-6xl font-bold font-founders flex gap-x-2">
            <p className="text-[#8A78FF]">Revolutionize</p> Your Recruitment
            Process with AI
          </div>
          <p className="text-base lg:text-md font-inter">
            An intelligent multi-agent AI system designed to automate job
            screening, from JD analysis to interview scheduling.
          </p>
        </div>
        <motion.button whileTap={{scale:0.8}} className="bg-[#8A78FF] p-4 inset-shadow-xs inset-shadow-black cursor-pointer rounded rounded-lg font-bold text-secondary text-xl">
	<Link href="/dashboard">
          See NeuralHire in Action
	  </Link>
        </motion.button>
        <div>
          <HowItWorks />
        </div>
      </section>
      <section className="h-screen bg-primary p-6 text-white -mx-5 -my-5 flex flex-col gap-y-12 overflow-auto">
        <h1 className="font-founders font-bold bg-primary text-6xl">
          Features
        </h1>
        <Features />
      </section>
    </div>
  );
}
